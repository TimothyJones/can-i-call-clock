import React from 'react';
import { DateTime } from 'luxon';

export const useNow = () => {
  const [now, setNow] = React.useState(DateTime.now()); // Save the current date to be able to trigger an update

  React.useEffect(() => {
    const timer = setInterval(() => {
      setNow(DateTime.now());
    }, 15);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return {
    now: now,
  };
};
