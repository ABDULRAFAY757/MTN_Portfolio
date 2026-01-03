import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import DataInsights from './components/DataInsights';
import Services from './components/Services';
import Footer from './components/Footer';
import './styles/main.css';

// Scroll to top component
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Header />
        <Switch>
          <Route path="/" exact component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/services" component={Services} />
          <Route path="/insights" component={DataInsights} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
