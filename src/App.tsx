import { useState } from 'react';
import './App.css';
import TravelMap from './TravelMap';

const TABS = [
  { key: 'home', label: 'Home' },
  { key: 'blog', label: 'Blog' },
  { key: 'travel', label: 'Travel Map' },
];

function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="portfolio-container">
      <header>
        <h1>DINESH VIJAYAKUMAR</h1>
      </header>
      <nav className="tab-nav">
        {TABS.map(tab => (
          <button
            key={tab.key}
            className={`tab-btn${activeTab === tab.key ? ' active' : ''}`}
            onClick={() => setActiveTab(tab.key)}
            aria-selected={activeTab === tab.key}
            aria-controls={`tab-panel-${tab.key}`}
          >
            {tab.label}
          </button>
        ))}
      </nav>
      <main style={{ marginTop: '2rem' }}>
        {activeTab === 'home' && (
          <section>
            <h3>About Me</h3>
            <p>
              I am a software engineer with 14+ years of experience building scalable, reliable distributed systems for global organizations, specializing in e-commerce, supply chain, and cloud technologies. My expertise includes backend engineering, automation, and developer tooling, with a strong focus on software architecture and high-performance services. I am passionate about solving complex technical challenges, mentoring teams, and driving innovation. Outside of work, I enjoy traveling and exploring new cultures across multiple continents. I am also an avid trekker, with highlights including the Kilimanjaro trek in Africa.
            </p>
          </section>
        )}
        {activeTab === 'blog' && (
          <div className="blog-travel-center">
            <section style={{ width: '100%', maxWidth: 700 }}>
              <h3>Blog</h3>
              <p>Coming soon: Articles, tutorials, and insights.</p>
            </section>
          </div>
        )}
        {activeTab === 'travel' && (
          <div className="blog-travel-center">
            <section style={{ width: '100%', maxWidth: 700 }}>
              <h3>Travel Map</h3>
              <TravelMap />
            </section>
          </div>
        )}
      </main>
      <footer style={{ textAlign: 'center', marginTop: '2rem', fontSize: '1rem', display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
        <a href="https://www.linkedin.com/in/dineshvijaykumar/" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href="https://github.com/busybee1149" target="_blank" rel="noopener noreferrer">
          Github
        </a>
      </footer>
    </div>
  );
}

export default App;
