import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="gradient-primary text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">FrameworkVision</h3>
            <p className="text-white opacity-70">Plataforma SaaS inteligente para Engenharia, Arquitetura e Construção.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Produto</h4>
            <ul className="space-y-2 text-white opacity-70">
              <li><Link href="#" className="hover:text-accent transition">Características</Link></li>
              <li><Link href="#" className="hover:text-accent transition">Preços</Link></li>
              <li><Link href="#" className="hover:text-accent transition">Segurança</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Empresa</h4>
            <ul className="space-y-2 text-white opacity-70">
              <li><Link href="#" className="hover:text-accent transition">Sobre</Link></li>
              <li><Link href="#" className="hover:text-accent transition">Blog</Link></li>
              <li><Link href="#" className="hover:text-accent transition">Carreiras</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contacto</h4>
            <ul className="space-y-2 text-white opacity-70">
              <li className="flex items-center gap-2"><Mail size={16} /> support@fvengineering.com</li>
              <li className="flex items-center gap-2"><Phone size={16} /> +244 923 456 789</li>
              <li className="flex items-center gap-2"><MapPin size={16} /> Luanda, Angola</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white border-opacity-20 pt-8 text-center text-white opacity-70">
          <p>&copy; 2024 FrameworkVision Engineering. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
