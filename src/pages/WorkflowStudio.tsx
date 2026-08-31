import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { 
  Play, Plus, Save, Settings, Mail, FileText, Bot, 
  UserCheck, Server, AlertCircle, ArrowDown
} from 'lucide-react';
import { useToast } from '../components/ui/Toast';

const blockTypes = [
  { id: 'trigger', name: 'Trigger', icon: Play, color: 'bg-blue-100 text-blue-700 border-blue-300' },
  { id: 'input', name: 'Input', icon: FileText, color: 'bg-gray-100 text-gray-700 border-gray-300' },
  { id: 'ai', name: 'AI Analysis', icon: Bot, color: 'bg-yellow-100 text-yellow-800 border-yellow-400' },
  { id: 'approval', name: 'Human Approval', icon: UserCheck, color: 'bg-purple-100 text-purple-700 border-purple-300' },
  { id: 'erp', name: 'ERP Action', icon: Server, color: 'bg-green-100 text-green-700 border-green-300' },
  { id: 'notify', name: 'Notification', icon: Mail, color: 'bg-orange-100 text-orange-700 border-orange-300' },
];

type Block = { id: string; type: typeof blockTypes[0]; title: string; config?: string };

const sampleWorkflow: Block[] = [
  { id: '1', type: blockTypes[0], title: 'Receive Supplier Quotation', config: 'Email Inbox trigger' },
  { id: '2', type: blockTypes[1], title: 'Extract Data', config: 'PDF parsing' },
  { id: '3', type: blockTypes[2], title: 'Compare Suppliers & Identify Risks', config: 'Prompt: Compare pricing, lead times, terms' },
  { id: '4', type: blockTypes[3], title: 'Procurement Review', config: 'Route to Manager' },
  { id: '5', type: blockTypes[4], title: 'Draft PO in ERP', config: 'API: /api/erp/purchase-order' },
];

export function WorkflowStudio() {
  const [nodes, setNodes] = useState<Block[]>(sampleWorkflow);
  const { toast } = useToast();
  
  const addNode = (type: typeof blockTypes[0]) => {
    setNodes([...nodes, { id: Date.now().toString(), type, title: `New ${type.name}` }]);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-8rem)] animate-fade-in space-y-6">
      
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <h1 className="text-3xl font-bold tracking-tight">Workflow Studio</h1>
            <Badge variant="outline" className="border-brand-yellow bg-yellow-50 text-brand-black">Demo Builder</Badge>
          </div>
          <p className="text-brand-darkGray text-lg">Design AI-powered workflows to automate repetitive analysis.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" onClick={() => toast({ title: 'Settings', message: 'Settings panel would open here.', type: 'info' })}><Settings className="w-4 h-4 mr-2" /> Settings</Button>
          <Button variant="secondary" onClick={() => toast({ title: 'Draft Saved', message: 'Draft saved successfully!', type: 'success' })}><Save className="w-4 h-4 mr-2" /> Save Draft</Button>
          <Button onClick={() => toast({ title: 'Test Run Started', message: 'Starting workflow test run...', type: 'success' })}><Play className="w-4 h-4 mr-2" /> Run Test</Button>
        </div>
      </div>

      <div className="flex flex-1 gap-6 overflow-hidden">
        
        {/* Toolbox */}
        <Card className="w-72 flex flex-col h-full bg-white">
          <CardHeader className="bg-brand-lightGray border-b border-brand-gray py-4">
            <CardTitle className="text-lg">Blocks</CardTitle>
            <CardDescription>Click to add to workflow</CardDescription>
          </CardHeader>
          <CardContent className="p-4 flex-1 overflow-y-auto space-y-3">
            {blockTypes.map((block) => (
              <button 
                key={block.id}
                onClick={() => addNode(block)}
                className="w-full flex items-center gap-3 p-3 rounded-md border border-brand-gray hover:border-brand-charcoal hover:shadow-sm transition-all bg-white text-left group"
              >
                <div className={`p-2 rounded-md border ${block.color}`}>
                  <block.icon className="w-4 h-4" />
                </div>
                <span className="font-medium text-sm text-brand-black group-hover:text-brand-yellow transition-colors">{block.name}</span>
              </button>
            ))}
          </CardContent>
        </Card>

        {/* Canvas */}
        <Card className="flex-1 h-full bg-[#f8f9fa] border-2 border-dashed border-gray-300 relative overflow-y-auto">
          <div className="absolute top-4 left-4 flex items-center gap-2 text-sm text-brand-darkGray bg-white p-2 rounded-md border border-brand-gray shadow-sm">
            <AlertCircle className="w-4 h-4" />
            <span>Prototype: Drag-and-drop functionality disabled in this demo.</span>
          </div>

          <div className="py-16 flex flex-col items-center">
            {nodes.map((node, index) => (
              <React.Fragment key={node.id}>
                {/* Node Card */}
                <div className={`w-80 p-4 rounded-lg border-2 shadow-sm bg-white relative ${node.type.color.replace('bg-', 'border-').split(' ')[2]}`}>
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`p-1.5 rounded-md ${node.type.color}`}>
                      <node.type.icon className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-brand-darkGray">{node.type.name}</p>
                    </div>
                  </div>
                  <h4 className="font-semibold text-brand-black">{node.title}</h4>
                  {node.config && <p className="text-xs text-gray-500 mt-2 font-mono bg-gray-50 p-1.5 rounded border border-gray-100 truncate">{node.config}</p>}
                </div>

                {/* Connector */}
                {index < nodes.length - 1 && (
                  <div className="flex flex-col items-center my-2">
                    <div className="w-0.5 h-6 bg-brand-gray"></div>
                    <ArrowDown className="w-4 h-4 text-brand-gray -mt-1" />
                  </div>
                )}
              </React.Fragment>
            ))}

            {/* Add Node Button Placeholder at bottom */}
            <div className="flex flex-col items-center mt-2">
              <div className="w-0.5 h-6 bg-brand-gray border-dashed"></div>
              <button className="w-12 h-12 rounded-full border-2 border-dashed border-brand-gray flex items-center justify-center text-brand-darkGray hover:border-brand-yellow hover:text-brand-yellow transition-colors mt-2 bg-white">
                <Plus className="w-6 h-6" />
              </button>
            </div>
          </div>
        </Card>
      </div>

    </div>
  );
}
