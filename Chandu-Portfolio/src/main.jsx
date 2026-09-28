import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const A = ({href, children, className=''}) => (
  <a className={className} href={href} target={href?.startsWith('http') ? '_blank' : undefined} rel="noreferrer">{children}</a>
);

const Icon = ({children}) => <span className="icon" aria-hidden="true">{children}</span>;

function App() {
  const [active, setActive] = useState('home');
  const [menu, setMenu] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const ids = ['home','about','skills','projects','experience','education','contact'];
      const y = window.scrollY + 180;
      let current = 'home';
      ids.forEach(id => {
        const el = document.getElementById(id);
        if (el && y >= el.offsetTop) current = id;
      });
      setActive(current);
    };
    window.addEventListener('scroll', onScroll, {passive:true});
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const nav = ['home','about','skills','projects','experience','education','contact'];

  const scrollTo = id => {
    document.getElementById(id)?.scrollIntoView({behavior:'smooth'});
    setMenu(false);
  };

  const submit = e => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3500);
  };

  return (
    <div className="app">
      <div className="noise" />
      <div className="grid-bg" />
      <header className="nav">
        <button className="brand" onClick={() => scrollTo('home')}>
          <span className="brand-mark">&lt;/&gt;</span><span>Chandu</span>
        </button>
        <button className="menu-btn" onClick={() => setMenu(!menu)} aria-label="Toggle navigation">☰</button>
        <nav className={menu ? 'nav-links open' : 'nav-links'}>
          {nav.map(n => <button key={n} className={active===n?'active':''} onClick={() => scrollTo(n)}>{n === 'home' ? 'Home' : n[0].toUpperCase()+n.slice(1)}</button>)}
        </nav>
        <A href="/Chandu-Resume.pdf" className="resume-btn">↓&nbsp; Download Resume</A>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-copy reveal">
            <div className="eyebrow">HELLO, I'M <span>✦</span></div>
            <h1><span>Mogilicharla</span> <em>Chandu</em></h1>
            <div className="roles">
              <b>AI Prompt Engineer</b><i/> AI/ML Enthusiast <i/> Software Developer <i/> Web Developer
            </div>
            <p className="hero-text">I build intelligent solutions with AI, modern web technologies and creative development — turning ideas into practical digital experiences.</p>
            <div className="actions">
              <button className="primary" onClick={() => scrollTo('projects')}>View My Projects <span>→</span></button>
              <button className="secondary" onClick={() => scrollTo('contact')}>Contact Me <span>↗</span></button>
            </div>
            <div className="socials">
              <A href="https://github.com/Saichandu63">GitHub</A>
              <A href="https://www.linkedin.com/in/mogilicharla-chandu-887a48386">LinkedIn</A>
              <A href="https://www.youtube.com/">YouTube</A>
              <span>⌖ Hyderabad, Telangana</span>
            </div>
          </div>
          <div className="hero-visual reveal">
            <div className="orbit orbit1"/><div className="orbit orbit2"/><div className="scan"/>
            <div className="portrait-wrap"><img src="/chandu.jpg" alt="Mogilicharla Chandu" /></div>
            <div className="floating-chip chip-a">⌁ AI + LLM</div>
            <div className="floating-chip chip-b">Prompt → Solution</div>
            <div className="hero-quote">CODE<br/><strong>BUILD</strong><br/>INNOVATE</div>
          </div>
        </section>

        <section id="about" className="section">
          <SectionTitle n="01" title="About Me" />
          <div className="about-grid">
            <div className="panel about-copy">
              <p>I am <strong>Mogilicharla Chandu</strong>, currently pursuing <strong>B.Sc. (MSD – AI & ML)</strong> at New Siddhartha Degree College, Hyderabad. I am passionate about Artificial Intelligence, Prompt Engineering, Web Development and building real-world solutions.</p>
              <p>I enjoy learning new technologies, solving problems and creating impactful projects. My goal is to grow as a software developer and contribute to innovative AI-driven products.</p>
              <div className="mini-stats">
                <div><b>B.Sc. (MSD – AI & ML)</b><small>Current Education</small></div>
                <div><b>AI Prompt Engineer</b><small>LLMs & AI workflows</small></div>
                <div><b>Hyderabad</b><small>Telangana, India</small></div>
              </div>
            </div>
            <div className="ai-card panel">
              <div className="brain">◎</div>
              <span>TURNING IDEAS</span>
              <strong>INTO REAL<br/>AI SOLUTIONS</strong>
              <div className="ai-lines"/>
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <SectionTitle n="02" title="Technical Skills" />
          <div className="skills-grid">
            {[
              ['⌘','Programming',['Python','Java','C','C++']],
              ['◈','Web Development',['HTML','CSS','JavaScript','React']],
              ['✦','AI / ML',['Prompt Engineering','LLMs','AI Fundamentals','Machine Learning']],
              ['◉','Tools & Platforms',['Git','GitHub','VS Code']],
              ['◌','Web Development',['Responsive UI','UI Development','Deployment']],
              ['★','Core Strengths',['Problem Solving','Communication','Team Collaboration']]
            ].map(([ic,tags,items]) => <div className="skill-card" key={tags}><div className="skill-icon">{ic}</div><h3>{tags}</h3><div className="pills">{items.map(x=><span key={x}>{x}</span>)}</div></div>)}
          </div>
        </section>

        <section id="projects" className="section">
          <SectionTitle n="03" title="Featured Projects" />
          <div className="projects-grid">
            <Project title="SREE BHANU INTERIOR DESIGNS" sub="Interior Design Website" tech="React • HTML • CSS • JavaScript" image="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80" />
            <Project title="LEAF DISEASE DETECTION" sub="AI + ESP32 Smart Agriculture Concept" tech="Python • ESP32 • OpenCV • ML" image="https://images.unsplash.com/photo-1523742810599-4a50f8a2c4e9?auto=format&fit=crop&w=900&q=80" />
            <Project title="TEJHAN STUDIO" sub="Web & AI Automation Services" tech="React • Node.js • AI • Automation" image="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=80" />
            <Project title="PERSONAL PORTFOLIO" sub="Modern Portfolio with React" tech="React • CSS • Motion" image="https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?auto=format&fit=crop&w=900&q=80" />
          </div>
        </section>

        <section id="experience" className="section">
          <SectionTitle n="04" title="Experience & AI Work" />
          <div className="experience-grid">
            <div className="timeline panel">
              <div className="timeline-item"><span>2026</span><div><h3>Embedded Systems Intern</h3><p>Jyesta Corporate Entity · 3 months</p><small>Hands-on exposure to embedded systems concepts, hardware-oriented development and technical project workflows.</small></div></div>
              <div className="timeline-item"><span>NOW</span><div><h3>AI Prompt Engineering</h3><p>AI / LLM Focus</p><small>Designing and refining prompts and exploring practical AI workflows for better outputs.</small></div></div>
            </div>
            <div className="ai-work-grid">
              {[
                ['✦','Prompt Engineering','Designing effective prompts for better AI outputs.'],
                ['◉','AI Automation','Exploring AI-assisted workflows and automation.'],
                ['◎','LLM Exploration','Working with modern generative AI concepts.'],
                ['▶','Tech Content','Technology videos, reviews and updates.']
              ].map(([i,t,d])=><div className="work-card" key={t}><div>{i}</div><h3>{t}</h3><p>{d}</p></div>)}
            </div>
          </div>
        </section>

        <section id="education" className="section">
          <SectionTitle n="05" title="Education & Achievements" />
          <div className="edu-grid">
            <div className="panel edu-card">
              <div className="edu-row"><b>B.Sc. (MSD – AI & ML)</b><span>CURRENT</span><small>New Siddhartha Degree College · Hyderabad</small></div>
              <div className="edu-row"><b>Intermediate</b><span>2023 – 2025</span><small>Score: 658</small></div>
              <div className="edu-row"><b>SSC</b><span>2022 – 2023</span><small>GPA: 8.3</small></div>
            </div>
            <div className="panel achievements">
              <div>🏆 <b>Embedded Systems Internship</b><small>3-month practical experience</small></div>
              <div>✦ <b>Embedded System Certification</b><small>Jyesta Corporate Entity · 2026</small></div>
              <div>⚡ <b>Hackathon Participation</b><small>Building and presenting technology projects</small></div>
              <div>▶ <b>Tech Content Creator</b><small>YouTube / Instagram · CHANDUSPEAKS</small></div>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <SectionTitle n="06" title="Let's Build Something Amazing" />
          <div className="contact-grid">
            <div className="contact-copy">
              <p>Have a project idea, collaboration opportunity, or want to connect? Let's talk.</p>
              <A href="mailto:mogilicharlachandu99@gmail.com" className="primary inline">Get In Touch →</A>
              <div className="contact-details">
                <span>✉ mogilicharlachandu99@gmail.com</span>
                <span>☎ +91 79957 56407</span>
                <span>⌖ Hyderabad, Telangana</span>
              </div>
            </div>
            <form className="panel contact-form" onSubmit={submit}>
              <input required placeholder="Your Name" />
              <input required type="email" placeholder="Your Email" />
              <input placeholder="Subject" />
              <textarea required rows="5" placeholder="Your Message"/>
              <button className="primary" type="submit">{sent ? 'Message Ready ✓' : 'Send Message →'}</button>
              {sent && <small className="form-note">Your email client can be used to send the message.</small>}
            </form>
          </div>
        </section>
      </main>

      <footer>
        <b><span className="brand-mark">&lt;/&gt;</span> Mogilicharla Chandu</b>
        <span>Code • Create • Innovate • Grow</span>
        <div><A href="https://github.com/Saichandu63">GitHub</A> · <A href="https://www.linkedin.com/in/mogilicharla-chandu-887a48386">LinkedIn</A></div>
      </footer>
    </div>
  );
}

function SectionTitle({n,title}) {
  return <div className="section-title"><span>{n}</span><h2>{title}</h2><i/></div>
}

function Project({title,sub,tech,image}) {
  return <article className="project-card">
    <div className="project-image"><img src={image} alt="" loading="lazy"/><span>FEATURED</span></div>
    <div className="project-body"><h3>{title}</h3><p>{sub}</p><small>{tech}</small><div className="project-actions"><button>View Details →</button><A href="https://github.com/Saichandu63">GitHub ↗</A></div></div>
  </article>
}

createRoot(document.getElementById('root')).render(<App />);
