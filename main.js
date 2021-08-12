function myFunction(params) {
    var first = parseFloat(document.getElementById('first').value)
    var second = parseFloat(document.getElementById('second').value)
    if (document.getElementById('first').value === '' || document.getElementById('second').value === '') {
        document.getElementById('answer').style.color = 'red';
        document.getElementById('answer').innerHTML = '0';
    } else {
        var oper = document.getElementById("operators").value
        if (oper === '+') {
            document.getElementById('answer').style.color = 'green';
            document.getElementById('answer').innerHTML = first + second;
        }
        if (oper === '-') {
            document.getElementById('answer').innerHTML = first - second;
            document.getElementById('answer').style.color = 'green';
        }
        if (oper === '*') {
            document.getElementById('answer').innerHTML = first * second;
            document.getElementById('answer').style.color = 'green';
        }
        if (oper === '/') {
            document.getElementById('answer').innerHTML = first / second;
            document.getElementById('answer').style.color = 'green';
        }
    }
}
