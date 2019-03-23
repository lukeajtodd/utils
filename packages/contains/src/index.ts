/**
 * Checks if the passed charValue is found within
 * the passed stringValue
 *
 * @param {String} stringValue
 * @param {String} charValue
 */
export function contains(stringValue: string, charValue: string) {
    return stringValue.indexOf(charValue) > -1;
}
