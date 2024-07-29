function $$(newElement) {
  const seletor = document.querySelectorAll(newElement);

  function hide() {
    seletor.forEach((item) => {
      item.style.display = "none";
    });
    return this;
  }

  function show() {
    seletor.forEach((item) => {
      item.style.display = "initial";
    });
    return this;
  }

  function on(onEvent, callback) {
    seletor.forEach((item) => {
      item.addEventListener(onEvent, callback);
    });
    return this;
  }

  function addClass(className) {
    seletor.forEach((item) => {
      item.classList.add(className);
    });
    return this;
  }

  function removeClass(className) {
    seletor.forEach((item) => {
      item.classList.remove(className);
    });
    return this;
  }

  function toggleClass(className) {
    seletor.forEach((item) => {
      item.classList.toggle(className);
    });
    return this;
  }

  return {
    seletor,
    hide,
    show,
    on,
    addClass,
    removeClass,
    toggleClass,
  };
}

const button = $$("button");
button.on("click", handleClick);
button.addClass("sera");
button.toggleClass("sera");
function handleClick(event) {
  console.log(event.target);
}
