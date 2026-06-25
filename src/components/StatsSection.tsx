import { motion } from 'framer-motion';

export default function StatsSection() {
  const stats = [
    { value: '+50.000', label: 'Profissionais' },
    { value: '+10.000', label: 'Projetos concluídos' },
    { value: '+1.000.000', label: 'm² analisados' },
    { value: '+15', label: 'Países' },
    { value: '98%', label: 'Satisfação' },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 gradient-primary text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {stats.map((stat, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-accent mb-2">{stat.value}</p>
              <p className="text-sm md:text-base text-white opacity-80">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
