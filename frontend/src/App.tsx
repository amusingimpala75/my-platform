import './App.css'

import { useState } from 'react'

type Project = {
  title: string
  description: string
  tags: string[]
  link: string
}

type ReportKind = "bug" | "feature";
type Priority = 'new' | 'urgent' | 'high' | 'medium' | 'low';

type Report = {
  id: string;
  text: string;
  kind: ReportKind;
  priority: Priority;
}

// Replace these placeholders with your own details before publishing.
const projects: Project[] = [
  {
    title: 'My Platform',
    description:
      'My personal production platform: a full-stack portfolio application I am building and operating throughout my senior capstone.',
    tags: ['React', 'TypeScript', 'Cloudflare Pages'],
    link: 'https://github.com/amusingimpala75/my-platform',
  },
]

function ArrowUpRight() {
  return <span aria-hidden="true">↗</span>
}

function App() {
  const [reports, setReports] = useState<Report[]>([]);
  const [newReportText, setNewReportText] = useState('');
  const [newReportKind, setNewReportKind] = useState<ReportKind>('bug');
  const [newReportPriority, setNewReportPriority] = useState<Priority>('low');

  function addReport() {
    const text = newReportText.trim();
    if (text.length === 0) {
      return;
    }

    const newReport: Report = {
      id: crypto.randomUUID(),
      text: text,
      kind: newReportKind,
      priority: newReportPriority,
    };

    setReports([...reports, newReport]);
    setNewReportText('');
    setNewReportKind('bug');
    setNewReportPriority('low');
  }

  return (
    <main>
      <nav className="site-nav" aria-label="Primary navigation">
        <a className="wordmark" href="#top" aria-label="Luke Murray home">
          LM<span>.</span>
        </a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#about">About</a>
        </div>
      </nav>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <p className="eyebrow">Computer science student · building for people</p>
        <h1 id="hero-title">
          Hi, I’m Luke.
          <br />
          I turn curious ideas into thoughtful digital experiences.
        </h1>
        <p className="hero-copy">
          I’m a computer science student who enjoys building clear, useful web
          products and learning how the systems behind them work.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#work">
            See my work <ArrowUpRight />
          </a>
        </div>
      </section>

      <section className="work-section" id="work" aria-labelledby="work-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2 id="work-title">Projects I’m proud to share.</h2>
          </div>
          <p className="section-number">01—01</p>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <a
              className="project-card"
              href={project.link}
              key={project.title}
              target="_blank"
              rel="noreferrer"
            >
              <div className="project-visual" aria-hidden="true">
                <div className="window-bar">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="visual-content">
                  <span className="visual-label">{project.title}</span>
                  <div className="visual-lines">
                    <i />
                    <i />
                    <i />
                  </div>
                </div>
              </div>
              <div className="project-details">
                <div className="project-title-row">
                  <h3>{project.title}</h3>
                  <ArrowUpRight />
                </div>
                <p>{project.description}</p>
                <ul className="tag-list" aria-label={`${project.title} technologies`}>
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="about-section" id="about" aria-labelledby="about-title">
        <div className="about-mark" aria-hidden="true">✦</div>
        <div>
          <p className="eyebrow">A little about me</p>
          <h2 id="about-title">Equal parts analytical and imaginative.</h2>
          <p>
            I’m currently learning React, TypeScript, and the habits that make
            software dependable. Outside of class, I like exploring design,
            contributing to small projects, and turning “what if?” into a first
            version.
          </p>

        </div>
      </section>

      <section className="report-board">
        <h2>Bugs & Feature Requests</h2>
        <input
          type="text"
          value={newReportText}
          onChange={(event) => setNewReportText(event.target.value)}
          placeholder="Describe a bug..."
          aria-label="New bug report"
        />

        <select
          name='kind'
          value={newReportKind}
          onChange={e => setNewReportKind(e.target.value as ReportKind)}
        >
          <option value='feature'>Feature</option>
          <option value='bug'>Bug</option>
        </select>

        <select
          name='priority'
          value={newReportPriority}
          onChange={e => setNewReportPriority(e.target.value as Priority)}
        >
          <option value='new'>New</option>
          <option value='urgent'>Urgent</option>
          <option value='high'>High</option>
          <option value='medium'>Medium</option>
          <option value='low'>Low</option>
        </select>

        <button type="button" onClick={addReport}>
          Add {newReportKind[0].toUpperCase() + newReportKind.slice(1)}
        </button>

        <ul>
          {reports.map(report => (
            <li key={report.id}>
              {report.text} ({report.kind}, {report.priority})
            </li>
          ))}
        </ul>
      </section>

      <footer>
        <p>© 2026 Luke Murray. Built with care and curiosity.</p>
        <div>
          <a href="https://github.com/amusingimpala75" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </footer>
    </main>
  )
}

export default App
