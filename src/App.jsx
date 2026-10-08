import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, FileText, ChevronRight, BookOpen, Award, Briefcase, GraduationCap, Sun, Moon, ExternalLink, MapPin, Globe, Sparkles } from 'lucide-react';
import portraitImg from './assets/portrait.png';
import './index.css';

const GithubIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  return (
    <div className="app-container">
      {/* Sticky Glass Navbar */}
      <nav className="navbar">
        <div className="container flex items-center" style={{ justifyContent: 'space-between' }}>
          <a href="#" style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.2rem', letterSpacing: '-0.02em', color: 'var(--text-primary)' }}>
            TAN THINH<span style={{ color: 'var(--accent-purple)' }}>.</span>
          </a>
          
          <div className="flex items-center gap-4">
            <div className="nav-links flex gap-2">
              <a href="#about">About</a>
              <a href="#experience">Experience</a>
              <a href="#publications">Publications</a>
              <a href="#awards">Awards</a>
            </div>

            {/* Light / Dark Mode Toggle */}
            <button 
              onClick={toggleTheme} 
              className="theme-toggle-btn"
              aria-label="Toggle theme"
              title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
          </div>
        </div>
      </nav>

      <main className="container">
        {/* Hero Section */}
        <motion.section 
          className="section" 
          style={{ minHeight: '90vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingTop: '7.5rem' }}
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="hero-wrapper">
            {/* Left Content */}
            <div style={{ flex: '1 1 500px' }}>
              <motion.div variants={itemVariants} className="flex items-center gap-2 mb-3" style={{ flexWrap: 'wrap' }}>
                <span className="tag">
                  <Globe size={13} style={{ marginRight: 5, verticalAlign: 'middle' }} /> Vietnam 🇻🇳
                </span>
                <span className="tag">Developer & Researcher</span>
              </motion.div>
              
              <motion.h1 variants={itemVariants} style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.2rem)', lineHeight: 1.15, marginBottom: '1rem' }}>
                Hi, I'm <br />
                <span className="text-gradient">Duong Tan Thinh</span>
              </motion.h1>

              {/* Name Details Badges */}
              <motion.div variants={itemVariants} className="name-alias-badges">
                <div className="alias-chip">
                  <span>English Name:</span> <strong>Evan</strong>
                </div>
                <div className="alias-chip">
                  <span>Korean Name:</span> <strong>양진성</strong>
                </div>
                <div className="alias-chip">
                  <MapPin size={13} style={{ color: 'var(--accent-primary)' }} />
                  <span>From:</span> <strong>Vietnam</strong>
                </div>
              </motion.div>

              <motion.p variants={itemVariants} style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', maxWidth: '580px', marginBottom: '2rem' }}>
                Passionate software developer and researcher exploring the frontiers of artificial intelligence, intelligent systems, and scalable modern web applications.
              </motion.p>
              
              <motion.div variants={itemVariants} className="flex gap-3 items-center" style={{ flexWrap: 'wrap' }}>
                <a href="mailto:tanthinh.dt@gmail.com" className="btn-primary">
                  <Mail size={18} />
                  Get in Touch
                </a>
                <a href="https://github.com/tanthinhdt" target="_blank" rel="noreferrer" className="icon-btn" aria-label="GitHub">
                  <GithubIcon size={20} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="icon-btn" aria-label="LinkedIn">
                  <LinkedinIcon size={20} />
                </a>
                <a href="#about" className="icon-btn" aria-label="Resume">
                  <FileText size={20} />
                </a>
              </motion.div>
            </div>

            {/* Right Portrait */}
            <motion.div 
              variants={itemVariants} 
              className="portrait-card"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <div className="portrait-glow"></div>
              <div className="portrait-image-wrapper">
                <img src={portraitImg} alt="Duong Tan Thinh (Evan / 양진성)" className="portrait-img" />
              </div>
              <div className="portrait-badge">
                <Sparkles size={14} style={{ color: 'var(--accent-purple)' }} />
                <span>Evan • 양진성</span>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Experience Section */}
        <motion.section 
          id="experience" 
          className="section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={containerVariants}
        >
          <motion.h2 variants={itemVariants} className="section-title">
            <Briefcase size={28} style={{ color: 'var(--accent-primary)' }}/> 
            Experience
          </motion.h2>
          
          <div className="grid">
            <motion.div variants={itemVariants} className="glass-panel">
              <div className="flex items-center gap-2 mb-2">
                <span className="tag">2023 - Present</span>
              </div>
              <h3 className="mb-1" style={{ fontSize: '1.25rem' }}>Software & AI Engineer</h3>
              <div className="mb-3 text-sm" style={{ fontWeight: 500, color: 'var(--text-primary)' }}>Research & Development</div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                Developing intelligent applications and machine learning workflows. Focused on high-efficiency model training, deployment, and intuitive modern interfaces.
              </p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="glass-panel">
              <div className="flex items-center gap-2 mb-2">
                <span className="tag">2021 - 2023</span>
              </div>
              <h3 className="mb-1" style={{ fontSize: '1.25rem' }}>Research Assistant</h3>
              <div className="mb-3 text-sm" style={{ fontWeight: 500, color: 'var(--text-primary)' }}>Computing & AI Laboratory</div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                Conducted investigations into computer vision, machine learning models, and system performance optimizations.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Publications Section */}
        <motion.section 
          id="publications" 
          className="section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={containerVariants}
        >
          <motion.h2 variants={itemVariants} className="section-title">
            <BookOpen size={28} style={{ color: 'var(--accent-primary)' }}/> 
            Publications
          </motion.h2>
          
          <div className="flex" style={{ flexDirection: 'column', gap: '1.25rem' }}>
            {[
              {
                title: "Vietnamese Automatic Speech Recognition Utilizing Audio and Visual Data",
                authors: "Tan-Thinh Duong, Van-Minh Nguyen, Hong-Duyen-Khanh Pham, Thanh-Hai Le",
                venue: "2025 International Conference on Multimedia Analysis and Pattern Recognition (MAPR)",
                year: "2025",
                type: "IEEE Conference",
                doi: "10.1109/MAPR67746.2025.11133884",
                link: "https://ieeexplore.ieee.org/abstract/document/11133884/"
              },
              {
                title: "Medicinal plant recognition based on Vision Transformer and BEiT",
                authors: "Duy Tran Nguyen Nhut, Thinh Duong Tan, Trung Nguyen Quoc, Vinh Truong Hoang",
                venue: "Procedia Computer Science, Vol. 234, pp. 188–195 (Elsevier)",
                year: "2024",
                type: "Elsevier Journal",
                doi: "10.1016/j.procs.2024.02.165",
                link: "https://www.sciencedirect.com/science/article/pii/S187705092400351X"
              }
            ].map((pub, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants} 
                className="glass-panel" 
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem', flexWrap: 'wrap' }}
              >
                <div style={{ flex: '1 1 340px' }}>
                  <div className="flex items-center gap-2 mb-2" style={{ flexWrap: 'wrap' }}>
                    <span className="tag">{pub.year}</span>
                    <span className="tag" style={{ background: 'rgba(14, 165, 233, 0.08)', color: 'var(--accent-cyan)', borderColor: 'rgba(14, 165, 233, 0.2)' }}>
                      {pub.type}
                    </span>
                  </div>
                  <h3 className="mb-2" style={{ fontSize: '1.2rem', lineHeight: 1.4 }}>
                    <a href={pub.link} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-primary)' }}>
                      {pub.title}
                    </a>
                  </h3>
                  <div className="text-sm mb-1" style={{ color: 'var(--text-secondary)' }}>{pub.authors}</div>
                  <div className="text-sm" style={{ color: 'var(--accent-primary)', fontWeight: 500 }}>{pub.venue}</div>
                  <div className="text-sm mt-1" style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>DOI: {pub.doi}</div>
                </div>
                <div className="flex gap-2">
                  <a 
                    href={pub.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-primary" 
                    style={{ padding: '0.6rem 1.2rem', fontSize: '0.875rem' }}
                  >
                    View Paper <ExternalLink size={15} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Education & Awards Section */}
        <motion.section 
          id="about" 
          className="section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={containerVariants}
        >
          <div className="grid">
            {/* Education */}
            <div>
              <motion.h2 variants={itemVariants} className="section-title">
                <GraduationCap size={28} style={{ color: 'var(--accent-primary)' }}/>
                Education
              </motion.h2>
              <div className="flex" style={{ flexDirection: 'column', gap: '1.25rem' }}>
                <motion.div variants={itemVariants} className="glass-panel">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="tag">2020 - Present</span>
                  </div>
                  <h3 className="mb-1" style={{ fontSize: '1.2rem' }}>Computer Science & Engineering</h3>
                  <div className="text-sm mb-2" style={{ fontWeight: 600, color: 'var(--text-primary)' }}>Higher Education</div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                    Specializing in Artificial Intelligence, Software Engineering, and High-Performance Computing.
                  </p>
                </motion.div>
              </div>
            </div>
            
            {/* Awards */}
            <div id="awards">
              <motion.h2 variants={itemVariants} className="section-title">
                <Award size={28} style={{ color: 'var(--accent-purple)' }}/> 
                Awards & Honors
              </motion.h2>
              <div className="flex" style={{ flexDirection: 'column', gap: '1.25rem' }}>
                <motion.div variants={itemVariants} className="glass-panel">
                  <div className="text-sm mb-1" style={{ color: 'var(--accent-purple)', fontWeight: 600 }}>Honors</div>
                  <h3 className="mb-1" style={{ fontSize: '1.15rem' }}>Academic Excellence Award</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                    Recognized for distinguished academic achievements in Computer Science and Engineering.
                  </p>
                </motion.div>
                
                <motion.div variants={itemVariants} className="glass-panel">
                  <div className="text-sm mb-1" style={{ color: 'var(--accent-purple)', fontWeight: 600 }}>Competition</div>
                  <h3 className="mb-1" style={{ fontSize: '1.15rem' }}>Tech Hackathon Award</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                    Developed innovative AI-driven software solutions in competitive programming and hackathon challenges.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.section>
        
        {/* Footer */}
        <footer style={{ padding: '4rem 0 3rem', textAlign: 'center', color: 'var(--text-muted)', borderTop: '1px solid var(--glass-border)' }}>
          <p>© {new Date().getFullYear()} Duong Tan Thinh (Evan / 양진성). All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}

export default App;
