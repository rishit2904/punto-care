'use client';

import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Loader2 } from 'lucide-react';

interface Message {
    role: 'user' | 'assistant';
    content: string;
}

export default function ChatBot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            role: 'assistant',
            content: "Hi! I'm PuntoCare AI 🚗 I can help you diagnose problems, answer maintenance questions, and guide you through repairs for your Fiat Punto 1.3 Multijet. What can I help you with?"
        }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMessage: Message = { role: 'user', content: input.trim() };
        const newMessages = [...messages, userMessage];
        setMessages(newMessages);
        setInput('');
        setIsLoading(true);

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    messages: newMessages.map(m => ({ role: m.role, content: m.content }))
                })
            });

            const data = await response.json();

            if (data.error) {
                setMessages([...newMessages, {
                    role: 'assistant',
                    content: `Sorry, I encountered an error: ${data.error}`
                }]);
            } else {
                setMessages([...newMessages, {
                    role: 'assistant',
                    content: data.response
                }]);
            }
        } catch {
            setMessages([...newMessages, {
                role: 'assistant',
                content: 'Sorry, I could not connect to the AI service. Please make sure Ollama is running locally or check your internet connection.'
            }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            {/* Chat Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="chat-toggle"
                aria-label={isOpen ? 'Close chat' : 'Open chat'}
            >
                {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
            </button>

            {/* Chat Window */}
            {isOpen && (
                <div className="chat-window">
                    <div className="chat-header">
                        <Bot size={20} />
                        <span>PuntoCare AI Assistant</span>
                    </div>

                    <div className="chat-messages">
                        {messages.map((message, index) => (
                            <div
                                key={index}
                                className={`chat-message ${message.role === 'user' ? 'chat-message-user' : 'chat-message-assistant'}`}
                            >
                                <div className="chat-message-icon">
                                    {message.role === 'user' ? <User size={16} /> : <Bot size={16} />}
                                </div>
                                <div className="chat-message-content">
                                    {message.content}
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="chat-message chat-message-assistant">
                                <div className="chat-message-icon">
                                    <Bot size={16} />
                                </div>
                                <div className="chat-message-content chat-loading">
                                    <Loader2 size={16} className="spin" />
                                    Thinking...
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    <form onSubmit={handleSubmit} className="chat-input-form">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Ask about your Punto..."
                            className="chat-input"
                            disabled={isLoading}
                        />
                        <button
                            type="submit"
                            className="chat-send"
                            disabled={isLoading || !input.trim()}
                        >
                            <Send size={18} />
                        </button>
                    </form>
                </div>
            )}
        </>
    );
}
