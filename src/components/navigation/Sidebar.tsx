import { useState } from 'react';
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
  HelpCircle,
  X
} from 'lucide-react';

interface SidebarProps {
  isOpen?: boolean;
  setIsOpen?: (isOpen: boolean) => void;
  isCollapsed?: boolean;
}

export function Sidebar({ isOpen = false, setIsOpen, isCollapsed = false }: SidebarProps) {
  const [activeModal, setActiveModal] = useState<'settings' | 'help' | null>(null);

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
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsOpen?.(false)}
        />
      )}
      <aside className={cn(
        "h-screen bg-brand-black text-brand-white flex flex-col fixed left-0 top-0 border-r border-brand-charcoal overflow-y-auto z-50 transition-all duration-300",
        isCollapsed ? "w-20" : "w-64",
        isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      )}>
        <div className={`p-6 flex items-center ${isCollapsed ? 'justify-center' : 'justify-between'}`}>
          <div className={isCollapsed ? "flex justify-center" : ""}>
            <div className={`flex items-center gap-2 ${isCollapsed ? 'mb-0' : 'mb-1'}`}>
              <img src="/logo.png" alt="CSTech Logo" className={`object-contain rounded transition-all duration-300 ${isCollapsed ? 'w-10 h-10' : 'w-12 h-12'}`} />
              {!isCollapsed && <h1 className="text-xl font-bold tracking-tight whitespace-nowrap">CSTech AI</h1>}
            </div>
            {!isCollapsed && <p className="text-xs text-brand-gray">Enablement Hub</p>}
          </div>
          {!isCollapsed && (
            <button className="lg:hidden text-brand-gray hover:text-white" onClick={() => setIsOpen?.(false)}>
              <X className="w-6 h-6" />
            </button>
          )}
        </div>
            <X className="w-6 h-6" />
          </button>
        </div>

      <nav className="flex-1 px-4 space-y-1">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => cn(
              "flex items-center gap-3 py-2.5 rounded-md text-sm font-medium transition-all duration-200 overflow-hidden",
              isCollapsed ? "px-0 justify-center w-12 mx-auto" : "px-3",
              isActive 
                ? "bg-brand-charcoal text-brand-yellow" 
                : "text-brand-gray hover:bg-brand-charcoal hover:text-brand-white"
            )}
            title={isCollapsed ? item.name : undefined}
          >
            <item.icon className="w-5 h-5 flex-shrink-0" />
            {!isCollapsed && <span className="whitespace-nowrap">{item.name}</span>}
          </NavLink>
        ))}
      </nav>

      <div className="p-4 mt-auto border-t border-brand-charcoal">
        <nav className="space-y-2">
          <button onClick={(e) => { e.preventDefault(); setActiveModal('settings'); }} title={isCollapsed ? "Settings" : undefined} className={cn("w-full flex items-center gap-3 py-2 text-sm font-medium text-brand-gray hover:text-brand-white transition-colors rounded-md hover:bg-brand-charcoal", isCollapsed ? "justify-center px-0 w-12 mx-auto" : "px-3")}>
            <Settings className="w-5 h-5 flex-shrink-0" /> {!isCollapsed && "Settings"}
          </button>
          <button onClick={(e) => { e.preventDefault(); setActiveModal('help'); }} title={isCollapsed ? "Help & Support" : undefined} className={cn("w-full flex items-center gap-3 py-2 text-sm font-medium text-brand-gray hover:text-brand-white transition-colors rounded-md hover:bg-brand-charcoal", isCollapsed ? "justify-center px-0 w-12 mx-auto" : "px-3")}>
            <HelpCircle className="w-5 h-5 flex-shrink-0" /> {!isCollapsed && "Help & Support"}
          </button>
        </nav>
      </div>

      {activeModal && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm" onClick={() => setActiveModal(null)}>
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md overflow-hidden text-brand-black border border-brand-gray" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center p-4 border-b border-brand-gray bg-brand-lightGray">
              <h2 className="text-lg font-bold">
                {activeModal === 'settings' ? 'Settings' : 'Help & Support'}
              </h2>
              <button onClick={() => setActiveModal(null)} className="text-brand-darkGray hover:text-brand-black transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6">
              {activeModal === 'settings' ? (
                <div className="space-y-4">
                  <p className="text-sm text-brand-darkGray">Manage your preferences and profile details here.</p>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm cursor-pointer hover:bg-gray-50 p-2 rounded-md">
                      <input type="checkbox" className="text-brand-yellow focus:ring-brand-yellow rounded" defaultChecked />
                      Enable Email Notifications
                    </label>
                    <label className="flex items-center gap-2 text-sm cursor-pointer hover:bg-gray-50 p-2 rounded-md">
                      <input type="checkbox" className="text-brand-yellow focus:ring-brand-yellow rounded" />
                      Dark Mode (Beta)
                    </label>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <p className="text-sm text-brand-darkGray">Need assistance? Check our resources or contact the IT helpdesk.</p>
                  <div className="grid gap-2">
                    <button className="text-left text-sm bg-gray-50 hover:bg-gray-100 p-3 rounded-md border border-gray-200 transition-colors">
                      <strong className="block mb-1">View Documentation</strong>
                      <span className="text-brand-darkGray">Read the setup and usage guides.</span>
                    </button>
                    <button className="text-left text-sm bg-gray-50 hover:bg-gray-100 p-3 rounded-md border border-gray-200 transition-colors">
                      <strong className="block mb-1">Contact Support</strong>
                      <span className="text-brand-darkGray">Email the CSTech AI Enablement team.</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
            <div className="p-4 border-t border-brand-gray bg-gray-50 flex justify-end">
              <button onClick={() => setActiveModal(null)} className="px-4 py-2 bg-brand-black text-white rounded-md text-sm font-medium hover:bg-gray-800 transition-colors">
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </aside>
    </>
  );
}
