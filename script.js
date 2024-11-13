document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();  // ป้องกันการส่งฟอร์มแบบปกติ

    const nameInput = document.getElementById('Name').value;
    const salaryInput = document.getElementById('Salary').value;
    const ageInput = document.getElementById('Age').value;
    const emailInput = document.getElementById('Email').value;
    const nameError = document.getElementById('nameError');
    const salaryError = document.getElementById('salaryError');
    const ageError = document.getElementById('ageError');
    const emailError = document.getElementById('emailError');

    const nameFormat = /^[A-Za-zก-๙\s]+$/;
    const salaryFormat = /^\d{1,3}(?:,\d{3})*$/;
    const ageFormat = /^\d{1,2}$/;
    const emailFormat = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // validate ชื่อ
    if (nameFormat.test(nameInput)) {
        nameError.classList.add('hidden');
    } else {
        nameError.classList.remove('hidden');
    }
    // validate เงินเดือน
    if (salaryFormat.test(salaryInput)) {
        salaryError.classList.add('hidden');
    } else {
        salaryError.classList.remove('hidden');
    }
    // validate อายุ
    if (ageFormat.test(ageInput)) {
        ageError.classList.add('hidden');
    } else {
        ageError.classList.remove('hidden');
    }
    // validate email
    if (emailFormat.test(emailInput)) {
        emailError.classList.add('hidden');
    } else {
        emailError.classList.remove('hidden');
    }
    if (nameError.classList.contains('hidden') &&
        salaryError.classList.contains('hidden') &&
        ageError.classList.contains('hidden') &&
        emailError.classList.contains('hidden')) {
        alert('บันทึกข้อมูลสำเร็จ');
        // ดำเนินการบันทึกข้อมูล
    }
});
