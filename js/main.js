// 1. التفاعل الأول: زر تبديل مظهر الموقع (Dark Mode)
const themeBtn = document.getElementById('theme-btn');

themeBtn.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    
    // تغيير أيقونة ونص الزر بناءً على الوضع الحالي
    if (document.body.classList.contains('dark-mode')) {
        themeBtn.textContent = "تبديل المظهر ☀️";
    } else {
        themeBtn.textContent = "تبديل المظهر 🌙";
    }
});

// 2. التفاعل الثاني: التحقق من استمارة الطلب (Form Validation)
const orderForm = document.getElementById('order-form');
const formStatus = document.getElementById('form-status');

orderForm.addEventListener('submit', function(event) {
    event.preventDefault(); // منع الصفحة من إعادة التحميل تلقائياً
    
    const buyerName = document.getElementById('buyer-name').value;
    
    // فحص شرط طول الاسم (يجب أن يكون 3 أحرف على الأقل)
    if (buyerName.trim().length < 3) {
        formStatus.textContent = "يرجى إدخال اسم صحيح مكون من 3 أحرف على الأقل.";
        formStatus.style.color = "#ff4d4d"; // لون أحمر للخطأ
    } else {
        formStatus.textContent = `تم تأكيد حجزك بنجاح يا ${buyerName}! سنتواصل معك قريباً ✨`;
        formStatus.style.color = "#4dff4d"; // لون أخضر للنجاح
        orderForm.reset(); // تفريغ الخانات بعد الإرسال الناجح
    }
});
