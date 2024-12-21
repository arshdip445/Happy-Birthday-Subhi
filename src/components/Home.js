import React from 'react';
import CountdownTimer from './CountdownTimer';

function Home() {
  return (
    <div className="home">
      <section className="hero-section">
        <div className="hero-content">
          <CountdownTimer /> {/* Insert Timer Here */}
        </div>
      </section>
    </div>
  );
}

export default Home;
