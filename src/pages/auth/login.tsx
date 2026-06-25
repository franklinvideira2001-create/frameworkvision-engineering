import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import toast from 'react-hot-toast';
import { Mail, Lock, Chrome } from 'lucide-react';

export default function Login() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      });

      if (error) throw error;

      toast.success('Login realizado com sucesso!');
      router.push('/dashboard');
    } catch (error: any) {
      toast.error(error.message || 'Erro ao fazer login');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen gradient-primary flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-premium p-8">
        <h1 className="text-3xl font-bold text-primary mb-2">FrameworkVision</h1>
        <p className="text-gray-600 mb-8">Bem-vindo de volta</p>

        <form onSubmit={handleLogin} className="space-y-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="seu@email.com"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Senha</label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="Sua senha"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-accent text-primary font-bold py-2 rounded-lg hover:bg-opacity-90 transition disabled:opacity-50"
          >
            {loading ? 'Entrando...' : 'Entrar'}
          </button>
        </form>

        <p className="mt-6 text-center text-gray-600">
          Não tem conta? <Link href="/auth/register" className="text-accent font-bold">Registrar</Link>
        </p>
      </div>
    </div>
  );
}
