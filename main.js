document.getElementById('quadratic-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let a = parseFloat(document.getElementById('a').value);
    let b = parseFloat(document.getElementById('b').value);
    let c = parseFloat(document.getElementById('c').value);

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        displayResults('係数を正しい数値で入力してください。');
        return;
    }

    let discriminant = b * b - 4 * a * c;
    let x1, x2;

    if (discriminant > 0) {
        x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        displayResults(`方程式の解は次の通りです:<br>x1 = ${x1}<br>x2 = ${x2}`);
    } else if (discriminant === 0) {
        x1 = x2 = -b / (2 * a);
        displayResults(`方程式の解は重解です:<br>x = ${x1}`);
    } else {
        let realPart = -b / (2 * a);
        let imaginaryPart = Math.sqrt(-discriminant) / (2 * a);
        displayResults(`方程式の解は次の通りです:<br>x1 = ${realPart} + ${imaginaryPart}i<br>x2 = ${realPart} - ${imaginaryPart}i`);
    }
});

function displayResults(message) {
    document.getElementById('results').innerHTML = message;
}
