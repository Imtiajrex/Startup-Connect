"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageSquare, Send } from "lucide-react";
import { useState } from "react";

const conversations = [
  {
    id: 1,
    name: "Sarah Chen",
    lastMessage: "Looking forward to our meeting tomorrow!",
    time: "2m ago",
    unread: true,
  },
  {
    id: 2,
    name: "Michael Roberts",
    lastMessage: "Thanks for sharing your pitch deck",
    time: "1h ago",
    unread: false,
  },
  {
    id: 3,
    name: "Elena Martinez",
    lastMessage: "Let's schedule a follow-up call",
    time: "2h ago",
    unread: false,
  },
];

export default function MessagesPage() {
  const [selectedConversation, setSelectedConversation] = useState<number | null>(null);
  const [newMessage, setNewMessage] = useState("");

  return (
    <div className="flex h-[calc(100vh-8rem)] gap-6">
      {/* Conversations List */}
      <Card className="w-1/3">
        <CardContent className="p-4">
          <div className="mb-4">
            <Input placeholder="Search messages..." />
          </div>
          <ScrollArea className="h-[calc(100vh-12rem)]">
            <div className="space-y-2">
              {conversations.map((conversation) => (
                <div
                  key={conversation.id}
                  className={`p-3 rounded-lg cursor-pointer hover:bg-accent ${
                    selectedConversation === conversation.id ? "bg-accent" : ""
                  }`}
                  onClick={() => setSelectedConversation(conversation.id)}
                >
                  <div className="flex justify-between items-start mb-1">
                    <span className="font-medium">{conversation.name}</span>
                    <span className="text-xs text-muted-foreground">
                      {conversation.time}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-muted-foreground truncate">
                      {conversation.lastMessage}
                    </p>
                    {conversation.unread && (
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>

      {/* Chat Area */}
      <Card className="flex-1">
        <CardContent className="p-4 h-full flex flex-col">
          {selectedConversation ? (
            <>
              <ScrollArea className="flex-1 mb-4">
                <div className="space-y-4">
                  {/* Chat messages would go here */}
                  <div className="text-center text-muted-foreground text-sm">
                    Start of conversation
                  </div>
                </div>
              </ScrollArea>
              <div className="flex gap-2">
                <Input
                  placeholder="Type a message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                />
                <Button size="icon">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </>
          ) : (
            <div className="h-full flex items-center justify-center flex-col gap-4 text-muted-foreground">
              <MessageSquare className="h-12 w-12" />
              <p>Select a conversation to start messaging</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}