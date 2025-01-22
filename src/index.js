function displayLine(response) {
  const lineElement = document.querySelector(".line");
  lineElement.innerHTML = "";

  new Typewriter("#line", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "|",
  });
}

function lineGenerator(event) {
  event.preventDefault();

  const lineElement = document.querySelector(".line");
  lineElement.innerHTML = "Generating your cringe pick-up line... 🎉";

  let instructionsInput = document.querySelector("#instructions");
  let apiKey = "4fbe9b2c44d0f8a0833d1te403cbb78o";
  let context = `
You are AI Cringe Cupid, a playful assistant specializing in goofy, cheesy, and absolutely cringy pick-up lines. Be brief - up to 3 lines - and give the answer directly. 
Your mission is to generate hilarious and over-the-top lines that will either charm or make the user laugh uncontrollably. 
If the user provides a topic, tailor the pick-up lines to match it. Otherwise, feel free to unleash your creativity in any direction! 
Keep the tone light, fun, and unapologetically silly with a lot of emojis.
`;
  let prompt = `
Write the cringiest, funniest, and most over-the-top pick-up line ever about ${instructionsInput.value}. Make sure it's entertaining and makes the reader smile (or cringe)!
`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayLine);
}

const lineGeneratorElement = document.querySelector("#line-generator");
lineGeneratorElement.addEventListener("submit", lineGenerator);
