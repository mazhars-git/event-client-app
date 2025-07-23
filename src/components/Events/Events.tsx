import { useEffect, useState } from "react";
import EventCard from "../EventCard/EventCard";

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/events")
      .then((res) => res.json())
      .then((data) => setEvents(data.data));
  }, []);

  console.log(events);

  return (
    <div className="h-screen">
      <h1 className="text-3xl text-center py-4 font-bold">Upcoming Events</h1>
      <div className="grid grid-cols-3 gap-5 py-5">
        {events.map((event) => (
          <EventCard event={event}></EventCard>
        ))}
      </div>
    </div>
  );
};

export default Events;
