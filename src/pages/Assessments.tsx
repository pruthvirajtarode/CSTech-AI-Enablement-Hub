import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { GraduationCap, CheckCircle2, XCircle, Award, Target } from 'lucide-react';

const assessmentsList = [
  { id: 'a1', title: 'AI Basics', score: 85, status: 'completed' },
  { id: 'a2', title: 'Prompting Fundamentals', score: 92, status: 'completed' },
  { id: 'a3', title: 'Responsible AI', score: null, status: 'pending' },
  { id: 'a4', title: 'Data Analysis', score: null, status: 'locked' },
  { id: 'a5', title: 'Department Application', score: null, status: 'locked' }
];

export function Assessments() {
  const [activeQuiz, setActiveQuiz] = useState(false);

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Assessments & Certifications</h1>
        <p className="text-brand-darkGray text-lg">Test your knowledge to earn CSTech AI Certifications.</p>
      </div>

      {!activeQuiz ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Available Assessments</CardTitle>
                <CardDescription>Complete assessments to unlock further modules and advanced AI capabilities.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {assessmentsList.map((item) => (
                  <div key={item.id} className="flex items-center justify-between p-4 border border-brand-gray rounded-lg bg-white hover:border-brand-charcoal transition-colors">
                    <div className="flex items-center gap-4">
                      <div className={`p-2 rounded-full ${item.status === 'completed' ? 'bg-green-100 text-green-700' : item.status === 'pending' ? 'bg-brand-yellow text-brand-black' : 'bg-gray-100 text-gray-400'}`}>
                        {item.status === 'completed' ? <CheckCircle2 className="w-5 h-5" /> : item.status === 'pending' ? <Target className="w-5 h-5" /> : <XCircle className="w-5 h-5" />}
                      </div>
                      <div>
                        <h4 className={`font-semibold ${item.status === 'locked' ? 'text-brand-darkGray' : 'text-brand-black'}`}>{item.title}</h4>
                        {item.status === 'completed' && <p className="text-sm text-brand-darkGray">Score: {item.score}%</p>}
                        {item.status === 'pending' && <p className="text-sm text-brand-darkGray">Ready to take</p>}
                        {item.status === 'locked' && <p className="text-sm text-brand-darkGray">Requires previous modules</p>}
                      </div>
                    </div>
                    <Button 
                      variant={item.status === 'pending' ? 'primary' : 'outline'} 
                      disabled={item.status === 'locked' || item.status === 'completed'}
                      onClick={() => item.status === 'pending' && setActiveQuiz(true)}
                    >
                      {item.status === 'completed' ? 'Retake' : item.status === 'locked' ? 'Locked' : 'Start Assessment'}
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <Card className="bg-brand-black text-white border-none">
              <CardContent className="p-6 text-center">
                <div className="w-20 h-20 bg-brand-charcoal rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-brand-yellow">
                  <Award className="w-10 h-10 text-brand-yellow" />
                </div>
                <h3 className="text-xl font-bold mb-2">AI Practitioner Certification</h3>
                <div className="w-full bg-brand-charcoal h-2 rounded-full overflow-hidden mb-2 mt-4">
                  <div className="bg-brand-yellow h-full w-[40%]"></div>
                </div>
                <p className="text-sm text-gray-400">2 of 5 Assessments Completed</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Weak Areas & Recommendations</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-sm">
                    <span className="w-2 h-2 rounded-full bg-red-500 mt-1.5 shrink-0"></span>
                    <span><strong>Security boundaries:</strong> Review Module 10 before taking the Responsible AI assessment.</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="w-2 h-2 rounded-full bg-orange-400 mt-1.5 shrink-0"></span>
                    <span><strong>Output formatting:</strong> Practice in the Prompt Lab to improve your scores on output constraints.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      ) : (
        <Card className="max-w-3xl mx-auto border-2 border-brand-charcoal">
          <CardHeader className="border-b border-brand-gray bg-brand-lightGray">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Responsible AI Assessment</CardTitle>
                <CardDescription>Question 1 of 5</CardDescription>
              </div>
              <Badge variant="outline" className="border-brand-yellow bg-yellow-50 text-brand-black">Time remaining: 14:59</Badge>
            </div>
          </CardHeader>
          <CardContent className="p-8">
            <h3 className="text-xl font-medium text-brand-black mb-6">
              Which of the following documents is <span className="font-bold underline">safe</span> to upload to a public AI assistant (like standard ChatGPT) without an enterprise data agreement?
            </h3>
            
            <div className="space-y-3 mb-8">
              {['A draft of CSTech\'s upcoming Q4 financial earnings.', 'A public product manual for the CST/Berger transit level.', 'An Excel sheet of employee salaries and performance reviews.', 'A supplier contract containing confidential pricing.'].map((option, i) => (
                <label key={i} className="flex items-start gap-3 p-4 border border-brand-gray rounded-md hover:bg-brand-lightGray cursor-pointer transition-colors">
                  <input type="radio" name="q1" className="mt-1 w-4 h-4 text-brand-yellow focus:ring-brand-yellow border-gray-300" />
                  <span className="text-sm">{option}</span>
                </label>
              ))}
            </div>

            <div className="flex justify-between items-center pt-6 border-t border-brand-gray">
              <Button variant="outline" onClick={() => setActiveQuiz(false)}>Cancel Assessment</Button>
              <Button>Next Question</Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
