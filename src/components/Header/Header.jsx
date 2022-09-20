import { useCallback } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { firstLetterUppercase } from '../../functions/firstLetterUppercase';
import { logoutAsync } from '../../store/thunks/userThunk';
// data
const menu = [
  {
    id: 1,
    title: 'Edit',
    type: 'dropdown',
    inner: [
      {
        id: 1,
        title: 'User',
        path: 'edit/user',
      },
      {
        id: 2,
        title: 'Product',
        path: 'edit/product',
      },
      {
        id: 3,
        title: 'Category',
        path: 'edit/category',
      },
      {
        id: 4,
        title: 'Cart',
        path: 'edit/cart',
      },
    ],
  },
  {
    id: 2,
    title: 'Components',
    type: 'button',
    path: 'components',
  },
];
// variables
const type = {
  '/login': 'registration',
  '/registration': 'login',
};
// styled components
const HeaderStyled = styled.header`
  position: sticky;
  z-index: 999;
  width: 100%;
`;
const NavigationBar = styled(Navbar)`
  min-height: 56px;
`;
const StyledLink = styled(Link)`
  padding: 0 10px;
  text-decoration: none;
  color: #ffffff8c !important;

  &:hover {
    color: #ff9300 !important;
  }
`;
const NavDropdownStyled = styled(NavDropdown)`
  a {
    &:hover {
      color: #ff9300 !important;
    }
  }
`;
const DropdownLink = styled(Link)`
  display: block;
  text-decoration: none;
  color: #fff;
  padding: 5px 10px;

  &:hover {
    color: #ff9300;
    background: #282c34;
    border-radius: 5px;
  }
`;
const NavigationBrand = styled(Navbar.Brand)`
  cursor: pointer;
  color: #fff;
`;
const NavbarText = styled(Navbar.Text)``;
// /styled components
const componentType = {
  button: ({ title, id, path }) => (
    <NavbarText key={id}>
      <StyledLink to={path}>{title}</StyledLink>
    </NavbarText>
  ),
  dropdown: ({ id, title, inner }) => {
    return (
      <NavDropdownStyled menuVariant="dark" key={id} title={title}>
        {inner.map(({ title, id, path }) => (
          <DropdownLink key={id} to={path}>
            {title}
          </DropdownLink>
        ))}
      </NavDropdownStyled>
    );
  },
};
const Header = ({ isAuth }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const logoutHandle = useCallback(() => {
    dispatch(logoutAsync());
  }, [isAuth]);
  return (
    <HeaderStyled>
      <NavigationBar bg="dark" variant="dark" expand="lg">
        <Container>
          <StyledLink to="/">
            <NavigationBrand>AdminPanel</NavigationBrand>
          </StyledLink>

          {isAuth ? (
            <>
              <Navbar.Toggle variant="dark" />
              <Navbar.Collapse>
                <Nav className="me-auto">
                  {menu.map((item) => componentType[item.type](item))}
                  {type[location.pathname] ? (
                    <NavigationBrand>
                      <StyledLink to={type[location.pathname]}>
                        {firstLetterUppercase(type[location.pathname])}
                      </StyledLink>
                    </NavigationBrand>
                  ) : (
                    <NavigationBrand onClick={logoutHandle}>
                      Logout
                    </NavigationBrand>
                  )}
                </Nav>
              </Navbar.Collapse>
            </>
          ) : null}
        </Container>
      </NavigationBar>
    </HeaderStyled>
  );
};
export default Header;
