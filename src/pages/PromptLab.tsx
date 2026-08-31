import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { Sparkles, TerminalSquare, Copy, CheckCircle2 } from 'lucide-react';

export function PromptLab() {
  const [role, setRole] = useState('');
  const [context, setContext] = useState('');
  const [task, setTask] = useState('');
  const [constraints, setConstraints] = useState('');
  const [outputFormat, setOutputFormat] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [response, setResponse] = useState('');
  const [copied, setCopied] = useState(false);

  // Demo Scoring System
  const getScore = (text: string) => Math.min(100, Math.max(0, text.length > 10 ? 90 : text.length * 5));
  
  const clarity = getScore(task);
  const contextScore = getScore(context);
  const specificity = getScore(constraints);
  const outputDef = getScore(outputFormat);
  const overall = Math.round((clarity + contextScore + specificity + outputDef) / 4);

  const handleGenerate = () => {
    setIsGenerating(true);
    setResponse('');
    // Simulate AI processing
    setTimeout(() => {
      setResponse(`[DEMO AI RESPONSE]\n\nBased on your prompt, here is the generated output:\n\n**Supplier Comparison Table**\n| Feature | Supplier A | Supplier B |\n|---------|------------|------------|\n| Price   | $1,200     | $1,150     |\n| Lead Time| 4 Weeks   | 6 Weeks    |\n\n*Note: This is simulated data for demonstration purposes.*`);
      setIsGenerating(false);
    }, 1500);
  };

  const handleCopy = () => {
    const fullPrompt = `Act as: ${role}\n\nContext: ${context}\n\nTask: ${task}\n\nConstraints: ${constraints}\n\nFormat: ${outputFormat}`;
    navigator.clipboard.writeText(fullPrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const loadTemplate = () => {
    setRole('Senior Procurement Analyst at CSTech');
    setContext('We are evaluating three supplier quotations for a new batch of 500 leveling rods (Item #LR-500).');
    setTask('Compare the commercial terms of these three suppliers and identify the best overall value.');
    setConstraints('Highlight any risk flags such as payment terms exceeding 60 days or lead times over 8 weeks.');
    setOutputFormat('A brief executive summary followed by a comparison table and a bulleted list of risks.');
    setResponse('');
    setCopied(false);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Prompt Lab</h1>
          <p className="text-brand-darkGray mt-1 text-lg">Practice the core framework for effective AI communication.</p>
        </div>
        <Button variant="outline" onClick={loadTemplate}>Load Example Template</Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Side: Builder */}
        <Card className="lg:col-span-7">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TerminalSquare className="w-5 h-5 text-brand-yellow" />
              Prompt Builder
            </CardTitle>
            <CardDescription>Fill out each section to construct a highly effective prompt.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-semibold mb-1">1. Role</label>
              <input 
                value={role}
                onChange={(e) => setRole(e.target.value)}
                placeholder="e.g., You are an expert data analyst..." 
                className="w-full p-2 border border-brand-gray rounded-md focus:ring-2 focus:ring-brand-yellow focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">2. Context</label>
              <textarea 
                value={context}
                onChange={(e) => setContext(e.target.value)}
                placeholder="e.g., We have monthly sales data for our tripod product line..." 
                className="w-full p-2 border border-brand-gray rounded-md h-20 focus:ring-2 focus:ring-brand-yellow focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">3. Task</label>
              <textarea 
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="e.g., Identify the top 3 selling regions and calculate year-over-year growth..." 
                className="w-full p-2 border border-brand-gray rounded-md h-20 focus:ring-2 focus:ring-brand-yellow focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">4. Constraints</label>
              <textarea 
                value={constraints}
                onChange={(e) => setConstraints(e.target.value)}
                placeholder="e.g., Do not include data prior to 2022. Be concise." 
                className="w-full p-2 border border-brand-gray rounded-md h-16 focus:ring-2 focus:ring-brand-yellow focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">5. Output Format</label>
              <input 
                value={outputFormat}
                onChange={(e) => setOutputFormat(e.target.value)}
                placeholder="e.g., A markdown table and a brief summary paragraph." 
                className="w-full p-2 border border-brand-gray rounded-md focus:ring-2 focus:ring-brand-yellow focus:outline-none"
              />
            </div>

            <div className="flex gap-4 pt-4 border-t border-brand-gray mt-6">
              <Button onClick={handleGenerate} disabled={isGenerating || overall < 20} className="flex-1">
                <Sparkles className="w-4 h-4 mr-2" />
                {isGenerating ? 'Generating...' : 'Test Prompt'}
              </Button>
              <Button variant="outline" onClick={handleCopy}>
                {copied ? <CheckCircle2 className="w-4 h-4 mr-2 text-green-600" /> : <Copy className="w-4 h-4 mr-2" />}
                Copy Full Prompt
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Right Side: Score & Preview */}
        <div className="lg:col-span-5 space-y-6">
          <Card className="bg-brand-black text-brand-white border-none">
            <CardHeader>
              <CardTitle className="text-white flex items-center justify-between">
                Prompt Quality <Badge variant="secondary" className="bg-brand-charcoal border-none text-xs">DEMO SCORING</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center mb-6">
                <div className="relative w-32 h-32 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" fill="transparent" stroke="#333" strokeWidth="8" />
                    <circle 
                      cx="50" cy="50" r="40" fill="transparent" stroke="#FFD700" strokeWidth="8" 
                      strokeDasharray="251.2" strokeDashoffset={251.2 - (251.2 * overall) / 100}
                      className="transition-all duration-500 ease-out"
                    />
                  </svg>
                  <div className="absolute text-center">
                    <span className="text-3xl font-bold">{overall}%</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <ScoreBar label="Clarity (Task)" score={clarity} />
                <ScoreBar label="Context" score={contextScore} />
                <ScoreBar label="Specificity (Constraints)" score={specificity} />
                <ScoreBar label="Output Definition" score={outputDef} />
              </div>
            </CardContent>
          </Card>

          <Card className="flex-1 min-h-[300px]">
            <CardHeader>
              <CardTitle>AI Preview Response</CardTitle>
              <CardDescription>See how an AI assistant would interpret your prompt.</CardDescription>
            </CardHeader>
            <CardContent>
              {isGenerating ? (
                <div className="flex flex-col items-center justify-center h-48 text-brand-darkGray animate-pulse">
                  <Sparkles className="w-8 h-8 mb-2 text-brand-yellow" />
                  <p>Processing prompt through demo engine...</p>
                </div>
              ) : response ? (
                <div className="bg-brand-lightGray p-4 rounded-md whitespace-pre-wrap text-sm border border-brand-gray font-mono">
                  {response}
                </div>
              ) : (
                <div className="flex items-center justify-center h-48 text-brand-darkGray border-2 border-dashed border-brand-gray rounded-md">
                  Construct a prompt and click "Test Prompt" to see the result.
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

function ScoreBar({ label, score }: { label: string, score: number }) {
  return (
    <div>
      <div className="flex justify-between text-xs mb-1">
        <span className="text-gray-400">{label}</span>
        <span className="font-medium text-white">{score}%</span>
      </div>
      <div className="w-full bg-brand-charcoal h-1.5 rounded-full overflow-hidden">
        <div 
          className={`h-full transition-all duration-500 ${score > 75 ? 'bg-brand-yellow' : score > 40 ? 'bg-orange-400' : 'bg-red-500'}`} 
          style={{ width: `${score}%` }}
        ></div>
      </div>
    </div>
  );
}
