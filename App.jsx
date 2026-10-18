import {
  Mail,
  Code2,
  FolderCode,
  ArrowUpRight,
} from 'lucide-react'

import profileImage from './assets/chaweisan.jpg'

const profile = {
  name: 'Chaw Ei San',
  role: 'Final Year Computer Science Student',
  university: 'University of Computer Studies, Mandalay',
  introduction:
    'I am a final-year Computer Science student interested in software development and web technologies. I am improving my programming skills through university studies and practical projects, with the goal of becoming a skilled software developer.',
  email: 'chaweisan2860@gmail.com',
  github: 'https://github.com/chaweisan2860',
}

const skills = [
  'HTML', 'CSS', 'JavaScript', 'React', 'Bootstrap',
  'C++', 'Java', 'MySQL', 'PHP', 'Python',
]

const projects = [
  {
    title: 'E-Wallet Payment System',
    description:
      'A sample project concept for managing a digital wallet, transferring coins, and viewing transaction history.',
    tags: ['Java / OOD', 'Wallet', 'Transactions'],
  },
  {
    title: 'Student Management System',
    description:
      'A student system concept for organizing student profiles, course information, and assignment records.',
    tags: ['Database', 'MySQL', 'CRUD'],
  },
  {
    title: 'Personal Portfolio Website',
    description:
      'A responsive website introducing my education, technical skills, and project work.',
    tags: ['React', 'CSS','html'],
  },
]

function Navbar() {
  return (
    <nav className="navbar">
      <a className="brand" href="#home">
        Chaw Ei San<span>.</span>
      </a>
      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <header className="hero section" id="home">
      <div className="hero-copy">
        <p className="eyebrow">HELLO, WELCOME TO MY PORTFOLIO</p>
        <h1>
          Hi, I’m <span>{profile.name}</span>
        </h1>
        <h2>{profile.role}</h2>
        <p className="university">{profile.university}</p>
        <p className="intro">{profile.introduction}</p>
        <div className="hero-actions">
          <a className="button primary" href="#projects">
            Explore my projects <ArrowUpRight size={17} />
          </a>
          <a className="button secondary" href="#contact">
            Contact me
          </a>
        </div>
      </div>

      <div className="hero-art">
        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />

       <div className="avatar-card">
       <img
    className="profile-photo"
    src={profileImage}
    alt="Chaw Ei San"
  />
  <p>LEARN · BUILD · GROW</p>
  <strong>{profile.name}</strong>
  <span>Computer Science</span>
</div>

        <span className="sparkle sparkle-one">✦</span>
        <span className="sparkle sparkle-two">✧</span>
      </div>
    </header>
  )
}

function About() {
  return (
    <section className="section content-section" id="about">
      <div className="section-heading">
        <p className="eyebrow">A LITTLE ABOUT ME</p>
        <h2>
          About <span>Me</span>
        </h2>
      </div>
      <div className="about-card">
        <div className="about-icon">
          <Code2 size={28} />
        </div>
        <div>
          <h3>My Background</h3>
          <p>
            My name is Chaw Ei San, and I am a Computer Science student at the University of Computer Studies, Mandalay. I have learned theoretical concepts through my university studies, and I am continuously working to improve my knowledge and practical skills. I am interested in software development and web technologies, and I am eager to keep learning, gain hands-on experience, and grow as a software developer.
          </p>
        </div>
      </div>
    </section>
  )
}function Skills() {
  return (
    <section className="section content-section" id="skills">
      <div className="section-heading">
        <p className="eyebrow">TECHNOLOGIES I AM LEARNING</p>
        <h2>
          My <span>Skills</span>
        </h2>
      </div>
      <div className="skills-list">
        {skills.map((skill) => (
          <span className="skill-pill" key={skill}>
            <Code2 size={16} />
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section className="section content-section" id="projects">
      <div className="section-heading">
        <p className="eyebrow">PROJECTS</p>
        <h2>
          University <span>Projects</span>
        </h2>
        <p className="section-note">
          
        </p>
      </div>
      <div className="project-grid">
        {projects.map((project, index) => (
          <article className="project-card" key={project.title}>
            <div className="project-top">
              <div className="project-icon">
                <FolderCode size={24} />
              </div>
              <span className="project-number">
                {String(index + 1).padStart(2, '0')}
              </span>
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tag-list">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section className="section content-section" id="contact">
      <div className="contact-card">
        <div>
          <p className="eyebrow">LET’S CONNECT</p>
          <h2>
            Contact <span>Me</span>
          </h2>
          <p>
            Thank you for visiting my portfolio. Feel free to contact me.
          </p>
        </div>
        <div className="contact-links">
          <a href={'mailto:${profile.email}'}>
            <Mail size={18} />
            {profile.email}
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer">
            <Code2 size={18} />
            GitHub Profile
            <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="footer">
        © {new Date().getFullYear()} Chaw Ei San. Built with React.
      </footer>
    </>
  )
}