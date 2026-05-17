console.log("JS working ✅");

document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Page reload hone se rokta hai
    
    // Aapke HTML ki IDs yahan li gayi hain
    const pass = document.getElementById('password').value;
    const confirm = document.getElementById('confirmPassword').value;
    const errorMsg = document.getElementById('errorMsg');

    // 1. Password match check karein
    if (pass !== confirm) {
        errorMsg.style.color = "red";
        errorMsg.innerText = "Passwords do not match! ❌";
        return; // Yahan ruk jayega agar password galat hai
    }

    // 2. Agar sab sahi hai, toh Success message dikhao aur Payment Modal kholo
    errorMsg.style.color = "green";
    errorMsg.innerText = "Registration Successful ✅. Opening Payment...";

    // 2 second ka wait karke Payment Modal dikhayega
    setTimeout(() => {
        document.getElementById('paymentModal').style.display = 'flex';
    }, 1000);
});

// Modal band karne ka function
function closePayment() {
    document.getElementById('paymentModal').style.display = 'none';
}

// Payment confirm function (UTR Check)
function confirmPayment() {
    const utr = document.getElementById('utrNumber').value;
    
    if(utr.trim().length < 6) {
        alert("Please enter a valid Transaction ID (UTR)!");
        return;
    }

    alert("Payment submitted! We will verify and activate your account.");
    
    // Payment ke baad user ko login page par bhej dega
    window.location.href = "login.html";
}
