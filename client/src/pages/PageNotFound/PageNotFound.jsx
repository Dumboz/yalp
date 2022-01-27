import { Comment } from 'components';
import { Logo } from 'components/Logo/Logo';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { getHexaColor } from 'styles/color';
import { Container, LogoWrapper, CommentWrapper } from './PageNotFound.styled';

function PageNotFound() {
  return (
    <>
      <Helmet>
        <title>Page Not Found</title>
      </Helmet>
      <Container>
        <CommentWrapper>
          <Comment
            as="h2"
            size={50}
            color={getHexaColor('primary', 500)}
            fontWeight={900}>
            404 Page Not Found
          </Comment>
          <Comment color={getHexaColor('gray', 400)}>
            Oops... The link you clicked may be broken or the page may have been
            removed. We're sorry.
          </Comment>
        </CommentWrapper>
        <LogoWrapper>
          <Logo size={300} left={0} />
        </LogoWrapper>
      </Container>
    </>
  );
}

export default PageNotFound;
