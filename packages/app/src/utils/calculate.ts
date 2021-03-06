import { uniq } from './functions';
import {
  RecipeAST,
  RecipeStepItem,
  RecipeStep,
  RecipeSteps,
  RecipesType,
  RecipeType,
  SymbolType,
  ComboRecipesType,
} from './types';

export const adjust = (
  obj: Record<string, number>,
  amount: number,
): Record<string, number> => Object.entries(obj).reduce(
  (prev, [k, v]) => ({
    ...prev,
    [k]: v * amount,
  }),
  {},
);

export const reduce = (
  what: RecipeType,
  recipes: RecipesType,
): Record<string, number> => {
  const input = Object.entries(what.input).map((
    [key, value],
  ) => (key in recipes
    ? {
      ...adjust(
        reduce(recipes[key], recipes),
        Math.ceil(value / (recipes[key].output || 1)),
      ),
      [`_${key}`]: value,
    }
    : { [key]: value }));
  const combined = input.reduce(
    (prev, obj) => Object.entries(obj).reduce(
      (p, [k, v]) => ({
        ...p,
        [k]: ((p[k] || 0) + v),
      }),
      prev,
    ),
    {},
  );
  return combined;
};

export const generateAST = (
  what: RecipeType,
  recipes: RecipesType,
  parent?: RecipeAST,
  name: string = 'root',
): RecipeAST => {
  const ast: RecipeAST = {
    name,
    parent,
  };
  ast.children = Object.keys(what.input)
    .map((it) => (recipes[it]
      ? generateAST(recipes[it], recipes, ast, it)
      : { name: it, parent: ast }));
  return ast;
};

export const generateUses = (
  name: string = 'root',
  recipes: RecipesType,
  parent?: RecipeAST,
): RecipeAST => {
  const ast: RecipeAST = {
    name,
    parent,
  };
  const uses = Object.entries(recipes)
    .filter(([, { input }]) => Object.keys(input).includes(name))
    .map(([key]) => key);

  if (uses.length > 0) {
    ast.children = uses.map((it) => generateUses(it, recipes, ast));
  }

  return ast;
};

type RecipeReduce = {
  list: RecipeSteps,
  ignore: string[],
};
export const generateSteps = (
  ast: RecipeAST,
  resources: Record<string, number>,
): RecipeSteps => {
  let toWalk = [ast];
  const steps: RecipeSteps = [];
  while (toWalk.length > 0) {
    const step: RecipeStep = [];
    toWalk
      .filter(({ name }) => resources[`_${name}`])
      .forEach(({ name }) => {
        step.push({
          name,
          amount: resources[`_${name}`] || 0,
        });
      });
    if (step.length > 0) {
      steps.push(
        step
          .filter((
            it: RecipeStepItem,
            idx: number,
            arr: RecipeStep,
          ) => arr.findIndex(({ name }) => name === it.name) === idx),
      );
    }
    toWalk = toWalk
      .filter(({ children }) => children)
      .reduce(
        (prev, { children }) => [...prev, ...children!],
        [] as RecipeAST[],
      );
  }
  const finalSteps = steps.reverse()
    .reduce(
      ({ list, ignore }: RecipeReduce, s: RecipeStep) => ({
        list: [
          ...list,
          s.filter(({ name }) => !ignore.includes(name)),
        ],
        ignore: uniq([
          ...ignore,
          ...s.map(({ name }) => name),
        ]),
      }),
      {
        list: [],
        ignore: [],
      },
    );
  return finalSteps.list;
};

export const hasCircularDependency = (
  symbol: SymbolType,
  recipe: RecipeType,
  recipes: RecipesType,
  symbols: SymbolType[],
): boolean => {
  const ownSymbols = Object.keys(recipe.input);
  const containsSymbol = ownSymbols
    .reduce((prev, it) => prev || (it === symbol.name), false);
  if (containsSymbol) {
    return true;
  }
  const nextRecipes = (ownSymbols
    .map((it) => symbols.find(({ name }) => name === it))
    .filter(Boolean) as SymbolType[]
  )
    .filter(({ composite }) => composite)
    .map(({ name }) => recipes[name])
    .filter(Boolean);
  const nextContainSymbol = nextRecipes.reduce(
    (prev, it) => prev || hasCircularDependency(
      symbol,
      it,
      recipes,
      symbols,
    ),
    false,
  );
  return nextContainSymbol;
};

export const inheritLabels = (
  { name, children }: RecipeAST,
  recipes: ComboRecipesType,
  toAdd: string[] = [],
) => {
  const recipe = recipes[name];
  if (children) {
    children.forEach((child) => {
      const childRecipe = recipes[child.name];
      if (!childRecipe) {
        return undefined;
      }
      const nextLabels = uniq([
        ...toAdd,
        ...(recipe.labels || []),
        ...(recipe.inheritedLabels || []),
        ...(childRecipe.labels || []),
        ...(childRecipe.inheritedLabels || []),
      ]);
      childRecipe.inheritedLabels = nextLabels;
      inheritLabels(child, recipes, nextLabels);
      return undefined;
    });
  }
};
