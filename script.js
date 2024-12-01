document.getElementById("sendButton").addEventListener("click", function() {
  var userInput = document.getElementById("userInput").value;
  if (userInput) {
    var chatBox = document.getElementById("chatBox");
    var newMessage = document.createElement("div");
    newMessage.textContent = userInput;
    chatBox.appendChild(newMessage);
    document.getElementById("userInput").value = "";  // Clear input
    chatBox.scrollTop = chatBox.scrollHeight;  // Auto-scroll to bottom
  }
});
