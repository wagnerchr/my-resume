const DEFAULT_LANGUAGE = "pt";

function showTranslationLoading() {
}

function hideTranslationLoading() {
}

function showTranslationStatus(lang) {
}

function hideTranslationStatus() {
}

function protectElementsFromTranslation() {
  const noTranslateElements = [
    ".word",
    ".word-div",
    ".tech-icon",
    ".skill-item p",
    ".project-title a",
    "code",
    ".header-name h1",
  ];

  noTranslateElements.forEach((selector) => {
    document.querySelectorAll(selector).forEach((el) => {
      el.classList.add("notranslate");
    });
  });

  document.documentElement.setAttribute("translate", "yes");
}

document.addEventListener("DOMContentLoaded", function () {
  protectElementsFromTranslation();
});
