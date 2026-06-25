console.log("SCRIPT LOADED");
let currentMode = "normal";
const particles = document.getElementById("particles");
for (let i = 0; i < 50; i++) {
    const dot = document.createElement("span");
    dot.classList.add("firefly");
    dot.style.left = Math.random() * 100 + "vw";
    dot.style.top = Math.random() * 100 + "vh";
    dot.style.animationDuration = (5 + Math.random() * 8) + "s";
    particles.appendChild(dot);
}

function setMode(mode) {
    currentMode = mode;
    const indicator = document.getElementById("modeIndicator");
    const title = mode.charAt(0).toUpperCase() + mode.slice(1);
    indicator.textContent = `Current Mode: ${title}`;
}

function handleKey(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}

async function sendMessage() {
    const input = document.getElementById("userInput");
    const text = input.value.trim();
    if (!text) return;

    const chatBox = document.getElementById("chatBox");
    const user = document.createElement("div");
    user.className = "user-message";
    user.innerText = text;
    chatBox.appendChild(user);

    const bot = document.createElement("div");
    bot.className = "bot-message";
    bot.innerText = "🤩 Butterfly AI is typing...";
    chatBox.appendChild(bot);
    chatBox.scrollTop = chatBox.scrollHeight;
    input.value = "";

    try {
        const response = await fetch("/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ message: text, mode: currentMode })
        });

        const data = await response.json();
        bot.innerText = data.reply || "Sorry, I could not get a reply.";
    } catch (error) {
        bot.innerText = "Oops! There was a connection error.";
        console.error(error);
    } finally {
        chatBox.scrollTop = chatBox.scrollHeight;
    }
}
