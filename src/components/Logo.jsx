import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


export const Logo = styled(NavLink)`
  display: block;
  align-items: flex-start;
  font-size: 18px;
  color: #000;
`;

export default (props) => <Logo to='/home'>{props.text}</Logo>;
