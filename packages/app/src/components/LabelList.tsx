import { FC, useMemo } from 'react';
import styled from 'styled-components';
import { Chip, Typography, withTheme } from '@material-ui/core';
import { useFilter, Filter } from './Filter';
import { useLabelColor } from '../state/label';
import { camelCaseToCapitalized } from '../utils/strings';

export const StyledContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: flex-start;
`;

export const StyledChip = withTheme(
  styled(Chip)<{
    customColor?: string
  }>`
    margin: 5px;
    &, &:hover, &:focus {
      background: ${({ customColor }) => (customColor)};
      &, svg {
        color: ${({ customColor, theme: { palette: { getContrastText } } }) => (customColor ? getContrastText(customColor) : undefined)};
      }
    }
  `,
);

export const LabelChip: FC<{
  name: string,
  onRemove?: (input: string) => (e: Event) => void,
  onClick?: (input: string) => (e: any) => void,
  active: boolean,
}> = ({
  name,
  onRemove,
  onClick,
  active,
}) => {
  const color = useLabelColor(name);
  const removeFunc = useMemo(
    () => (onRemove ? onRemove(name) : undefined),
    [onRemove, name],
  );
  const clickFunc = useMemo(
    () => (onClick ? onClick(name) : undefined),
    [onClick, name],
  );
  return (
    <StyledChip
      label={camelCaseToCapitalized(name)}
      customColor={active ? color : undefined}
      variant={active ? 'default' : 'outlined'}
      onDelete={removeFunc}
      {...clickFunc ? { onClick: clickFunc } : {}}
    />
  );
};

export const StyledTypography = styled(Typography)`
  margin: 25px 0 15px;
`;

export const LabelList: FC<{
  labels: string[],
  extraLabels?: string[],
  filter?: boolean,
  active?: string[],
  onRemove?: (input: string) => (e: Event) => void,
  onClick?: (input: string) => (e: any) => void,
}> = ({
  labels,
  extraLabels,
  onRemove,
  onClick,
  filter = true,
  active,
}) => {
  const { list, ...filterProps } = useFilter(
    labels,
    (it) => it,
  );
  const renderLabels = useMemo(
    () => (filter ? list : labels)
      .map((it) => ({
        label: it,
        active: active ? active.includes(it) : true,
      })),
    [filter, list, labels, active],
  );
  const extra = useMemo(
    () => (extraLabels && labels
      ? extraLabels.filter((it) => !labels.includes(it))
      : undefined),
    [extraLabels, labels],
  );
  return (
    <>
      {extra && (
      <StyledTypography
        variant="h5"
      >
        Own Labels
      </StyledTypography>
      )}
      <StyledContainer>
        {filter && <Filter {...filterProps} />}
        {renderLabels.map(({ label, active: a }) => (
          <LabelChip
            name={label}
            key={label}
            active={a}
            onRemove={onRemove}
            onClick={onClick}
          />
        ))}
      </StyledContainer>
      {extra && (
      <>
        <StyledTypography
          variant="h5"
        >
          Inherited Labels
        </StyledTypography>
        {extra.map((label) => (
          <LabelChip
            name={label}
            key={label}
            active
          />
        ))}
      </>
      )}
    </>
  );
};
