const comet = document.querySelector(".comet");
const rand = (min, max) => min + Math.random() * (max - min);

const fly = () => {
  const angle = rand(0, Math.PI * 2);
  const size = rand(90, 340);
  const w = window.innerWidth;
  const h = window.innerHeight;
  const cx = rand(0, w);
  const cy = rand(0, h);
  const reach = Math.hypot(w, h) / 2 + size;
  const dx = Math.cos(angle);
  const dy = Math.sin(angle);
  comet.style.setProperty("--comet-size", `${size}px`);
  comet.style.setProperty(
    "--comet-from",
    `${cx - dx * reach}px, ${cy - dy * reach}px`,
  );
  comet.style.setProperty(
    "--comet-to",
    `${cx + dx * reach}px, ${cy + dy * reach}px`,
  );
  const flip = dx > 0 ? -1 : 1;
  const heading = flip === 1 ? 155 : 25;
  comet.style.setProperty("--comet-flip", flip);
  comet.style.setProperty(
    "--comet-angle",
    `${(angle * 180) / Math.PI - heading}deg`,
  );
  comet.style.setProperty("--comet-duration", `${rand(2.5, 9)}s`);
  comet.classList.add("flying");
};

comet.addEventListener("animationend", () => {
  comet.classList.remove("flying");
  setTimeout(fly, rand(6000, 45000));
});

if (!matchMedia("(prefers-reduced-motion: reduce)").matches) {
  setTimeout(fly, rand(1500, 8000));
}
