export const projects = [
  {
    id: 'smart-assist',
    number: '01',
    title: 'AI Smart Assist',
    company: 'Wells Fargo',
    category: 'AI • Contact Center',
    summary: 'Integrated an AI-powered Smart Assist experience into a high-volume contact center application to surface contextual knowledge summaries for agents.',
    impact: ['4,000+ agents supported', '25% resolution-time reduction'],
    stack: ['React', 'TypeScript', 'Node.js', 'API Gateway', 'Micro Frontends'],
    architecture: ['Agent Experience', 'Micro Frontend', 'API Gateway', 'Node.js Services', 'Knowledge Context'],
    challenge: 'Deliver contextual AI assistance inside a production contact-center workflow without slowing agents down or coupling the experience to one line of business.',
    solution: 'Used modular frontend boundaries and service integrations so Smart Assist could fit into the existing agent workflow while remaining independently evolvable.'
  },
  {
    id: 'contact-center',
    number: '02',
    title: 'Next-Generation Contact Center',
    company: 'Wells Fargo',
    category: 'Micro Frontends • Distributed Systems',
    summary: 'Architected the foundation and initial React/TypeScript POC for a next-generation contact center platform integrating Five9, customer data and department-specific workflows.',
    impact: ['5 micro-frontends', '6 lines of business'],
    stack: ['React', 'TypeScript', 'Redux', 'Node.js', 'REST', 'AWS', 'Module Federation'],
    architecture: ['Shell', 'Federated Frontends', 'Five9 Integration', 'Customer Data Services', 'AWS'],
    challenge: 'Support multiple lines of business and real-time agent workflows while allowing teams to release features independently.',
    solution: 'Established Module Federation-based micro-frontends and distributed application patterns with clear integration boundaries across frontend and backend services.'
  },
  {
    id: 'cross-border',
    number: '03',
    title: 'Cross-Border Transactions',
    company: 'Goldman Sachs',
    category: 'FinTech • Performance',
    summary: 'Built a complex cross-border transaction workflow with scalable forms, schema-based validation and performance-focused rendering for large financial datasets.',
    impact: ['5,000+ transactions/day', '~20% lower interaction latency', '~33% faster CI test execution'],
    stack: ['React', 'Next.js', 'TypeScript', 'React Hook Form', 'AG Grid', 'REST'],
    architecture: ['Transaction UI', 'Form Validation', 'API Layer', 'Financial Services', 'Data'],
    challenge: 'Handle complex transaction forms and large datasets while keeping the interface responsive and developer feedback fast.',
    solution: 'Combined component-level code splitting, API caching, rendering optimizations, React Hook Form, AG Grid and parallelized test execution.'
  },
  {
    id: 'corporate-lending',
    number: '04',
    title: 'Corporate Lending Platform',
    company: 'Goldman Sachs',
    category: 'Full Stack • Lending',
    summary: 'Delivered loan origination, credit assessment, prepayment and loan-management workflows across a React frontend and distributed Flask-based backend services.',
    impact: ['Reusable lending UI patterns', 'Optimized API and SQL performance'],
    stack: ['React', 'TypeScript', 'Python', 'Flask', 'REST APIs', 'Docker', 'AWS', 'SQL'],
    architecture: ['Lending UI', 'Micro Frontends', 'Flask Services', 'REST APIs', 'SQL'],
    challenge: 'Create modular financial workflows with dynamic validation while integrating distributed backend services and maintaining reliability.',
    solution: 'Built reusable UI patterns, micro-frontend boundaries, optimized REST APIs, SQL queries, indexing and caching, backed by automated testing.'
  }
];
