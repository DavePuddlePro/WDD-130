import React from 'react';
import logo from './assets/images/Best-Bottle-Logo.png';
import heroImage from './assets/images/rsz_1bluewater-sweden-tf9iuerzxwa-unsplash.jpg';
import blueImage from './assets/images/rsz_5bluewater-sweden-ef5ex8azdny-unsplash.jpg';
import person1 from './assets/images/christian-gafenesch-UTLiotHKD1U-unsplash-transformed.jpeg';
import person2 from './assets/images/sergio-de-paula-c_GmwfHBDzk-unsplash-transformed (1).jpeg';
import facebookIcon from './assets/images/rsz_facebook.png';
import twitterIcon from './assets/images/rsz_twitter.png';
import instagramIcon from './assets/images/rsz_instagram.png';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import './App.css';

function App() {
  return (
    <body>
      <nav>
        <a href='/'>
        <img src={logo} alt="Best Bottle Logo" />
        </a> 
        <a href="/">Home</a>
        <a href="/bottle-guide">Bottle Guide</a>
        <a href="/personalized-quiz">Personalized Quiz</a>
      </nav>
      <main>
        <div className="hero">
          <h1>Best Bottle</h1>
          <p>Your guide to picking the best water bottle that matches your needs</p>
        </div>
        <div className="contentshowcase">
          <h1 id="whatwedo">What We Do</h1>
          <Paper elevation={3} className="showcasebox">
            <h3>Overview</h3>
            <p>Finding the perfect water bottle can be overwhelming with so many choices available. That’s why this site is here—to make your decision simple. We’ve researched and tested different bottles to bring you the best options for every need. No more scrolling through endless reviews or guessing which one is right for you. Everything you need is in one place.</p>
            <a href="/">Read More</a>
          </Paper>
          <Paper elevation={3} className="showcasebox">
            <h3>Bottle Guide</h3>
            <p>To help you find the right bottle, we’ve organized our guide into categories. Whether you need the best overall bottle, one with a straw, a budget-friendly option, or something built for athletes, we have a recommendation for you. Each category highlights the top choices with detailed information, so you can pick with confidence.</p>
            <a href="/">Read More</a>
            </Paper>
          <Paper elevation={3} className="showcasebox">
            <h3>Personalized Quiz</h3>
            <p>If you’re unsure where to start, try our personalized quiz! By answering a few quick questions about your lifestyle and preferences, we’ll match you with the best bottle for you. Whether you need something for workouts, travel, or daily hydration, our quiz takes the guesswork out of the decision.</p>
            <a href="/">Read More</a>
            </Paper>
        </div>
        <div className="imgandbutton">
          <img id="imgblue" src={blueImage} alt="Person holding Water Bottle" />
          <Paper className='imgbluetextbox' elevation={3}>
            <h2>Ready to find your perfect water bottle? <br /> Explore our top picks!</h2>
            <Button variant="contained">Bottle Guide</Button>
            </Paper>
        </div>
        <div className="reviews">
          <Paper className="reviewseach1">
            <h3>"This site made it so easy to find the perfect water bottle! The quiz matched me with one that keeps my water cold all day—I love it!"</h3>
            <div className="person">
              <img src={person1} alt="Woman Smiling" />
              <p>-Sarah Traffer</p>
            </div>
          </Paper>
          <Paper className="reviewseach2">
            <h3>"Instead of searching forever, I found the best water bottle in minutes! The quiz and recommendations were super helpful."</h3>
            <div className="person">
              <img src={person2} alt="Man Smiling" />
              <p>-Steven Banks</p>
            </div>
          </Paper>
        </div>
      </main>
      <footer>
        <img id="logoimg" src={logo} alt="Best Bottle Logo" />
        <a href="/">Home</a>
        <a href="/bottle-guide">Bottle Guide</a>
        <a href="/personalized-quiz">Personalized Quiz</a>
        <a href="/site-plan">Site Plan</a>
        <div className="social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img className="social-img" src={facebookIcon} alt="Facebook Icon" />
          </a>
          <a href="https://x.com" target="_blank" rel="noopener noreferrer">
            <img className="social-img" src={twitterIcon} alt="X Icon" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img className="social-img" src={instagramIcon} alt="Instagram Icon" />
          </a>
        </div>
      </footer>
    </body>
  );
}

export default App;
