const ftList = document.getElementById('ft_list');
const newBtn = document.getElementById('new_btn');

// อ่านข้อมูล Cookie เมื่อโหลดหน้าเว็บ
window.onload = function() {
    loadToDos();
};

newBtn.addEventListener('click', () => {
    const text = prompt('Enter a new TO DO:');
    if (text && text.trim() !== '') {
        addToDo(text.trim());
        saveToDos();
    }
});

function addToDo(text) {
    const div = document.createElement('div');
    div.textContent = text;
    
    // เมื่อคลิกที่รายการ ให้ถามยืนยันการลบ
    div.addEventListener('click', () => {
        if (confirm('Do you really want to delete this TO DO?')) {
            div.remove();
            saveToDos();
        }
    });

    // เพิ่มรายการใหม่ไว้ด้านบนสุดเสมอ
    ftList.prepend(div);
}

// ฟังก์ชันบันทึกข้อมูลลง Cookie
function saveToDos() {
    const todos = [];
    const items = ftList.querySelectorAll('div');
    items.forEach(item => {
        todos.push(item.textContent);
    });
    // ใช้ encodeURIComponent เพื่อรองรับตัวอักษรพิเศษและภาษาไทย
    document.cookie = `ft_list=${encodeURIComponent(JSON.stringify(todos))};path=/;max-age=31536000`;
}

// ฟังก์ชันดึงข้อมูลจาก Cookie
function loadToDos() {
    const cookies = document.cookie.split('; ');
    for (let cookie of cookies) {
        const [name, value] = cookie.split('=');
        if (name === 'ft_list' && value) {
            try {
                const todos = JSON.parse(decodeURIComponent(value));
                // ใส่กลับเข้า List จากหลังมาหน้าเพื่อให้ลำดับอยู่ด้านบนสุดถูกต้อง
                for (let i = todos.length - 1; i >= 0; i--) {
                    addToDo(todos[i]);
                }
            } catch (e) {
                console.error('Error parsing cookies:', e);
            }
        }
    }
}