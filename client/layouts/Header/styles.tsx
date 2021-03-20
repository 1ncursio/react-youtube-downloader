import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-bottom: 1px solid #dfdfdf;

  span {
    margin-left: 10px;
    font-size: 1.3rem;
    color: #ff0000;
    font-weight: 700;
  }

  a {
    vertical-align: middle;
  }
`;

export const LinkWrapper = styled(Link)`
  margin: 10px;
  display: flex;
`;
