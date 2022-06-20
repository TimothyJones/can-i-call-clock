import { DateTime, Info } from 'luxon';
import { useMemo } from 'react';
import { nextTimeOfHour } from './dateMath';
import { cityFromTimezoneString, timeOfDayString } from './formatters';
import { TimeOfDay, TimeUntil } from './types';

interface TimeFormats {
  inferredCity: string;
  displayTimezone: string;
  timeUntilWake: TimeUntil;
  timeOfDay: TimeOfDay;
  time: string;
}

export const useTimeFormats = (
  timezone: string,
  localNow: DateTime
): TimeFormats => {
  const { zone, inferredCity, displayTimezone } = useMemo(() => {
    const zone = Info.normalizeZone(timezone);

    return {
      zone,
      inferredCity: cityFromTimezoneString(timezone),
      displayTimezone: zone.isValid
        ? zone.offsetName(DateTime.now().toMillis(), { format: 'long' })
        : 'Invalid timezone',
    };
  }, [timezone]);

  return {
    inferredCity,
    displayTimezone,
    ...useMemo(() => {
      const now = localNow.setZone(zone);

      return {
        timeUntilWake: nextTimeOfHour(now, 9).diff(now, [
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
