import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { CheckCircle2, PlayCircle, Lock } from 'lucide-react';

const modules = [
  { id: 1, title: 'What is AI?', desc: 'AI vs traditional software & automation.', status: 'completed' },
  { id: 2, title: 'Understanding Generative AI', desc: 'How LLMs and AI assistants actually work.', status: 'completed' },
  { id: 3, title: 'Intro to AI Assistants', desc: 'Asking questions, giving context.', status: 'completed' },
  { id: 4, title: 'Prompting Fundamentals', desc: 'ROLE + CONTEXT + TASK + CONSTRAINTS', status: 'current' },
  { id: 5, title: 'Advanced Prompting', desc: 'Few-shot examples, structured output.', status: 'locked' },
  { id: 6, title: 'AI + Documents', desc: 'Working with PDFs, policies, quotations.', status: 'locked' },
  { id: 7, title: 'AI + Excel / Data', desc: 'Data cleaning, trends, management summaries.', status: 'locked' },
  { id: 8, title: 'AI Research', desc: 'Evaluating sources, avoiding hallucinations.', status: 'locked' },
  { id: 9, title: 'AI for Communication', desc: 'Drafting emails, meeting summaries.', status: 'locked' },
  { id: 10, title: 'Responsible AI', desc: 'Data privacy, security, IP boundaries.', status: 'locked' },
  { id: 11, title: 'AI at Work', desc: 'Decision support and process improvement.', status: 'locked' },
  { id: 12, title: 'AI Readiness', desc: 'Final foundation assessment.', status: 'locked' }
];

export function AIFoundations() {
  const [selectedModule, setSelectedModule] = useState(modules[3]);

  return (
    <div className="flex flex-col lg:flex-row gap-8 animate-fade-in h-[calc(100vh-8rem)]">
      
      {/* Sidebar / Module List */}
      <div className="w-full lg:w-1/3 flex flex-col h-full overflow-hidden bg-white border border-brand-gray rounded-xl shadow-sm">
        <div className="p-6 border-b border-brand-gray">
          <h2 className="text-xl font-bold mb-2">AI Foundations</h2>
          <div className="flex items-center justify-between text-sm text-brand-darkGray mb-2">
            <span>Progress: 25%</span>
            <span>3/12 Completed</span>
          </div>
          <div className="w-full bg-brand-lightGray h-2 rounded-full overflow-hidden">
            <div className="bg-brand-black h-full w-1/4"></div>
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto p-2 space-y-1">
          {modules.map((mod) => (
            <button
              key={mod.id}
              onClick={() => setSelectedModule(mod)}
              className={`w-full text-left p-4 rounded-lg flex items-start gap-4 transition-colors ${
                selectedModule.id === mod.id ? 'bg-brand-lightGray border border-brand-gray' : 'hover:bg-gray-50 border border-transparent'
              }`}
            >
              <div className="mt-0.5">
                {mod.status === 'completed' && <CheckCircle2 className="w-5 h-5 text-green-600" />}
                {mod.status === 'current' && <PlayCircle className="w-5 h-5 text-brand-yellow" />}
                {mod.status === 'locked' && <Lock className="w-5 h-5 text-brand-gray" />}
              </div>
              <div>
                <p className={`font-medium ${mod.status === 'locked' ? 'text-brand-darkGray' : 'text-brand-black'}`}>
                  Module {String(mod.id).padStart(2, '0')}: {mod.title}
                </p>
                <p className="text-xs text-brand-darkGray mt-1 line-clamp-1">{mod.desc}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-full overflow-y-auto bg-white border border-brand-gray rounded-xl shadow-sm">
        {selectedModule.status === 'locked' ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center p-8">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <Lock className="w-8 h-8 text-brand-gray" />
            </div>
            <h3 className="text-xl font-bold mb-2">Module Locked</h3>
            <p className="text-brand-darkGray max-w-md">
              Complete the previous modules to unlock this content. We build your AI capability step by step.
            </p>
          </div>
        ) : (
          <div className="p-8">
            <Badge variant="outline" className="mb-4">Module {String(selectedModule.id).padStart(2, '0')}</Badge>
            <h2 className="text-3xl font-bold mb-6">{selectedModule.title}</h2>
            
            <div className="prose prose-sm max-w-none prose-headings:font-semibold text-brand-charcoal">
              <p className="text-lg text-brand-black">
                In this module, you will learn the fundamental structure of a high-quality prompt. 
                Writing good prompts is the most important skill for interacting with AI effectively.
              </p>

              <h3 className="text-xl mt-8 mb-4 font-bold text-brand-black">The Framework</h3>
              <p>Stop asking simple questions and expecting complex results. Use this framework:</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                <Card className="bg-brand-black text-brand-white border-none">
                  <CardHeader>
                    <Badge variant="secondary" className="w-fit mb-2 text-red-600 bg-red-100">Bad Prompt</Badge>
                    <CardTitle className="text-brand-white">"Analyze this quotation."</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400 text-sm">
                      This gives the AI no context, no specific role to play, and no format for the output. The AI will guess what you want.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-brand-yellow border-none text-brand-black">
                  <CardHeader>
                    <Badge variant="default" className="w-fit mb-2">Good Prompt</Badge>
                    <CardTitle className="text-brand-black font-bold">
                      "You are a procurement analyst. Compare the attached supplier quotations. Identify price differences and delivery terms. Return the result as a table."
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-brand-charcoal text-sm">
                      This defines the Role, Task, Context, and Output Format.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-xl mt-8 mb-4 font-bold text-brand-black">Interactive "Try It"</h3>
              <Card className="bg-brand-lightGray border-brand-gray">
                <CardContent className="p-6">
                  <p className="font-semibold mb-4 text-brand-black">Your turn: Rewrite the following prompt to be more specific for a CSTech engineering task.</p>
                  <p className="italic text-brand-darkGray mb-4">Original: "Summarize this document about leveling rods."</p>
                  
                  <textarea 
                    className="w-full p-4 rounded-md border border-brand-gray mb-4 text-sm focus:ring-2 focus:ring-brand-yellow focus:outline-none"
                    rows={4}
                    placeholder="Enter your improved prompt using the framework..."
                  ></textarea>
                  
                  <div className="flex justify-end">
                    <Button>Submit Answer</Button>
                  </div>
                </CardContent>
              </Card>

            </div>

            <div className="mt-12 pt-6 border-t border-brand-gray flex justify-between items-center">
              <Button variant="outline">Previous Module</Button>
              <Button>Complete & Continue</Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
