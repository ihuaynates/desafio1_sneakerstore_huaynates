const products = [
  {
    id: "1",
    model: "Jordan 3 Retro",
    name: "Patchwork Camo",
    colorway: "DARK HAZEL/MULTI-COLOR",
    price: "198",
    category: "men",
    img: "/images/j3patchwork.png",
    stock: "10",
    description:
      "Taking inspiration from vintage surplus stores and fabrics, the Air Jordan 3 features a mixed camo patchwork upper consisting of waxed canvas, ripstop nylon, herringbone, wool, and twill materials.",
  },
  {
    id: "2",
    model: "Jordan 3 Retro",
    name: "Muslin",
    colorway: "MUSLIN/UNIVERSITY RED-CEMENT GREY-SAIL",
    price: "230",
    category: "men",
    img: "/images/j3muslin.png",
    stock: "15",
    description:
      "The Air Jordan 3 Muslin features a heavy-duty canvas upper with grey suede overlays and cream TPU eyestays.",
  },
  {
    id: "3",
    model: "Jordan 1 Mid SE",
    name: "Dark Chocolate",
    colorway: "DARK CHOCOLATE/ARCHAEO BROWN/BLACK/CRIMSON BLISS",
    price: "102",
    category: "women",
    img: "/images/j1midchocolate.png",
    stock: "30",
    description:
      "The Jordan 1 Mid SE Dark Chocolate features a light brown Durabuck upper with dark brown suede overlays and black Swooshes.",
  },
  {
    id: "4",
    model: "Jordan 4 Retro",
    name: "Military Black",
    colorway: "WHITE/BLACK-NEUTRAL GREY",
    price: "266",
    category: "men",
    img: "/images/j4militaryblack.png",
    stock: "5",
    description:
      "Pulling its color-blocked style from the Air Jordan 4 Military Blue, the Air Jordan 4 Military Black features a smooth white leather upper with a light grey Durabuck toe wrap and netted TPU inserts.",
  },
  {
    id: "5",
    model: "Nike Air Max 1",
    name: "Travis Cactus Jack SG",
    colorway: "SATURN GOLD/TEA TREE MIST/TENT",
    price: "411",
    category: "women",
    img: "/images/airmax1traviss.png",
    stock: "2",
    description:
      "In collaboration with Travis Scotts record label Cactus Jack, the Nike Air Max 1 Travis Scott Cactus Jack Saturn Gold pays homage to outdoor exploration and the Nike ACG Pocket Knife hiking shoe.",
  },
  {
    id: "6",
    model: "Nike SB Dunk Low Pro",
    name: "Parra Abstract Art",
    colorway: "FIRE PINK/GYM RED-MOCHA-WHITE-ROYAL BLUE-BLACK",
    price: "362",
    category: "men",
    img: "/images/dunkparra.png",
    stock: "8",
    description:
      "Nike and Dutch artist and sneaker collab veteran Parra teamed up for an Olympic inspired Nike SB Dunk Low with the Nike SB Dunk Low Parra Abstract Art.",
  },
];

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });
};
