"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Clock, Video, Users } from "lucide-react";
import { useState } from "react";

const meetings = [
  {
    id: 1,
    title: "Pitch Meeting with VC",
    date: "2024-05-15",
    time: "10:00 AM",
    type: "Virtual",
  },
  {
    id: 2,
    title: "Follow-up Discussion",
    date: "2024-05-15",
    time: "2:00 PM",
    type: "Virtual",
  },
  {
    id: 3,
    title: "Networking Event",
    date: "2024-05-20",
    time: "6:00 PM",
    type: "In-person",
  },
];

export default function CalendarPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Calendar</h1>
        <Button>Schedule Meeting</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[2fr,1fr] gap-6">
        <Card>
          <CardContent className="p-6">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Upcoming Meetings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {meetings.map((meeting) => (
                <div
                  key={meeting.id}
                  className="flex items-start space-x-4 p-3 rounded-lg hover:bg-accent"
                >
                  <div className="p-2 rounded-full bg-primary/10">
                    {meeting.type === "Virtual" ? (
                      <Video className="h-4 w-4 text-primary" />
                    ) : (
                      <Users className="h-4 w-4 text-primary" />
                    )}
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="font-medium">{meeting.title}</p>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="mr-1 h-3 w-3" />
                      {meeting.time}
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