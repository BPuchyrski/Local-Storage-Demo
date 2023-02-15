let input = document.querySelector("input");
let library = document.querySelector(".library");
let que = document.querySelector(".queue");
let reset = document.querySelector(".reset");
let libraryArr = [];
let queueArr = [];
let id = "";
let addToLibrary = (id) => {
  let parsedLibrary = JSON.parse(localStorage.getItem("library"));

  if (libraryArr.includes(id) || id === "") {
    return;
  } else if (libraryArr.length <= 0 && parsedLibrary !== null) {
    parsedLibrary.forEach((element) => {
      libraryArr.unshift(element);
    });
    if (libraryArr.includes(id)) {
      return;
    } else {
      libraryArr.unshift(id);
    }
  } else {
    libraryArr.unshift(id);
  }
  localStorage.setItem("library", JSON.stringify(libraryArr));
  // console.log(parsedLibrary);
  // console.log(libraryArr);
};

let addToQueue = (id) => {
  let parsedQueue = JSON.parse(localStorage.getItem("queue"));

  if (queueArr.includes(id) || id === "") {
    return;
  } else if (queueArr.length <= 0 && parsedQueue !== null) {
    parsedQueue.forEach((element) => {
      queueArr.unshift(element);
    });
    if (queueArr.includes(id)) {
      return;
    } else {
      queueArr.unshift(id);
    }
  } else {
    queueArr.unshift(id);
  }
  localStorage.setItem("queue", JSON.stringify(queueArr));
  // console.log(parsedLibrary);
  // console.log(libraryArr);
};

let inputValue = () => {
  id = input.value;
};

library.addEventListener("click", () => {
  inputValue();
  addToLibrary(id);
});

que.addEventListener("click", () => {
  inputValue();
  addToQueue(id);
});

reset.addEventListener("click", () => {
  localStorage.clear();
  libraryArr = [];
  queueArr = [];
});

// const ID_URL = `${BASE_URL}/movie/`;  `${ID_URL}${id}?api_key=${API_KEY}`
`https://api.themoviedb.org/3/movie/${id}?api_key=249f222afb1002186f4d88b2b5418b55`;

// ids = [76600, 505642];
let fetchLibrary = () => {
  let parsedLibrary = JSON.parse(localStorage.getItem("library"));
  parsedLibrary.forEach(async (id) => {
    let response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=249f222afb1002186f4d88b2b5418b55`
    );
    let film = await response.json();
    return console.log(film);
  });
};
fetchLibrary();

// let id = '';
// movies.addEventListener('click', e => {
//   id = e.target.parentElement.dataset.id;
//   console.log(id);
// });
