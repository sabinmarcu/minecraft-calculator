import React, {
  FC, useCallback, useEffect,
} from 'react';
import {
  SwipeableDrawer,
  Toolbar,
  Container,
  Typography,
  Tab,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import styled from 'styled-components';

import { useHistory } from 'react-router';
import { TabContext } from '@material-ui/lab';
import { useDrawer } from '../state/drawer';
import { RecipesList } from './RecipesList';
import Symbols from './SymbolsList';
import {
  onMobile, StickyAppBar, StyledTabPanel as TabPanel, StyledTabs, StyledToolbarContainer,
} from './styled';
import { useIsMobile } from '../hooks/useIsMobile';
import { BottomFab } from './BottomFab';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { SettingsView } from './SettingsPane';

const drawerStyle = `
  min-width: min(100vw, 300px);
  max-width: 500px;
  ${onMobile} {
    min-width: 100vw;
    max-width: 100vw;
  }
`;
const StyledDrawer = styled(SwipeableDrawer)`
  .styledPaper {
    ${drawerStyle}
    ${onMobile} {
      padding-left: env(safe-area-inset-left) !important;
      padding-right: env(safe-area-inset-right) !important;
    }
  }
  .styledRoot {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: flex-start;
  }
`;

const StyledContainer = styled(Container)`
  margin: 1.5rem 0 !important;
`;

const DrawerAppBar: FC = ({ children }) => (
  <StickyAppBar>
    <Toolbar>
      <StyledToolbarContainer>
        <Typography variant="h5">{children}</Typography>
      </StyledToolbarContainer>
    </Toolbar>
  </StickyAppBar>
);

export const DrawerWrapper = styled.section`
  display: flex;
  flex-flow: column nowrap;
  height: 100%;
  width: 100%;
`;

export const DrawerInner = styled.article`
  flex: 1;
  overflow: hidden;
  overflow-y: auto;
`;

export const StyledTabPanel = styled(TabPanel)`
  ${drawerStyle}
`;

export const RecipesView: FC = () => (
  <>
    <DrawerAppBar>Symbols</DrawerAppBar>
    <StyledContainer>
      <Symbols />
    </StyledContainer>
    <DrawerAppBar>Recipes</DrawerAppBar>
    <StyledContainer>
      <RecipesList />
    </StyledContainer>
  </>
);

const tabs = [
  { title: 'Recipes', Component: RecipesView },
  { title: 'Settings', Component: SettingsView },
];

export const Drawer: FC = () => {
  const isMobile = useIsMobile();
  const { isOpen, open, close } = useDrawer();
  const [tab, setTab] = useLocalStorage<string>('drawer-tab', tabs[0].title);
  const onChange = useCallback(
    (event, newValue) => setTab(newValue),
    [setTab],
  );
  return (
    <StyledDrawer
      open={isOpen}
      onOpen={open}
      onClose={close}
      anchor="right"
      classes={{ paper: 'styledPaper', root: 'styledRoot' }}
    >
      <DrawerWrapper>
        <TabContext value={tab || tabs[0].title}>
          <StyledTabs
            value={tab}
            onChange={onChange}
            variant={isMobile ? 'fullWidth' : undefined}
          >
            {tabs.map(({ title }) => (
              <Tab label={title} key={title} value={title} />
            ))}
          </StyledTabs>
          <DrawerInner>
            {tabs.map(({ title, Component }) => (
              <StyledTabPanel value={title} key={title}>
                <Component />
              </StyledTabPanel>
            ))}
            {isMobile && (
              <BottomFab
                onClick={close}
                Icon={CloseIcon}
                horizontal="left"
              />
            )}
          </DrawerInner>
        </TabContext>
      </DrawerWrapper>
    </StyledDrawer>
  );
};

export const RouteChangeDrawerClose: FC = () => {
  const history = useHistory();
  const { close } = useDrawer();
  useEffect(
    () => history.listen(() => {
      close();
    }),
    [history, close],
  );
  return <></>;
};