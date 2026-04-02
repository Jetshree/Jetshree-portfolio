import { Linkedin, Github, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/5 bg-background">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl font-black text-white italic tracking-tighter uppercase">
            Jetshree<span className="text-electric-blue">.</span>
          </h3>
          <p className="text-accent text-sm font-medium tracking-wide">
            &copy; {new Date().getFullYear()} All Rights Reserved.
          </p>
        </div>

        <div className="flex flex-col gap-6 items-center md:items-end">
          <div className="flex gap-8">
            <a href="mailto:jetshreesharma@gmail.com" className="transition-transform hover:scale-110 group">
              <Mail className="text-accent group-hover:text-white" size={24} />
            </a>
            <a href="https://www.linkedin.com/in/jetshree-sharma-603a43284/" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110 group">
              <Linkedin className="text-accent group-hover:text-blue-500" size={24} />
            </a>
            <a href="https://github.com/jetshree" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110 group">
              <Github className="text-accent group-hover:text-white" size={24} />
            </a>
          </div>
          <p className="text-xs text-accent/50 uppercase tracking-[0.2em] font-bold">
            Stay Connected
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
