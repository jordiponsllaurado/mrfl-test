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

  ::-webkit-scrollbar {
    width: 0px;
    background: transparent; /* make scrollbar transparent */
  }

  .spinner{
    width:100%;
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;

    .loader {
      border: 4px solid #ff9b35;
      border-top: 4px solid #aac33a;
      border-bottom: 4px solid #aac33a;
      border-radius: 50%;
      width: 120px;
      height: 120px;
      animation: spin 2s linear infinite;
    }
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
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

    .header {
      display: flex;
      flex: 1;
      align-content: center;
      justify-content: center;
      padding: 8px;
      height: 50px;
    }

    .burger-menu {
      position: absolute;
      top: 8px;
      left: 0px;
      padding: 8px;
      z-index: 1;
    }
  }

  .section-menu {
    display: flex;
    gap: 8px;
    overflow: auto;
    white-space: nowrap;
    padding: 0 8px;
  }

  .section-item {
    display: block;
    text-align: center;
    text-transform: uppercase;
  }
`;

export default GlobalStyle;
