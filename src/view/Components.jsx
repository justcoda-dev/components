import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import SideMenu from '../components/SideMenu/SideMenu';
import ComponentsPage from './pages/components/ComponentsPage';

const list = [
  { id: 1, title: 'buttons', path: 'buttons' },
  {
    id: 2,
    title: 'dropdowns',
    path: 'dropdowns',
  },
  { id: 3, title: 'headers', path: 'headers' },
  { id: 4, title: 'pagination', path: 'pagination' },
  {
    id: 5,
    title: 'spinner',
    path: 'spinner',
  },
  { id: 6, title: 'tabs', path: 'tabs' },
];

//styled components
const ComponentsWrapper = styled.div`
  display: flex;
`;
const Menu = styled(SideMenu)`
  position: fixed;
  padding-top: 70px;
  z-index: 888;
  top: 0;
  width: 20%;
  left: 0;
  //top: 0;
  //bottom: 0;
`;
const Content = styled.div`
  position: relative;
  margin-left: 20%;
  margin-top: 60px;
  flex: 1;
`;
///styled components

const Components = () => {
  return (
    <ComponentsWrapper>
      <Menu title="Components" list={list} />
      <Content>
        <Routes>
          <Route path=":type" element={<ComponentsPage />} />
        </Routes>
      </Content>
    </ComponentsWrapper>
  );
};
export default Components;
