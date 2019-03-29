import React from 'react';
import styled from 'styled-components';
import { headerHeight } from 'modules/theme';

import { Container, utils } from 'styled-minimal';
import Logo from 'components/Logo';

const { responsive, spacer } = utils;
import { NavLink } from 'react-router-dom';

const HeaderWrapper = styled.header`
  background-color: #f9f9f9;
  height: ${headerHeight}px;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 200;
`;

const HeaderContainer = styled(Container)`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  justify-content: space-between;
  padding-bottom: ${spacer(2)};
  padding-top: ${spacer(2)};
`;

const AddNew = styled(NavLink)`
  align-items: center;
  color: #333;
  display: flex;
  font-size: 1.3rem;
  padding: ${spacer(2)};

  ${responsive({ lg: 'font-size: 1.6rem;' })}; /* stylelint-disable-line */

  &.active {
    color: #000;
  }
`;

const Text = styled.span`
  display: inline-block;
  margin-right: 0.4rem;
  text-transform: uppercase;
`;

export default class Header extends React.PureComponent {
  render() {
    const page = location.pathname;
    return (
      <HeaderWrapper>
        <HeaderContainer>
          <Logo text="Roma Boyko" />
          <AddNew to={page === '/home' ? '/create' : '/home'}>
            <Text>{page === '/home' ? 'создать запись' : 'вернуться назад'}</Text>
          </AddNew>
        </HeaderContainer>
      </HeaderWrapper>
    );
  }
}
