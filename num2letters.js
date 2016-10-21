var thousands,
    hundreds,
    tens,
    units,
    digits = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"],
    ten2Nineteen = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"],
    tensTable = ["ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"],
    temp;

function num2letters(number) {
    'use strict';
    thousands = "";
    hundreds = "";
    tens = "";
    units = "";

    if (!isNaN(number)) {
        if (number <= 9999 && number > 0) {

            //thousands
            if (number > 999) {
                thousands = digits[Math.floor(number / 1000) - 1];
            }

            //hundreds
            temp = Math.floor((number / 100) % 10);
            if (number > 99 && temp !== 0) {
                hundreds = digits[temp - 1];
                hundreds = hundreds + " hundred";
            }
            if (number > 999) {
                thousands = hundreds !== "" ? thousands + " thousand, " : thousands + " thousand";
            }

            //tens
            temp = Math.floor((number / 10) % 10);
            if (number > 9 && temp !== 0) {
                if (temp !== 1) {
                    tens = tensTable[temp - 1];
                } else {
                    tens = ten2Nineteen[number % 100 - 10];
                }
            }
            if (number > 99 && tens !== "") {
                tens = " and " + tens;
            }

            // units
            if ((temp !== 1) && (number % 10) !== 0) {
                if (tens !== "") {
                    units = " " + digits[number % 10 - 1];
                } else {
                    units = digits[number % 10 - 1];
                    if (number > 99) {
                        units = " and " + units;
                    }
                }
            }

            return thousands + hundreds + tens + units;

        } else if (number == 0) {
            return "zero";
        } else {
            return "Number is out of range.";
        }
    } else {
        return "This is not a number!";
    }
}