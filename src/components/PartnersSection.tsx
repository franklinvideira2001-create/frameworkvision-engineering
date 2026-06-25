import { motion } from 'framer-motion';

export default function PartnersSection() {
  const partners = ['Odebrecht', 'Teixeira Duarte', 'Mota-Engil', 'AECOM', 'Andrade Gutierrez', 'PLANARQ'];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-2xl font-bold text-primary mb-12">Empresas Parceiras</h2>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {partners.map((partner, i) => (
            <motion.div key={i} whileHover={{ scale: 1.1 }} className="flex items-center justify-center p-6 bg-gray-50 rounded-lg border border-gray-200 hover:border-accent hover:shadow-card transition">
              <p className="font-bold text-gray-700 text-center text-sm">{partner}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
