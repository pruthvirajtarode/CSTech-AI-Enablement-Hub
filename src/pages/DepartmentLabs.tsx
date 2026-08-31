import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { 
  Building2, Truck, Wrench, Search, FileText, 
  ArrowRightLeft, AlertTriangle, ShieldCheck, Mail, ClipboardCheck, ArrowRight
} from 'lucide-react';

const departments = [
  { id: 'procurement', name: 'Procurement AI Lab', icon: Building2, desc: 'Reduce repetitive analysis and improve procurement workflows.' },
  { id: 'supply', name: 'Supply Chain AI Lab', icon: Truck, desc: 'Analyze inventory, delays, and supply chain KPI reports.' },
  { id: 'design', name: 'Design & Engineering Lab', icon: Wrench, desc: 'Assist with technical documents and specification comparisons.' }
];

const departmentTools = {
  procurement: [
    { name: 'RFQ Analysis', icon: FileText },
    { name: 'Supplier Comparison', icon: ArrowRightLeft },
    { name: 'Vendor Research', icon: Search },
    { name: 'Supplier Email Assistant', icon: Mail },
    { name: 'Negotiation Preparation', icon: ShieldCheck }
  ],
  supply: [
    { name: 'Inventory Analysis', icon: FileText },
    { name: 'Stock Risk Assessment', icon: AlertTriangle },
    { name: 'Delivery Delay Analysis', icon: Truck },
    { name: 'Shipment Summary', icon: ClipboardCheck },
    { name: 'Logistics KPI Report', icon: FileText }
  ],
  design: [
    { name: 'Requirement Analysis', icon: ClipboardCheck },
    { name: 'Specification Summarizer', icon: FileText },
    { name: 'Design Brief Generator', icon: Wrench },
    { name: 'BOM Assistance', icon: FileText },
    { name: 'Technical Email Assistant', icon: Mail }
  ]
};

export function DepartmentLabs() {
  const [activeDept, setActiveDept] = useState(departments[0]);
  const [activeTool, setActiveTool] = useState<string | null>(null);

  const tools = departmentTools[activeDept.id as keyof typeof departmentTools];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Department Labs</h1>
          <p className="text-brand-darkGray mt-1 text-lg">Use AI tailored for your specific daily workflows.</p>
        </div>
      </div>

      {/* Department Tabs */}
      <div className="flex space-x-2 border-b border-brand-gray pb-4 overflow-x-auto">
        {departments.map(dept => (
          <button
            key={dept.id}
            onClick={() => { setActiveDept(dept); setActiveTool(null); }}
            className={`flex items-center gap-2 px-6 py-3 rounded-t-lg font-medium transition-colors whitespace-nowrap ${
              activeDept.id === dept.id 
                ? 'bg-brand-black text-brand-white border-t border-x border-brand-black' 
                : 'bg-brand-lightGray text-brand-darkGray hover:bg-gray-200 border-t border-x border-transparent'
            }`}
          >
            <dept.icon className="w-5 h-5" />
            {dept.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-4">
        
        {/* Left Side: Tool Selection */}
        <div className="lg:col-span-4 space-y-4">
          <Card className="bg-brand-black text-white border-none">
            <CardContent className="p-6">
              <activeDept.icon className="w-10 h-10 text-brand-yellow mb-4" />
              <h2 className="text-2xl font-bold mb-2">{activeDept.name}</h2>
              <p className="text-gray-400 text-sm mb-4">{activeDept.desc}</p>
              
              <div className="bg-brand-charcoal p-4 rounded-md border border-[#444]">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-brand-yellow shrink-0 mt-0.5" />
                  <p className="text-xs text-gray-300">
                    {activeDept.id === 'design' 
                      ? 'AI assists engineers; engineering responsibility, validation and approval remain with qualified personnel.' 
                      : 'AI provides decision support. Final business decisions remain with the authorized team.'}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <h3 className="font-semibold text-brand-black mt-8 mb-4">Available Workflows</h3>
          <div className="space-y-2">
            {tools.map((tool, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTool(tool.name)}
                className={`w-full flex items-center justify-between p-4 rounded-lg border transition-all text-left ${
                  activeTool === tool.name 
                    ? 'border-brand-black bg-white shadow-md' 
                    : 'border-brand-gray bg-brand-lightGray hover:border-brand-charcoal text-brand-darkGray hover:text-brand-black'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-md ${activeTool === tool.name ? 'bg-brand-yellow text-brand-black' : 'bg-gray-200 text-brand-darkGray'}`}>
                    <tool.icon className="w-4 h-4" />
                  </div>
                  <span className="font-medium">{tool.name}</span>
                </div>
                <ArrowRight className={`w-4 h-4 ${activeTool === tool.name ? 'text-brand-black' : 'text-transparent'}`} />
              </button>
            ))}
          </div>
        </div>

        {/* Right Side: Active Tool Workspace */}
        <div className="lg:col-span-8">
          {activeTool ? (
            <Card className="h-full min-h-[600px] flex flex-col border-brand-gray shadow-md">
              <CardHeader className="bg-brand-lightGray border-b border-brand-gray pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle>{activeTool} <Badge variant="outline" className="ml-2 border-brand-yellow bg-yellow-50 text-brand-black text-xs">Demo Mode</Badge></CardTitle>
                </div>
                <CardDescription>Upload sample data or paste context to run this workflow.</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 p-6 flex flex-col justify-center items-center text-center">
                {/* Simulated tool UI placeholder */}
                <div className="max-w-md w-full">
                  <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-dashed border-gray-300">
                    <FileText className="w-8 h-8 text-brand-darkGray" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Upload Data for {activeTool}</h3>
                  <p className="text-sm text-brand-darkGray mb-8">
                    To test this workflow, provide sample data. For example, upload 3 mock supplier quotations or a dummy requirements document.
                  </p>
                  
                  <div className="space-y-3">
                    <Button className="w-full justify-center">Use Demo Dataset</Button>
                    <div className="text-sm text-brand-darkGray my-2">- OR -</div>
                    <Button variant="outline" className="w-full justify-center">Upload CSV / PDF</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ) : (
            <div className="h-full min-h-[600px] border-2 border-dashed border-brand-gray rounded-xl flex flex-col items-center justify-center text-center p-8 text-brand-darkGray">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <ArrowRightLeft className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-medium mb-2 text-brand-black">Select a Workflow</h3>
              <p className="max-w-md">Choose one of the department-specific AI tools from the left menu to start automating tasks.</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
