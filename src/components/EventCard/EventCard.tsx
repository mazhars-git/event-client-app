import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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
    <Card className="w-full max-w-md shadow-xl rounded-2xl border border-gray-300">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">{data.title}</CardTitle>
        <CardDescription className="text-sm text-muted-foreground">
          {data.date} • {data.time}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="text-sm text-gray-700">
          <span className="font-medium">Notes:</span> {data.notes}
        </div>
        <div className="inline-block px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
          {data.category}
        </div>
        <div className="text-center space-x-2">
          <Button variant="outline" size="sm" className="mt-2">
            Update
          </Button>
          <Button variant="outline" size="sm" className="mt-2">
            Delete
          </Button>
          <Button variant="outline" size="sm" className="mt-2">
            Archive
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
