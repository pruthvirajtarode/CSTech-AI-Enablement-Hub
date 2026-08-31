
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/Card';

import { Badge } from '../components/ui/Badge';
import { Server, Database, Brain, ArrowDown, Lock, CheckCircle, Smartphone } from 'lucide-react';

export function ERPIntegration() {
  return (
    <div className="space-y-8 animate-fade-in pb-12">
      <div className="max-w-4xl">
        <h1 className="text-3xl font-bold tracking-tight mb-2">AI on Top of Your Existing ERP</h1>
        <p className="text-brand-darkGray text-lg">
          CSTech does NOT need to replace its ERP. AI can act as an intelligence layer above existing systems.
        </p>
      </div>

      <Card className="border-2 border-brand-charcoal overflow-hidden">
        <div className="bg-brand-black text-brand-yellow px-6 py-3 font-semibold flex items-center justify-between">
          <span>Conceptual Architecture</span>
          <Badge variant="outline" className="border-brand-yellow text-brand-yellow">Production Requires APIs</Badge>
        </div>
        <CardContent className="p-12">
          
          <div className="flex flex-col items-center max-w-2xl mx-auto text-center space-y-6">
            
            {/* ERP Layer */}
            <div className="w-full bg-gray-100 border-2 border-gray-300 rounded-lg p-6 shadow-sm">
              <div className="flex items-center justify-center gap-3 mb-2">
                <Database className="w-6 h-6 text-gray-600" />
                <h3 className="text-xl font-bold text-gray-800">Existing CSTech ERP</h3>
              </div>
              <p className="text-sm text-gray-500">Inventory System • Supplier Database • Master Data</p>
            </div>

            <ArrowDown className="w-8 h-8 text-brand-gray" />

            {/* Integration Layer */}
            <div className="w-full bg-blue-50 border-2 border-blue-200 rounded-lg p-4 relative border-dashed">
              <div className="absolute -top-3 -right-3 bg-blue-100 text-blue-700 p-1.5 rounded-full">
                <Lock className="w-4 h-4" />
              </div>
              <h3 className="font-semibold text-blue-800 mb-1">Secure Data / Integration Layer</h3>
              <p className="text-xs text-blue-600">APIs, Role-Based Access, Security Controls</p>
            </div>

            <ArrowDown className="w-8 h-8 text-brand-yellow" />

            {/* AI Intelligence Layer */}
            <div className="w-full bg-brand-black text-white border-2 border-brand-black rounded-lg p-6 shadow-lg shadow-yellow-100 relative overflow-hidden">
              <div className="absolute -right-10 -bottom-10 opacity-10">
                <Brain className="w-40 h-40" />
              </div>
              <div className="relative z-10 flex items-center justify-center gap-3 mb-2">
                <Brain className="w-8 h-8 text-brand-yellow" />
                <h3 className="text-2xl font-bold text-brand-yellow">AI Intelligence Layer</h3>
              </div>
              <p className="text-sm text-gray-300 relative z-10">Search • Summarization • Classification • Extraction • Recommendations</p>
            </div>

            <ArrowDown className="w-8 h-8 text-brand-gray" />

            {/* Department Applications */}
            <div className="w-full grid grid-cols-3 gap-4">
              <div className="bg-white border border-brand-gray rounded-lg p-4 shadow-sm">
                <h4 className="font-semibold text-sm mb-1">Procurement App</h4>
                <p className="text-xs text-gray-500">RFQ Workflows</p>
              </div>
              <div className="bg-white border border-brand-gray rounded-lg p-4 shadow-sm">
                <h4 className="font-semibold text-sm mb-1">Supply Chain App</h4>
                <p className="text-xs text-gray-500">Delay Analysis</p>
              </div>
              <div className="bg-white border border-brand-gray rounded-lg p-4 shadow-sm">
                <h4 className="font-semibold text-sm mb-1">Engineering App</h4>
                <p className="text-xs text-gray-500">Spec Comparison</p>
              </div>
            </div>

            <ArrowDown className="w-8 h-8 text-brand-gray" />
            
            {/* Human in the loop */}
            <div className="w-3/4 bg-brand-lightGray border border-brand-gray rounded-full py-3 px-6 shadow-sm flex items-center justify-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span className="font-semibold">Human Approval & Verification</span>
            </div>

          </div>

        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Integration Readiness</CardTitle>
            <CardDescription>Future pathways for AI integration at CSTech.</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {[
                { name: 'Email (O365/Google)', status: 'High Readiness', color: 'text-green-600 bg-green-50 border-green-200' },
                { name: 'Document Repository (SharePoint)', status: 'High Readiness', color: 'text-green-600 bg-green-50 border-green-200' },
                { name: 'Excel / CSV Exports', status: 'Immediate', color: 'text-green-600 bg-green-50 border-green-200' },
                { name: 'ERP Master Data (Read-Only)', status: 'Medium Readiness', color: 'text-yellow-700 bg-yellow-50 border-yellow-200' },
                { name: 'ERP Write Actions (Purchase Orders)', status: 'Requires Custom API', color: 'text-brand-darkGray bg-brand-lightGray border-brand-gray' },
              ].map((item, i) => (
                <li key={i} className="flex items-center justify-between p-3 border rounded-md border-brand-gray">
                  <span className="font-medium text-sm">{item.name}</span>
                  <Badge variant="outline" className={item.color}>{item.status}</Badge>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Security & Boundaries</CardTitle>
            <CardDescription>Critical guidelines for production integration.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-brand-charcoal">
            <div className="flex items-start gap-3 p-3 bg-red-50 border border-red-100 rounded-md">
              <Lock className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-red-800">Do Not Upload to Public AI</p>
                <p className="text-red-700 mt-1">Passwords, API keys, confidential contracts, sensitive employee data, restricted financial data.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-3 bg-blue-50 border border-blue-100 rounded-md">
              <Server className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-blue-800">Enterprise Data Controls</p>
                <p className="text-blue-700 mt-1">The proposed architecture utilizes secure, enterprise-tier APIs where data is not used to train public models.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 border border-brand-gray rounded-md">
              <Smartphone className="w-5 h-5 text-brand-darkGray shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-brand-black">Phase 1 Workflow</p>
                <p className="text-brand-darkGray mt-1">Until direct ERP integration is built, AI outputs should be manually reviewed and copied into the ERP by authorized personnel.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

    </div>
  );
}
