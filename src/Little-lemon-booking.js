import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { TimePicker } from "@/components/ui/time-picker";

export default function TableBooking() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState("19:00");
  const [guests, setGuests] = useState(2);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <Card className="rounded-2xl shadow-xl p-6">
        <CardContent>
          <h2 className="text-2xl font-bold mb-4 text-center">Book a Table</h2>
          {submitted ? (
            <div className="text-green-600 text-center">
              <p>Thank you, {name}! Your reservation is confirmed for {date.toDateString()} at {time}.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label>Name</Label>
                <Input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div>
                <Label>Email</Label>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <Label>Date</Label>
                <Calendar selected={date} onSelect={setDate} />
              </div>
              <div>
                <Label>Time</Label>
                <TimePicker value={time} onChange={setTime} />
              </div>
              <div>
                <Label>Number of Guests</Label>
                <Input
                  type="number"
                  min="1"
                  max="20"
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                />
              </div>
              <Button type="submit" className="w-full">
                Confirm Booking
              </Button>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
