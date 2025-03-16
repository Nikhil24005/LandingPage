import React from 'react';
import "./App.css";
import MentorMenteePortal from "./components/MentorMenteePortal";
import MentorMenteeProgram from './components/mentormenteeprogram/MentorMenteeProgram';
import Cards from './components/cards/Cards';
import Card from './components/card/Card';
import Footer from './components/footer/Footer';
import Testimonials from './components/testimonials/Testimonials';

function App() {
  return (
    <div className="App">
      <MentorMenteePortal />
      <MentorMenteeProgram />
      <Testimonials />
      <Cards />
      <Card />
      <Footer />
    </div>
  );
}

export default App;
