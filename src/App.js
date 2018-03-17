import React, { Component } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Services from './components/Services/Services';
import './App.css';
import BusinessVertical from './components/Business-Verticals/Business-Verticals';
import  FeaturedPost from './components/Featured-Post/Featured-Post';
import HappyClients from './components/HappyClients/HappyClients';
import DevelopmentProcess from './components/Development-Process/Development-Process';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Services />
        <DevelopmentProcess />
        <BusinessVertical />
        <FeaturedPost />
        <HappyClients />
        <Footer />
      </div>
    );
  }
}

export default App;
