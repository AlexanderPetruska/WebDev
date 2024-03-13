const button = document.querySelector(".ripple-effect");

button.addEventListener("click", (e) => {
  const ANIMATION_SPEED = 1000;

  let numberX = e.clientX - e.target.offsetLeft;
  let numberY = e.clientY - e.target.offsetTop;

  const ripple = document.createElement("div");

  ripple.style.left = numberX + "px";
  ripple.style.top = numberY + "px";
  button.appendChild(ripple);

  setTimeout(() => {
    ripple.remove();
  }, ANIMATION_SPEED);
});
