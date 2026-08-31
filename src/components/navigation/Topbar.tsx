import { useState } from 'react';
import { Bell, Search, Menu, User, Settings, LogOut } from 'lucide-react';
import { useToast } from '../ui/Toast';
import { Badge } from '../ui/Badge';

interface TopbarProps {
  onMenuClick?: () => void;
  onToggleCollapse?: () => void;
  isCollapsed?: boolean;
}

export function Topbar({ onMenuClick, onToggleCollapse }: TopbarProps) {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const { toast } = useToast();

  return (
    <header className="h-16 bg-white border-b border-brand-gray flex items-center justify-between px-4 lg:px-8 sticky top-0 z-10">
      <div className="flex items-center gap-4">
        {onToggleCollapse && (
          <button 
            className="hidden lg:block p-2 -ml-2 text-brand-darkGray hover:text-brand-black transition-colors"
            onClick={onToggleCollapse}
          >
            <Menu className="w-6 h-6" />
          </button>
        )}
        {onMenuClick && (
          <button 
            className="lg:hidden p-2 -ml-2 text-brand-darkGray hover:text-brand-black transition-colors"
            onClick={onMenuClick}
          >
            <Menu className="w-6 h-6" />
          </button>
        )}
        <div className="relative hidden sm:block">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-brand-darkGray" />
          <input 
            type="text" 
            placeholder="Search learning, tools, workflows..." 
            className="pl-9 pr-4 py-2 rounded-md border border-brand-gray text-sm w-80 focus:outline-none focus:ring-2 focus:ring-brand-yellow focus:border-transparent transition-all"
          />
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <Badge variant="secondary">Procurement Dept</Badge>
          <Badge variant="outline" className="border-brand-yellow text-brand-black bg-yellow-50">Level 2: AI User</Badge>
        </div>
        
        <div className="flex items-center gap-4 border-l border-brand-gray pl-6">
          <div className="relative">
            <button 
              className="text-brand-darkGray hover:text-brand-black transition-colors relative"
              onClick={() => setShowNotifications(!showNotifications)}
            >
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-brand-yellow rounded-full"></span>
            </button>
            
            {showNotifications && (
              <div className="absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg border border-brand-gray py-2 z-50">
                <div className="px-4 py-2 border-b border-brand-gray">
                  <h4 className="font-semibold text-sm">Notifications</h4>
                </div>
                <div className="p-4 text-sm text-brand-darkGray text-center">
                  You're all caught up!
                </div>
              </div>
            )}
          </div>
          
          <div className="flex items-center gap-2 cursor-pointer relative" onClick={() => setShowProfileMenu(!showProfileMenu)}>
            <div className="w-8 h-8 rounded-full bg-brand-charcoal text-white flex items-center justify-center">
              <User className="w-4 h-4" />
            </div>
            <div className="text-sm">
              <p className="font-medium">Sarah Jenkins</p>
              <p className="text-xs text-brand-darkGray">Demo User</p>
            </div>
            
            {showProfileMenu && (
              <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-md shadow-lg border border-brand-gray py-2 z-50 overflow-hidden">
                <div className="px-4 py-3 border-b border-brand-gray bg-gray-50">
                  <p className="font-semibold text-sm text-brand-black">Sarah Jenkins</p>
                  <p className="text-xs text-brand-darkGray">sarah.j@cstech.net</p>
                </div>
                <div className="py-1">
                  <button 
                    className="w-full text-left px-4 py-2 text-sm text-brand-charcoal hover:bg-gray-100 transition-colors flex items-center"
                    onClick={() => {
                      toast({ title: 'Settings', message: 'Account settings are managed via your primary ERP profile.', type: 'info' });
                      setShowProfileMenu(false);
                    }}
                  >
                    <Settings className="w-4 h-4 mr-2" /> My Account
                  </button>
                </div>
                <div className="border-t border-brand-gray py-1">
                  <button 
                    className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors flex items-center"
                    onClick={() => window.location.href = '/'}
                  >
                    <LogOut className="w-4 h-4 mr-2" /> Sign Out
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
