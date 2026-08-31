import React from 'react';
import { Search, Bell, User } from 'lucide-react';
import { Badge } from '../ui/Badge';

export function Topbar() {
  return (
    <header className="h-16 bg-white border-b border-brand-gray flex items-center justify-between px-8 sticky top-0 z-10">
      <div className="flex items-center gap-4">
        <div className="relative">
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
          <button className="text-brand-darkGray hover:text-brand-black transition-colors relative">
            <Bell className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-brand-yellow rounded-full"></span>
          </button>
          
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-8 h-8 rounded-full bg-brand-charcoal text-white flex items-center justify-center">
              <User className="w-4 h-4" />
            </div>
            <div className="text-sm">
              <p className="font-medium">Sarah Jenkins</p>
              <p className="text-xs text-brand-darkGray">Demo User</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
