function formatNumber(phoneNumber, input) {

    let formattedNumber = phoneNumber

        // Remove all characters but digits and +
        .replace(/[^\d+]/g, '')

        // Remove international dialing prefix
        .replace(/^[+00]{3}|^[00]{2}/g, '+')

        // Add Irish country prefix
        .replace(/^0(?=[1-9])|^353/, '+353');

    // Validate result
    alert(validatedNumber(formattedNumber));

    // If an input element was provided - update its value
    if (phoneNumber)
        input.value = formattedNumber
    // Else - return the formatted number
    else
        return formattedNumber;
}

function validatedNumber(phoneNumber) {

    // Gaurd against number lenght
    if (phoneNumber.length > 15 || phoneNumber < 8) return false;

    // Allow potentially correct phone numbers
    if (phoneNumber.startsWith('+')) return true;

    // Validated formatted phone number structure
    if(/^\+?[1-9]\d{1,14}$/g.test(phoneNumber)) true;
}
