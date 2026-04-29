// Socket connection
const socket = io("http://localhost:5000");

// Elements
const sendBtn = document.getElementById("sendBtn");

if (sendBtn) {
  sendBtn.addEventListener("click", () => {
    const input = document.getElementById("messageInput");
    const message = input.value;

    if (message.trim() === "") return;

    // Send message to server
    socket.emit("sendMessage", message);

    input.value = "";
  });
}

// Receive message from server
socket.on("receiveMessage", (msg) => {
  const chatBox = document.getElementById("chatBox");

  const msgDiv = document.createElement("div");
  msgDiv.classList.add("message");
  msgDiv.innerText = msg;

  chatBox.appendChild(msgDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
});