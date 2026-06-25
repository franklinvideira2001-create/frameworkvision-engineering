import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

export default function QuickActions() {
  const actions = [
    { icon: '🏗️', title: 'Analisar planta com IA' },
    { icon: '💰', title: 'Gerar orçamento automático' },
    { icon: '📐', title: 'Dimensionar estrutura' },
    { icon: '👥', title: 'Encontrar profissionais' },
    { icon: '🔧', title: 'Gerir minha obra' },
  ];

  return (
    <section className="bg-white border-y border-gray-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-primary mb-8 text-center">O que você deseja fazer hoje?</h2>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
          {actions.map((action, i) => (
            <motion.button key={i} whileHover={{ scale: 1.05 }} className="bg-gray-50 hover:bg-accent hover:text-white border border-gray-200 rounded-lg p-4 text-center transition group">
              <div className="text-3xl mb-2 group-hover:scale-110 transition">{action.icon}</div>
              <p className="text-sm font-medium text-gray-700 group-hover:text-white">{action.title}</p>
            </motion.button>
          ))}
        </motion.div>

        <div className="flex justify-center">
          <button className="bg-secondary text-white px-8 py-3 rounded-lg font-bold hover:bg-opacity-90 transition flex items-center gap-2">
            <Zap size={20} />
            Começar agora
          </button>
        </div>
      </div>
    </section>
  );
}
