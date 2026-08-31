import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { Play, TrendingUp, CheckCircle, Brain, ArrowRight } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const journeyStages = [
  { id: '01', name: 'Understand', status: 'completed' },
  { id: '02', name: 'Learn', status: 'completed' },
  { id: '03', name: 'Practice', status: 'current' },
  { id: '04', name: 'Apply', status: 'upcoming' },
  { id: '05', name: 'Automate', status: 'upcoming' },
  { id: '06', name: 'Scale', status: 'upcoming' },
];

const mockImpactData = [
  { name: 'Mon', time: 1.2 },
  { name: 'Tue', time: 2.5 },
  { name: 'Wed', time: 1.8 },
  { name: 'Thu', time: 3.2 },
  { name: 'Fri', time: 2.1 },
];

export function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="space-y-8 animate-fade-in">
      
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Good morning, Sarah</h1>
          <p className="text-brand-darkGray mt-1 text-lg">Let's build your AI capability step by step.</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Button variant="outline" onClick={() => navigate('/assessments')}>View Certification</Button>
          <Button onClick={() => navigate('/foundations')}>Resume Module</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-brand-darkGray mb-1">AI Readiness Score</p>
                <h3 className="text-3xl font-bold">72%</h3>
              </div>
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center text-brand-yellow">
                <Brain className="w-6 h-6 text-brand-black" />
              </div>
            </div>
            <p className="text-sm text-brand-darkGray mt-4">Top 20% in Procurement</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-brand-darkGray mb-1">Course Progress</p>
                <h3 className="text-3xl font-bold">Module 4</h3>
              </div>
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                <BookIcon />
              </div>
            </div>
            <p className="text-sm text-brand-darkGray mt-4">Prompting Fundamentals</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-brand-darkGray mb-1">Learning Streak</p>
                <h3 className="text-3xl font-bold">4 Days</h3>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-green-700" />
              </div>
            </div>
            <p className="text-sm text-brand-darkGray mt-4">Keep it up!</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-brand-darkGray mb-1">Practical Tasks</p>
                <h3 className="text-3xl font-bold">12/15</h3>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-blue-700" />
              </div>
            </div>
            <p className="text-sm text-brand-darkGray mt-4">3 tasks remaining</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Your AI Journey</CardTitle>
          <CardDescription>Track your progression from foundational knowledge to workflow automation.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap items-center justify-between relative mt-4">
            <div className="absolute top-1/2 left-0 w-full h-1 bg-brand-gray -translate-y-1/2 z-0 hidden md:block"></div>
            {journeyStages.map((stage) => (
              <div key={stage.id} className="relative z-10 flex flex-col items-center gap-2 mb-4 md:mb-0">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center border-4 border-white font-bold transition-all ${
                  stage.status === 'completed' ? 'bg-brand-black text-brand-white' : 
                  stage.status === 'current' ? 'bg-brand-yellow text-brand-black ring-4 ring-yellow-100' : 
                  'bg-brand-gray text-brand-darkGray'
                }`}>
                  {stage.id}
                </div>
                <span className={`text-sm font-medium ${stage.status === 'upcoming' ? 'text-brand-darkGray' : 'text-brand-black'}`}>
                  {stage.name}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        <Card className="flex flex-col">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Continue Learning</CardTitle>
              <Badge variant="outline">Module 04</Badge>
            </div>
            <CardDescription>Prompting Fundamentals</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col justify-center">
            <h4 className="text-xl font-semibold mb-2">Structuring Your First AI Prompt</h4>
            <p className="text-brand-darkGray mb-6 line-clamp-2">
              Learn the ROLE + CONTEXT + TASK + CONSTRAINTS framework to get exactly what you need from AI assistants without endless back-and-forth.
            </p>
            <div className="w-full bg-brand-lightGray h-2 rounded-full overflow-hidden mb-4">
              <div className="bg-brand-yellow h-full w-[45%]"></div>
            </div>
            <p className="text-xs text-brand-darkGray text-right mb-6">45% Completed</p>
            
            <Button className="w-full gap-2" onClick={() => navigate('/foundations')}>
              <Play className="w-4 h-4" /> Start Lesson
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Your Impact <Badge variant="secondary" className="ml-2">DEMO DATA</Badge></CardTitle>
              <p className="text-sm text-brand-darkGray">This Week</p>
            </div>
            <CardDescription>Estimated time saved using AI tools in your procurement workflows.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={mockImpactData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E0E0E0" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#757575'}} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#757575'}} />
                  <Tooltip 
                    cursor={{fill: '#F5F5F5'}}
                    contentStyle={{borderRadius: '8px', border: '1px solid #E0E0E0', boxShadow: '0 2px 8px rgba(0,0,0,0.05)'}}
                  />
                  <Bar dataKey="time" name="Hours Saved" fill="#111111" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="flex items-center justify-center gap-6 mt-6 pt-6 border-t border-brand-gray">
              <div className="text-center">
                <p className="text-sm text-brand-darkGray">Total Time Saved</p>
                <p className="text-2xl font-bold">10.8 hrs</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-brand-darkGray">Tasks Assisted</p>
                <p className="text-2xl font-bold">42</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-brand-darkGray">RFQs Analyzed</p>
                <p className="text-2xl font-bold">14</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="bg-brand-black rounded-xl p-8 text-brand-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-charcoal rounded-full -translate-y-1/2 translate-x-1/4 opacity-50 blur-3xl"></div>
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <Badge variant="outline" className="border-brand-charcoal bg-brand-charcoal text-brand-yellow mb-4">Today's AI Challenge</Badge>
            <h3 className="text-2xl font-bold mb-2">Compare 3 Supplier Quotations</h3>
            <p className="text-gray-400 max-w-xl">
              Use the Procurement AI Lab to analyze three RFQs for leveling rods. Identify the key commercial differences and potential risk flags.
            </p>
          </div>
          <Button variant="primary" className="whitespace-nowrap" onClick={() => navigate('/departments')}>
            Start Challenge <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>

    </div>
  );
}

function BookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  );
}
