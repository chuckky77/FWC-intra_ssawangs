const balloon = document.getElementById('balloon');

let currentSize = 200;
const colors = ['red', 'green', 'blue'];
let colorIndex = 0;

// คลิก
balloon.addEventListener('click', () => {
    currentSize += 10;

    if (currentSize > 420) {
        // ระเบิดรีเซ็ต
        currentSize = 200;
        colorIndex = 0;
    } else {
        // เปลี่ยนสี
        colorIndex = (colorIndex + 1) % colors.length;
    }

    updateBalloon();
});

// เมาส์ออก
balloon.addEventListener('mouseleave', () => {
    if (currentSize > 200) {
        currentSize -= 5;
        
        // ล็อคไว้ที่ 200px
        if (currentSize < 200) {
            currentSize = 200;
        }

        // เปลี่ยนสีย้อนกลับ
        colorIndex = (colorIndex - 1 + colors.length) % colors.length;
    }

    updateBalloon();
});

// ฟังก์ชันอัปเดตขนาดและสีของลูกโป่ง
function updateBalloon() {
    balloon.style.width = currentSize + 'px';
    balloon.style.height = currentSize + 'px';
    balloon.style.backgroundColor = colors[colorIndex];
}