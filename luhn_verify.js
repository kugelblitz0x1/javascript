var cc = "";

console.log("Original: " + cc);

function reverse_string(num1) {
    var reversed = "";
    for ( var i=num1.length; i>0; i-- ) {
        reversed += num1.charAt(i - 1);
    }
    return reversed;
}

var cc_rev = reverse_string(cc);

console.log("Reversed: " + cc_rev);
console.log("Double every other digit. If the sum is greater than 9, add each individual digit of the sum together:");
console.log("_________________________");

function step2(num2) {
    var cc_dub = "";
    for ( i=0; i<num2.length; i++ ) {
        // Check for even. If so, double it.
        if ( (i + 1)%2 == 0 ) {
            var var_dub = parseInt(num2.charAt(i)) * 2;
            console.log(num2.charAt(i) + " * 2 = " + parseInt(num2.charAt(i)) * 2);
            var var_dub_str = var_dub.toString();
            // Check if greater than 9. If so, add both digits.
            if (  var_dub > 9 ) {
                var var_dub_reduced = parseInt(var_dub_str.charAt(0)) + parseInt(var_dub_str.charAt(1));
                console.log(var_dub + " IS greater than 9");
                console.log(parseInt(var_dub_str.charAt(0)) + " + " + parseInt(var_dub_str.charAt(1)) + " = " + var_dub_reduced );
                console.log("_________________________");
                cc_dub += var_dub_reduced;
            }
            // Since it's not greater than 9, append to string.
            else {
                console.log(var_dub + " is NOT greater than 9");
                console.log("_________________________");
                cc_dub += var_dub;
            }
        }
        // If not even, append to new string
        else {
            cc_dub += num2.charAt(i);
        }
    }
    return cc_dub;
}

var cc2 = step2(cc_rev);

console.log("Double and Reduce Every Other Digit: " + cc2);

function step3(num3) {
    // Add up all digits
    var cc_sum = 0;
    for ( i=0; i<num3.length; i++ ) {
        cc_sum += parseInt(num3.charAt(i));
    }
    return cc_sum;
}

var cc_sum = step3(cc2);

console.log("Sum of All Digits: " + cc_sum);
console.log("Mod 10: " + parseInt(cc_sum)%10);

function validate(num4) {
    // Check to see if sum is divisible by 10. If so, the card is valid.
    if (parseInt(num4)%10 == 0) {
        return "Valid";
    }
    else {
        return "Invalid";
    }
}

var status = validate(cc_sum);

console.log("Status: " + status);
