const links = document.querySelectorAll("a");

links.forEach((link) => {
  const linkSpan = link.querySelector('span');
  link.addEventListener("mouseenter", () => {
    link.classList.add("hover");
    linkSpan.style.transform = "scale(1.5)";
  });
  link.addEventListener("mouseleave", () => {
    link.classList.remove("hover");
    linkSpan.style.transform = "scale(1)";
  });
});