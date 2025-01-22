function lineGenerator(event) {
  event.preventDefault();

  const lineElement = document.querySelector(".line");
  lineElement.innerHTML = "";

  const typewriter = new Typewriter(lineElement, {
    autoStart: true,
    delay: 50,
    cursor: "",
  });

  typewriter.typeString("A goofy pick-up line here.").start();
}

const lineGeneratorElement = document.querySelector("#line-generator");
lineGeneratorElement.addEventListener("submit", lineGenerator);
