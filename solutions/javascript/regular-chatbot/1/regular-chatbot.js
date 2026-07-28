// @ts-check

/**
 * Given a certain command, help the chatbot recognize whether the command is valid or not.
 *
 * @param {string} command
 * @returns {boolean} whether or not is the command valid
 */
export const isValidCommand = (command) => /^chatbot/i.test(command);

/**
 * Given a certain message, help the chatbot get rid of all the emoji's encryption through the message.
 *
 * @param {string} message
 * @returns {string} The message without the emojis encryption
 */
export const removeEmoji = (message) => message.replace(new RegExp(/emoji\d{4}/, 'g'), '');

/**
 * Given a certain phone number, help the chatbot recognize whether it is in the correct format.
 *
 * @param {string} number
 * @returns {string} the Chatbot response to the phone Validation
 */
export const checkPhoneNumber = (number) => /^\(\+\d{2}\)\s\d{3}-\d{3}-\d{3}$/.test(number) 
  ? "Thanks! You can now download me to your phone."
  : `Oops, it seems like I can't reach out to ${number}`;

/**
 * Given a certain response from the user, help the chatbot get only the URL.
 *
 * @param {string} userInput
 * @returns {string[] | null} all the possible URL's that the user may have answered
 */
export const getURL = (userInput) => userInput.match(/\w{2,}(?:\.\w{2,})+/g)

/**
 * Greet the user using the full name data from the profile.
 *
 * @param {string} fullName
 * @returns {string} Greeting from the chatbot
 */
export const niceToMeetYou = (fullName) => 
  `Nice to meet you, ${fullName}`.replace(/(\w+),\s(\w+)$/, "$2 $1");
