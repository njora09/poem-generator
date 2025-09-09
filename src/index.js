function showPoem(response) {
  let poem = document.querySelector("#poem");

  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 10,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();
  let promptInput = document.querySelector("#user-input");
  let apiKey = "83d9193aa7fdte65278764fab0o0ab2b";
  let context =
    "You are a poet that creates beautiful poems. follow strictly the instructions. ";
  let prompt = `instructions: Write a 2 sentence poem, seperated by <br />, about ${promptInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poem = document.querySelector("#poem");
  poem.classList.remove("hidden");
  poem.innerHTML = `<div class= blink> ⏳ Generating a poem about ${promptInput.value}...</div>`;

  axios.get(apiUrl).then(showPoem);
}

let form = document.querySelector("#poem-form");
form.addEventListener("submit", generatePoem);
