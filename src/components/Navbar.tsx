import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 glassmorphism border-b border-white border-opacity-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-primary">FVE</Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-text-dark hover:text-accent transition">Início</Link>
            <Link href="#" className="text-text-dark hover:text-accent transition">Soluções</Link>
            <Link href="#" className="text-text-dark hover:text-accent transition">Profissionais</Link>
            <Link href="#" className="text-text-dark hover:text-accent transition">Projetos</Link>
            <Link href="#" className="text-text-dark hover:text-accent transition">Preços</Link>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Link href="/auth/login" className="text-text-dark hover:text-accent transition">Entrar</Link>
            <Link href="/auth/register" className="bg-accent text-primary px-4 py-2 rounded-lg font-bold hover:bg-opacity-90 transition">Criar Conta</Link>
          </div>

          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
}
