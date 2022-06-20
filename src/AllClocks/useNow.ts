import React from 'react';
import { DateTime } from 'luxon';

export const useNow = () => {
  const [now, setNow] = React.useState(DateTime.now());

  React.useEffect(() => {
    const timer = setInterval(() => {
      setNow(DateTime.now());
    }, 15);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return {
    now,
  };
};
