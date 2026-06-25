import { motion } from 'framer-motion';
import { Brain, Calculator, DollarSign, Users, Briefcase } from 'lucide-react';

export default function FeaturesSection() {
  const features = [
    { icon: Brain, title: 'IA para Projetos', description: 'Análise inteligente de plantas, deteção de erros, relatórios automáticos.', color: 'from-blue-500 to-blue-600' },
    { icon: Calculator, title: 'Cálculos de Engenharia', description: 'Sapatas, vigas, pilares, escadas, lajes. Todos os cálculos estruturais.', color: 'from-purple-500 to-purple-600' },
    { icon: DollarSign, title: 'Orçamentos', description: 'Quantitativos automáticos, preços por região, cronogramas, PDF e Excel.', color: 'from-green-500 to-green-600' },
    { icon: Users, title: 'Marketplace', description: 'Engenheiros, arquitetos, empreiteiros, fornecedores. Encontre profissionais.', color: 'from-orange-500 to-orange-600' },
    { icon: Briefcase, title: 'Gestão de Obras', description: 'Planeamento, equipas, materiais, custos. Controle total do seu projeto.', color: 'from-red-500 to-red-600' },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Funcionalidades Principais</h2>
          <p className="text-lg text-gray-600">Tudo que você precisa para gerenciar projetos de engenharia</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div key={i} whileHover={{ y: -10 }} className="bg-white rounded-2xl p-8 shadow-card hover:shadow-premium transition border border-gray-100">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white mb-4`}>
                  <Icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
