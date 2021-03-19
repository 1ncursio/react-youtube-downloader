import React from 'react';
import Logo from '@components/Logo';
import { HeaderContainer } from '@layouts/Header/styles';

const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
      <span>React Youtube Downloader</span>
    </HeaderContainer>
  );
};

export default Header;
