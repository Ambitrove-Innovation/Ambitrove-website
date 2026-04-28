import { useState, useEffect, useRef } from "react";
import { MessageCircle, X, Send, Bot, User, Loader2 } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface Message {
  role: "user" | "assistant";
  content: string;
}

const AiChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hello! I'm Ambi, your friendly AI assistant from Ambitrove Innovation. It's a pleasure to meet you!\n\nHow can I assist you today? Whether you're looking for information on our software development services, curious about our pricing packages, or want to know more about how we can help your business with digital transformation, I'm here to help.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [streamingText, setStreamingText] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, streamingText]);

  const handleSend = async () => {
    if (!input.trim() || isLoading || isStreaming) return;

    const userMessage: Message = { role: "user", content: input };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/.netlify/functions/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updatedMessages }),
      });

      if (!response.ok) throw new Error("Failed to connect to Ambi");

      const data = await response.json();
      const aiContent = data.content;

      // Start Typewriter "Streaming" Effect
      setIsLoading(false);
      setIsStreaming(true);
      let index = 0;
      setStreamingText("");

      const interval = setInterval(() => {
        if (index < aiContent.length) {
          setStreamingText((prev) => prev + aiContent.charAt(index));
          index++;
        } else {
          clearInterval(interval);
          setMessages((prev) => [
            ...prev,
            { role: "assistant", content: aiContent },
          ]);
          setStreamingText("");
          setIsStreaming(false);
        }
      }, 15); // Adjust speed of streaming here
    } catch (error) {
      console.error("Chat error:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "I'm sorry, I'm having a bit of trouble connecting right now. Please try again or visit our contact page!",
        },
      ]);
      setIsLoading(false);
      setIsStreaming(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-inter">
      {/* Floating Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-2xl transition-all hover:scale-110 group">
          <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="bg-zinc-900 border border-zinc-800 w-[350px] sm:w-[400px] h-[500px] rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-300">
          {/* Header */}
          <div className="bg-zinc-800 p-4 flex items-center justify-between border-b border-zinc-700">
            <div className="flex items-center gap-3">
              <div className="bg-green-600 p-2 rounded-lg">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-white font-bold text-sm">Ambi</h3>
                <p className="text-green-500 text-[10px] flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                  Online & Ready
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-zinc-400 hover:text-white transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth">
            {messages.map((m, i) => (
              <div
                key={i}
                className={cn(
                  "flex items-start gap-2 max-w-[85%]",
                  m.role === "user" ? "ml-auto flex-row-reverse" : "",
                )}>
                <div
                  className={cn(
                    "p-2 rounded-lg",
                    m.role === "user"
                      ? "bg-zinc-700"
                      : "bg-green-900/40 text-green-50",
                  )}>
                  {m.role === "assistant" ? (
                    <Bot className="w-4 h-4" />
                  ) : (
                    <User className="w-4 h-4" />
                  )}
                </div>
                <div
                  className={cn(
                    "p-3 rounded-2xl text-sm leading-relaxed shadow-sm",
                    "space-y-2 [&>p]:leading-relaxed [&>ul]:list-disc [&>ul]:ml-4 [&>ul]:space-y-1 [&>ol]:list-decimal [&>ol]:ml-4 [&_strong]:font-semibold [&_strong]:text-white [&_strong]:tracking-wide",
                    m.role === "user"
                      ? "bg-green-600 text-white rounded-tr-none"
                      : "bg-zinc-800 text-zinc-200 rounded-tl-none border border-zinc-700",
                  )}>
                  <ReactMarkdown>
                    {m.content}
                  </ReactMarkdown>
                </div>
              </div>
            ))}

            {/* Streaming Message */}
            {isStreaming && (
              <div className="flex items-start gap-2 max-w-[85%]">
                <div className="bg-green-900/40 text-green-50 p-2 rounded-lg">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="bg-zinc-800 text-zinc-200 p-3 rounded-2xl rounded-tl-none border border-zinc-700 text-sm leading-relaxed overflow-hidden space-y-2 [&>p]:leading-relaxed [&>ul]:list-disc [&>ul]:ml-4 [&>ul]:space-y-1 [&>ol]:list-decimal [&>ol]:ml-4 [&_strong]:font-semibold [&_strong]:text-white [&_strong]:tracking-wide relative">
                  <ReactMarkdown>
                    {streamingText + " ▋"}
                  </ReactMarkdown>
                </div>
              </div>
            )}

            {/* Loading Indicator */}
            {isLoading && (
              <div className="flex items-start gap-2">
                <div className="bg-green-900/40 text-green-50 p-2 rounded-lg">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="bg-zinc-800 text-zinc-400 p-3 rounded-2xl rounded-tl-none border border-zinc-700 flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin text-green-500" />
                  <span className="text-xs italic">Ambi is thinking...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-zinc-800 bg-zinc-900/50">
            <div className="relative flex items-center">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask Ambi anything..."
                className="w-full bg-zinc-800 text-white text-sm rounded-xl py-3 pl-4 pr-12 border border-zinc-700 focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none transition-all placeholder:text-zinc-500"
              />
              <button
                onClick={handleSend}
                disabled={isLoading || isStreaming || !input.trim()}
                className="absolute right-2 p-2 text-green-500 hover:text-green-400 disabled:text-zinc-600 disabled:cursor-not-allowed transition-colors">
                <Send className="w-5 h-5" />
              </button>
            </div>
            <p className="text-[9px] text-zinc-500 mt-2 text-center">
              AI assistant inspired by Ambitrove Innovation. Powered by Gemini.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AiChatBot;
