function showPoem(response) {
  let poem = document.querySelector("#poem");

  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 10,
  });
  console.log(response.data.answer);
}

function generatePoem(event) {
  event.preventDefault();
  let promptInput = document.querySelector("#user-input");
  let apiKey = "83d9193aa7fdte65278764fab0o0ab2b";
  let context =
    "You are a poet that creates beautiful poems. follow strictly the instructions. ";
  let prompt = `instructions: Write a poem with 2 sentence, with a <br /> after each coma, about ${promptInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(showPoem);

  console.log("sending request");
}

let form = document.querySelector("#poem-form");
form.addEventListener("submit", generatePoem);
