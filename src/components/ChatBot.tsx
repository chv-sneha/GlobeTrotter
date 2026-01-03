import { useState } from 'react';
import { X, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import Spline from '@splinetool/react-spline';

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { type: 'bot', text: 'Hi! I\'m your GlobeTrotter assistant. How can I help you plan your perfect trip?' }
  ]);

  const handleSend = () => {
    if (!message.trim()) return;
    
    setMessages(prev => [...prev, { type: 'user', text: message }]);
    
    // Simple bot response logic
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        type: 'bot', 
        text: 'Thanks for your question! I can help you with trip planning, destinations, budgets, and itineraries. What would you like to know?' 
      }]);
    }, 1000);
    
    setMessage('');
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <div className="fixed bottom-6 right-6 z-40">
        {!isOpen && (
          <div 
            onClick={() => setIsOpen(true)}
            className="h-[250px] w-[250px] rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden"
          >
            <Spline scene="https://prod.spline.design/rU2-Ks0SC0T5od9B/scene.splinecode" />
          </div>
        )}
      </div>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 w-80 h-96 z-50 shadow-2xl border-0 overflow-hidden">
          {/* Spline Background */}
          <div className="absolute inset-0 opacity-20">
            <Spline scene="https://prod.spline.design/rU2-Ks0SC0T5od9B/scene.splinecode" />
          </div>
          
          {/* Chat Content */}
          <div className="relative z-10 h-full flex flex-col bg-white/90 backdrop-blur-sm">
            {/* Header */}
            <div className="p-4 border-b bg-primary text-primary-foreground flex justify-between items-center">
              <h3 className="font-semibold">GlobeTrotter Assistant</h3>
              <Button
                onClick={() => setIsOpen(false)}
                variant="ghost"
                size="icon"
                className="h-6 w-6 text-primary-foreground hover:bg-primary-foreground/20"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            
            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-2 rounded-lg text-sm ${
                    msg.type === 'user' 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-muted'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Input */}
            <div className="p-4 border-t flex gap-2">
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Ask me anything..."
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                className="flex-1"
              />
              <Button onClick={handleSend} size="icon">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
      )}
    </>
  );
}