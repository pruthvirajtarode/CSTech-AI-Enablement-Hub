
import { NavLink } from 'react-router-dom';
import { cn } from '../../lib/utils';
import { 
  LayoutDashboard, 
  BookOpen, 
  TerminalSquare, 
  Wrench, 
  Briefcase, 
  Workflow, 
  Server, 
  GraduationCap, 
  FolderOpen,
  Settings,
  HelpCircle
} from 'lucide-react';

export function Sidebar() {
  const navItems = [
    { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
    { name: 'AI Foundations', path: '/foundations', icon: BookOpen },
    { name: 'Prompt Lab', path: '/prompt-lab', icon: TerminalSquare },
    { name: 'AI Tools', path: '/tools', icon: Wrench },
    { name: 'Department Labs', path: '/departments', icon: Briefcase },
    { name: 'Workflow Studio', path: '/workflow', icon: Workflow },
    { name: 'ERP + AI', path: '/erp', icon: Server },
    { name: 'Assessments', path: '/assessments', icon: GraduationCap },
    { name: 'Resources', path: '/resources', icon: FolderOpen },
  ];

  return (
    <aside className="w-64 h-screen bg-brand-black text-brand-white flex flex-col fixed left-0 top-0 border-r border-brand-charcoal overflow-y-auto">
      <div className="p-6">
        <h1 className="text-xl font-bold tracking-tight">CSTech AI</h1>
        <p className="text-xs text-brand-gray mt-1">Enablement Hub</p>
      </div>

      <nav className="flex-1 px-4 space-y-1">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => cn(
              "flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors",
              isActive 
                ? "bg-brand-charcoal text-brand-yellow" 
                : "text-brand-gray hover:bg-brand-charcoal hover:text-brand-white"
            )}
          >
            <item.icon className="w-4 h-4" />
            {item.name}
          </NavLink>
        ))}
      </nav>

      <div className="p-4 mt-auto border-t border-brand-charcoal">
        <nav className="space-y-1">
          <a href="#" className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-brand-gray hover:text-brand-white">
            <Settings className="w-4 h-4" /> Settings
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-brand-gray hover:text-brand-white">
            <HelpCircle className="w-4 h-4" /> Help & Support
          </a>
        </nav>
      </div>
    </aside>
  );
}
