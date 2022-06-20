export const City = ({ city }: { city: string | Array<string> }) => (
  <div className="City">
    {Array.isArray(city)
      ? city.map((name) => <div className="multi-city">{name}</div>)
      : city}
  </div>
);
