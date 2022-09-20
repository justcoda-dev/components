import { useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from '../../../styledComponents/Container';
import Buttons from './types/Buttons';

const ComponentsPageWrapper = styled.div``;
const componentsByType = {
  buttons: <Buttons />,
};
const ComponentsPage = () => {
  const location = useLocation();
  const type = useMemo(
    () =>
      location.pathname
        .split('/')
        .filter((item) => item.length > 0 && item !== 'components')
        .join(''),
    [location],
  );
  useEffect(() => {
    // request
  }, []);
  return (
    <ComponentsPageWrapper>
      <Container>{componentsByType[type]}</Container>
    </ComponentsPageWrapper>
  );
};
export default ComponentsPage;
