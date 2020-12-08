import { FC, useCallback } from 'react';
import {
  Button,
} from '@material-ui/core';
import { useHistory } from 'react-router';
import { useRecipes } from '../../state/recipes-v3';
import { RecipesType } from '../../utils/types';
import { useLabels } from '../../state/label';

export type ExportType = {
  recipes: RecipesType,
  labels: Record<string, string>
};

const readFile = (file: File) => new Promise<ExportType>((accept, reject) => {
  const reader = new FileReader();
  reader.onload = () => {
    try {
      if (!reader.result) {
        throw new Error('Empty Data');
      }
      if (reader.result instanceof ArrayBuffer) {
        throw new Error('Got an Array Buffer?');
      }
      const data = JSON.parse(reader.result) as ExportType;
      accept(data);
    } catch (e) {
      reject(e);
    }
  };
  reader.readAsText(file);
});

export const Import: FC = () => {
  const { import: importRecipes } = useRecipes();
  const { import: importLabels } = useLabels();
  const history = useHistory();
  const onSubmit = useCallback(
    () => {
      const el = document.createElement('input');
      el.type = 'file';
      document.body.appendChild(el);
      el.addEventListener(
        'change',
        async () => {
          const { files } = el;
          if (files && files.length > 0) {
            const results = (
              await Promise.all(
                Array.from(files).map(readFile),
              )
            )
              .filter((it) => it.recipes && it.labels)
              .reduce((prev, it) => ({
                recipes: {
                  ...prev.recipes,
                  ...it.recipes,
                },
                labels: {
                  ...prev.labels,
                  ...it.labels,
                },
              }), {
                recipes: {},
                labels: {},
              }) as ExportType;
            importRecipes(results.recipes);
            importLabels(results.labels);
            history.push('/');
          }
        },
      );
      el.click();
      document.body.removeChild(el);
    },
    [importRecipes, importLabels, history],
  );
  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={onSubmit}
      >
        Import
      </Button>
    </>
  );
};

export const Export: FC = () => {
  const { recipes } = useRecipes();
  const { rawLabels: labels } = useLabels();
  const onSubmit = useCallback(
    () => {
      const blob = new Blob(
        [
          JSON.stringify({
            recipes: recipes || {},
            labels: labels || {},
          }, undefined, 2),
        ],
        { type: 'application/json' },
      );
      const obj = window.URL.createObjectURL(blob);
      const el = document.createElement('a');
      el.style.display = 'none';
      el.href = obj;
      el.download = 'export.json';
      document.body.appendChild(el);
      el.click();
      document.body.removeChild(el);
    },
    [recipes, labels],
  );
  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={onSubmit}
      >
        Export
      </Button>
    </>
  );
};
