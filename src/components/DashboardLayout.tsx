import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { supabase } from '@/lib/supabase';
import { Menu, X, LogOut, Bell } from 'lucide-react';
import toast from 'react-hot-toast';

export default function DashboardLayout({ children, user }: any) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const router = useRouter();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    toast.success('Logout realizado!');
    router.push('/');
  };

  return (
    <div className="flex h-screen bg-background">
      <div className={`${isSidebarOpen ? 'w-64' : 'w-20'} gradient-primary text-white transition-all duration-300 fixed h-screen overflow-y-auto`}>
        <div className="p-4 border-b border-white border-opacity-20 flex items-center justify-between">
          {isSidebarOpen && <h2 className="text-xl font-bold">FVE</h2>}
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2 hover:bg-white hover:bg-opacity-10 rounded">
            {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <nav className="p-4 space-y-2">
          {[
            { icon: '📊', label: 'Dashboard', href: '/dashboard' },
            { icon: '📁', label: 'Projetos', href: '/projects' },
            { icon: '💰', label: 'Orçamentos', href: '/budgets' },
            { icon: '🤖', label: 'IA', href: '/ai' },
            { icon: '👥', label: 'Marketplace', href: '/marketplace' },
            { icon: '⚙️', label: 'Configurações', href: '/settings' },
          ].map((item, i) => (
            <Link key={i} href={item.href} className="flex items-center gap-3 p-3 rounded-lg hover:bg-white hover:bg-opacity-10 transition">
              <span className="text-xl">{item.icon}</span>
              {isSidebarOpen && <span>{item.label}</span>}
            </Link>
          ))}
        </nav>
      </div>

      <div className={`${isSidebarOpen ? 'ml-64' : 'ml-20'} flex-1 flex flex-col transition-all duration-300`}>
        <div className="bg-white border-b border-gray-200 p-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-primary">FrameworkVision</h1>
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-gray-100 rounded-lg relative">
              <Bell size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-accent rounded-full"></span>
            </button>
            <button onClick={handleLogout} className="p-2 hover:bg-gray-100 rounded-lg text-red-500">
              <LogOut size={20} />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {children}
        </div>
      </div>
    </div>
  );
}
