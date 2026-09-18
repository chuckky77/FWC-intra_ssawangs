const leftInput = document.getElementById('left');
const rightInput = document.getElementById('right');
const operatorSelect = document.getElementById('operator');
const btn = document.getElementById('btn');

// ฟังก์ชันตรวจสอบว่าเป็นจำนวนเต็มบวกหรือศูนย์
function isPositiveInteger(str) {
    return /^\d+$/.test(str.trim());
}

btn.addEventListener('click', () => {
    const leftVal = leftInput.value;
    const rightVal = rightInput.value;

    // ตรวจสอบความถูกต้อง
    if (!isPositiveInteger(leftVal) || !isPositiveInteger(rightVal)) {
        alert('Error :(');
        return;
    }

    const num1 = parseInt(leftVal, 10);
    const num2 = parseInt(rightVal, 10);
    const op = operatorSelect.value;

    // ตรวจสอบมอดุโลด้วย 0
    if ((op === '/' || op === '%') && num2 === 0) {
        alert("It's over 9000!");
        console.log("It's over 9000!");
        return;
    }

    let result = 0;
    switch (op) {
        case '+': result = num1 + num2; break;
        case '-': result = num1 - num2; break;
        case '*': result = num1 * num2; break;
        case '/': result = num1 / num2; break;
        case '%': result = num1 % num2; break;
    }

    alert(result);
    console.log(result);
});

setInterval(() => {
    alert('Please, use me...');
}, 30000);