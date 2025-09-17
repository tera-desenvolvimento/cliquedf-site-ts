import React from 'react';

import Header from './components/header';
import TopBanner from './components/topBanner';
import SubBanner from './components/subBanner';
import Plans from './components/plans';
import Footer from './components/footer';

function App() {
  return (
    <React.Fragment>
      <Header/>
      <TopBanner/>
      <SubBanner/>
      <Plans/>
      <Footer/>
    </React.Fragment>
  );  
}

export default App;
