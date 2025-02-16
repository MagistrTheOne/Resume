const canvas = document.getElementById("matrixCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
const fontSize = 16;
const columns = canvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(1);
function drawMatrix() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#0F0";
    ctx.font = fontSize + "px VT323, monospace";

    for (let i = 0; i < drops.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}
setInterval(drawMatrix, 50);
setTimeout(() => {
    document.getElementById("welcomeScreen").style.opacity = "0";
    setTimeout(() => {
        document.getElementById("welcomeScreen").style.display = "none";
        document.getElementById("confirmationModal").style.display = "block";
    }, 1000);
}, 5000);
document.getElementById("confirmHR").addEventListener("click", () => {
    document.getElementById("confirmationModal").style.display = "none";
    document.getElementById("content").classList.remove("hidden");
    document.getElementById("footer").classList.remove("hidden");
});
document.getElementById("confirmAI").addEventListener("click", () => {
    document.getElementById("confirmationModal").style.display = "none";
    alert("You are not registered in the system, please leave Zion.");
    setTimeout(() => 
        {
        location.reload();
        }, 3000);
});
