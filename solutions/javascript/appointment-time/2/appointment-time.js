// @ts-check

/**
 * Create an appointment
 *
 * @param {number} days
 * @param {number} [now] (ms since the epoch, or undefined)
 *
 * @returns {Date} the appointment
 */
export function createAppointment(days, now = Date.now()) {
  const appointment = new Date(now);
  appointment.setDate(appointment.getDate() + days);
  return appointment;
}

/**
 * Generate the appointment timestamp
 *
 * @param {Date} appointmentDate
 *
 * @returns {string} timestamp
 */
export function getAppointmentTimestamp(appointmentDate) {
  return appointmentDate.toISOString();
}

/**
 * Get details of an appointment
 *
 * @param {string} timestamp (ISO 8601)
 *
 * @returns {Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>} the appointment details
 */
export function getAppointmentDetails(timestamp) {
  const appointment = createAppointment(0, timestamp);
  return {
    year: appointment.getFullYear(),
    month: appointment.getMonth(),
    date: appointment.getDate(),
    hour: appointment.getHours(),
    minute: appointment.getMinutes(),
  };
}

/**
 * Update an appointment with given options
 *
 * @param {string} timestamp (ISO 8601)
 * @param {Partial<Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>>} options
 *
 * @returns {Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>} the appointment details
 */
export function updateAppointment(timestamp, options) {
  const appointment = createAppointment(0, timestamp);
  const setters = {
    year: "setFullYear",
    month: "setMonth",
    date: "setDate",
    hour: "setHours",
    minute: "setMinutes",
  }
  for (let key in options) {
    appointment[setters[key]](options[key]);
  }
  return getAppointmentDetails(getAppointmentTimestamp(appointment));
}

/**
 * Get available time in seconds (rounded) between two appointments
 *
 * @param {string} timestampA (ISO 8601)
 * @param {string} timestampB (ISO 8601)
 *
 * @returns {number} amount of seconds (rounded)
 */
export function timeBetween(timestampA, timestampB) {
  const toMilliseconds = (timestamp) => createAppointment(0, timestamp).getTime();
  const a = toMilliseconds(timestampA);
  const b = toMilliseconds(timestampB);
  return Math.round((b - a) / 1e3);
}

/**
 * Get available times between two appointment
 *
 * @param {string} appointmentTimestamp (ISO 8601)
 * @param {string} currentTimestamp (ISO 8601)
 */
export function isValid(appointmentTimestamp, currentTimestamp) {
  return timeBetween(currentTimestamp, appointmentTimestamp) > 0;
}
