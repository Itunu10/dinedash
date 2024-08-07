// snacks iamges
import snacks_1 from "../assets/snacks_1.jpg";
import snacks_2 from "../assets/snacks_2.jpg";
import snacks_3 from "../assets/snacks_3.jpg";
import snacks_4 from "../assets/snacks_4.jpg";
import snacks_5 from "../assets/snacks_5.jpg";
import snacks_6 from "../assets/snacks_6.jpg";
import snacks_7 from "../assets/snacks_7.jpg";
import snacks_8 from "../assets/snacks_8.jpg";
import snacks_9 from "../assets/snacks_9.jpg";
import snacks_10 from "../assets/snacks_10.jpg";
import snacks_11 from "../assets/snacks_11.jpg";
import snacks_12 from "../assets/snacks_12.jpg";

// bread images

import bread_1 from "../assets/bread_1.jpg";
import bread_2 from "../assets/bread_2.jpg";
import bread_3 from "../assets/bread_3.jpg";
import bread_4 from "../assets/bread_4.jpg";
import bread_5 from "../assets/bread_5.jpg";
import bread_6 from "../assets/bread_6.jpg";
import bread_7 from "../assets/bread_7.jpg";

// baking images

import baking_1 from "../assets/baking_1.jpg";
import baking_2 from "../assets/baking_2.jpg";
import baking_3 from "../assets/baking_3.jpg";
import baking_4 from "../assets/baking_4.jpg";
import baking_5 from "../assets/baking_5.jpg";
import baking_6 from "../assets/baking_6.jpg";
import baking_7 from "../assets/baking_7.jpg";

// spices image

import spices_1 from "../assets/spices_1.jpg";
import spices_2 from "../assets/spices_2.jpg";
import spices_3 from "../assets/spices_3.jpg";
import spices_4 from "../assets/spices_4.jpg";
import spices_5 from "../assets/spices_5.jpg";
import spices_6 from "../assets/spices_6.jpg";
import spices_7 from "../assets/spices_7.jpg";

// coffee images

import coffee_1 from "../assets/coffee_1.jpg";
import coffee_2 from "../assets/coffee_2.jpg";
import coffee_3 from "../assets/coffee_3.jpg";
import coffee_4 from "../assets/coffee_4.jpg";
import coffee_5 from "../assets/coffee_5.jpg";
import coffee_6 from "../assets/coffee_6.jpg";
import coffee_7 from "../assets/coffee_7.jpg";

// druits images

import fruits_1 from "../assets/fruits_1.jpg";
import fruits_2 from "../assets/fruits_2.jpg";
import fruits_3 from "../assets/fruits_3.jpg";
import fruits_4 from "../assets/fruits_4.jpg";
import fruits_5 from "../assets/fruits_5.jpg";
import fruits_6 from "../assets/fruits_6.jpg";
import fruits_7 from "../assets/fruits_7.jpg";

// drink imagages
import drink_1 from "../assets/drink_1.jpg";
import drink_2 from "../assets/drink_2.jpg";
import drink_3 from "../assets/drink_3.jpg";
import drink_4 from "../assets/drink_4.jpg";
import drink_5 from "../assets/drink_5.jpg";
import drink_6 from "../assets/drink_6.jpg";
import drink_7 from "../assets/drink_7.jpg";

import baking from "../assets/baking.jpg";
import bread from "../assets/bread.jpg";
import coffee from "../assets/coffee.jpg";
import fruits from "../assets/fruits.jpg";
import drinks from "../assets/drinks.jpg";
import spices from "../assets/spices.jpg";
import { ObjectProps } from "../types";

export const productCategoryData = [
  {
    name: "Snacks",
    img: snacks_1,
  },
  {
    name: "Baking",
    img: baking,
  },

  {
    name: "Bread",
    img: bread,
  },
  {
    name: "Drinks",
    img: drinks,
  },
  {
    name: "Coffee",
    img: coffee,
  },
  {
    name: "Spices",
    img: spices,
  },

  {
    name: "Fruits",
    img: fruits,
  },
];

