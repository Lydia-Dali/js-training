'use strict'

/*
 * Jaden Smith Case
 *
 Make a `jadenCase` function that takes a string as parameter
 and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */

function jadenCase(str){
 	str = str.split(' ');

    for (let i = 0 ; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].substring(1).toLowerCase();

    }

    return str.join(" ");
}




//* Begin of tests
const assert = require('assert')
jadenCase("TEST") 

// End of tests */
