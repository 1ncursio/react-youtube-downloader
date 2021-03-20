import React from 'react';
import Logo from '@components/Logo';
import { HeaderContainer, LinkWrapper } from '@layouts/Header/styles';

const Header = () => {
  return (
    <HeaderContainer>
      <LinkWrapper to="/">
        <Logo />
        <span>React Youtube Downloader</span>
      </LinkWrapper>
    </HeaderContainer>
  );
};

export default Header;
