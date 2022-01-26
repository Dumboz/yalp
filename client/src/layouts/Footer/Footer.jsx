import styled from 'styled-components';
import { getHexaColor } from 'styles/color';
import {
  FooterContainer,
  FooterWrapper,
  ExtraWrapper,
  FooterListWrapper,
} from './Footer.styled';

export function Footer() {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Footer.List title="About">
          {[
            'About Yelp',
            'Careers',
            'Press',
            'Investor Relations',
            'Investor Relations',
            'Trust & Safety',
            'Content Guidelines',
            'Accessibility Statement',
            'Terms of Service',
            'Privacy Policy',
            'Ad Choices',
          ]}
        </Footer.List>
        <Footer.List title="Discover">
          {[
            'Yelp Project Cost Guides',
            'Collections',
            'Talk',
            'Events',
            'The Local Yelp',
            'Yelp Blog',
            'Support',
            'Yelp Mobile',
            'Developers',
            'RSS',
          ]}
        </Footer.List>
        <Footer.List title="Yelp for Business">
          {[
            'Claim your Business Page',
            'Advertise on Yelp',
            'Yelp for Restaurant Owners',
            'Table Management',
            'Business Success Stories',
            'Business Support',
            'Yelp Blog for Business',
          ]}
        </Footer.List>
        <ExtraWrapper>
          <Footer.List title="Languages">{['English']}</Footer.List>
          <Footer.List title="Countries">{['United States']}</Footer.List>
        </ExtraWrapper>
      </FooterWrapper>
    </FooterContainer>
  );
}

Footer.List = function List({ title, children }) {
  console.log(children);
  return (
    <FooterListWrapper>
      <h4>{title}</h4>
      <ul>
        {children.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </FooterListWrapper>
  );
};
