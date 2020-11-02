/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const StyledMenu = styled.nav`
  position: fixed;
  justify-content: center;
  background-color: white;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  height: 100%;
  width: 75%;
  text-align: left;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  overflow-y: auto;

  .slide-header {
    background-color: #4b4b4b;

    img {
      padding: 2rem;
    }
  }

  .sections {
    display: flex;
    flex-direction: column;
    justify-content: center;

    a {
      font-size: 2rem;
      text-transform: uppercase;
      padding: 2rem 0;
      font-weight: bold;
      letter-spacing: 0.5rem;
      color: grey;
      text-decoration: none;
      transition: color 0.3s linear;
      padding: 2rem;
    }

    a.active {
      color: orange;
    }

    .section:not(:last-child) {
      border-bottom: 1px solid #4b4b4b;
    }
  }
`;
