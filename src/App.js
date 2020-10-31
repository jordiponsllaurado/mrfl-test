import { useEffect, useState } from 'react';
import { throttle } from 'lodash';
import Article from './components/Article';
import Spinner from './components/Spinner/Spinner';
import Topbar from './components/topbar/Topbar';

function App() {
  const [articles, setArticles] = useState(null);
  const [customizations, setCustomizations] = useState({
    logo: {
      image: 'https://www.marfeel.com/public/images/landing/header/logo-marfeel.svg',
      size: '40px'
    },
    background: {
      color: 'white'
    },
    burgerMenu: {
      color: 'orange'
    }
  });
  const [sections, setSections] = useState(null);
  const [sectionActive, setSectionActive] = useState(null);
  const [sectionVisible, setSectionVisible] = useState(true);
  const [headerVisible, setHeaderVisible] = useState(true);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/articles`)
      .then(response => response.json())
      .then(data => {
        setArticles(data);
      });
  }, []);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/customizations`)
      .then(response => response.json())
      .then(data => {
        setCustomizations(data);
      });
  }, []);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/sections`)
      .then(response => response.json())
      .then(data => {
        setSectionActive(data[0]);
        setSections(data);
      });
  }, []);

  const handleChangeSection = section => {
    setSectionActive(section);
  };

  const handleScroll = () => {
    const position = window.scrollY;
    setSectionVisible(position < 400);
    setHeaderVisible(position < 800);
  };

  useEffect(() => {
    window.addEventListener('scroll', throttle(handleScroll, 200));
    return () => {
      window.removeEventListener('scroll', throttle(handleScroll, 200));
    };
  }, []);

  if (!articles || !sections) {
    return <Spinner />;
  }

  return (
    <div className="App">
      <Topbar
        customizations={customizations}
        sections={sections}
        sectionActive={sectionActive}
        onChangeSection={handleChangeSection}
        sectionVisible={sectionVisible}
        headerVisible={headerVisible}
      />
      <div className="content">
        {articles && articles.map(article => <Article key={article.id} {...article} />)}
      </div>
    </div>
  );
}

export default App;
