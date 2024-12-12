import moment from 'moment';

/**
 * Converts a given local time string to a UTC time string.
 *
 * @param timeValue - A string representing the local time in 'HH:mm:ss' format.
 * @returns A string representing the corresponding time in UTC in 'HH:mm:ss' format,
 *          or null if the input is invalid.
 */
export const convertTimeToUtc = (timeValue: string) => {
  if (!timeValue) {
    return null;
  }
  
  const scheduledTimeHours: [number, number, number] = timeValue
    .split(':')
    .map((time) => Number(time)) as [number, number, number];

  // Convert local date to UTC
  return moment(new Date().setHours(...scheduledTimeHours, 0)).utc().format('HH:mm:ss');
};

/**
 * Converts a given UTC time string to a local time string.
 *
 * @param receivedTime - A string representing the UTC time in 'HH:mm:ss' format.
 * @returns A string representing the corresponding time in the local timezone
 *          in 'HH:mm:ss' format, or null if the input is invalid.
 */
export const convertUtcToTime = (receivedTime: string) => {
  if (!receivedTime) {
    return null;
  }
  
  const today = moment().utc().format('YYYY-MM-DD');
  const utcDateTime = `${today}T${receivedTime}Z`;

  // Convert UTC to local time
  return moment.utc(utcDateTime).local().format('HH:mm:ss');
};
