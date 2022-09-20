import styled from 'styled-components';
import { device } from './brakepoints';

export const Container = styled.div`
  height: 100%;
  padding-bottom: 5px;
  @media screen and ${device.mobileS} {
    margin: 0 2px;
  }
  @media screen and ${device.mobileM} {
    margin: 0 5px;
  }
  @media screen and ${device.mobileL} {
    margin: 0 15px;
  }
  @media screen and ${device.tablet} {
    margin: 0 20px;
  }
  @media screen and ${device.laptop} {
    margin: 0 30px;
  }
  @media screen and ${device.laptopL} {
    margin: 0 100px;
  }
  @media screen and ${device.desktopL} {
    margin: 0 200px;
  }
`;
