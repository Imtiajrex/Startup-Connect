"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BadgeCheck, Search, Users } from "lucide-react";
import { useState } from "react";

const connections = [
  {
    name: "Sarah Chen",
    title: "Managing Partner at Venture Capital",
    type: "Investor",
    mutualConnections: 12,
  },
  {
    name: "Michael Roberts",
    title: "Angel Investor",
    type: "Investor",
    mutualConnections: 8,
  },
  {
    name: "Elena Martinez",
    title: "Startup Founder",
    type: "Founder",
    mutualConnections: 15,
  },
];

const suggestions = [
  {
    name: "David Kim",
    title: "Tech Investor",
    type: "Investor",
    mutualConnections: 5,
  },
  {
    name: "Lisa Wong",
    title: "Startup Advisor",
    type: "Advisor",
    mutualConnections: 3,
  },
];

export default function NetworkPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredConnections = connections.filter((connection) =>
    connection.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredSuggestions = suggestions.filter((suggestion) =>
    suggestion.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Network</h1>
      </div>

      <div className="flex gap-4 items-center">
        <div className="flex-1">
          <Input
            placeholder="Search connections..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full"
            icon={Search}
          />
        </div>
        <Button>Import Contacts</Button>
      </div>

      <Tabs defaultValue="connections">
        <TabsList>
          <TabsTrigger value="connections">My Connections</TabsTrigger>
          <TabsTrigger value="suggestions">Suggestions</TabsTrigger>
        </TabsList>

        <TabsContent value="connections" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredConnections.map((connection) => (
              <Card key={connection.name}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Users className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">{connection.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {connection.title}
                        </p>
                      </div>
                    </div>
                    <BadgeCheck className="h-5 w-5 text-primary" />
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      {connection.mutualConnections} mutual connections
                    </span>
                    <Button variant="outline" size="sm">
                      Message
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="suggestions" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredSuggestions.map((suggestion) => (
              <Card key={suggestion.name}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Users className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">{suggestion.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {suggestion.title}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      {suggestion.mutualConnections} mutual connections
                    </span>
                    <Button size="sm">Connect</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}