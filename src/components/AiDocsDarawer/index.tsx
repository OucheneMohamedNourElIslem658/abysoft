'use client'

import { useState, useRef, useEffect } from 'react'
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerClose, DrawerTrigger, DrawerFooter } from '@/components/ui/Drawer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Loader2, Send, MessageCircle, X } from 'lucide-react'
import { cn } from '@/utilities/ui'
import { LocaleType } from '@/utilities/types'
import { getTranslation, ragDrawerTranslatons } from '@/hooks/languages/translations'

interface Message {
  id: string
  type: 'user' | 'assistant'
  content: string
  timestamp: Date
}

interface AiDocumentationDrawerProps {
  lang: LocaleType
}

export function AiDocumentationDrawer({ lang } : AiDocumentationDrawerProps) {
  const [open, setOpen] = useState(false)
  const t = getTranslation(lang, ragDrawerTranslatons)
  console.log(t);
  
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'assistant',
      content: t.initialMessage,
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const generateAiResponse = async (userMessage: string): Promise<string> => {
    const responses: { [key: string]: string } = {
      'blog': 'Check out our <strong>Blogs</strong> section to read the latest articles and insights. You can browse posts by categories and discover valuable content to help you stay updated.',
      'testimonials': 'Visit our <strong>Testimonials</strong> page to see what our customers say about our services. Real stories from real users who have benefited from our platform.',
      'faq': 'Head to our <strong>FAQs</strong> section where we answer common questions about pricing, features, and support. If you can\'t find your answer, feel free to contact us!',
      'contact': 'Need to reach out? Visit our <strong>Contact Us</strong> page where you can fill out a form and we\'ll get back to you promptly. We\'re here to help!',
      'universities': 'Explore our <strong>Universities</strong> section to see partnerships and collaborations with leading educational institutions. We\'re proud to work with top universities worldwide.',
      'pricing': 'Check our pricing plans on the main page. We offer flexible options for different needs. Contact us for custom enterprise solutions!',
      'features': 'Our platform includes: Rich documentation, AI-powered support, seamless integrations, and more. Explore each feature to find what works best for you.',
      'support': 'We offer 24/7 customer support through multiple channels. Email us at support@example.com or use our contact form for faster response times.',
      'integration': 'Our platform integrates with popular tools and services. Check our documentation for detailed setup guides and API references.',
      'default': 'That\'s a great question! To help you better, could you provide more details? You can also visit our <strong>Contact Us</strong> page to connect with our team directly.',
    }

    // Find matching response
    const lowerMessage = userMessage.toLowerCase()
    for (const [key, response] of Object.entries(responses)) {
      if (lowerMessage.includes(key)) {
        return response
      }
    }
    
    return responses['default']
  }

  const handleSendMessage = async () => {
    if (!input.trim()) return

    // Add user message
    const userMessage: Message = {
      id: `msg-${Date.now()}`,
      type: 'user',
      content: input,
      timestamp: new Date(),
    }

    setMessages(prev => [...prev, userMessage])
    setInput('')
    setLoading(true)

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000))

    const aiResponse = await generateAiResponse(input)
    
    const assistantMessage: Message = {
      id: `msg-${Date.now()}-ai`,
      type: 'assistant',
      content: aiResponse,
      timestamp: new Date(),
    }

    setMessages(prev => [...prev, assistantMessage])
    setLoading(false)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <Drawer open={open} onOpenChange={setOpen} direction='right'>
      <DrawerTrigger className='fixed bottom-10 right-10 bg-secondary hover:bg-secondary/90 text-secondary-foreground p-4 rounded-full shadow-lg z-50'>
        <MessageCircle className="size-8" />
      </DrawerTrigger>
      <DrawerContent className="mx-auto !rounded-l-3xl bg-background">
        <DrawerHeader className="border-b border-border px-4 py-3">
          <div className="flex items-start justify-between">
            <div className='flex flex-col items-start'>
              <DrawerTitle className='text-2xl mb-1'>{t.title}</DrawerTitle>
              <DrawerDescription className='text-base'>
                {t.description}
              </DrawerDescription>
            </div>
            <DrawerClose asChild>
              <button className="p-1 hover:bg-muted rounded-md transition-colors">
                <X className="w-5 h-5" />
              </button>
            </DrawerClose>
          </div>
        </DrawerHeader>

        {/* Messages Container */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {messages.map(message => (
            <div
              key={message.id}
              className={cn(
                'flex gap-3 animate-in fade-in slide-in-from-bottom-2',
                message.type === 'user' ? 'justify-end' : 'justify-start'
              )}
            >
              <div
                className={cn(
                  'max-w-xs px-4 py-2.5 rounded-lg',
                  message.type === 'user'
                    ? 'bg-secondary text-secondary-foreground rounded-br-none'
                    : 'bg-muted text-foreground rounded-bl-none'
                )}
              >
                <p className="text-sm leading-relaxed tracking-wider" dangerouslySetInnerHTML={{ __html: message.content }} />
                <span className="text-xs opacity-70 mt-1 block">
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex gap-3 justify-start">
              <div className="bg-muted text-foreground px-4 py-2.5 rounded-lg rounded-bl-none">
                <div className="flex gap-2 items-center">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span className="text-sm">{t.thinking}</span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <DrawerFooter className='flex flex-row gap-2 p-4'>
          <Input
            placeholder={t.inputPlaceholder}
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            disabled={loading}
            className='focus:ring-secondary'
          />
          <Button
            onClick={handleSendMessage}
            disabled={loading || !input.trim()}
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-3 rounded-2xl"
          >
            <Send size={20} />
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
