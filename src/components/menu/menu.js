import React from 'react';
import styled from 'styled-components';

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  background: #f5dd01;
  height: 100vh;
  text-align: right;
  padding: 100px 20px 20px 20px;
  position: absolute;
  top: 0;
  right: 0;
  display: ${({ open }) => open ? 'flex' : 'none'};
  
  @media (max-width: 576px) {
    width: 100%;
  }

  a {
    font-size: 1rem;
    text-transform: uppercase;
    padding: 0.5rem 0;
    font-weight: bold;
    color: #0D0C1D;
    text-decoration: none;
    transition: color 0.3s linear;
    
    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #343078;
    }
  }
`;

const Menu = ({ open, isRootPath }) => {
    return (
      <StyledMenu open={open}>
        {
            !isRootPath &&
            <a href="/">
                Home
            </a>
        }
        <a href="https://www.meetup.com/Belfast-JS/">
          Meetup
        </a>
        <a href="https://twitter.com/belfastjs">
          Twitter
        </a>
        <a href="https://forms.gle/rHNYD9JrXnTDztaH8">
          Submit a Talk
        </a>
        <a href="/coc">
          Code of Conduct
        </a>
        <a href="/questions">
          Live Questions
        </a>
        <a href="mailto:belfastjs@christopherlaughlin.co.uk">
          contact
        </a>
      </StyledMenu>
    )
  }
  export default Menu;