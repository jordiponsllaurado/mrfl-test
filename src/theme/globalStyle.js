import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html{
    box-sizing: border-box;
    font-size: 10px;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
  }

  *:focus{
    outline: none;
  }

  .article {
    min-height: 100px;
    max-height: 100px;
    padding: 8px;
    display: flex;
    flex-direction: row;
    gap: 8px;

    .article-image {
      width: 110px;
      img {
        max-height: 100%;
        width: auto;
      }
    }

    .article-content {
      .article-title {
        color: #666
      }

      .article-description {
        width: 250px;
        color: #666;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;  
        line-height: 1;
        }
    }
  }
  
  .article:not(:last-child) {
    border-bottom: 1px solid #c3c3c3;
  }

  .topbar {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100px;

    .header {
      display: flex;
      flex: 1;
      align-content: center;
      justify-content: center;
      padding: 8px;
    }

    .burger-menu {
      position: absolute;
      top: 8px;
      left: 16px;
      padding: 8px;
      z-index: 1;
    }
  }

  .topbar + .content {
    padding-top: 102px;
  }
`;

export default GlobalStyle;
