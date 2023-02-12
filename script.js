let input = document.querySelector("input");
let library = document.querySelector(".library");
let que = document.querySelector(".queue");
let reset = document.querySelector(".reset");
let libraryArr = [];
let queueArr = [];
let id = "";
let addToLibrary = (id) => {
  let parsedLibrary = JSON.parse(localStorage.getItem("library"));
  let names = libraryArr.map((obj) => {
    return obj.name;
  });
  if (names.includes(id.name) || id === "") {
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
  let names = queueArr.map((obj) => {
    return obj.name;
  });
  if (names.includes(id.name) || id === "") {
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
  id = {
    name: `${input.value}`,
  };
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
