import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { Book, Video, FileText, Download, ExternalLink, Clock, X, Loader2 } from 'lucide-react';
import { useToast } from '../components/ui/Toast';

const resources = [
  { id: 1, title: 'CSTech AI Policy 2026', category: 'Responsible AI', type: 'PDF', time: '5 mins', difficulty: 'Beginner', desc: 'The official internal guidelines for using generative AI tools securely at CSTech.' },
  { id: 2, title: 'Prompt Engineering Cheatsheet', category: 'Prompting', type: 'Document', time: '10 mins', difficulty: 'Beginner', desc: 'A quick reference guide for the ROLE + CONTEXT + TASK framework.' },
  { id: 3, title: 'Analyzing RFQs with AI', category: 'Procurement', type: 'Video', time: '15 mins', difficulty: 'Intermediate', desc: 'A walkthrough video showing how to use the Procurement AI lab for comparing supplier quotes.' },
  { id: 4, title: 'Extracting BOM from Specs', category: 'Design', type: 'Guide', time: '20 mins', difficulty: 'Advanced', desc: 'Learn how to construct multi-step prompts to generate Bill of Materials from raw technical specifications.' },
  { id: 5, title: 'AI in Supply Chain Logistics', category: 'Supply Chain', type: 'External Article', time: '12 mins', difficulty: 'Intermediate', desc: 'McKinsey report on how predictive AI is transforming manufacturing supply chains.' },
  { id: 6, title: 'Automating ERP Data Entry', category: 'ERP + AI', type: 'Webinar', time: '45 mins', difficulty: 'Advanced', desc: 'Recording of the Q3 townhall demonstrating our upcoming AI-to-ERP integration pilot.' },
];

export function Resources() {
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [viewingResource, setViewingResource] = useState<typeof resources[0] | null>(null);
  const [isResourceLoaded, setIsResourceLoaded] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (viewingResource) {
      setIsResourceLoaded(false);
      const timer = setTimeout(() => setIsResourceLoaded(true), 1500);
      return () => clearTimeout(timer);
    }
  }, [viewingResource]);

  const filteredResources = selectedCategory === 'All Categories' 
    ? resources 
    : resources.filter(r => r.category === selectedCategory);

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Resource Library</h1>
          <p className="text-brand-darkGray text-lg">Guides, policies, and templates to support your AI journey.</p>
        </div>
        
        <div className="flex gap-2">
          <select 
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="p-2 border border-brand-gray rounded-md text-sm bg-white focus:outline-none focus:ring-1 focus:ring-brand-yellow"
          >
            <option>All Categories</option>
            <option>Responsible AI</option>
            <option>Procurement</option>
            <option>Supply Chain</option>
            <option>Design</option>
            <option>Prompting</option>
            <option>ERP + AI</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredResources.map(res => (
          <Card key={res.id} className="flex flex-col hover:border-brand-charcoal transition-colors">
            <CardHeader className="pb-4">
              <div className="flex justify-between items-start mb-2">
                <Badge variant="secondary" className="bg-brand-lightGray text-brand-darkGray border-none">{res.category}</Badge>
                {res.type === 'PDF' && <FileText className="w-5 h-5 text-red-500" />}
                {res.type === 'Video' || res.type === 'Webinar' ? <Video className="w-5 h-5 text-blue-500" /> : null}
                {res.type === 'Document' || res.type === 'Guide' ? <Book className="w-5 h-5 text-brand-yellow" /> : null}
                {res.type === 'External Article' && <ExternalLink className="w-5 h-5 text-gray-500" />}
              </div>
              <CardTitle className="text-lg line-clamp-2">{res.title}</CardTitle>
              <div className="flex items-center gap-4 text-xs text-brand-darkGray mt-2">
                <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {res.time}</span>
                <span className="px-1.5 py-0.5 rounded-sm bg-gray-100 border border-gray-200">{res.difficulty}</span>
              </div>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col">
              <p className="text-sm text-brand-charcoal flex-1">{res.desc}</p>
              
              <div className="mt-6 pt-4 border-t border-brand-gray">
                <Button variant="outline" className="w-full" onClick={() => {
                  if (res.type === 'PDF') {
                    toast({ title: 'Download Started', message: `Downloading ${res.title}...`, type: 'info' });
                  } else {
                    setViewingResource(res);
                  }
                }}>
                  {res.type === 'PDF' ? <><Download className="w-4 h-4 mr-2" /> Download File</> : 'Open Resource'}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {viewingResource && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm" onClick={() => setViewingResource(null)}>
          <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl h-[80vh] flex flex-col overflow-hidden text-brand-black border border-brand-gray" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center p-4 border-b border-brand-gray bg-brand-lightGray">
              <div className="flex items-center gap-3">
                <Badge variant="outline">{viewingResource.type}</Badge>
                <h2 className="text-lg font-bold">{viewingResource.title}</h2>
              </div>
              <button onClick={() => setViewingResource(null)} className="text-brand-darkGray hover:text-brand-black transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 bg-gray-100 flex flex-col items-center justify-center relative p-8 text-center">
              <div className="absolute inset-0 bg-grid-brand-gray/5 bg-[size:20px_20px]"></div>
              
              {!isResourceLoaded ? (
                <>
                  <Loader2 className="w-8 h-8 animate-spin text-brand-yellow mb-4" />
                  <p className="text-brand-darkGray font-medium">Loading {viewingResource.type.toLowerCase()} viewer...</p>
                </>
              ) : (
                <div className="flex flex-col items-center animate-fade-in z-10">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm border border-brand-gray">
                     {viewingResource.type === 'Video' || viewingResource.type === 'Webinar' ? 
                       <Video className="w-8 h-8 text-blue-500" /> : 
                       <Book className="w-8 h-8 text-brand-yellow" />
                     }
                  </div>
                  <h3 className="text-2xl font-bold text-brand-black mb-2">{viewingResource.title}</h3>
                  <p className="text-brand-darkGray mb-6 max-w-md">{viewingResource.desc}</p>
                  
                  <div className="p-5 bg-white rounded-lg border border-brand-gray shadow-sm w-full max-w-md">
                    <p className="text-sm text-brand-charcoal mb-4">
                      This is a simulated demo environment. In the full platform, the actual {viewingResource.type.toLowerCase()} content would be securely embedded here for the user to view.
                    </p>
                    <Button onClick={() => setViewingResource(null)} className="w-full">Acknowledge</Button>
                  </div>
                </div>
              )}
            </div>
            <div className="p-4 border-t border-brand-gray bg-gray-50 flex justify-between items-center">
              <span className="text-xs text-brand-darkGray">CSTech Confidential</span>
              <button onClick={() => setViewingResource(null)} className="px-4 py-2 bg-brand-black text-white rounded-md text-sm font-medium hover:bg-gray-800 transition-colors">
                Close Viewer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
