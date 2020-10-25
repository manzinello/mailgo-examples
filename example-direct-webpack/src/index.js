import mailgo, { mailgoDirectRender } from "mailgo-wip";

mailgo({
  dark: true,
});

document.getElementById("direct-button").addEventListener("click", function () {
  mailgoDirectRender("mailto:matteo@manzinello.dev");
});

document
  .getElementById("direct-button-tel")
  .addEventListener("click", function () {
    mailgoDirectRender("tel:123456789");
  });
