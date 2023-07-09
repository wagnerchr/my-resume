

// Copy Button text -> email
function copyText(a) {
  navigator.clipboard.writeText(a.textContent)
  .then(function() {
    const copyAlert = document.createElement("div");
    copyAlert.textContent = "Copied text!";
    copyAlert.style.backgroundColor = "green";
    copyAlert.style.color = "white";
    copyAlert.style.padding = "10px";
    copyAlert.style.position = "fixed";
    copyAlert.style.top = "50%";
    copyAlert.style.left = "50%";
    copyAlert.style.transform = "translate(-50%, -50%)";
    copyAlert.style.zIndex = "9999";
    copyAlert.style.fontFamily = "Arial";
    copyAlert.style.fontSize = "16px";
    document.body.appendChild(copyAlert);
    setTimeout(function() {
      document.body.removeChild(copyAlert);
    }, 2000);
  }).catch(function() {
    console.log("Não foi possível copiar o texto.");
  });

}


const words = ['Amo a Isabella <3', 'Back-End Developer', 'Love programming <3', 'Sei lá kkk', 'Lorem ipsum dolor sit amet', ' consectetur adipiscing elit', 'Back-End Developer'];
const text = document.querySelector('.word');

const typeWords = async () => {
  let i = 0;
  let texto = ''
  let codeBar = '|'

  const printWord = async (word) => {
    for (let j = 0; j < word.length; j++) {
      texto += word[j]
      console.log(texto)
      text.textContent = texto + (j === word.length - 1 ? codeBar : '');;
      await new Promise(r => setTimeout(r, 200));
    }
  };

  const toggleBarraVertical = () => {
    text.textContent = texto + (text.textContent.endsWith(codeBar) ? '' : codeBar);
    setTimeout(toggleBarraVertical, 500);
  };

  toggleBarraVertical();


  const removeWord = async (word) => {
    for(let k = 0; k < word.length; k++) {
      texto = texto.slice(0, -1)
      text.innerHTML = texto + (text.textContent.endsWith(codeBar) ? '' : codeBar);
      await new Promise(r => setTimeout(r, 200));
    }
  }

  for(i = 0; i < words.length; i++) {
    await printWord(words[i]);
    await new Promise(r => setTimeout(r, 3000));
    await removeWord(words[i])
    await new Promise(r => setTimeout(r, 200));
    i == words.length - 1 ? i = - 1 : i = i;
  }
};

typeWords();