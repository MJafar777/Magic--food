

"use strict";

//selecting elements
const searchInput = document.querySelector(".searchInput");
const searchBtn = document.querySelector(".searchBtn");
const errorMeal = document.querySelector(".errorMeal");
const section__Meal = document.querySelector(".section__Meal");

const sectionInfo = document.querySelector(".sectionInfo");
let malumot;
let search = "";

function getUrl(searchInput) {
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`)
    .then((response) => response.json())
    .then((data) => {
      malumot = data;
      data.meals.forEach((element) => {
        getMeal(element);
        resepts(element);
      });
      // console.log(malumot);
    });
}
searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  search = searchInput.value;
  searchInput.value = "";
  getUrl(searchInput.value);
});

const getMeal = function (element) {
  errorMeal.style.opacity = "0";
  let html = `<div class="meal" id="">
  <img class="mealImg" src="${element.strMealThumb}" alt="#" />
  <p class="mealName">${element.strIngredient4}</p>
  <button class="mealMore">Get Recipe</button>
</div>`;
  section__Meal.insertAdjacentHTML("afterbegin", html);
  //
  const mealMore = document.querySelector(".mealMore");
  //
  mealMore.addEventListener("click", function (element) {
    const recipe = document.querySelector(".recipe");
    recipe.style.display = "block";
    const closeRecipe = document.querySelector(".close-recipe");
    closeRecipe.addEventListener("click", function () {
      recipe.style.display = "none";
    });
  });
};
function resepts(element) {
  let html2 = `<div class="recipe">
  <button class="close-recipe">✖</button>
  <h2 class="recipe-name">${element.strIngredient3}</h2>
  <h3 class="recipe-category">${element.strIngredient4}</h3>
  <p class="text">Instructions:</p>
  <p class="recipe-desc"> hello mutant
    ${element.strInstructions}       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum dolor distinctio totam tempore id dignissimos officia consectetur iste mollitia placeat maiores quibusdam esse cumque culpa, qui saepe reiciendis provident a porro? Omnis magnam, quas laboriosam molestias eligendi assumenda nesciunt reiciendis minus aliquid quo perferendis id, nobis eius aperiam excepturi explicabo alias recusandae a dolor culpa? Laboriosam exercitationem nisi expedita maxime mollitia delectus nihil reiciendis molestias fugit eum, voluptatem voluptatum magni excepturi rerum odit quisquam! Architecto, eius deleniti similique a impedit quod possimus. Consequatur, praesentium pariatur harum sunt molestiae, eaque voluptate reprehenderit alias earum sed eum enim quasi iusto dignissimos esse.
  </p>
</div>`;

  section__Meal.insertAdjacentHTML("afterbegin", html2);
}
const closeReciption = document.querySelector(".closeRecipe");

// lessons info

// const getPosition = function () {
//   const lokatsiyaniOlish = new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition((position) => resolve.position),
//       (err) => reject(err);
//   });
//   return lokatsiyaniOlish;
// };

// getPosition();

// const qayerdaman = function () {
//   getPosition()
//     .then((res) => {
//       let a = res.coords.latitude;
//       let b = res.coords.longitude;
//       console.log(a, b);
//       return fetch(`https://geocode.xyz/${a},${b}?geoit=json`);
//     })
//     .then((res) => res.json())
//     .then(response.country);
//   return fetch(`https://restcountries.com/v2/name/${country}`)
//     .then((res) => res.json())
//     .then((response) => {
//       let [data] = response;
//       renderHtml(data);
//     });
// };
// qayerdaman();
