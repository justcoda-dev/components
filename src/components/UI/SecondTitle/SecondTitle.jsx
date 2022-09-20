import styled from 'styled-components';

const Title = styled.h2``;
const SecondTitle = ({ children, className }) => {
  return <Title className={className}>{children}</Title>;
};
export default SecondTitle;
