import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Users, Video } from "lucide-react";
import Link from "next/link";

const upcomingEvents = [
  {
    name: "Startup Pitch Night",
    date: "May 15, 2024",
    type: "Virtual",
    attendees: "200+",
    description: "Join us for an evening of innovative startup pitches and networking opportunities.",
  },
  {
    name: "Investor Networking Summit",
    date: "May 20, 2024",
    type: "Hybrid",
    attendees: "150+",
    description: "Connect with leading investors and learn about the latest investment trends.",
  },
  {
    name: "Tech Founders Meetup",
    date: "May 25, 2024",
    type: "Virtual",
    attendees: "100+",
    description: "Monthly meetup for tech founders to share experiences and best practices.",
  },
];

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Upcoming Events</h1>
          <Link href="/auth/register">
            <Button>Join Community</Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {upcomingEvents.map((event) => (
            <Card key={event.name}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">{event.name}</CardTitle>
                  {event.type === "Virtual" ? (
                    <Video className="h-5 w-5 text-primary" />
                  ) : (
                    <Users className="h-5 w-5 text-primary" />
                  )}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{event.description}</p>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Date</span>
                    <span className="text-sm font-medium">{event.date}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Type</span>
                    <span className="text-sm font-medium">{event.type}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Expected Attendees</span>
                    <span className="text-sm font-medium">{event.attendees}</span>
                  </div>
                </div>
                <Button className="w-full" variant="outline">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}