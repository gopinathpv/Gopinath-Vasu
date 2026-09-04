import React, { useMemo, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls, Sphere, Line, Text } from '@react-three/drei';
import { ArrowDown, ArrowUpRight, BrainCircuit, Cloud, Code2, Database, Github, Linkedin, Mail, Menu, X, Zap } from 'lucide-react';
import './styles.css';

const experience = [
  { company: 'Wells Fargo', role: 'Senior / Lead Software Engineer', period: '2023 — Present', tag: 'AI • Micro Frontends', bullets: ['AI Smart Assist supporting 4,000+ agents and reducing resolution time by 25%.', 'Built scalable React, TypeScript and Node.js experiences across financial workflows.', 'Designed micro-frontend experiences with resilient service integrations.'] },
  { company: 'Goldman Sachs', role: 'Senior Software Engineer', period: '2021 — 2026', tag: 'Distributed Systems', bullets: ['Built cross-border transaction workflows handling 5,000+ transactions per day.', 'Worked across React, Node.js, REST APIs, AWS and enterprise financial platforms.', 'Improved reliability, performance and developer experience through reusable architecture.'] },
  { company: 'Aperia Technologies', role: 'Software Engineer', period: '2021', tag: 'Connected Systems', bullets: ['Developed production web experiences and services for connected-vehicle technology.'] },
  { company: 'Infosys', role: 'Software Engineer', period: '2020 — 2021', tag: 'Enterprise Web', bullets: ['Delivered responsive applications, APIs, testing and CI/CD in Agile teams.'] },
  { company: 'IBM', role: 'Software Engineer', period: '2015 — 2017', tag: 'Enterprise Engineering', bullets: ['Built enterprise applications and developed a foundation in scalable software engineering.'] }
];

const skills = ['React', 'TypeScript', 'JavaScript', 'Node.js', 'Next.js', 'AWS', 'REST APIs', 'GraphQL', 'Micro Frontends', 'Module Federation', 'Python', 'PostgreSQL', 'Docker', 'Jest', 'Cypress', 'CI/CD'];

function CoreScene() {
  const group = useRef();
  const points = useMemo(() => Array.from({ length: 12 }, (_, i) => {
    const a = (i / 12) * Math.PI * 2;
    return [Math.cos(a) * 2.15, Math.sin(a * 2) * 0.65, Math.sin(a) * 2.15];
  }), []);
  useFrame((_, delta) => { if (group.current) group.current.rotation.y += delta * 0.14; });
  return (
    <group ref={group} rotation={[0.2, 0, 0.2]}>
      <Float speed={1.5} rotationIntensity={0.25} floatIntensity={0.35}>
        <Sphere args={[0.82, 32, 32]}>
          <meshStandardMaterial color="#74a7ff" emissive="#285cff" emissiveIntensity={1.7} metalness={0.75} roughness={0.2} />
        </Sphere>
        <Sphere args={[1.16, 32, 32]}>
          <meshBasicMaterial color="#77a9ff" transparent opacity={0.08} wireframe />
        </Sphere>
        {points.map((p, i) => <Sphere key={i} position={p} args={[0.09, 16, 16]}><meshStandardMaterial color="#b9d4ff" emissive="#4b80ff" emissiveIntensity={2} /></Sphere>)}
        {points.map((p, i) => <Line key={'l'+i} points={[[0,0,0], p]} color="#5286ff" transparent opacity={0.34} lineWidth={1} />)}
        <Text position={[0, -1.55, 0]} fontSize={0.19} color="#a9c5ff" anchorX="center" letterSpacing={0.08}>ENGINEERING CORE</Text>
      </Float>
    </group>
  );
}

