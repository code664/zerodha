"use strict";
const bar = document.querySelector(".bar");
const section = document.querySelector(".bar-section");

bar.addEventListener("click", () => {
  section.classList.toggle("hide");
});

// about page ///

// keep working on it

const bio = document.querySelectorAll(".bio-click");
const nikhilData = document.querySelector(".nikhil-data");

bio.forEach((e) => {
  e.addEventListener("click", (el) => {
    const dataConsume = el.target.textContent;
    console.log(dataConsume);
  });
});
// ending of about page///

// startin of pricing page
const equity_link = document.querySelector(".equity-link");
const currency_link = document.querySelector(".currency-link");
const commodity_link = document.querySelector(".com-link");

const equity_table = document.querySelector(".equity-class-link");
const currency_table = document.querySelector(".currency-class-link");
const commodity_table = document.querySelector(".commodity-class-link");
console.log(equity_link, currency_link, commodity_link);
equity_link.addEventListener("click", () => {
  equity_table.style.display = "block";
  currency_table.style.display = "none";
  commodity_table.style.display = "none";
  equity_link.style.borderBottom = "2px solid black";
  currency_link.style.borderBottom = "none";
  commodity_link.style.borderBottom = "none";
});
currency_link.addEventListener("click", () => {
  equity_table.style.display = "none";
  currency_table.style.display = "block";
  commodity_table.style.display = "none";
  equity_link.style.borderBottom = "none";
  currency_link.style.borderBottom = "2px solid black";
  commodity_link.style.borderBottom = "none";
});
commodity_link.addEventListener("click", () => {
  equity_table.style.display = "none";
  currency_table.style.display = "none";
  commodity_table.style.display = "block";
  equity_link.style.borderBottom = "none";
  currency_link.style.borderBottom = "none";
  commodity_link.style.borderBottom = "2px solid black";
});

// ending of pricing page
