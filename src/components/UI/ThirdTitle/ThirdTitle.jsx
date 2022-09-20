import styled from 'styled-components';

const Title = styled.h3``;
const ThirdTitle = ({ children, className }) => {
  return <Title className={className}>{children}</Title>;
};
export default ThirdTitle;
