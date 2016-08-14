var thousands,
    hundreds,
    tens,
    units,
    digits = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"],
    ten2Nineteen = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"],
    temp;


/*function digit2char(digit) {
    switch (digit) {
    case 1:
        return "one";
        break;
    case 2:
        return "two";
        break;
    case 3:
        return "three";
        break;
    case 4:
        return "four";
        break;
    case 5:
        return "five";
        break;
    case 6:
        return "six";
        break;
    case 7:
        return "seven";
        break;
    case 8:
        return "eight";
        break;
    case 9:
        return "nine";
        break;
    default:
        console.log("Parameter is not a digit.");
    }
}*/

function tens2letters(digit) {
    switch (digit) {
    case 1:
        return "ten ";
        break;
    case 2:
        return "twenty ";
        break;
    case 3:
        return "thirty ";
        break;
    case 4:
        return "forty ";
        break;
    case 5:
        return "fifty ";
        break;
    case 6:
        return "sixty ";
        break;
    case 7:
        return "seventy ";
        break;
    case 8:
        return "eighty ";
        break;
    case 9:
        return "ninety ";
        break;
    default:
        console.log("Parameter is not a digit.");
    }
}



function num2letters(number) {
    thousands = "";
    hundreds = "";
    tens = "";
    units = "";

    if (!isNaN(number)) {
        if (number <= 9999 && number >= 0) {

            //thousands
            if (number > 999) {
                thousands = digits[Math.floor(number / 1000) - 1]; //digit2char(Math.floor(number / 1000));
                //thousands = thousands + " thousand, ";
            }

            //hundreds
            temp = Math.floor((number / 100) % 10);
            if (number > 99 && temp != 0) {
                hundreds = digits[temp - 1]; // digit2char(temp);
                hundreds = hundreds + " hundred ";
            }

            if (hundreds != "") {
                thousands = thousands + " thousand, ";
            } else {
                thousands = thousands + " thousand ";
            }

            //tens
            temp = Math.floor((number / 10) % 10);
            if (number > 9 && temp != 0) {
                if (temp != 1) {
                    tens = "and " + tens2letters(temp);
                    // Units
                    units = digits[number % 10 - 1]; // digit2char(number % 10);
                } else {
                    tens = "and " + ten2Nineteen[number % 100 - 10];
                }
            } else if (number % 10 != 0) {
                // Units
                units = "and " + digits[number % 10 - 1]; // digit2char(number % 10);
            }
            return thousands + hundreds + tens + units;

        } else if (number === 0) {
            return "zero";
        } else {
            console.log("Number is out of range.")
        }
    } else {
        console.log("Parameter is not a number!");
    }
}