function App() {
  const [open, setOpen] = React.useState(false);
  const scrollTo = id => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); setOpen(false); };
  return (
    <div className="app">
      <header className="nav">
        <button className="brand" onClick={() => scrollTo('home')}><span>GPV</span><small>ENGINEERING</small></button>
        <nav className={open ? 'navlinks open' : 'navlinks'}>{['experience','architecture','skills','about'].map(id => <button key={id} onClick={() => scrollTo(id)}>{id}</button>)}<a href="https://github.com/gopinathpv/Gopi-Portfolio" target="_blank" rel="noreferrer">github</a></nav>
        <button className="mobile" onClick={() => setOpen(!open)} aria-label="menu">{open ? <X /> : <Menu />}</button>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-copy">
            <div className="eyebrow"><span className="pulse" /> AVAILABLE FOR SENIOR ENGINEERING ROLES</div>
            <h1>Gopinath<br /><em>Polasani Vasu</em></h1>
            <p className="lead">Senior Full Stack Engineer building scalable interfaces, distributed systems and AI-powered experiences.</p>
            <div className="hero-actions"><button className="primary" onClick={() => scrollTo('experience')}>Explore my work <ArrowDown size={17} /></button><a className="secondary" href="mailto:gopinpv3@gmail.com">Let's connect <ArrowUpRight size={17} /></a></div>
            <div className="hero-meta"><span>10+ years</span><span>React • TypeScript • Node</span><span>AWS • AI • Architecture</span></div>
          </div>
          <div className="scene"><Canvas camera={{ position: [0, 0.3, 5.6], fov: 42 }} dpr={[1, 1.7]}><ambientLight intensity={0.55} /><pointLight position={[3,3,4]} intensity={18} color="#6b9cff" /><pointLight position={[-3,-2,2]} intensity={8} color="#7b5cff" /><CoreScene /><OrbitControls enableZoom={false} enablePan={false} autoRotate={false} /></Canvas></div>
          <div className="scroll-hint"><ArrowDown size={15} /> scroll to enter</div>
        </section>

        <section id="experience" className="section experience">
          <div className="section-head"><div><span className="kicker">01 / EXPERIENCE</span><h2>Systems I've helped build.</h2></div><p>Enterprise software, financial platforms and customer-facing products — with an emphasis on measurable impact.</p></div>
          <div className="timeline">{experience.map((job, i) => <article className="job" key={job.company}><div className="job-index">0{i+1}</div><div className="job-main"><div className="job-top"><div><h3>{job.company}</h3><p>{job.role}</p></div><span>{job.period}</span></div><div className="tag">{job.tag}</div><ul>{job.bullets.map(b => <li key={b}>{b}</li>)}</ul></div></article>)}</div>
        </section>

        <section id="architecture" className="section architecture">
          <div className="section-head"><div><span className="kicker">02 / ARCHITECTURE LAB</span><h2>From interface to system.</h2></div><p>A visual snapshot of the engineering patterns behind the portfolio: modular frontends, APIs, cloud services and data.</p></div>
          <div className="arch-card">
            <div className="arch-flow"><div className="arch-node hot"><Code2 /><strong>React / TypeScript</strong><small>Experience layer</small></div><div className="connector" /><div className="arch-node"><Zap /><strong>Micro Frontends</strong><small>Module Federation</small></div><div className="connector" /><div className="arch-node"><BrainCircuit /><strong>Node.js / APIs</strong><small>Services & workflows</small></div><div className="connector" /><div className="arch-node"><Cloud /><strong>AWS</strong><small>Cloud infrastructure</small></div><div className="connector" /><div className="arch-node"><Database /><strong>Data</strong><small>Reliable persistence</small></div></div>
            <div className="arch-caption"><span>ARCHITECTURE PRINCIPLE</span><strong>Keep complexity behind clean boundaries.</strong><p>Design independently deployable experiences, resilient service contracts and reusable components so teams can move quickly without sacrificing reliability.</p></div>
          </div>
        </section>

        <section id="skills" className="section skills"><div className="section-head"><div><span className="kicker">03 / TOOLBOX</span><h2>Technologies I work with.</h2></div></div><div className="skill-grid">{skills.map((s,i) => <div className="skill" key={s}><span>{String(i+1).padStart(2,'0')}</span><strong>{s}</strong></div>)}</div></section>

        <section id="about" className="section impact"><div className="impact-copy"><span className="kicker">04 / IMPACT</span><h2>Engineering with outcomes in mind.</h2><p>The best systems are not measured by how complicated they are. They're measured by the people and businesses they help.</p><a href="mailto:gopinpv3@gmail.com">Start a conversation <ArrowUpRight size={17} /></a></div><div className="metrics"><div><strong>4,000+</strong><span>agents supported</span></div><div><strong>25%</strong><span>resolution-time reduction</span></div><div><strong>5,000+</strong><span>transactions / day</span></div><div><strong>10+</strong><span>years engineering</span></div></div></section>

        <footer><div><strong>GPV</strong><span>Senior Full Stack Engineer</span></div><div className="social"><a href="https://github.com/gopinathpv/Gopi-Portfolio" target="_blank" rel="noreferrer"><Github size={18} /></a><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><Linkedin size={18} /></a><a href="mailto:gopinpv3@gmail.com"><Mail size={18} /></a></div><small>© 2026 Gopinath Polasani Vasu</small></footer>
      </main>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
