import Anagrama from "./anagrama.js";
import Concatenar from "./concatenar.js";
import Media from "./media.js";
import Question from "./question.js";


async function loadJSON(url) {
    const response = await fetch(url);
    return response.json();
}

async function init() {
    console.log('hola');
    const JSON = await loadJSON("src/data.json");
    const JSONANAGRAMA = await loadJSON("src/anagrama-data.json");

    document.getElementById("app").innerHTML = `
    <div class="que-container">
      ${Question}
    </div>
    <div>
      <div class="concat-container">
        <span>Resultado de concatenar:</span>
        <p>${Concatenar(JSON)}</p>
      </div>
      <div class="avg-container">
        <span>Resultado de media:</span>
        <p>${Media(JSON)}</p>
      </div>
      <div class="anagrama-container">
        <span>Resultado de anagrama:</span>
        <p>
            <ul>
                ${JSONANAGRAMA.map(({anagrama}) => 
                    '<li>La palabra <i>[' + anagrama[0] + ']</i> y <i>[' + anagrama[1] + ']</i> son anagramas: <b>' + Anagrama(anagrama[0], anagrama[1])+'</b></li>'
                ).join('')}
            </ul>
        </p>
      </div>
    </div>
    `;
}

init();
