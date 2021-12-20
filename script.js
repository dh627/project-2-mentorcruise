// let originalText =
//   "Some quick example text to build on the card title and make up the bulk of the cards content";
// let replacementText =
//   "Load pot with water and pasta, salt the water, bring water to the boil, stir to keep pasta from sticking";

// document.querySelector(".read-more-button-1").addEventListener("click", () => {
//   let text = document
//     .querySelector(".text-1")
//     .textContent.replace(/[\n\r]+|[\s]{2,}/g, " ")
//     .trim();

//   console.log("TEXT:");
//   console.log(text);

//   console.log("Original Text:");
//   console.log(originalText);

//   if (text === originalText) {
//     console.log("HELLO");
//     document.querySelector(".text-1").textContent = replacementText;
//   } else {
//     document.querySelector(".text-1").textContent = originalText;
//   }
// });

// challenge 1
document.querySelector(".read-more-button-1").addEventListener("click", () => {
  document.querySelector(".text-1").textContent =
    "Load pot with water and pasta, salt the water, bring water to the boil, stir to keep pasta from sticking";
});

// challenge 2
document.querySelector(".read-more-button-2").addEventListener("click", () => {
  if (document.querySelector(".card-image-2")) {
    document
      .querySelector(".card-image-2")
      .classList.toggle("card-image-2-alt");
  } else {
    document
      .querySelector(".card-image-2-alt")
      .classList.toggle("card-image-2");
  }
});

// challenge 3
document.querySelector(".read-more-button-3").addEventListener("click", () => {
  let text = document.querySelector(".text-3").textContent;
  if (!text.includes(". This is additional text")) {
    document.querySelector(".text-3").textContent =
      "Some quick example text to build on the card title and make up the bulk of the cards content. This is additional text";
  } else {
    document.querySelector(".text-3").textContent =
      "Some quick example text to build on the card title and make up the bulk of the cards content";
  }
});
