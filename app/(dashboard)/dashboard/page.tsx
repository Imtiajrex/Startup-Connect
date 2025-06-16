"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Users, MessageSquare, Calendar, PieChart, Target, Briefcase, ChartBar } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function DashboardPage() {
  const [userRole, setUserRole] = useState<string | null>(null);

  useEffect(() => {
    setUserRole(localStorage.getItem("userRole"));
  }, []);

  if (userRole === "investor") {
    return <InvestorDashboard />;
  }

  return <StartupDashboard />;
}

function StartupDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Startup Owner's Dashboard</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button>Submit Startup</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Submit Your Startup</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="startup-name">Startup Name</Label>
                  <Input id="startup-name" placeholder="Your startup name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="industry">Industry</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select industry" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tech">Technology</SelectItem>
                      <SelectItem value="health">Healthcare</SelectItem>
                      <SelectItem value="finance">Finance</SelectItem>
                      <SelectItem value="education">Education</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="stage">Stage</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select stage" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="idea">Idea Stage</SelectItem>
                      <SelectItem value="mvp">MVP</SelectItem>
                      <SelectItem value="seed">Seed</SelectItem>
                      <SelectItem value="series-a">Series A</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="funding">Funding Required</Label>
                  <Input id="funding" placeholder="e.g. $500,000" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Describe your startup..."
                  className="min-h-[100px]"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="pitch">Pitch Deck URL</Label>
                <Input id="pitch" type="url" placeholder="https://" />
              </div>
              <Button className="w-full">Submit for Review</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
      
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Profile Views</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">156</div>
            <p className="text-xs text-muted-foreground">+20.1% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Investor Connections</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">+3 this week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Messages</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">2 unread</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Upcoming Meetings</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">Next: Tomorrow 10 AM</p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center">
                <Users className="h-5 w-5 text-primary" />
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium">New investor viewed your profile</p>
                <p className="text-xs text-muted-foreground">1 hour ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center">
                <MessageSquare className="h-5 w-5 text-primary" />
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium">Message from potential investor</p>
                <p className="text-xs text-muted-foreground">3 hours ago</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function InvestorDashboard() {
  return (
    <div className="space-y-6">
      {/* Header with Quick Actions */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold">Investor's Dashboard</h1>
          <p className="text-muted-foreground">Welcome back, manage your portfolio and discover new opportunities</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">
            <PieChart className="mr-2 h-4 w-4" />
            Portfolio Analysis
          </Button>
          <Button>
            <Target className="mr-2 h-4 w-4" />
            Find Startups
          </Button>
        </div>
      </div>
      
      {/* Investment Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="col-span-2 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Briefcase className="h-5 w-5" />
              Portfolio Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Total Invested</p>
                <p className="text-2xl font-bold">$2.5M</p>
                <p className="text-xs text-green-600">↑ 12.5% from last month</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Active Investments</p>
                <p className="text-2xl font-bold">8</p>
                <p className="text-xs text-muted-foreground">Across 5 industries</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">ROI</p>
                <p className="text-2xl font-bold">24.3%</p>
                <p className="text-xs text-green-600">↑ 3.2% this quarter</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ChartBar className="h-5 w-5" />
              Quick Stats
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm">New Proposals</span>
              <span className="text-lg font-bold">12</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Due Diligence</span>
              <span className="text-lg font-bold">3</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Meetings Today</span>
              <span className="text-lg font-bold">2</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Latest Opportunities and Portfolio */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Latest Investment Opportunities</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  name: "TechStart AI",
                  industry: "Artificial Intelligence",
                  stage: "Seed",
                  ask: "$500K",
                  growth: "+45% MoM",
                },
                {
                  name: "GreenEnergy Solutions",
                  industry: "Clean Tech",
                  stage: "Series A",
                  ask: "$2M",
                  growth: "+28% MoM",
                },
                {
                  name: "HealthTech Pro",
                  industry: "Healthcare",
                  stage: "Pre-seed",
                  ask: "$250K",
                  growth: "+35% MoM",
                },
              ].map((startup) => (
                <div
                  key={startup.name}
                  className="p-4 rounded-lg border hover:bg-accent/50 transition-colors cursor-pointer"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-medium">{startup.name}</h3>
                      <p className="text-sm text-muted-foreground">{startup.industry}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">{startup.ask}</p>
                      <p className="text-xs text-green-600">{startup.growth}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs px-2 py-1 rounded-full bg-primary/10">{startup.stage}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Portfolio Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  name: "AI Solutions Inc",
                  invested: "$400K",
                  return: "+32%",
                  status: "Growing",
                },
                {
                  name: "EcoTech",
                  invested: "$750K",
                  return: "+18%",
                  status: "Stable",
                },
                {
                  name: "MedTech Solutions",
                  invested: "$300K",
                  return: "+25%",
                  status: "Growing",
                },
              ].map((investment) => (
                <div
                  key={investment.name}
                  className="p-4 rounded-lg border hover:bg-accent/50 transition-colors cursor-pointer"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">{investment.name}</h3>
                      <p className="text-sm text-muted-foreground">Invested: {investment.invested}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-green-600 font-medium">{investment.return}</p>
                      <p className="text-xs text-muted-foreground">{investment.status}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}