import { DateTime } from 'luxon';

export const nextTimeOfHour = (now: DateTime, hour: number) => {
  const candidateNine = now.set({ hour, minute: 0, second: 0 });
  return candidateNine < now ? candidateNine.plus({ day: 1 }) : candidateNine;
};
