import React from 'react';
import './App.css';
import Header from './markdown/Header';
import Text from './markdown/Text';
import Footer from './markdown/Footer';

function App() {
  
  return (
    <div className="main-content">
      <Header />
      <Text />
      <Footer />
    </div>
  );
}

export default App;
