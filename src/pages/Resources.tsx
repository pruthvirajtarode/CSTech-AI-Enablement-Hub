import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { Book, Video, FileText, Download, ExternalLink, Clock } from 'lucide-react';

const resources = [
  { id: 1, title: 'CSTech AI Policy 2026', category: 'Responsible AI', type: 'PDF', time: '5 mins', difficulty: 'Beginner', desc: 'The official internal guidelines for using generative AI tools securely at CSTech.' },
  { id: 2, title: 'Prompt Engineering Cheatsheet', category: 'Prompting', type: 'Document', time: '10 mins', difficulty: 'Beginner', desc: 'A quick reference guide for the ROLE + CONTEXT + TASK framework.' },
  { id: 3, title: 'Analyzing RFQs with AI', category: 'Procurement', type: 'Video', time: '15 mins', difficulty: 'Intermediate', desc: 'A walkthrough video showing how to use the Procurement AI lab for comparing supplier quotes.' },
  { id: 4, title: 'Extracting BOM from Specs', category: 'Design', type: 'Guide', time: '20 mins', difficulty: 'Advanced', desc: 'Learn how to construct multi-step prompts to generate Bill of Materials from raw technical specifications.' },
  { id: 5, title: 'AI in Supply Chain Logistics', category: 'Supply Chain', type: 'External Article', time: '12 mins', difficulty: 'Intermediate', desc: 'McKinsey report on how predictive AI is transforming manufacturing supply chains.' },
  { id: 6, title: 'Automating ERP Data Entry', category: 'ERP + AI', type: 'Webinar', time: '45 mins', difficulty: 'Advanced', desc: 'Recording of the Q3 townhall demonstrating our upcoming AI-to-ERP integration pilot.' },
];

export function Resources() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Resource Library</h1>
          <p className="text-brand-darkGray text-lg">Guides, policies, and templates to support your AI journey.</p>
        </div>
        
        <div className="flex gap-2">
          <select className="p-2 border border-brand-gray rounded-md text-sm bg-white focus:outline-none focus:ring-1 focus:ring-brand-yellow">
            <option>All Categories</option>
            <option>Procurement</option>
            <option>Supply Chain</option>
            <option>Prompting</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map(res => (
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
                <Button variant="outline" className="w-full">
                  {res.type === 'PDF' ? <><Download className="w-4 h-4 mr-2" /> Download File</> : 'Open Resource'}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
