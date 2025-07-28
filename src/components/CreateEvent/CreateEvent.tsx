// src/components/CreateEventForm.tsx
"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectItem,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export type TCategory = "Work" | "Personal" | "Other";

export type Event = {
  title: string;
  date: string;
  time: string;
  notes: string;
  category: TCategory;
};

type Props = {
  onSubmit: (event: Event) => void;
};

const CreateEventForm = ({ onSubmit }: Props) => {
  const [formData, setFormData] = useState<Event>({
    title: "",
    date: "",
    time: "",
    notes: "",
    category: "Work",
  });

  const handleChange = (key: keyof Event, value: string) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      title: "",
      date: "",
      time: "",
      notes: "",
      category: "Work",
    });
    try {
      const res = await fetch("https://event-server-app.vercel.app/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to create event");

      const data = await res.json();
      console.log("Created Event:", data);
      // optionally reset form or show a success message
    } catch (error) {
      console.error("Error creating event:", error);
    }
  };

  return (
    <div className="bg-slate-200 min-h-screen">
      <div className="container mx-auto pt-8 pb-4">
        <form
          onSubmit={handleSubmit}
          className="bg-white border border-gray-200 shadow-md p-6 rounded-xl w-full max-w-lg mx-auto"
        >
          <h2 className="text-xl font-bold mb-4 text-center">
            Create New Event
          </h2>

          <div className="grid gap-4">
            <div>
              <Label className="mb-2" htmlFor="title">
                Title
              </Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => handleChange("title", e.target.value)}
                placeholder="Enter title"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label className="mb-2" htmlFor="date">
                  Date
                </Label>
                <Input
                  type="date"
                  id="date"
                  value={formData.date}
                  onChange={(e) => handleChange("date", e.target.value)}
                  required
                />
              </div>

              <div>
                <Label className="mb-2" htmlFor="time">
                  Time
                </Label>
                <Input
                  type="time"
                  id="time"
                  value={formData.time}
                  onChange={(e) => handleChange("time", e.target.value)}
                  required
                />
              </div>
            </div>

            <div>
              <Label className="mb-2" htmlFor="category">
                Category
              </Label>
              <Select
                value={formData.category}
                onValueChange={(value) => handleChange("category", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Work">Work</SelectItem>
                  <SelectItem value="Personal">Personal</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label className="mb-2" htmlFor="notes">
                Notes
              </Label>
              <Textarea
                id="notes"
                value={formData.notes}
                onChange={(e) => handleChange("notes", e.target.value)}
                placeholder="Add any notes..."
              />
            </div>

            <Button type="submit" className="mt-2 w-full">
              Create Event
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateEventForm;
