import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Eye, EyeOff } from 'lucide-react';

export function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  const handleDemo = () => {
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-brand-black flex flex-col items-center justify-center p-4 relative overflow-hidden">
      
      {/* Background styling for industrial feel */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#FFD700 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>
      
      <div className="z-10 text-center mb-8">
        <div className="flex justify-center mb-6">
           <img src="/logo.png" alt="CSTech Logo" className="w-24 h-24 object-contain" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">CSTech AI <span className="text-brand-yellow">Enablement Hub</span></h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">Learn AI. Apply AI. Improve the way you work.</p>
      </div>

      <Card className="w-full max-w-md z-10 shadow-2xl border-none">
        <CardHeader className="text-center pb-4">
          <CardTitle className="text-2xl">Employee Login</CardTitle>
          <CardDescription>Access your personalized learning journey.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Email Address</label>
              <input 
                type="email" 
                defaultValue="sarah.j@cstech.net"
                className="w-full p-2 border border-brand-gray rounded-md focus:ring-2 focus:ring-brand-yellow focus:outline-none bg-brand-lightGray"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Password</label>
              <div className="relative">
                <input 
                  type={showPassword ? "text" : "password"}
                  defaultValue="password123"
                  className="w-full p-2 pr-10 border border-brand-gray rounded-md focus:ring-2 focus:ring-brand-yellow focus:outline-none bg-brand-lightGray"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-brand-darkGray hover:text-brand-black transition-colors"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>
            
            <div className="pt-2">
              <Button type="submit" className="w-full">Sign In</Button>
            </div>
          </form>

          <div className="mt-6 pt-6 border-t border-brand-gray space-y-4">
            <div className="text-center">
              <p className="text-sm text-brand-darkGray mb-4">Or explore the prototype experience</p>
              
              <div className="space-y-3">
                <select className="w-full p-2 border border-brand-gray rounded-md text-sm bg-white focus:outline-none focus:ring-1 focus:ring-brand-yellow">
                  <option>Select Role: Procurement</option>
                  <option>Select Role: Supply Chain</option>
                  <option>Select Role: Design / Engineering</option>
                  <option>Select Role: Management</option>
                </select>
                
                <Button variant="outline" className="w-full border-brand-yellow text-brand-black hover:bg-yellow-50" onClick={handleDemo}>
                  Continue as Demo User
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="absolute bottom-6 text-xs text-gray-500 z-10">
        &copy; 2026 CSTech Global. Prototype Application.
      </div>

    </div>
  );
}
