import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { RocketIcon, TrendingUp, Users, MessageSquare, Shield, Target, Award } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
      {/* Navigation */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <RocketIcon className="h-6 w-6" />
            <span className="text-xl font-bold">Startup Connect</span>
          </div>
          <div className="flex items-center space-x-6">
            <Link href="/startups">
              <Button variant="ghost">Startups</Button>
            </Link>
            <Link href="/investors">
              <Button variant="ghost">Investors</Button>
            </Link>
            <Link href="/events">
              <Button variant="ghost">Events</Button>
            </Link>
            <Link href="/auth/login">
              <Button variant="ghost">Login</Button>
            </Link>
            <Link href="/auth/register">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container py-24 space-y-8 text-center">
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">
          Where Great Ideas Meet
          <span className="text-primary"> Smart Capital</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Startup Connect is your gateway to startup success. Connect with investors,
          showcase your ideas, and turn your vision into reality.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/auth/register?role=startup">
            <Button size="lg">Launch Your Startup</Button>
          </Link>
          <Link href="/auth/register?role=investor">
            <Button size="lg" variant="outline">Start Investing</Button>
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="container py-24">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Startup Connect?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="flex flex-col items-center text-center space-y-4 p-6">
              <div className="p-3 rounded-full bg-primary/10">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Smart Matching</h3>
              <p className="text-muted-foreground">
                Our AI-powered algorithm connects startups with the perfect investors based on industry, stage, and goals.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center text-center space-y-4 p-6">
              <div className="p-3 rounded-full bg-primary/10">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Secure Platform</h3>
              <p className="text-muted-foreground">
                Enterprise-grade security for your sensitive data and communications with potential partners.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center text-center space-y-4 p-6">
              <div className="p-3 rounded-full bg-primary/10">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Expert Network</h3>
              <p className="text-muted-foreground">
                Access to mentors, advisors, and industry experts to help guide your startup journey.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container py-24 text-center">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-4xl font-bold">500+</h3>
            <p className="text-muted-foreground">Active Startups</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">$100M+</h3>
            <p className="text-muted-foreground">Capital Raised</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">200+</h3>
            <p className="text-muted-foreground">Verified Investors</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">50+</h3>
            <p className="text-muted-foreground">Countries</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-24 text-center">
        <Card>
          <CardContent className="p-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Startup Journey?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of successful startups and investors on Startup Connect
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/auth/register">
                <Button size="lg">Get Started Now</Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline">Learn More</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}