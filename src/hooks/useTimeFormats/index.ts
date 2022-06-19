import { DateTime, Info } from 'luxon';
import { useMemo } from 'react';
import { nextTimeOfHour } from './dateMath';
import { cityFromTimezoneString, timeOfDayString } from './formatters';

export const useTimeFormats = (timezone: string, localNow: DateTime) => {
  const { zone, city, displayTimezone } = useMemo(() => {
    const zone = Info.normalizeZone(timezone);

    return {
      zone,
      city: cityFromTimezoneString(timezone),
      displayTimezone: zone.isValid
        ? zone.offsetName(DateTime.now().toMillis(), { format: 'long' })
        : 'Invalid timezone',
    };
  }, [timezone]);

  return {
    city,
    displayTimezone,
    ...useMemo(() => {
      const now = localNow.setZone(zone);

      return {
        timeToNine: nextTimeOfHour(now, 9).diff(now, [
          'hours',
          'minutes',
          'seconds',
        ]),
        timeOfDay: timeOfDayString(now),
        time: now.toLocaleString(DateTime.TIME_WITH_SECONDS),
      };
    }, [localNow, zone]),
  };
};
