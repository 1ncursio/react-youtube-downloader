import React from 'react';
import { FooterContainer } from '@layouts/Footer/styles';
import { AiFillGithub } from 'react-icons/ai';

const Footer = () => {
  return (
    <FooterContainer>
      <p>
        ⓒ 2021 1ncursio
        <a href="https://www.github.com/1ncursio" rel="noreferrer noopener">
          <AiFillGithub />
        </a>
      </p>
    </FooterContainer>
  );
};

export default Footer;
