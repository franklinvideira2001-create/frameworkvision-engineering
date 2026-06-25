import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-accent bg-opacity-10 border border-accent border-opacity-30 rounded-full px-4 py-2 w-fit">
              <span className="w-2 h-2 bg-accent rounded-full"></span>
              <span className="text-sm font-medium text-accent">A Plataforma Inteligente para Construção</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
              Engenharia. Arquitetura. Construção. <span className="text-accent">Inteligência.</span>
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed">
              FrameworkVision conecta tecnologia, profissionais e projetos para transformar ideias em obras extraordinárias.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/auth/register" className="bg-accent text-primary px-8 py-3 rounded-lg font-bold hover:bg-opacity-90 transition text-center">
                Criar projeto gratuito
              </Link>
              <button className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-bold hover:bg-primary hover:text-white transition">
                Explorar soluções
              </button>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-accent text-accent" />
                ))}
              </div>
              <p className="text-sm font-medium text-gray-700">
                <span className="text-accent font-bold">4.8/5</span> - 10.000+ profissionais
              </p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative h-96">
            <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 3, repeat: Infinity }} className="absolute top-10 left-0 bg-white rounded-2xl shadow-premium p-6 w-64">
              <p className="text-sm text-gray-600 mb-2">Orçamento estimado</p>
              <p className="text-3xl font-bold text-accent">18.500.000 Kz</p>
            </motion.div>

            <motion.div animate={{ y: [0, 20, 0] }} transition={{ duration: 3, delay: 0.5, repeat: Infinity }} className="absolute top-40 right-0 bg-white rounded-2xl shadow-premium p-6 w-64">
              <p className="text-sm text-gray-600 mb-2">Análise de projeto</p>
              <p className="text-lg font-bold text-primary">Concluída ✓</p>
            </motion.div>

            <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 3, delay: 1, repeat: Infinity }} className="absolute bottom-10 left-1/4 bg-white rounded-2xl shadow-premium p-6 w-64">
              <p className="text-sm text-gray-600 mb-2">Área construída</p>
              <p className="text-2xl font-bold text-primary">180,45 m²</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
