
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppLayout } from './layouts/AppLayout';
import { Dashboard } from './pages/Dashboard';
import { AIFoundations } from './pages/AIFoundations';
import { PromptLab } from './pages/PromptLab';
import { AITools } from './pages/AITools';
import { DepartmentLabs } from './pages/DepartmentLabs';
import { WorkflowStudio } from './pages/WorkflowStudio';
import { ERPIntegration } from './pages/ERPIntegration';
import { Assessments } from './pages/Assessments';
import { Resources } from './pages/Resources';
import { Login } from './pages/Login';

import { ToastProvider } from './components/ui/Toast';

function App() {
  return (
    <ToastProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route element={<AppLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="foundations" element={<AIFoundations />} />
            <Route path="prompt-lab" element={<PromptLab />} />
            <Route path="tools" element={<AITools />} />
            <Route path="departments" element={<DepartmentLabs />} />
            <Route path="workflow" element={<WorkflowStudio />} />
            <Route path="erp" element={<ERPIntegration />} />
            <Route path="assessments" element={<Assessments />} />
            <Route path="resources" element={<Resources />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ToastProvider>
  );
}

export default App;
