import styled from 'styled-components';

const Title = styled.h1``;
const FirstTitle = ({ children, className }) => {
  return <Title className={className}>{children}</Title>;
};
export default FirstTitle;
