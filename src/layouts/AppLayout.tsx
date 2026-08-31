import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from '../components/navigation/Sidebar';
import { Topbar } from '../components/navigation/Topbar';

export function AppLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <div className="flex min-h-screen bg-brand-lightGray relative">
      <Sidebar 
        isOpen={isSidebarOpen} 
        setIsOpen={setIsSidebarOpen} 
        isCollapsed={isSidebarCollapsed}
      />
      <div className={`flex-1 flex flex-col min-w-0 w-full transition-all duration-300 ${isSidebarCollapsed ? 'lg:ml-20' : 'lg:ml-64'}`}>
        <Topbar 
          onMenuClick={() => setIsSidebarOpen(true)} 
          onToggleCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
          isCollapsed={isSidebarCollapsed}
        />
        <main className="flex-1 p-4 lg:p-8 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
