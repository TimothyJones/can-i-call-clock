import { DateTime } from 'luxon';
import { TimeOfDay } from '../../types';

export const timeOfDayString = (now: DateTime): TimeOfDay => {
  if (now.hour >= 23) {
    return 'night';
  }
  if (now.hour >= 21) {
    return 'lateEvening';
  }
  if (now.hour >= 18) {
    return 'earlyEvening';
  }
  if (now.hour >= 9) {
    return 'work';
  }
  if (now.hour >= 7) {
    return 'morning';
  }
  return 'night';
};

export const cityFromTimezoneString = (timezone: string) => {
  const split = timezone.split('/');
  return split.length === 2 ? split[1].replaceAll('_', ' ') : 'Unknown City';
};
