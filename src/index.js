function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "Hello World",
    autoStart: true,
  });
}

let form = document.querySelector("#poem-form");
form.addEventListener("submit", generatePoem);
