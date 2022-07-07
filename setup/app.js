const menu = [
  {
    id: 1,
    title: "pancake",
    category: "breakfast",
    price: 650,
    img: "./images/item-1.jpeg",
    desc: `Scrumptious pancakes :) `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 850,
    img: "./images/item-2.jpeg",
    desc: `Delicious double patty burger dripping with flavourful sauce `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 500,
    img: "./images/item-3.jpeg",
    desc: `Death by sugar`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 300,
    img: "./images/item-4.jpeg",
    desc: `Simple breakfast to get your day started `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 550,
    img: "./images/item-5.jpeg",
    desc: `Beef burger containing egg, tomato and lettuce. `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 250,
    img: "./images/item-6.jpeg",
    desc: `Oreo delight for those with a sweet-tooth craving`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 600,
    img: "./images/item-7.jpeg",
    desc: `A burger with bacon, cheese and egg to power you through the day `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 700,
    img: "./images/item-8.jpeg",
    desc: `Classic burger and fries that is appetizing and very filling.  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 200,
    img: "./images/item-9.jpeg",
    desc: `A shake to share with your quarantine buddy!`,
  },
  {
    id: 10,
    title: "steak dinner",
    category: "dinner",
    price: 1500,
    img: "./images/item-10.jpeg",
    desc: `Aged to perfection!`,
  },
];

// get parent element
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");



// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
  displayMenuButtons();
});


function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    // console.log(item);

    return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">Ksh.${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join("");
  // console.log(displayMenu);

  sectionCenter.innerHTML = displayMenu;
}


function displayMenuButtons(){
  const categories = menu.reduce(function(values,item){
    if(!values.includes(item.category)) {
      values.push(item.category);
    }
    return values;
  },["all"]);
  const categoryBtns = categories.map(function(category){
    return `<button class="filter-btn" type="button" data-id=${category}>${category}</button>`
  })
  .join("");
  btnContainer.innerHTML = categoryBtns;
  const filterBtns = document.querySelectorAll(".filter-btn");
  //filter items
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      // console.log(e.currentTarget.dataset);
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        // console.log(menuItem.category);
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCategory);
      }
    });
  });
  
}