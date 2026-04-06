import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <main className="bg-background selection:bg-electric-blue selection:text-white">
      <Navbar />
      <Hero />
      
      <div className="relative">
        
        {/* Background Gradients for Depth */}
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-violet-glow/5 rounded-full blur-[120px] pointer-events-none safari-blur-reduce" />
        <div className="absolute top-1/2 left-0 w-[40vw] h-[40vw] bg-electric-blue/5 rounded-full blur-[100px] pointer-events-none safari-blur-reduce" />
        
        <Projects />
        <Contact />
      </div>

      <Footer />
    </main>
  );
}
