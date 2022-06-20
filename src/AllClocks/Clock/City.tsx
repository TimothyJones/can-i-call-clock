export const City = ({ city }: { city: string | Array<string> }) => (
  <div className="City">
    {Array.isArray(city)
      ? city.map((name) => (
          <div className="multi-city" key={name}>
            {name}
          </div>
        ))
      : city}
  </div>
);
