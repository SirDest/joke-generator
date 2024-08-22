const jokeContainer = document.querySelector("#joke");
const button = document.querySelector("#btn");
const url = "https://v2.jokeapi.dev/joke/Any?type=single";

// let getJoke = () => {
//     jokeContainer.classList.remove('fade');
//     fetch(url)
//         .then(data => data.json())
//         .then(item => {
//             console.log(item.joke);
//             jokeContainer.textContent = `${item.joke}`;
//             jokeContainer.classList.add('fade');
//         })
//         .catch(err => {
//             alert(`${err}`);
//         })

// }
const getJoke = async () => {
  try {
    jokeContainer.classList.remove("fade");
    const response = await fetch(url);
    const data = await response.json();
    // see destructuring
      const { joke, lang, id } = data;
    console.log(data); //i don bring the data out from the object
    console.log(`{joke:${joke},lang:${lang},id:${id}}`);
    jokeContainer.textContent = `${joke}`;
    jokeContainer.classList.add("fade");
  } catch (error) {
    alert(`${error}`);
  }
};
button.addEventListener("click", getJoke);
getJoke();
