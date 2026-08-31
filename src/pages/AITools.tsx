import { useState } from 'react';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { 
  FileText, Mail, FileJson, Search, Table, 
  ListChecks, ArrowRightLeft, FileBarChart, PenTool, ClipboardList,
  Sparkles, Copy, Download, RefreshCw, AlertCircle
} from 'lucide-react';

const tools = [
  { id: 't1', name: 'Document Summarizer', icon: FileText, category: 'General' },
  { id: 't2', name: 'Email Assistant', icon: Mail, category: 'Communication' },
  { id: 't3', name: 'Meeting Summarizer', icon: FileJson, category: 'Communication' },
  { id: 't4', name: 'Research Assistant', icon: Search, category: 'General' },
  { id: 't5', name: 'Excel/Data Analyzer', icon: Table, category: 'Analysis' },
  { id: 't6', name: 'Requirement Extractor', icon: ListChecks, category: 'Engineering' },
  { id: 't7', name: 'Comparison Assistant', icon: ArrowRightLeft, category: 'Procurement' },
  { id: 't8', name: 'Report Generator', icon: FileBarChart, category: 'Management' },
  { id: 't9', name: 'Prompt Generator', icon: PenTool, category: 'General' },
  { id: 't10', name: 'Action Item Generator', icon: ClipboardList, category: 'Productivity' }
];

export function AITools() {
  const [selectedTool, setSelectedTool] = useState(tools[0]);
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleProcess = () => {
    if (!input.trim()) return;
    setIsProcessing(true);
    setOutput('');
    
    // Simulate AI processing
    setTimeout(() => {
      setOutput(`[DEMO OUTPUT: ${selectedTool.name}]\n\nBased on the input provided, here is the generated result. This is a simulated response designed to demonstrate the capability of the AI Enablement Hub.\n\n- Key Point 1\n- Key Point 2\n- Action Item: Review the attached document.`);
      setIsProcessing(false);
    }, 2000);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 animate-fade-in h-[calc(100vh-8rem)]">
      
      {/* Tools Library */}
      <div className="w-full lg:w-1/3 flex flex-col h-full bg-white border border-brand-gray rounded-xl shadow-sm">
        <div className="p-6 border-b border-brand-gray">
          <h2 className="text-xl font-bold mb-2">Practical AI Tools</h2>
          <p className="text-sm text-brand-darkGray">Ready-to-use AI workflows for daily tasks.</p>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4 space-y-2">
          {tools.map((tool) => (
            <button
              key={tool.id}
              onClick={() => {
                setSelectedTool(tool);
                setInput('');
                setOutput('');
              }}
              className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all text-left ${
                selectedTool.id === tool.id 
                  ? 'bg-brand-black text-brand-white shadow-md' 
                  : 'bg-white text-brand-black hover:bg-brand-lightGray border border-transparent hover:border-brand-gray'
              }`}
            >
              <div className={`p-2 rounded-md ${selectedTool.id === tool.id ? 'bg-brand-charcoal text-brand-yellow' : 'bg-brand-lightGray text-brand-darkGray'}`}>
                <tool.icon className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <p className="font-medium">{tool.name}</p>
                <p className={`text-xs ${selectedTool.id === tool.id ? 'text-gray-400' : 'text-brand-darkGray'}`}>{tool.category}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Tool Workspace */}
      <div className="flex-1 flex flex-col h-full bg-white border border-brand-gray rounded-xl shadow-sm overflow-hidden">
        <div className="p-6 border-b border-brand-gray flex justify-between items-center bg-brand-lightGray">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-brand-yellow rounded-md text-brand-black">
              <selectedTool.icon className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold">{selectedTool.name}</h2>
              <Badge variant="secondary" className="mt-1">{selectedTool.category}</Badge>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm text-brand-darkGray">
            <AlertCircle className="w-4 h-4" />
            <span>Data is not stored permanently.</span>
          </div>
        </div>

        <div className="flex-1 flex flex-col p-6 overflow-y-auto space-y-6">
          <div className="flex-1 flex flex-col">
            <label className="block text-sm font-semibold mb-2 text-brand-black">Input Content or Context</label>
            <textarea 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Paste the document text, email, or data you want the AI to process..."
              className="w-full flex-1 min-h-[150px] p-4 border border-brand-gray rounded-md resize-none focus:ring-2 focus:ring-brand-yellow focus:outline-none"
            ></textarea>
            <div className="mt-4 flex justify-end">
              <Button onClick={handleProcess} disabled={isProcessing || !input.trim()}>
                <Sparkles className="w-4 h-4 mr-2" />
                {isProcessing ? 'Processing...' : 'Generate Output'}
              </Button>
            </div>
          </div>

          <div className="flex-1 flex flex-col">
            <label className="block text-sm font-semibold mb-2 text-brand-black">AI Output <Badge variant="outline" className="ml-2 text-xs">DEMO RESPONSE</Badge></label>
            <div className={`w-full flex-1 min-h-[200px] p-4 border rounded-md relative ${output ? 'border-brand-gray bg-gray-50' : 'border-dashed border-gray-300 bg-white flex items-center justify-center'}`}>
              
              {isProcessing ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/80">
                  <RefreshCw className="w-8 h-8 text-brand-yellow animate-spin mb-4" />
                  <p className="text-brand-darkGray font-medium text-sm">Processing with Demo Model...</p>
                </div>
              ) : output ? (
                <div className="whitespace-pre-wrap text-sm text-brand-charcoal h-full overflow-y-auto pb-12">
                  {output}
                </div>
              ) : (
                <p className="text-brand-darkGray text-sm">Output will appear here.</p>
              )}

              {output && !isProcessing && (
                <div className="absolute bottom-4 right-4 flex gap-2">
                  <Button variant="outline" size="sm" onClick={() => setOutput('')}>
                    <RefreshCw className="w-4 h-4 mr-2" /> Regenerate
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => navigator.clipboard.writeText(output)}>
                    <Copy className="w-4 h-4 mr-2" /> Copy
                  </Button>
                  <Button variant="secondary" size="sm">
                    <Download className="w-4 h-4 mr-2" /> Download
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
