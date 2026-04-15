import "../scss/main.scss";
import "bootstrap";
import "prismjs/themes/prism-twilight.css";

document.querySelectorAll(".js-share").forEach((btn) => {
  if (!navigator.share) {
    btn.style.display = "none";
    return;
  }

  btn.addEventListener("click", async (e) => {
    e.preventDefault();

    const title = btn.dataset.title || document.title;
    const text = btn.dataset.text || "";
    const url = btn.dataset.url || window.location.href;

    try {
      await navigator.share({ title, text, url });
    } catch (err) {
      if (err.name !== "AbortError") {
        console.warn("Share failed:", err);
      }
    }
  });
});
