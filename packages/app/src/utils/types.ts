export type RecipeInputType = Record<string, number>;
export type RecipeType = {
  input: RecipeInputType;
  output: number;
  labels?: string[];
};
export type RecipesType = Record<string, RecipeType>;
export type ComboRecipeType = RecipeType & {
  deps: RecipeAST,
  uses: RecipeAST,
  inheritedLabels?: string[],
};
export type ComboRecipesType = Record<string, ComboRecipeType>;
export type SymbolType = {
  name: string;
  composite?: boolean;
};
export type RecipesExtraType = {
  recipes: RecipesType | undefined;
  symbols: SymbolType[];
};

export type RecipesValuesType = {
  recipes: ComboRecipesType | undefined,
  symbols: SymbolType[],
  labels: string[],
  names: string[],
};

export type RecipesFuncsType = {
  update: (path: string, value: any) => void;
  addRecipe: (name: string) => void;
  removeRecipe: (name: string) => void;
  reset: () => void;
  import: (imports: RecipesType) => void;
};

export type RecipesContextType = RecipesValuesType & RecipesFuncsType;

export type RecipeContextType = {
  recipe: ComboRecipeType | undefined,
  symbols: SymbolType[],
  name: string,
  ast?: RecipeAST,
  uses?: RecipeAST,
  steps?: RecipeSteps,
  resources: Record<string, number>,
  update: (path: string, value: any) => void,
  addInput: (name: string) => void,
  removeInput: (name: string) => void,
  addLabel: (name: string) => void,
  removeLabel: (name: string) => void,
};

export type RecipeAST = {
  name: string,
  parent?: RecipeAST,
  children?: RecipeAST[],
};

export type RecipeStepItem = {
  name: string,
  amount: number
};
export type RecipeStep = RecipeStepItem[];
export type RecipeSteps = RecipeStep[];

export type LabelType = {
  name: string,
  color: string,
};

export type ExportType = {
  recipes: RecipesType,
  labels: Record<string, string>
};
