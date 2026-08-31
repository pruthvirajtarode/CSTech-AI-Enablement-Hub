import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { CheckCircle2, PlayCircle, Lock, Trophy, Zap, Star } from 'lucide-react';
import { useToast } from '../components/ui/Toast';
import { motion, AnimatePresence } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, CartesianGrid } from 'recharts';

const initialModules = [
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

const barData = [
  { name: 'Data Entry', Traditional: 120, AI: 15 },
  { name: 'RFQ Analysis', Traditional: 240, AI: 30 },
  { name: 'Report Gen', Traditional: 180, AI: 10 },
];

const pieData = [
  { name: 'Text Generation', value: 45 },
  { name: 'Data Analysis', value: 30 },
  { name: 'Code/Scripts', value: 15 },
  { name: 'Image/Audio', value: 10 },
];
const COLORS = ['#F5A623', '#4A90E2', '#50E3C2', '#9B9B9B'];

const lineData = [
  { context: 'None', quality: 20 },
  { context: 'Brief', quality: 45 },
  { context: 'Detailed', quality: 75 },
  { context: 'Full Docs', quality: 95 },
];

export function AIFoundations() {
  const { toast } = useToast();
  const [modules, setModules] = useState(initialModules);
  const [selectedModule, setSelectedModule] = useState(modules[3]);
  const [xp, setXp] = useState(450);
  const [showLevelUp, setShowLevelUp] = useState(false);

  const completedCount = modules.filter(m => m.status === 'completed').length;
  const progress = Math.round((completedCount / modules.length) * 100);

  const handleNext = () => {
    const currentIndex = modules.findIndex(m => m.id === selectedModule.id);
    
    // Mark current as completed if it was 'current'
    if (selectedModule.status === 'current') {
      const newModules = [...modules];
      newModules[currentIndex].status = 'completed';
      
      // Unlock next
      if (currentIndex < modules.length - 1 && newModules[currentIndex + 1].status === 'locked') {
        newModules[currentIndex + 1].status = 'current';
      }
      
      setModules(newModules);
      setXp(prev => prev + 150);
      setShowLevelUp(true);
      setTimeout(() => setShowLevelUp(false), 3000);
      toast({ title: '+150 XP Earned!', message: 'Module completed successfully.', type: 'success' });
    }

    if (currentIndex < modules.length - 1) {
      setSelectedModule(modules[currentIndex + 1]);
    }
  };

  const handlePrev = () => {
    const currentIndex = modules.findIndex(m => m.id === selectedModule.id);
    if (currentIndex > 0) {
      setSelectedModule(modules[currentIndex - 1]);
    }
  };

  const renderModuleContent = (id: number) => {
    switch(id) {
      case 1:
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="text-lg text-brand-black mb-6 leading-relaxed">
              Artificial Intelligence is a broad field of computer science focused on creating systems capable of performing tasks that typically require human intelligence. Let's look at the hard data.
            </p>
            <div className="bg-gray-50 p-6 rounded-xl border border-brand-gray mb-8">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2"><Zap className="text-brand-yellow w-5 h-5"/> Time Saved: Traditional vs AI (Minutes)</h3>
              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={barData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} />
                    <YAxis axisLine={false} tickLine={false} />
                    <Tooltip cursor={{fill: '#F1F5F9'}} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                    <Bar dataKey="Traditional" fill="#94A3B8" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="AI" fill="#F5A623" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </motion.div>
        );
      case 2:
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="text-lg text-brand-black mb-6 leading-relaxed">
              Generative AI models are incredibly versatile. While most people associate them with chatbots, their enterprise utility spans across multiple domains.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-gray-50 p-6 rounded-xl border border-brand-gray mb-8">
              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={pieData} cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                      {pieData.map((_, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Enterprise LLM Distribution</h3>
                <ul className="space-y-3">
                  {pieData.map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[i] }}></div>
                      <span className="font-medium text-brand-black">{item.name}</span>
                      <span className="text-brand-darkGray ml-auto">{item.value}%</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        );
      case 3:
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="text-lg text-brand-black mb-6 leading-relaxed">
              The quality of an AI's output is directly proportional to the context you provide. Think of it as onboarding a highly intelligent intern who knows nothing about your company.
            </p>
            <div className="bg-gray-50 p-6 rounded-xl border border-brand-gray mb-8">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2"><Star className="text-brand-yellow w-5 h-5"/> Output Quality vs Context Length</h3>
              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={lineData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                    <XAxis dataKey="context" axisLine={false} tickLine={false} />
                    <YAxis axisLine={false} tickLine={false} domain={[0, 100]} />
                    <Tooltip cursor={{stroke: '#E2E8F0', strokeWidth: 2}} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                    <Line type="monotone" dataKey="quality" stroke="#F5A623" strokeWidth={4} dot={{ r: 6, fill: '#F5A623', strokeWidth: 0 }} activeDot={{ r: 8 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </motion.div>
        );
      case 4:
      default:
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="text-lg text-brand-black mb-6">
              Writing good prompts is the most important skill for interacting with AI effectively. Stop asking simple questions and expecting complex results. Use this framework: <strong>ROLE + CONTEXT + TASK + CONSTRAINTS + OUTPUT FORMAT</strong>
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              <Card className="bg-brand-black text-brand-white border-none transform transition-transform hover:scale-[1.02]">
                <CardHeader>
                  <Badge variant="destructive" className="w-fit mb-2">Bad Prompt</Badge>
                  <CardTitle className="text-brand-white">"Analyze this quotation."</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 text-sm">
                    This gives the AI no context, no specific role to play, and no format for the output. The AI will guess what you want.
                  </p>
                </CardContent>
              </Card>
    
              <Card className="bg-brand-yellow border-none text-brand-black transform transition-transform hover:scale-[1.02]">
                <CardHeader>
                  <Badge variant="default" className="w-fit mb-2">Good Prompt</Badge>
                  <CardTitle className="text-brand-black font-bold">
                    "You are a procurement analyst. Compare the attached supplier quotations. Identify price differences and delivery terms. Return the result as a table."
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-brand-charcoal text-sm font-medium">
                    This clearly defines the Role, Task, Context, and Output Format.
                  </p>
                </CardContent>
              </Card>
            </div>
    
            <h3 className="text-xl mt-12 mb-4 font-bold text-brand-black flex items-center gap-2"><Trophy className="text-brand-yellow"/> Interactive Quiz</h3>
            <Card className="bg-white border-2 border-brand-yellow shadow-sm overflow-hidden">
              <div className="h-1 w-full bg-brand-yellow"></div>
              <CardContent className="p-8">
                <p className="font-bold mb-4 text-brand-black text-lg">Your turn: Rewrite the following prompt to be more specific for a CSTech engineering task.</p>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-6">
                  <p className="italic text-brand-darkGray">Original: "Summarize this document about leveling rods."</p>
                </div>
                
                <textarea 
                  className="w-full p-4 rounded-xl border-2 border-gray-200 mb-6 text-sm focus:border-brand-yellow focus:ring-4 focus:ring-brand-yellow/20 focus:outline-none transition-all resize-none shadow-inner"
                  rows={4}
                  placeholder="Enter your improved prompt using the ROLE + CONTEXT + TASK framework..."
                ></textarea>
                
                <div className="flex justify-between items-center bg-gray-50 -m-8 p-4 px-8 mt-4 border-t border-gray-100">
                  <span className="text-sm font-medium text-brand-darkGray">Reward: +150 XP</span>
                  <Button size="lg" className="px-8 shadow-md" onClick={() => toast({ title: 'Quiz Passed!', message: 'Excellent use of constraints and formatting.', type: 'success' })}>Submit Answer</Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        );
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 animate-fade-in h-[calc(100vh-8rem)]">
      
      {/* Sidebar / Module List */}
      <div className="w-full lg:w-1/3 flex flex-col h-full overflow-hidden bg-white border border-brand-gray rounded-2xl shadow-sm relative">
        <AnimatePresence>
          {showLevelUp && (
            <motion.div 
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-4 left-4 right-4 z-50 bg-gradient-to-r from-brand-yellow to-yellow-400 text-black font-bold p-3 rounded-lg shadow-lg flex items-center justify-center gap-2"
            >
              <Trophy className="w-5 h-5" /> Level Up! Modules Unlocked!
            </motion.div>
          )}
        </AnimatePresence>

        <div className="p-6 border-b border-brand-gray bg-gray-50">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl font-bold">AI Foundations</h2>
            <Badge variant="outline" className="bg-brand-black text-brand-yellow font-bold text-sm px-3 py-1 flex items-center gap-1">
              <Star className="w-4 h-4 fill-brand-yellow"/> {xp} XP
            </Badge>
          </div>
          <div className="flex items-center justify-between text-sm font-medium text-brand-darkGray mb-2">
            <span>Overall Progress</span>
            <span>{progress}%</span>
          </div>
          <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden shadow-inner">
            <motion.div 
              className="bg-brand-yellow h-full" 
              initial={{ width: 0 }} 
              animate={{ width: `${progress}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4 space-y-2 custom-scrollbar">
          {modules.map((mod) => (
            <motion.button
              key={mod.id}
              whileHover={mod.status !== 'locked' ? { scale: 1.02 } : {}}
              whileTap={mod.status !== 'locked' ? { scale: 0.98 } : {}}
              onClick={() => mod.status !== 'locked' && setSelectedModule(mod)}
              className={`w-full text-left p-4 rounded-xl flex items-start gap-4 transition-all duration-200 ${
                selectedModule.id === mod.id 
                  ? 'bg-brand-black text-white shadow-md' 
                  : mod.status === 'locked'
                    ? 'bg-gray-50 opacity-60 cursor-not-allowed border border-transparent'
                    : 'bg-white border border-gray-200 hover:border-brand-yellow hover:shadow-sm'
              }`}
            >
              <div className="mt-1 flex-shrink-0">
                {mod.status === 'completed' && <CheckCircle2 className={`w-5 h-5 ${selectedModule.id === mod.id ? 'text-brand-yellow' : 'text-green-500'}`} />}
                {mod.status === 'current' && <PlayCircle className={`w-5 h-5 ${selectedModule.id === mod.id ? 'text-brand-yellow' : 'text-blue-500'}`} />}
                {mod.status === 'locked' && <Lock className="w-5 h-5 text-gray-400" />}
              </div>
              <div>
                <p className={`font-bold ${
                  selectedModule.id === mod.id 
                    ? 'text-white' 
                    : mod.status === 'locked' ? 'text-gray-500' : 'text-gray-900'
                }`}>
                  Module {String(mod.id).padStart(2, '0')}: {mod.title}
                </p>
                <p className={`text-xs mt-1 line-clamp-1 ${selectedModule.id === mod.id ? 'text-gray-300' : 'text-gray-500'}`}>
                  {mod.desc}
                </p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-full overflow-y-auto bg-white border border-brand-gray rounded-2xl shadow-sm relative">
        {selectedModule.status === 'locked' ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center p-8 bg-gray-50">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }} 
              animate={{ scale: 1, opacity: 1 }}
              className="w-24 h-24 bg-white rounded-full shadow-md flex items-center justify-center mb-6 border border-gray-200"
            >
              <Lock className="w-10 h-10 text-gray-400" />
            </motion.div>
            <h3 className="text-2xl font-bold mb-3">Module Locked</h3>
            <p className="text-gray-500 max-w-md text-lg leading-relaxed">
              Earn more XP and complete the previous modules to unlock this advanced content.
            </p>
          </div>
        ) : (
          <div className="p-8 md:p-12 flex flex-col h-full relative">
            <div className="flex items-center gap-3 mb-6">
              <Badge variant="outline" className="bg-gray-100 border-none px-3 py-1 font-bold text-gray-700">Module {String(selectedModule.id).padStart(2, '0')}</Badge>
              {selectedModule.status === 'completed' && <Badge className="bg-green-100 text-green-700 hover:bg-green-200 border-none">Completed</Badge>}
            </div>
            
            <h2 className="text-4xl font-extrabold mb-8 text-brand-black tracking-tight">{selectedModule.title}</h2>
            
            <div className="flex-1">
              {renderModuleContent(selectedModule.id)}
            </div>

            <div className="mt-12 pt-8 border-t border-gray-100 flex justify-between items-center bg-white sticky bottom-0 z-10 py-4">
              <Button variant="outline" size="lg" onClick={handlePrev} disabled={selectedModule.id === 1} className="font-bold">
                Previous Module
              </Button>
              <Button 
                size="lg" 
                onClick={handleNext} 
                className={`font-bold px-8 shadow-md ${selectedModule.status === 'completed' ? 'bg-brand-black text-white' : 'bg-brand-yellow text-black hover:bg-yellow-400'}`}
              >
                {selectedModule.status === 'completed' ? 'Next Module' : 'Complete & Earn XP'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
