const words = [
  "Fullstack Developer",
  "NodeJs/NestJs Developer",
  "ReactJs/NextJs Developer",
];

const typeWords = async () => {
  const text = document.querySelector(".word");
  if (!text) return;

  let i = 0;
  let texto = "";
  let codeBar = "|";
  let cursorInterval;

  const printWord = async (word) => {
    for (let j = 0; j < word.length; j++) {
      texto += word[j];
      text.textContent = texto;
      await new Promise((r) => setTimeout(r, 200));
    }
  };

  const startCursorBlink = () => {
    if (cursorInterval) clearInterval(cursorInterval);
    cursorInterval = setInterval(() => {
      if (text.textContent.endsWith(codeBar)) {
        text.textContent = texto;
      } else {
        text.textContent = texto + codeBar;
      }
    }, 500);
  };

  startCursorBlink();

  const removeWord = async (word) => {
    for (let k = 0; k < word.length; k++) {
      texto = texto.slice(0, -1);
      text.textContent = texto;
      await new Promise((r) => setTimeout(r, 100));
    }
  };

  while (true) {
    for (i = 0; i < words.length; i++) {
      await printWord(words[i]);
      await new Promise((r) => setTimeout(r, 3000));
      await removeWord(words[i]);
      await new Promise((r) => setTimeout(r, 800));
    }
  }
};

document.addEventListener("DOMContentLoaded", function () {
  const skillItems = document.querySelectorAll(".skill-item");
  const projectCards = document.querySelectorAll(".project-card");

  skillItems.forEach((item) => {
    item.addEventListener("click", function () {
      const tech = this.querySelector("p").textContent.toLowerCase();

      if (this.classList.contains("active")) {
        skillItems.forEach((s) => s.classList.remove("active"));
        showAllProjects();
      } else {
        skillItems.forEach((s) => s.classList.remove("active"));

        this.classList.add("active");

        filterProjects(tech);
      }
    });
  });

  function filterProjects(technology) {
    projectCards.forEach((card) => {
      const cardTechs = Array.from(card.querySelectorAll(".tech-icon")).map(
        (icon) => icon.getAttribute("alt").toLowerCase()
      );

      if (cardTechs.includes(technology)) {
        card.classList.remove("filtered");
      } else {
        card.classList.add("filtered");
      }
    });
  }

  function showAllProjects() {
    projectCards.forEach((card) => {
      card.classList.remove("filtered");
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector(".word")) {
    typeWords();
  }
});
