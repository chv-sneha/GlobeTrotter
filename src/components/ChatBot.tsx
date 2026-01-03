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
    { type: 'bot', text: 'Hi! I\'m your GlobeTrotter AI assistant. I can help you with trip planning, destinations, budgets, itineraries, and travel advice. What would you like to know?' }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const travelKnowledge = {
    destinations: {
      'paris': 'Paris is amazing! Average cost: $150/day. Must-see: Eiffel Tower, Louvre, Montmartre. Best time: April-June, September-October.',
      'tokyo': 'Tokyo is incredible! Average cost: $180/day. Must-see: Senso-ji Temple, Tokyo Tower, Shibuya. Best time: March-May, September-November.',
      'london': 'London is fantastic! Average cost: $170/day. Must-see: Big Ben, Tower Bridge, British Museum. Best time: May-September.',
      'new york': 'NYC is the city that never sleeps! Average cost: $200/day. Must-see: Statue of Liberty, Central Park, Times Square.',
      'bali': 'Bali is paradise! Average cost: $80/day. Must-see: Uluwatu Temple, rice terraces, beaches. Best time: April-October.',
      'dubai': 'Dubai is luxurious! Average cost: $160/day. Must-see: Burj Khalifa, Dubai Mall, desert safari. Best time: November-March.'
    },
    budgetTips: [
      'Book flights 6-8 weeks in advance for best prices',
      'Use public transport instead of taxis to save money',
      'Eat at local restaurants rather than tourist spots',
      'Consider staying in hostels or Airbnb for budget accommodation',
      'Look for free walking tours and museum days'
    ],
    planningTips: [
      'Research visa requirements early',
      'Pack light - you can buy things you need',
      'Download offline maps and translation apps',
      'Notify your bank about travel plans',
      'Get travel insurance for peace of mind'
    ]
  };

  const generateResponse = (userMessage) => {
    const msg = userMessage.toLowerCase();
    
    // Destination queries
    for (const [dest, info] of Object.entries(travelKnowledge.destinations)) {
      if (msg.includes(dest)) {
        return info;
      }
    }
    
    // Budget queries
    if (msg.includes('budget') || msg.includes('cost') || msg.includes('money') || msg.includes('cheap')) {
      const randomTip = travelKnowledge.budgetTips[Math.floor(Math.random() * travelKnowledge.budgetTips.length)];
      return `Here's a budget tip: ${randomTip}. Would you like more budget advice for a specific destination?`;
    }
    
    // Planning queries
    if (msg.includes('plan') || msg.includes('trip') || msg.includes('travel') || msg.includes('itinerary')) {
      const randomTip = travelKnowledge.planningTips[Math.floor(Math.random() * travelKnowledge.planningTips.length)];
      return `Planning tip: ${randomTip}. I can help you plan your entire trip! Which destination interests you?`;
    }
    
    // Weather queries
    if (msg.includes('weather') || msg.includes('climate') || msg.includes('temperature')) {
      return 'Weather varies by destination and season. Which city are you planning to visit? I can give you the best time to travel there!';
    }
    
    // Visa queries
    if (msg.includes('visa') || msg.includes('passport')) {
      return 'Visa requirements depend on your nationality and destination. I recommend checking with the embassy or using official government websites. Which country are you planning to visit?';
    }
    
    // Food queries
    if (msg.includes('food') || msg.includes('restaurant') || msg.includes('eat')) {
      return 'Food is one of the best parts of travel! Each destination has unique cuisines. Try local street food, visit markets, and ask locals for recommendations. Which destination\'s cuisine interests you?';
    }
    
    // Transportation queries
    if (msg.includes('transport') || msg.includes('flight') || msg.includes('train') || msg.includes('bus')) {
      return 'Transportation options vary by destination. I can help you find the best ways to get around! Which city are you traveling to?';
    }
    
    // Accommodation queries
    if (msg.includes('hotel') || msg.includes('accommodation') || msg.includes('stay') || msg.includes('hostel')) {
      return 'Accommodation options range from budget hostels to luxury hotels. Consider location, amenities, and reviews. Which destination and budget range are you considering?';
    }
    
    // Safety queries
    if (msg.includes('safe') || msg.includes('security') || msg.includes('danger')) {
      return 'Safety is important! Research your destination, keep copies of documents, stay aware of surroundings, and trust your instincts. Which destination are you concerned about?';
    }
    
    // Greeting responses
    if (msg.includes('hello') || msg.includes('hi') || msg.includes('hey')) {
      return 'Hello! I\'m here to help with all your travel planning needs. Are you planning a new trip or need advice about a destination?';
    }
    
    // Default responses
    const defaultResponses = [
      'I\'d love to help you with that! Can you tell me more about your travel plans or which destination you\'re interested in?',
      'That\'s a great question! I can provide information about destinations, budgets, planning tips, and more. What specific aspect of travel would you like to know about?',
      'I\'m here to make your travel planning easier! Whether you need destination advice, budget tips, or itinerary help, just let me know what you\'re looking for.',
      'Travel planning can be exciting! I can help with destinations, costs, activities, and practical tips. What would you like to explore?'
    ];
    
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  };

  const handleSend = () => {
    if (!message.trim()) return;
    
    setMessages(prev => [...prev, { type: 'user', text: message }]);
    setIsTyping(true);
    
    // Simulate AI thinking time
    setTimeout(() => {
      const response = generateResponse(message);
      setMessages(prev => [...prev, { type: 'bot', text: response }]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000); // 1-2 seconds delay
    
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
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-muted p-2 rounded-lg text-sm">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                  </div>
                </div>
              )}
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