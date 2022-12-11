"use srict";
import { detailed } from "./items";

let id = localStorage.getItem("id");
console.log(id);

const moreRef = document.querySelector(".map__more");
const modalOblastRef = document.querySelector(".modalOblastJS");

const onClickOblastMobileModalHandler = (e) => {
  let markup = `<button type='button' class="closeJS modal__oblast-button">X</button>`;
  const separatedMsgs = Object.values(detailed[id]);

  console.log("separatedMsgs", separatedMsgs);
  separatedMsgs.forEach((e) => {
    let uppermarkup = "";

    console.log(e);
    uppermarkup += `<span class='modal__oblast-detailed--first '>${e[0]}</span>`;
    uppermarkup += `<span class='modal__oblast-detailed--second '>${e[1]}</span>`;
    uppermarkup += `<div class='modal__oblast-detailed--third '>${e[2]}</div>`;

    markup += `<div class="modal__oblast-detailed--section">${uppermarkup}</div>`;
  });
  console.log(markup);
  modalOblastRef.innerHTML = markup;
  modalOblastRef.classList.toggle("is-hidden");

  const closeModalOblastMobileRef = document.querySelector(".closeJS");
  closeModalOblastMobileRef.addEventListener("click", (e) =>
    modalOblastRef.classList.toggle("is-hidden")
  );
};

moreRef.addEventListener("click", onClickOblastMobileModalHandler);
