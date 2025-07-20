import { useEffect, useState } from "react";
import EventCard from "../EventCard/EventCard";

const Events = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://countriesnow.space/api/v0.1/countries")
      .then((res) => res.json())
      .then((data) => setCountries(data.data));
  });

  return (
    <div>
      <h1 className="text-3xl text-center py-4 font-bold">Upcoming Events</h1>
      <div className="grid grid-cols-3">
        {countries.slice(1, 20).map((country) => (
          <EventCard country={country}></EventCard>
        ))}
      </div>
    </div>
  );
};

export default Events;
