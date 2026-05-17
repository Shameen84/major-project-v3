document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Page ko reload hone se rokta hai

    // 1. Login form se Username aur Password uthana
    const usernameInput = document.getElementById('username').value.trim();
    const passwordInput = document.getElementById('password').value.trim();
    const message = document.getElementById('message');

    // 2. Browser ki memory (LocalStorage) se Saved Data nikalna
    // Dhyan rakhein ki Registration page par bhi 'savedUser' aur 'savedPass' naam hi use kiya ho
    const savedUsername = localStorage.getItem('savedUser');
    const savedPassword = localStorage.getItem('savedPass');

    // 3. Pehle check karein ki koi user register hai bhi ya nahi
    if (!savedUsername) {
        message.style.color = "orange";
        message.innerText = "No account found. Please Register first!";
        return;
    }

    // 4. Matching Logic (Jo user ne dala vs Jo memory mein save hai)
    if (usernameInput === savedUsername && passwordInput === savedPassword) {
        // Agar match ho gaya
        message.style.color = "green";
        message.innerText = "Login Successful! Welcome " + savedUsername;
        
        // Dashboard par bhejne ke liye (Optional)
        setTimeout(() => {
            window.location.href = "dashboard.html"; 
        }, 1500);

    } else {
        // Agar match nahi hua (Wahi error jo aapko aa raha tha)
        message.style.color = "red";
        message.innerText = "Invalid Username or Password!";
    }
});
