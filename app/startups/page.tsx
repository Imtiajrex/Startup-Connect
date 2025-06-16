import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RocketIcon, Users, TrendingUp } from "lucide-react";
import Link from "next/link";

const featuredStartups = [
  {
    name: "EcoTech Solutions",
    description: "Sustainable energy solutions for urban environments",
    industry: "Clean Technology",
    stage: "Series A",
    raised: "$2.5M",
  },
  {
    name: "HealthAI",
    description: "AI-powered healthcare diagnostics platform",
    industry: "Healthcare",
    stage: "Seed",
    raised: "$800K",
  },
  {
    name: "FinFlow",
    description: "Next-generation payment processing solution",
    industry: "FinTech",
    stage: "Series B",
    raised: "$5M",
  },
];

export default function StartupsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Featured Startups</h1>
          <Link href="/auth/register?role=investor">
            <Button>Join as Investor</Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredStartups.map((startup) => (
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
                    <span className="text-sm">Raised</span>
                    <span className="text-sm font-medium">{startup.raised}</span>
                  </div>
                </div>
                <Button className="w-full" variant="outline">
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}