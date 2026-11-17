const wishBtn = document.getElementById("wishBtn");
const wishMessage = document.getElementById("wishMessage");
wishBtn.addEventListener("click", () => {
  wishMessage.textContent = "May every little wish of yours find its way to you. You deserve the sweetest things. ♡";
  wishBtn.textContent = "A wish sent with love ♡";
  for (let i = 0; i < 18; i++) {
    const heart = document.createElement("span");
    heart.textContent = Math.random() > .5 ? "♡" : "✦";
    heart.style.cssText = `position:fixed;left:${Math.random()*100}vw;bottom:12vh;color:#a75f69;font-size:${14+Math.random()*18}px;z-index:20;pointer-events:none;transition:transform 2.4s ease,opacity 2.4s ease;`;
    document.body.appendChild(heart);
    requestAnimationFrame(() => { heart.style.transform = `translate(${(Math.random()-.5)*100}px,-${45+Math.random()*65}vh) rotate(${Math.random()*90}deg)`; heart.style.opacity = "0"; });
    setTimeout(() => heart.remove(), 2500);
  }
});
