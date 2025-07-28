import { useEffect, useState } from "react";
import EventCard from "../EventCard/EventCard";

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("https://event-server-app.vercel.app/events")
      .then((res) => res.json())
      .then((data) => {
        setEvents(data);
      });
  }, []);

  // console.log("data: ", events);

  return (
    <div className="container mx-auto min-h-screen">
      <h1 className="text-3xl text-center py-4 font-bold">Upcoming Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 py-3">
        {events.map((event) => (
          <EventCard data={event} />
        ))}
      </div>
    </div>
  );
};

export default Events;
