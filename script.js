let flipbook;

function openBook() {

  document.getElementById("cover").style.display = "none";
  document.getElementById("stage").style.display = "flex";

  const pages = [];

  // ✔ FULL RANGE INSIDE ENGINE (2–69)
  for (let i = 2; i <= 69; i++) {
    pages.push(`images/${i}.png`);
  }

  flipbook = new St.PageFlip(document.getElementById("book"), {

    width: 450,
    height: 600,

    size: "fixed",

    showCover: false,

    usePortrait: false,

    drawShadow: true,
    maxShadowOpacity: 0.5,

    mobileScrollSupport: true,

    startPage: 0,

    autoSize: false
  });

  flipbook.loadFromImages(pages);

  setTimeout(() => {
    flipbook.update();
  }, 400);
}