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
    category: "men",
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
    category: "men",
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
  {
    id: "7",
    model: "Jordan 1 Mid",
    name: "Light Smoke Grey (PS)",
    colorway: "LIGHT SMOKE GREY/WHITE-BLACK",
    price: "65",
    category: "child",
    img: "/images/psj1smojegrey.png",
    stock: "8",
    description:
      "The children's Jordan 1 Mid Light Smoke Grey (PS) features a Light Smoke Grey and white leather upper with panels that wrap around the bright white base at the ankles, eyestays, and toe box.",
  },
  {
    id: "8",
    model: "Jordan 4 Retro",
    name: "White Lemon Pink (PS)",
    colorway: "WHITE/LEMON VENOM-PINK BLAST",
    price: "80",
    category: "child",
    img: "/images/psj4lemonpink.png",
    stock: "8",
    description: "White Lemon Pink (PS)",
  },
  {
    id: "9",
    model: "Jordan 6 Retro",
    name: "Carmine (2021) (PS)",
    colorway: "WHITE/BLACK-CARMINE",
    price: "80",
    category: "child",
    img: "/images/psj6carmine.png",
    stock: "8",
    description: "Carmine (2021) (PS).",
  },
  {
    id: "10",
    model: "Jordan 12 Retro",
    name: "Emoji (PS)",
    colorway: "WHITE/LEMON VENOM/VIVID SULFUR/UNIVERSITY BLUE",
    price: "90",
    category: "child",
    img: "/images/psj12emoji.png",
    stock: "8",
    description: "Emoji (PS).",
  },
  {
    id: "11",
    model: "Jordan 1 High Zoom Air CMFT",
    name: "Easter (W)",
    colorway: "WHITE/GREY HEATHER-OLIVE AURA-KHAKI",
    price: "140",
    category: "women",
    img: "/images/wj1easter.png",
    stock: "8",
    description: "Jordan 1 High Zoom Air CMFT.",
  },
  {
    id: "12",
    model: "Jordan 1 High Zoom Air CMFT",
    name: "Pink Oxford (W)",
    colorway: "PINK OXFORD/PLUM FOG-SUMMIT WHITE",
    price: "140",
    category: "women",
    img: "/images/wj1pinkoxford.png",
    stock: "8",
    description: "Jordan 1 High Zoom Air CMFT, Pink Oxford (W).",
  },
  {
    id: "13",
    model: "Jordan 4 Retro",
    name: "Shimmer (W)",
    colorway: "SHIMMER/BRONZE ECLIPSE-ORANGE QUARTZ-METALLIC SILVER",
    price: "190",
    category: "women",
    img: "/images/wj4shimmer.png",
    stock: "8",
    description:
      "The Air Jordan 4 Shimmer (W) arrives with a buttery beige Durabuck upper with semi-translucent Wings and a monotone Orange Bronze heel tab.",
  },
];

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};

export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products.filter((prod) => prod.category === categoryId));
    }, 500);
  });
};

export const getProductsById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === id));
    }, 500);
  });
};
