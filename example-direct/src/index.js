import mailgo, {
  mailgoDirectRender,
  isMailgo,
} from "../../../mailgo/lib/mailgo";

// mailgoDirectRender("mailto:matteo@manzinello.dev");

document.getElementById("direct-button").addEventListener("click", () => {
  mailgoDirectRender("mailto:matteo@manzinello.dev");
});

document.getElementById("direct-button-tel").addEventListener("click", () => {
  mailgoDirectRender("tel:123456789");
});

// console.log(isMailgo);
