import mailgo, {
  mailgoDirectRender,
  isMailgo,
} from "../../../mailgo/lib/mailgo";

// mailgoDirectRender("mailto:matteo@manzinello.dev");

mailgo();

document.getElementById("direct-button").addEventListener("click", function () {
  mailgoDirectRender("mailto:matteo@manzinello.dev");
});

document
  .getElementById("direct-button-tel")
  .addEventListener("click", function () {
    mailgoDirectRender("tel:123456789");
  });

// console.log(isMailgo);
