import {
  Toolbar,
  Typography,
} from '@material-ui/core';
import { FC } from 'react';
import styled from 'styled-components';
import { StickyAppBar, StyledToolbarContainer } from '../styled';
import { ResetAll, ResetThemeSelection, ResetRecipes } from './ResetSettings';
import { Import } from './Import';
import { Export } from './Export';
import { StacksEnabled, StacksAmount } from './StacksSettings';
import { LabelSettings } from './LabelsSettings';

type DirectionProp = {
  direction?: 'row' | 'column'
  wrap?: 'wrap' | 'nowrap'
};
export const SectionWrapper = styled.section<DirectionProp>`
  display: flex;
  flex-flow: ${({ direction }) => (direction === 'column'
    ? 'column'
    : 'row'
  )} ${({ wrap }) => (wrap === 'wrap'
  ? 'wrap'
  : 'nowrap'
)};
  margin: 25px 20px;
  & > * {
    margin: 5px;
  }
`;

export const Section: FC<{
  title: string
} & DirectionProp> = ({
  title,
  children,
  direction,
}) => (
  <>
    <StickyAppBar>
      <Toolbar>
        <StyledToolbarContainer>
          <Typography variant="h5">{title}</Typography>
        </StyledToolbarContainer>
      </Toolbar>
    </StickyAppBar>
    <SectionWrapper direction={direction}>
      {children}
    </SectionWrapper>
  </>
);

export const SettingsView: FC = () => (
  <>
    <Section title="Label Colors" direction="column">
      <LabelSettings />
    </Section>
    <Section title="Split into Stacks" direction="column">
      <StacksEnabled />
      <StacksAmount />
    </Section>
    <Section title="Import / Export">
      <Import />
      <Export />
    </Section>
    <Section title="Reset">
      <ResetAll />
      <ResetRecipes />
      <ResetThemeSelection />
    </Section>
  </>
);

export default SettingsView;
