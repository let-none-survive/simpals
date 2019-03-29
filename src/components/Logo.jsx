import React from 'react';
import styled from 'styled-components';

export const Logo = styled.div`
  display: block;
  align-items: flex-start;
  font-size: 18px;
  color: #000;
`;

export default (props) => <Logo>{props.text}</Logo>;
