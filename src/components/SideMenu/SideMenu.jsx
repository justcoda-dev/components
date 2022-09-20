import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MenuWrapper = styled.div`
  background: #e0e3e8;
  height: 100%;
  padding: 10px;
`;
const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
`;
const MenuListItem = styled.li`
  padding: 10px 0;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: #282c34;
`;

const SideMenu = ({ list, title, className }) => {
  return (
    <MenuWrapper className={className}>
      <h3>{title}</h3>
      <MenuList>
        {list.map((item) => (
          <MenuListItem key={item.id}>
            <StyledLink to={item.path}>{item.title}</StyledLink>
          </MenuListItem>
        ))}
      </MenuList>
    </MenuWrapper>
  );
};
export default SideMenu;
