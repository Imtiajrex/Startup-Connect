"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RocketIcon, Search } from "lucide-react";
import { useState } from "react";

const startups = [
  {
    name: "EcoTech Solutions",
    description: "Sustainable energy solutions for urban environments",
    industry: "Clean Technology",
    stage: "Series A",
    location: "San Francisco, CA",
  },
  {
    name: "HealthAI",
    description: "AI-powered healthcare diagnostics platform",
    industry: "Healthcare",
    stage: "Seed",
    location: "Boston, MA",
  },
  {
    name: "FinFlow",
    description: "Next-generation payment processing solution",
    industry: "FinTech",
    stage: "Series B",
    location: "New York, NY",
  },
];

export default function DiscoverPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [industryFilter, setIndustryFilter] = useState("all");

  const filteredStartups = startups.filter((startup) => {
    const matchesSearch = startup.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      startup.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesIndustry = industryFilter === "all" || startup.industry === industryFilter;
    return matchesSearch && matchesIndustry;
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Discover</h1>
      </div>

      <div className="flex gap-4">
        <div className="flex-1">
          <Input
            placeholder="Search startups..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full"
            icon={Search}
          />
        </div>
        <Select value={industryFilter} onValueChange={setIndustryFilter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Industry" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Industries</SelectItem>
            <SelectItem value="Clean Technology">Clean Technology</SelectItem>
            <SelectItem value="Healthcare">Healthcare</SelectItem>
            <SelectItem value="FinTech">FinTech</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredStartups.map((startup) => (
          <Card key={startup.name}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl">{startup.name}</CardTitle>
                <RocketIcon className="h-5 w-5 text-primary" />
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">{startup.description}</p>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Industry</span>
                  <span className="text-sm font-medium">{startup.industry}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Stage</span>
                  <span className="text-sm font-medium">{startup.stage}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Location</span>
                  <span className="text-sm font-medium">{startup.location}</span>
                </div>
              </div>
              <div className="flex gap-2">
                <Button className="flex-1">Connect</Button>
                <Button variant="outline" className="flex-1">Learn More</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}