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
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (viewingResource) {
      setIsResourceLoaded(false);
      setIsVideoPlaying(false);
      const timer = setTimeout(() => setIsResourceLoaded(true), 1500);
      return () => clearTimeout(timer);
    }
  }, [viewingResource]);

  const handleDownload = (filename: string) => {
    toast({ title: 'Download Started', message: `Downloading ${filename}...`, type: 'success' });
    
    // A minimal valid PDF structure in base64
    const base64PDF = 'JVBERi0xLjcKCjEgMCBvYmogICUgZW50cnkgcG9pbnQKPDwKICAvVHlwZSAvQ2F0YWxvZwogIC9QYWdlcyAyIDAgUgo+PgplbmRvYmoKCjIgMCBvYmoKPDwKICAvVHlwZSAvUGFnZXMKICAvTWVkaWFCb3ggWyAwIDAgMjAwIDIwMCBdCiAgL0NvdW50IDEKICAvS2lkcyBbIDMgMCBSIF0KPj4KZW5kb2JqCgozIDAgb2JqCjw8CiAgL1R5cGUgL1BhZ2UKICAvUGFyZW50IDIgMCBSCiAgL1Jlc291cmNlcyA8PAogICAgL0ZvbnQgPDwKICAgICAgL0YxIDQgMCBSCj4+CiAgPj4KICAvQ29udGVudHMgNSAwIFIKPj4KZW5kb2JqCgo0IDAgb2JqCjw8CiAgL1R5cGUgL0ZvbnQKICAvU3VidHlwZSAvVHlwZTEKICAvQmFzZUZvbnQgL1RpbWVzLVJvbWFuCj4+CmVuZG9iagoKNSAwIG9iago8PAogIC9MZW5ndGggNjgKPj4Kc3RyZWFtCkJUCi9GMSAxOCBUZgowIDAgMCByZwo1MCAxNTAgVGQKKENTVGVjaCBTYW1wbGUgUERGKSBUagpFVAplbmRzdHJlYW0KZW5kb2JqCgp4cmVmCjAgNgowMDAwMDAwMDAwIDY1NTM1IGYgCjAwMDAwMDAwMTAgMDAwMDAgbiAKMDAwMDAwMDA2NyAwMDAwMCBuIAowMDAwMDAwMTQxIDAwMDAwIG4gCjAwMDAwMDAyNDggMDAwMDAgbiAKMDAwMDAwMDMzNiAwMDAwMCBuIAp0cmFpbGVyCjw8CiAgL1NpemUgNgogIC9Sb290IDEgMCBSCj4+CnN0YXJ0eHJlZgo0NTYKJSVFT0YK';
    const byteCharacters = atob(base64PDF);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = filename.replace(/\s+/g, '_').toLowerCase() + '.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

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
                    handleDownload(res.title);
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
                  <p className="text-brand-darkGray mb-8 max-w-md">{viewingResource.desc}</p>
                  
                  <div className="w-full max-w-4xl bg-white p-0 rounded-lg shadow-sm border border-brand-gray text-left animate-fade-in flex flex-col overflow-hidden">
                    {viewingResource.type === 'Video' || viewingResource.type === 'Webinar' ? (
                      <div className="w-full aspect-video bg-black relative flex items-center justify-center group cursor-pointer" onClick={() => setIsVideoPlaying(true)}>
                        {!isVideoPlaying ? (
                          <>
                            <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Video thumbnail" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-30 transition-opacity" />
                            <div className="w-20 h-20 bg-brand-yellow rounded-full flex items-center justify-center z-10 shadow-lg transform group-hover:scale-110 transition-transform">
                              <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[24px] border-l-black border-b-[12px] border-b-transparent ml-2"></div>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                               <div className="flex items-center gap-4 text-white text-sm font-medium">
                                  <span>02:14</span>
                                  <div className="h-1.5 flex-1 bg-white/30 rounded-full overflow-hidden cursor-pointer relative">
                                     <div className="absolute top-0 left-0 bottom-0 bg-brand-yellow w-1/3"></div>
                                     <div className="absolute top-1/2 -translate-y-1/2 left-1/3 w-3 h-3 bg-white rounded-full shadow"></div>
                                  </div>
                                  <span>15:30</span>
                               </div>
                            </div>
                          </>
                        ) : (
                          <video controls autoPlay className="w-full h-full object-cover outline-none bg-black">
                             <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4" type="video/mp4" />
                             Your browser does not support the video tag.
                          </video>
                        )}
                      </div>
                    ) : (
                      <div className="p-8 md:p-12 bg-white max-h-[65vh] overflow-y-auto">
                        <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-100">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-brand-black text-brand-yellow rounded flex items-center justify-center font-bold text-xl">CS</div>
                            <div>
                               <p className="font-bold text-brand-black leading-tight">CSTech Global</p>
                               <p className="text-xs text-brand-darkGray">Internal Knowledge Base</p>
                            </div>
                          </div>
                          <span className="text-xs font-mono text-brand-darkGray bg-gray-100 px-3 py-1 rounded">DOC-{(Math.random() * 100000).toFixed(0)}</span>
                        </div>
                        
                        <h1 className="text-3xl font-bold text-brand-black mb-4">{viewingResource.title}</h1>
                        <p className="text-lg text-brand-darkGray mb-8 leading-relaxed">{viewingResource.desc}</p>
                        
                        <div className="space-y-6 text-gray-700">
                           <h2 className="text-xl font-semibold text-brand-black border-b border-gray-100 pb-2">1. Overview & Context</h2>
                           <p className="leading-relaxed">This document serves as the primary reference material for {viewingResource.title.toLowerCase()}. It outlines the core principles, necessary context, and actionable steps required to implement these strategies effectively within the CSTech manufacturing environment. Please ensure all team members review this material before proceeding with integration.</p>
                           
                           <h2 className="text-xl font-semibold text-brand-black border-b border-gray-100 pb-2 pt-4">2. Implementation Framework</h2>
                           <div className="bg-gray-50 p-6 rounded-lg border border-brand-gray">
                              <ul className="list-disc pl-5 space-y-3">
                                <li><strong>Establish Objectives:</strong> Define clear success criteria for the AI enablement initiative.</li>
                                <li><strong>Stakeholder Alignment:</strong> Identify key personnel across procurement, supply chain, and design.</li>
                                <li><strong>Feedback Loops:</strong> Implement monitoring to track efficiency gains and model accuracy.</li>
                                <li><strong>Security Compliance:</strong> Ensure strict adherence to CSTech data governance and privacy policies.</li>
                              </ul>
                           </div>
                           
                           <h2 className="text-xl font-semibold text-brand-black border-b border-gray-100 pb-2 pt-4">3. Next Steps</h2>
                           <p className="leading-relaxed">After reviewing this material, proceed to the corresponding lab in the Department Labs section to complete the practical exercises. For further assistance or clarification on these policies, please contact the IT Enablement team or refer to the internal knowledge base.</p>
                        </div>
                      </div>
                    )}
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