export const restaurantProducts: ObjectProps = {
  snacks: [
    {
      name: "Nachos",
      price: 7.99,
      description:
        "Crispy tortilla chips topped with melted cheese and jalapenos.",
      image: snacks_1,
    },
    {
      name: "Spring Rolls",
      price: 5.49,
      description: "Vegetable-stuffed rolls served with a tangy dipping sauce.",
      image: snacks_2,
    },
    {
      name: "Mozzarella Sticks",
      price: 6.99,
      description: "Fried mozzarella cheese sticks served with marinara sauce.",
      image: snacks_3,
    },
    {
      name: "Chicken Wings",
      price: 8.99,
      description: "Spicy chicken wings served with blue cheese dip.",
      image: snacks_4,
    },
    {
      name: "Pretzel Bites",
      price: 4.99,
      description: "Soft pretzel bites served with cheese dip.",
      image: snacks_5,
    },
    {
      name: "Stuffed Jalapenos",
      price: 5.99,
      description: "Jalapenos stuffed with cream cheese and bacon.",
      image: snacks_6,
    },
    {
      name: "Potato Skins",
      price: 6.49,
      description: "Crispy potato skins loaded with cheese and bacon.",
      image: snacks_7,
    },
    {
      name: "Onion Rings",
      price: 4.99,
      description: "Crispy fried onion rings served with ranch dip.",
      image: snacks_8,
    },
    {
      name: "Popcorn Chicken",
      price: 6.99,
      description: "Bite-sized pieces of crispy fried chicken.",
      image: snacks_9,
    },
    {
      name: "Cheese Curds",
      price: 5.99,
      description: "Fried cheese curds with a side of marinara.",
      image: snacks_10,
    },
    {
      name: "Hummus Plate",
      price: 7.49,
      description: "Creamy hummus served with pita bread and vegetables.",
      image: snacks_11,
    },
    {
      name: "Bruschetta",
      price: 6.99,
      description: "Toasted bread topped with tomato, basil, and olive oil.",
      image: snacks_12,
    },
  ],
  bread: [
    {
      name: "Garlic Bread",
      price: 4.99,
      description: "Toasted bread slices with a garlic butter spread.",
      image: bread_1,
    },
    {
      name: "Baguette",
      price: 3.49,
      description: "Freshly baked French bread with a crispy crust.",
      image: bread_2,
    },
    {
      name: "Sourdough",
      price: 5.49,
      description: "Tangy and chewy sourdough bread.",
      image: bread_3,
    },
    {
      name: "Ciabatta",
      price: 4.29,
      description: "Italian white bread with a soft and airy texture.",
      image: bread_5,
    },
    {
      name: "Focaccia",
      price: 4.99,
      description: "Italian bread topped with herbs and olive oil.",
      image: bread_4,
    },
    {
      name: "Rye Bread",
      price: 3.99,
      description: "Dense and flavorful rye bread.",
      image: bread_6,
    },
    {
      name: "Pita Bread",
      price: 2.99,
      description: "Soft and puffy pita bread.",
      image: bread_7,
    },
    {
      name: "Naan",
      price: 3.49,
      description: "Traditional Indian flatbread.",
      image: bread_3,
    },
    {
      name: "Multigrain Bread",
      price: 4.99,
      description: "Healthy bread made with multiple grains.",
      image: bread_3,
    },
    {
      name: "Brioche",
      price: 5.99,
      description: "Soft and buttery French bread.",
      image: bread_4,
    },
    {
      name: "Cornbread",
      price: 3.99,
      description: "Sweet and moist cornbread.",
      image: bread_1,
    },
    {
      name: "Bagel",
      price: 1.99,
      description: "Chewy and dense bagel with various toppings.",
      image: bread_5,
    },
  ],
  baking: [
    {
      name: "Chocolate Cake",
      price: 15.99,
      description: "Rich and moist chocolate cake with a creamy frosting.",
      image: baking_1,
    },
    {
      name: "Blueberry Muffin",
      price: 2.99,
      description: "Soft muffin filled with fresh blueberries.",
      image: baking_2,
    },
    {
      name: "Apple Pie",
      price: 12.99,
      description: "Classic apple pie with a flaky crust.",
      image: baking_3,
    },
    {
      name: "Brownies",
      price: 9.99,
      description: "Fudgy and chewy chocolate brownies.",
      image: baking_4,
    },
    {
      name: "Cheesecake",
      price: 14.99,
      description: "Creamy cheesecake with a graham cracker crust.",
      image: baking_5,
    },
    {
      name: "Lemon Bars",
      price: 8.99,
      description: "Tangy lemon bars with a buttery crust.",
      image: baking_6,
    },
    {
      name: "Cinnamon Rolls",
      price: 10.99,
      description: "Soft cinnamon rolls with a sweet glaze.",
      image: baking_7,
    },
    {
      name: "Cupcakes",
      price: 2.49,
      description: "Moist cupcakes with various frosting flavors.",
      image: baking_2,
    },
    {
      name: "Banana Bread",
      price: 6.99,
      description: "Moist banana bread with a hint of cinnamon.",
      image: baking_4,
    },
    {
      name: "Pumpkin Pie",
      price: 13.99,
      description: "Classic pumpkin pie with a spiced filling.",
      image: baking_5,
    },
    {
      name: "Scones",
      price: 5.99,
      description: "Buttery scones with various fruit fillings.",
      image: baking_3,
    },
    {
      name: "Macarons",
      price: 12.49,
      description: "Delicate French macarons with assorted flavors.",
      image: baking_1,
    },
  ],
  drinks: [
    {
      name: "Lemonade",
      price: 2.49,
      description: "Refreshing lemonade made with fresh lemons.",
      image: drink_1,
    },
    {
      name: "Iced Tea",
      price: 1.99,
      description: "Chilled tea served with a slice of lemon.",
      image: drink_2,
    },
    {
      name: "Smoothie",
      price: 4.99,
      description: "Blended fruit smoothie with yogurt.",
      image: drink_3,
    },
    {
      name: "Soda",
      price: 1.49,
      description: "Assorted soda flavors.",
      image: drink_4,
    },
    {
      name: "Water",
      price: 0.99,
      description: "Bottled water.",
      image: drink_5,
    },
    {
      name: "Orange Juice",
      price: 2.99,
      description: "Freshly squeezed orange juice.",
      image: drink_6,
    },
    {
      name: "Milkshake",
      price: 3.99,
      description: "Creamy milkshake with various flavors.",
      image: drink_7,
    },
    {
      name: "Hot Chocolate",
      price: 2.49,
      description: "Rich and creamy hot chocolate.",
      image: drink_2,
    },
    {
      name: "Energy Drink",
      price: 3.49,
      description: "Caffeinated energy drink.",
      image: drink_4,
    },
    {
      name: "Kombucha",
      price: 4.49,
      description: "Fermented tea with a tangy flavor.",
      image: drink_1,
    },
    {
      name: "Apple Cider",
      price: 3.99,
      description: "Warm apple cider with spices.",
      image: drink_7,
    },
    {
      name: "Sparkling Water",
      price: 2.49,
      description: "Carbonated water with a hint of fruit flavor.",
      image: drink_3,
    },
  ],
  coffee: [
    {
      name: "Espresso",
      price: 2.99,
      description: "Strong and rich espresso shot.",
      image: coffee_1,
    },
    {
      name: "Cappuccino",
      price: 3.99,
      description: "Espresso with steamed milk and a foam topping.",
      image: coffee_2,
    },
    {
      name: "Latte",
      price: 3.99,
      description: "Espresso with steamed milk.",
      image: coffee_3,
    },
    {
      name: "Americano",
      price: 2.49,
      description: "Espresso diluted with hot water.",
      image: coffee_4,
    },
    {
      name: "Mocha",
      price: 4.49,
      description: "Espresso with chocolate and steamed milk.",
      image: coffee_5,
    },
    {
      name: "Macchiato",
      price: 3.49,
      description: "Espresso with a small amount of steamed milk.",
      image: coffee_6,
    },
    {
      name: "Flat White",
      price: 3.99,
      description: "Espresso with microfoam.",
      image: coffee_7,
    },
    {
      name: "Affogato",
      price: 4.99,
      description: "Espresso poured over vanilla ice cream.",
      image: coffee_5,
    },
    {
      name: "Cold Brew",
      price: 3.49,
      description: "Slow-steeped cold brew coffee.",
      image: coffee_2,
    },
    {
      name: "Frappuccino",
      price: 4.99,
      description: "Blended coffee drink with ice and flavorings.",
      image: coffee_3,
    },
    {
      name: "Turkish Coffee",
      price: 3.99,
      description: "Strong coffee with finely ground beans.",
      image: coffee_1,
    },
    {
      name: "Irish Coffee",
      price: 5.99,
      description: "Coffee with Irish whiskey and cream.",
      image: coffee_7,
    },
  ],
  spices: [
    {
      name: "Black Pepper",
      price: 1.99,
      description: "Freshly ground black pepper for seasoning.",
      image: spices_1,
    },
    {
      name: "Cinnamon",
      price: 2.49,
      description: "Aromatic cinnamon powder for baking and cooking.",
      image: spices_2,
    },
    {
      name: "Paprika",
      price: 2.99,
      description: "Sweet and smoky paprika powder.",
      image: spices_3,
    },
    {
      name: "Turmeric",
      price: 3.49,
      description: "Bright yellow turmeric powder for flavor and color.",
      image: spices_4,
    },
    {
      name: "Cumin",
      price: 2.79,
      description: "Earthy and aromatic cumin seeds.",
      image: spices_5,
    },
    {
      name: "Nutmeg",
      price: 3.29,
      description: "Warm and spicy nutmeg powder.",
      image: spices_6,
    },
    {
      name: "Chili Powder",
      price: 2.99,
      description: "Spicy chili powder for heat and flavor.",
      image: spices_7,
    },
    {
      name: "Garlic Powder",
      price: 2.49,
      description: "Fine garlic powder for a burst of garlic flavor.",
      image: spices_2,
    },
    {
      name: "Ginger Powder",
      price: 3.19,
      description: "Warm and spicy ginger powder.",
      image: spices_3,
    },
    {
      name: "Oregano",
      price: 2.59,
      description: "Herbaceous oregano leaves for seasoning.",
      image: spices_1,
    },
    {
      name: "Thyme",
      price: 2.89,
      description: "Fragrant thyme leaves for cooking.",
      image: spices_7,
    },
    {
      name: "Basil",
      price: 2.49,
      description: "Sweet and aromatic dried basil leaves.",
      image: spices_7,
    },
  ],
  fruits: [
    {
      name: "Apple",
      price: 0.99,
      description: "Crisp and juicy red apple.",
      image: fruits_1,
    },
    {
      name: "Banana",
      price: 0.79,
      description: "Sweet and ripe banana.",
      image: fruits_2,
    },
    {
      name: "Orange",
      price: 1.19,
      description: "Fresh and tangy orange.",
      image: fruits_3,
    },
    {
      name: "Grapes",
      price: 2.49,
      description: "Sweet and juicy grapes.",
      image: fruits_4,
    },
    {
      name: "Strawberries",
      price: 3.99,
      description: "Fresh and ripe strawberries.",
      image: fruits_5,
    },
    {
      name: "Blueberries",
      price: 4.49,
      description: "Sweet and tart blueberries.",
      image: fruits_6,
    },
    {
      name: "Mango",
      price: 1.99,
      description: "Sweet and tropical mango.",
      image: fruits_7,
    },
    {
      name: "Pineapple",
      price: 2.99,
      description: "Juicy and tangy pineapple.",
      image: fruits_3,
    },
    {
      name: "Peach",
      price: 1.49,
      description: "Sweet and juicy peach.",
      image: fruits_2,
    },
    {
      name: "Kiwi",
      price: 1.19,
      description: "Tangy and sweet kiwi.",
      image: fruits_5,
    },
    {
      name: "Watermelon",
      price: 4.99,
      description: "Refreshing and juicy watermelon.",
      image: fruits_6,
    },
    {
      name: "Pear",
      price: 1.29,
      description: "Sweet and crisp pear.",
      image: fruits_1,
    },
  ],
};
