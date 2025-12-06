import { useState, useRef, useEffect } from "react";
import { FaRobot, FaTimes, FaPaperPlane } from "react-icons/fa";
import { IoCopyOutline } from "react-icons/io5";
import { FiCheck } from "react-icons/fi";

const AIChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi there! I'm your AI assistant. How can I help you analyze your dashboard today?",
      sender: "ai",
      timestamp: new Date(Date.now() - 300000),
    },
  ]);
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [copiedMessageId, setCopiedMessageId] = useState(null);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const aiSuggestions = [
    "Revenue trends this week",
    "What needs restocking",
    "Top performing products",
    "Conversion rate analysis",
  ];

  const aiResponses = {
    "revenue": "Revenue is up 12.3% this week. Best day was Friday ($4,000). Consider weekend promotions to maintain momentum.",
    "restocking": "2 items need attention: Premium Sneakers (12 units) and Cotton T-Shirts (8 units). Reorder within 48 hours.",
    "products": "Premium Sneakers is top performer ($11,234). Denim Jeans and Cotton T-Shirts follow. Consider bundling offers.",
    "conversion": "Conversion rate at 3.8% (+2.1%). Optimize checkout flow and add trust badges for improvement.",
    "default": "I can help analyze revenue, inventory, products, and customer metrics. What specific area interests you?"
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current.focus(), 100);
    }
  }, [isOpen]);

  const handleSendMessage = async () => {
    if (!inputText.trim() || isLoading) return;

    const userMessage = {
      id: messages.length + 1,
      text: inputText,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText("");
    setIsLoading(true);

    setTimeout(() => {
      const lowerInput = inputText.toLowerCase();
      let response = aiResponses.default;

      Object.keys(aiResponses).forEach(key => {
        if (lowerInput.includes(key) && key !== "default") {
          response = aiResponses[key];
        }
      });

      const aiMessage = {
        id: messages.length + 2,
        text: response,
        sender: "ai",
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, aiMessage]);
      setIsLoading(false);
    }, 800);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleCopyMessage = (text, messageId) => {
    navigator.clipboard.writeText(text);
    setCopiedMessageId(messageId);
    setTimeout(() => setCopiedMessageId(null), 2000);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="cursor-pointer fixed bottom-6 right-6 z-40 bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 flex items-center space-x-2"
      >
        <FaRobot className="w-5 h-5" />
        <span className="font-semibold">Ask AI</span>
      </button>
      {isOpen && (
        <div className="fixed inset-0 z-100 flex items-end sm:items-center justify-end sm:justify-end p-4 sm:p-6">
          <div 
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          <div className="relative w-full sm:w-96 h-[500px] sm:h-[600px] flex flex-col bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
            <div className="bg-linear-to-r from-blue-600 to-purple-600 text-white p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <FaRobot className="w-6 h-6" />
                  <div>
                    <h3 className="font-bold text-lg">AI Assistant</h3>
                    <p className="text-sm text-blue-200">Dashboard Analytics</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-white/20 rounded-full transition-colors"
                >
                  <FaTimes className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
              <div className="space-y-3">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg p-3 ${message.sender === "user"
                          ? "bg-linear-to-r from-blue-600 to-purple-600 text-white"
                          : "bg-white border border-gray-200"
                        }`}
                    >
                      <div className="flex items-start justify-between">
                        <p className="text-sm">{message.text}</p>
                        {message.sender === "ai" && (
                          <button
                            onClick={() => handleCopyMessage(message.text, message.id)}
                            className="ml-2 p-1 hover:bg-gray-100 rounded transition-colors"
                            title="Copy"
                          >
                            {copiedMessageId === message.id ? (
                              <FiCheck className="w-3 h-3 text-green-600" />
                            ) : (
                              <IoCopyOutline className="w-3 h-3 text-gray-500" />
                            )}
                          </button>
                        )}
                      </div>
                      <div className={`text-xs mt-1 ${message.sender === "user" ? "text-blue-200" : "text-gray-500"}`}>
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </div>
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-white border border-gray-200 rounded-lg p-3 max-w-[80%]">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-purple-600 rounded-full animate-pulse"></div>
                        <div className="w-2 h-2 bg-purple-600 rounded-full animate-pulse" style={{ animationDelay: "0.2s" }}></div>
                        <div className="w-2 h-2 bg-purple-600 rounded-full animate-pulse" style={{ animationDelay: "0.4s" }}></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </div>
            <div className="border-t border-gray-200 p-3 bg-white">
              <div className="flex flex-wrap gap-2 mb-3">
                {aiSuggestions.map((suggestion, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setInputText(suggestion);
                      inputRef.current?.focus();
                    }}
                    className="px-3 py-1.5 text-xs bg-linear-to-r from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100 text-gray-700 rounded-lg transition-all duration-200 border border-blue-100 hover:border-blue-200"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
              <div className="flex items-center space-x-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about your dashboard..."
                  className="flex-1 border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  disabled={isLoading}
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputText.trim() || isLoading}
                  className={`cursor-pointer px-4 py-3 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 ${!inputText.trim() || isLoading
                      ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                      : "bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-md hover:shadow-lg"
                    }`}
                >
                  <FaPaperPlane className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AIChatBot;