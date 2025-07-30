import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

type TCategory = "Work" | "Personal" | "Other";

type TEvent = {
  title: string;
  date: string;
  time: string;
  notes: string;
  category: TCategory;
};

interface EventCardProps {
  data: TEvent;
}

export default function EventCard({ data }: EventCardProps) {
  return (
    <Card className="w-full max-w-md shadow-2xl rounded-xl border border-gray-300 bg-cyan-800">
      <CardHeader>
        <CardTitle className="text-xl text-slate-300 font-semibold">
          {data.title}
        </CardTitle>
        <CardDescription className="text-sm text-muted-foreground">
          {data.date} • {data.time}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="text-sm text-slate-300">
          <span className="font-medium">Notes:</span> {data.notes}
        </div>
        <div className="inline-block px-2 py-1 text-xs font-medium bg-slate-200 text-blue-800 rounded-full">
          {data.category}
        </div>
        <div className="text-center space-x-2">
          <Link to="/update-event">
            <Button
              variant="ghost"
              size="sm"
              className="bg-sky-500 text-white mt-2"
            >
              Update
            </Button>
          </Link>
          <Button
            variant="ghost"
            size="sm"
            className="bg-red-400 text-white mt-2"
          >
            Delete
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="bg-green-500 text-white mt-2"
          >
            Archive
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
