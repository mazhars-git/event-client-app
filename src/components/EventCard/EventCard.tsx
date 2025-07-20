const EventCard = ({ country }: any) => {
  console.log(country);
  return (
    <div className="border p-5 m-3 rounded">
      <h1 className="text-2xl font-bold text-amber-500">
        Name: {country.country}{" "}
      </h1>
      <h4 className="font-semibold">Cities: {country.cities.length}</h4>
    </div>
  );
};

export default EventCard;
