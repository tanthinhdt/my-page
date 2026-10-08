import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, FileText, ChevronRight, BookOpen, Award, Briefcase, GraduationCap, Sun, Moon, ExternalLink } from 'lucide-react';
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
            PORTFOLIO<span style={{ color: 'var(--accent-purple)' }}>.</span>
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
          style={{ minHeight: '90vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingTop: '7rem' }}
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="mb-3">
            <span className="tag">
              Developer & Researcher
            </span>
          </motion.div>
          
          <motion.h1 variants={itemVariants} style={{ fontSize: 'clamp(2.75rem, 6.5vw, 4.5rem)', lineHeight: 1.15, marginBottom: '1.25rem' }}>
            Designing intelligent tools & <br />
            <span className="text-gradient">shaping modern web tech.</span>
          </motion.h1>

          <motion.p variants={itemVariants} style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '640px', marginBottom: '2.5rem' }}>
            Hi, I'm Alex. I specialize in machine learning, human-computer interaction, and building high-performance scalable systems.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex gap-3 items-center">
            <a href="mailto:contact@example.com" className="btn-primary">
              <Mail size={18} />
              Get in Touch
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="icon-btn" aria-label="GitHub">
              <GithubIcon size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="icon-btn" aria-label="LinkedIn">
              <LinkedinIcon size={20} />
            </a>
            <a href="/resume.pdf" target="_blank" rel="noreferrer" className="icon-btn" aria-label="Resume">
              <FileText size={20} />
            </a>
          </motion.div>
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
              <h3 className="mb-1" style={{ fontSize: '1.25rem' }}>Senior AI Engineer</h3>
              <div className="mb-3 text-sm" style={{ fontWeight: 500, color: 'var(--text-primary)' }}>TechNova Innovations</div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                Leading a team of engineers developing multimodal AI models for real-time web applications. Improved model inference speed by 40% and reduced edge compute costs.
              </p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="glass-panel">
              <div className="flex items-center gap-2 mb-2">
                <span className="tag">2020 - 2023</span>
              </div>
              <h3 className="mb-1" style={{ fontSize: '1.25rem' }}>Research Assistant</h3>
              <div className="mb-3 text-sm" style={{ fontWeight: 500, color: 'var(--text-primary)' }}>University of Technology</div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                Conducted deep learning research focusing on natural language understanding and zero-shot architectures. Published 3 papers in top-tier peer-reviewed venues.
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
                title: "Attention Mechanisms in Edge Computing Environments",
                authors: "A. Researcher, J. Doe, S. Smith",
                venue: "International Conference on Machine Learning (ICML) 2023",
                link: "#"
              },
              {
                title: "Zero-shot Learning for Dynamic Web Interfaces",
                authors: "A. Researcher, M. Johnson",
                venue: "The Web Conference (WWW) 2022",
                link: "#"
              },
              {
                title: "Scalable Latency-aware Transformer Serving on Heterogeneous Hardware",
                authors: "A. Researcher, R. Williams",
                venue: "IEEE Transactions on Computers 2021",
                link: "#"
              }
            ].map((pub, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants} 
                className="glass-panel" 
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem', flexWrap: 'wrap' }}
              >
                <div style={{ flex: '1 1 300px' }}>
                  <h3 className="mb-1" style={{ fontSize: '1.15rem' }}>{pub.title}</h3>
                  <div className="text-sm mb-1">{pub.authors}</div>
                  <div className="text-sm" style={{ color: 'var(--accent-primary)', fontWeight: 500 }}>{pub.venue}</div>
                </div>
                <a 
                  href={pub.link} 
                  className="icon-btn" 
                  style={{ width: 'auto', padding: '0.5rem 1rem', gap: '0.4rem', fontSize: '0.875rem', fontWeight: 500 }}
                >
                  Paper <ExternalLink size={15} />
                </a>
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
                    <span className="tag">2018 - 2022</span>
                  </div>
                  <h3 className="mb-1" style={{ fontSize: '1.2rem' }}>Ph.D. in Computer Science</h3>
                  <div className="text-sm mb-2" style={{ fontWeight: 600, color: 'var(--text-primary)' }}>University of Technology</div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                    Dissertation: <em>"Efficient Transformer Architectures for Real-Time Systems"</em>
                  </p>
                </motion.div>
                
                <motion.div variants={itemVariants} className="glass-panel">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="tag">2014 - 2018</span>
                  </div>
                  <h3 className="mb-1" style={{ fontSize: '1.2rem' }}>B.S. in Software Engineering</h3>
                  <div className="text-sm mb-2" style={{ fontWeight: 600, color: 'var(--text-primary)' }}>State University</div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                    Graduated with Highest Honors. Dean's List all semesters.
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
                  <div className="text-sm mb-1" style={{ color: 'var(--accent-purple)', fontWeight: 600 }}>2023</div>
                  <h3 className="mb-1" style={{ fontSize: '1.15rem' }}>Best Paper Award</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                    Awarded at the International Conference on Machine Learning (ICML).
                  </p>
                </motion.div>
                
                <motion.div variants={itemVariants} className="glass-panel">
                  <div className="text-sm mb-1" style={{ color: 'var(--accent-purple)', fontWeight: 600 }}>2021</div>
                  <h3 className="mb-1" style={{ fontSize: '1.15rem' }}>Outstanding Graduate Research Fellowship</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                    National Science Foundation (NSF) research award.
                  </p>
                </motion.div>
                
                <motion.div variants={itemVariants} className="glass-panel">
                  <div className="text-sm mb-1" style={{ color: 'var(--accent-purple)', fontWeight: 600 }}>2019</div>
                  <h3 className="mb-1" style={{ fontSize: '1.15rem' }}>1st Place — Global Hackathon</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                    Built an accessible AI reading assistant for visually impaired users.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.section>
        
        {/* Footer */}
        <footer style={{ padding: '4rem 0 3rem', textAlign: 'center', color: 'var(--text-muted)', borderTop: '1px solid var(--glass-border)' }}>
          <p>© {new Date().getFullYear()} Alex Researcher. Built with React & Vite.</p>
        </footer>
      </main>
    </div>
  );
}

export default App;
