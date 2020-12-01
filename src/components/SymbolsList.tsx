import React, { FC } from 'react';
import { Chip } from '@material-ui/core';
import styled from 'styled-components';
import { useSymbols } from '../state/recipes';
import { StyledLink } from './styled';

export const StyledContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: flex-start;
`;

export const StyledChip = styled(Chip)`
  margin: 5px;
`;

export const ClickableStyledChip = styled(StyledChip)`
  cursor: pointer;
`;

export const SymbolsList: FC = () => {
  const symbols = useSymbols();
  return (
    <StyledContainer>
      {symbols.map(({ name, composite }) => (composite ? (
        <StyledLink to={`/recipes/${name}`} key={name}>
          <ClickableStyledChip label={name} />
        </StyledLink>
      ) : (
        <StyledChip variant="outlined" label={name} key={name} />
      )))}
    </StyledContainer>
  );
};

export default SymbolsList;
