'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'PrepTalks',
    description: 'A fully interactive, AI-powered developer terminal that automates shell commands and simplifies complex cloud workflows.',
    tech: ['Next.js', 'React', 'Node.js', 'WebRTC', 'Socket.io', 'JWT', 'Tailwind CSS', 'Framer Motion'],
    link: 'https://github.com/Jetshree/PrepTalks',
    gradient: 'from-electric-blue/10 to-transparent'
  },
  {
    title: 'FinanceGenie',
    description: 'FinanceGenie is a powerful financial insights platform designed to help users manage their finances effectively. It provides the tools and data you need to make informed financial decisions.',
    tech: ['Next.js', 'Node.js', 'AWS', 'Postgres', 'S3', 'EC2'],
    link: 'https://github.com/Jetshree/FinanceGenie',
    gradient: 'from-emerald-400/10 to-transparent'
  },
  {
    title: 'Traffic Congestion Predictor',
    description: 'A web application that predicts traffic congestion in Indian cities using advanced machine learning algorithms. Built with Django, Tailwind CSS, Chart.js, and Folium.',
    tech: ['Machine Learning', 'Python', 'scikit-learn', 'Django', 'HTML', 'Tailwind CSS', 'Chart.js'],
    link: 'https://github.com/Jetshree/traffic-predictor-website',
    gradient: 'from-violet-glow/10 to-transparent'
  },
  {
    title: 'InvestAI',
    description: 'An intelligent investment analytics and recommendation platform that leverages artificial intelligence and machine learning to provide data-driven investment insights, portfolio analysis, and market predictions.',
    tech: ['Machine Learning', 'Python', 'scikit-learn', 'Django', 'HTML', 'CSS', 'Javascript'],
    link: 'https://github.com/Jetshree/InvestAI',
    gradient: 'from-amber-400/10 to-transparent'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="mb-20 flex flex-col md:flex-row justify-between items-start gap-8">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tight">
            Recent Works <span className="text-electric-blue">.</span>
          </h2>
          <p className="text-xl text-accent leading-relaxed">
            I build digital products that combine beautiful designs with technical precision. Here are some of my latest projects.
          </p>
        </div>
        <a href="https://github.com/jetshree" className="group flex items-center gap-3 text-white font-bold opacity-80 hover:opacity-100 transition-all">
          See All Repository <ArrowRight size={20} className="transition-transform group-hover:translate-x-2" />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className={`group relative glass rounded-[2.5rem] p-10 overflow-hidden border border-white/5 hover:border-white/10 transition-all duration-500 bg-gradient-to-br ${project.gradient} gpu-layer`}
          >
            <div className="relative z-10">
              <h3 className="text-3xl font-black text-white mb-4 tracking-tight group-hover:text-electric-blue transition-colors">
                {project.title}
              </h3>
              <p className="text-accent text-lg mb-8 leading-relaxed font-light">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                {project.tech.map((tech, i) => (
                  <span key={i} className="px-5 py-2 text-xs font-bold uppercase tracking-widest bg-white/5 text-white/70 rounded-full border border-white/5">
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-white font-black uppercase tracking-widest text-sm py-4 px-8 bg-white/5 rounded-2xl group-hover:bg-white transition-all group-hover:text-background"
              >
                View Project <ArrowRight size={18} />
              </a>
            </div>

            {/* Visual Flair */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-electric-blue/5 rounded-full blur-[80px] group-hover:bg-electric-blue/10 transition-colors duration-700" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
