import { FloatingNavbar } from '@/components/navbar/variants/FloatingNavbar';
import { MorphingNavbar } from '@/components/navbar/variants/MorphingNavbar';
import { GradientBorderNavbar } from '@/components/navbar/variants/GradientBorderNavbar';
import { NeumorphicNavbar } from '@/components/navbar/variants/NeumorphicNavbar';
import { CircuitNavbar } from '@/components/navbar/variants/CircuitNavbar';
import { RetroWaveNavbar } from '@/components/navbar/variants/RetroWaveNavbar';
import { MinimalNavbar } from '@/components/navbar/variants/MinimalNavbar';
import { GlitchNavbar } from '@/components/navbar/variants/GlitchNavbar';
import { HexagonNavbar } from '@/components/navbar/variants/HexagonNavbar';
import { AuroraNavbar } from '@/components/navbar/variants/AuroraNavbar';
import { Button } from '@/components/ui/button';
import {  Github, Zap } from 'lucide-react';
import { FuturisticNavbar } from '@/components/navbar/variants/FutursticNavbar';
function App() {
  const navLinks = (
    <>
      <a href="#" className="text-white/80 hover:text-white transition-colors">Home</a>
      <a href="#" className="text-white/80 hover:text-white transition-colors">Features</a>
      <a href="#" className="text-white/80 hover:text-white transition-colors">Docs</a>
      <a href="#" className="text-white/80 hover:text-white transition-colors">About</a>
    </>
  );

  return (
    <div className="min-h-screen bg-[#0D0D1F] text-white overflow-x-hidden">
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-600/20 to-fuchsia-600/20" />
        <div className="absolute inset-0 bg-grid-white/10" />
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-fuchsia-400 mb-6">
            NavbarX
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            A collection of beautiful, animated navigation components for modern web applications.
            Featuring 10 unique designs with stunning effects and interactions.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-violet-600 hover:bg-violet-700">
              <Zap className="mr-2 h-5 w-5" />
              <a href='#lowercassss'>Get Started</a>
            </Button>
            <Button size="lg" variant="outline" className="border-violet-500 text-violet-400">
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 id="lowercassss" className="text-4xl lowercassss font-bold text-center mb-4">
            Choose Your Style
          </h2>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            Explore our collection of unique navbar designs, each crafted with attention to detail
            and modern design principles.
          </p>
          
          <div className="grid gap-8">
            {[
              { Component: FloatingNavbar, title: "Floating Navbar", description: "Elegant floating design with blur effect" },
              { Component: MorphingNavbar, title: "Morphing Navbar", description: "Shape-shifting animation on hover" },
              { Component: GradientBorderNavbar, title: "Gradient Border", description: "Animated gradient border effect" },
              { Component: NeumorphicNavbar, title: "Neumorphic", description: "Soft UI design with realistic shadows" },
              { Component: CircuitNavbar, title: "Circuit", description: "Tech-inspired circuit board pattern" },
              { Component: RetroWaveNavbar, title: "Retro Wave", description: "80s inspired design with grid" },
              { Component: MinimalNavbar, title: "Minimal", description: "Clean and simple design" },
              { Component: GlitchNavbar, title: "Glitch", description: "Cyberpunk glitch effect" },
              { Component: HexagonNavbar, title: "Hexagon", description: "Geometric shape with gradient" },
              { Component: AuroraNavbar, title: "Aurora", description: "Northern lights inspired effect" },
              { Component: FuturisticNavbar, title: "Futuristic", description: "Futuristic design with neon text" }
            ].map(({ Component, title, description }) => (
              <div key={title} className="bg-white/5 rounded-lg p-8 backdrop-blur-sm border border-white/10">
                <h3 className="text-2xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-400 mb-6">{description}</p>
                <div className="relative h-24 rounded-lg overflow-hidden bg-gradient-to-r from-gray-900 to-black">
                  <Component>
                    {navLinks}
                  </Component>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;