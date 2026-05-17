const socket = io("http://localhost:5000");

const sendBtn = document.getElementById("sendBtn");
const messageInput = document.getElementById("messageInput");
const chatBox = document.getElementById("chatBox");

if (sendBtn) {
  sendBtn.addEventListener("click", () => {
    const message = messageInput.value;
    if (message.trim() === "") return;
    socket.emit("sendMessage", message);
    displayMessage(message, 'sent');
    messageInput.value = "";
  });
}

if (messageInput) {
    messageInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            sendBtn.click();
        }
    });
}

socket.on("receiveMessage", (msg) => {
  displayMessage(msg, 'received');
});

function displayMessage(msg, type) {
  if (!chatBox) return;
  const msgDiv = document.createElement("div");
  msgDiv.classList.add("message-bubble");
  msgDiv.classList.add(type === 'sent' ? "message-sent" : "message-received");
  msgDiv.innerText = msg;
  chatBox.appendChild(msgDiv);
  chatBox.scrollTo({
    top: chatBox.scrollHeight,
    behavior: 'smooth'
  });
}
  