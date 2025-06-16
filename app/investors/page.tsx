import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BadgeCheck, Briefcase, TrendingUp } from "lucide-react";
import Link from "next/link";

const featuredInvestors = [
  {
    name: "Sarah Chen",
    title: "Managing Partner at Venture Capital",
    focus: "FinTech, AI/ML",
    investments: "25+",
    portfolio: "$50M+",
  },
  {
    name: "Michael Roberts",
    title: "Angel Investor",
    focus: "Healthcare, BioTech",
    investments: "15+",
    portfolio: "$20M+",
  },
  {
    name: "Elena Martinez",
    title: "Investment Director",
    focus: "Clean Tech, Sustainability",
    investments: "30+",
    portfolio: "$75M+",
  },
];

export default function InvestorsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Featured Investors</h1>
          <Link href="/auth/register?role=startup">
            <Button>Pitch Your Startup</Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredInvestors.map((investor) => (
            <Card key={investor.name}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">{investor.name}</CardTitle>
                  <BadgeCheck className="h-5 w-5 text-primary" />
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{investor.title}</p>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Focus Areas</span>
                    <span className="text-sm font-medium">{investor.focus}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Investments</span>
                    <span className="text-sm font-medium">{investor.investments}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Portfolio</span>
                    <span className="text-sm font-medium">{investor.portfolio}</span>
                  </div>
                </div>
                <Button className="w-full" variant="outline">
                  View Profile
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}