const bar = document.querySelectorAll(".bar");
const dayNumber = new Date().getDay();

bar.forEach((bar, idx) => {
  if (idx + 1 === dayNumber || (idx === 6 && dayNumber === 0)) {
    bar.classList.add("active");
  }
});
