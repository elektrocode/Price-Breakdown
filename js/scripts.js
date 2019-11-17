function total(input1, input2, vatNum, rNum, cTotal) {
    var num1 = parseInt(input1);
    var num2 = parseInt(input2);
    var num3 = num1+num2;

    var vatValue = 0.20;
    var vatNum = num3*vatValue;
    rNum = vatNum.toFixed(2);

    // Current Total
    var cTotal = num3+vatNum;

    // Final values output to input forms
    myForm.sum.value=num3
    myForm.vat.value=rNum
    myForm.gTotal.value=cTotal.toFixed(2)
}
