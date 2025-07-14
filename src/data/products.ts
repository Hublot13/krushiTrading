export interface Product {
  name: string;
  image: string;
  description: string;
  varieties?: string[];
  features?: string[];
}

export interface ProductCategory {
  id: string;
  name: string;
  description: string;
  image: string;
  items: Product[];
}

export const productCategories: ProductCategory[] = [
  {
    id: "unprocessed-raw-pulses",
    name: "Unprocessed Raw Pulses",
    description:
      "High-quality unprocessed raw pulses sourced globally, ideal for cooking and nutrition.",
    image: "/assets/images/unprocessed-raw/unprocessed-raw-pulses.jpg",
    items: [
      {
        name: "Moong Beans",
        image: "/assets/images/unprocessed-raw/moongbeans.webp",
        description:
          "Origin: Myanmar / Uzbekistan / Brazil / Argentina / Ethiopia / Kenya / Uganda",
        varieties: [],
        features: [
          "Rich in protein and fiber",
          "Easy to digest",
          "Widely used in Indian cuisine",
          "Gluten-free",
        ],
      },
      {
        name: "Pigeon Peas",
        image: "/assets/images/unprocessed-raw/peigeonpeas.webp",
        description:
          "Origin: Kenya / Ethiopia / Myanmar / Tanzania / Mozambique / India / Malawi",
        varieties: [],
        features: [
          "High in protein",
          "Good source of iron and fiber",
          "Used in traditional dishes",
          "Promotes digestive health",
        ],
      },
      {
        name: "Yellow Peas",
        image: "/assets/images/unprocessed-raw/yellowpeas.jpg",
        description: "Origin: Canada / Russia / Ukraine / Baltic Region",
        varieties: [],
        features: [
          "Rich in protein and fiber",
          "Low fat content",
          "Supports heart health",
          "Gluten-free",
        ],
      },
      {
        name: "Red Lentils",
        image: "/assets/images/unprocessed-raw/redLentils.png",
        description:
          "Origin: USA / Canada / Australia / Russia / Ukraine / Kazakhstan",
        varieties: [],
        features: [
          "Quick cooking",
          "Rich in protein and fiber",
          "Good source of folate",
          "Easily digestible",
        ],
      },
      {
        name: "Black Matpe",
        image: "/assets/images/unprocessed-raw/blackmatpe.webp",
        description: "Origin: India / Myanmar / Mozambique / Brazil",
        varieties: [],
        features: [
          "High protein content",
          "Popular in Indian cuisine",
          "Good for digestive health",
          "Rich in antioxidants",
        ],
      },
      {
        name: "Desi Chickpeas",
        image: "/assets/images/unprocessed-raw/desichickpeas.webp",
        description: "Origin: Australia / Ethiopia / Tanzania",
        varieties: [],
        features: [
          "High protein and fiber",
          "Supports heart health",
          "Gluten-free",
          "Versatile in cooking",
        ],
      },
    ],
  },
  {
    id: "processed-pulses",
    name: "Processed Pulses",
    description:
      "High-quality processed pulses sourced globally with various origins and types.",
    image: "/assets/images/processed-pulses/processed.jpg",
    items: [
      {
        name: "Chana Dal",
        image: "/assets/images/processed-pulses/chanadal.jpg",
        description: "Origin: India / Australia / Tanzania / Myanmar",
        varieties: [],
        features: [
          "Rich in protein",
          "Gluten-free",
          "Good source of fiber",
          "Used in various cuisines",
        ],
      },
      {
        name: "Moong Split",
        image: "/assets/images/processed-pulses/moongsplit.webp",
        description: "Origin: Myanmar / India / UAE",
        varieties: [],
        features: [
          "Easy to digest",
          "High protein content",
          "Low fat",
          "Popular in soups and dals",
        ],
      },
      {
        name: "Urid Dal",
        image: "/assets/images/processed-pulses/uriddal.webp",
        description: "Origin: Myanmar / India / UAE",
        varieties: [],
        features: [
          "Rich in dietary fiber",
          "Good source of iron",
          "Used in South Asian cooking",
          "High energy food",
        ],
      },
      {
        name: "Red Lentil (Split)",
        image: "/assets/images/processed-pulses/redlentils.webp",
        description: "Origin: India / Canada / UAE / Australia",
        varieties: [],
        features: [
          "Quick cooking",
          "High protein",
          "Rich in folate",
          "Used in soups and stews",
        ],
      },
      {
        name: "Toor Dal",
        image: "/assets/images/processed-pulses/toordal.jpg",
        description:
          "Origin: India / Myanmar / UAE / Tanzania / Mozambique / Malawi",
        varieties: [],
        features: [
          "Good source of protein",
          "Traditional Indian dal",
          "Rich in vitamins and minerals",
          "Helps in digestion",
        ],
      },
      {
        name: "Chickpeas",
        image: "/assets/images/processed-pulses/chickpeas.webp",
        description:
          "Origin: India / Mexico / USA / Canada / Argentina / Russia / Ukraine / Turkey / Bulgaria",
        varieties: [],
        features: [
          "High in protein and fiber",
          "Versatile ingredient",
          "Used in salads and curries",
          "Gluten-free",
        ],
      },
      {
        name: "Green lentils",
        image: "/assets/images/processed-pulses/greenlentils.jpg",
        description: "Origin: Canada / USA / Russia / Kazakhstan",
        varieties: [],
        features: [
          "Firm texture",
          "High in protein",
          "Good for salads",
          "Rich in antioxidants",
        ],
      },
      {
        name: "Cow Peas",
        image: "/assets/images/processed-pulses/cowpeas.webp",
        description: "Origin: India / Myanmar / Mozambique / Brazil",
        varieties: [],
        features: [
          "Rich in protein and fiber",
          "Used in traditional dishes",
          "Good source of vitamins",
          "Gluten-free",
        ],
      },
    ],
  },
  {
    id: "beans",
    name: "Beans",
    description:
      "High-quality beans sourced globally, offering a variety of types suitable for cooking and nutritional needs.",
    image: "/assets/images/beans/beans.jpg",
    items: [
      {
        name: "Light Red Kidney Beans",
        image: "/assets/images/beans/lightredkidneybeans.webp",
        description:
          "Origin: Argentina / USA / Canada / China / Belize / Uganda / Kyrgyzstan",
        varieties: [],
        features: [
          "Rich source of protein and fiber",
          "Good for heart health",
          "Versatile for many recipes",
          "Low in fat",
        ],
      },
      {
        name: "Dark Red Kidney Beans",
        image: "/assets/images/beans/darkredkidney.jpg",
        description: "Origin: Kenya / Tanzania / Ethiopia / Kyrgyzstan",
        varieties: [],
        features: [
          "High in antioxidants",
          "Excellent plant-based protein",
          "Supports digestive health",
          "Good source of iron",
        ],
      },
      {
        name: "Speckled Kidney Beans",
        image: "/assets/images/beans/speckledkidneybeans.jpg",
        description:
          "Origin: China / Uganda / Argentina / USA / Canada / Brazil / Kyrgyzstan",
        varieties: [],
        features: [
          "Nutritious and flavorful",
          "Rich in essential vitamins",
          "Helps regulate blood sugar",
          "Gluten-free",
        ],
      },
      {
        name: "White Kidney Beans",
        image: "/assets/images/beans/whitekidneubeans.jpg",
        description:
          "Origin: Egypt / Argentina / Madagascar / China / Kyrgyzstan",
        varieties: [],
        features: [
          "Good source of complex carbs",
          "Promotes healthy digestion",
          "Low glycemic index",
          "Supports weight management",
        ],
      },
      {
        name: "Black Eyed Beans",
        image: "/assets/images/beans/blackeyedbeans.jpg",
        description: "Origin: Madagascar / Myanmar / Peru / Belize",
        varieties: [],
        features: [
          "High in folate and fiber",
          "Supports heart health",
          "Easy to cook",
          "Rich in protein",
        ],
      },
      {
        name: "Fava Beans",
        image: "/assets/images/beans/favabeans.jpg",
        description: "Origin: Australia / China / Ethiopia",
        varieties: [],
        features: [
          "Excellent source of protein",
          "Contains essential vitamins",
          "Good for immune support",
          "High fiber content",
        ],
      },
    ],
  },
  {
    id: "oil-seeds",
    name: "Oil Seeds",
    description:
      "A diverse range of quality oil seeds sourced globally, suitable for various culinary and industrial uses.",
    image: "/assets/images/oil-seeds/oil-seeds.jpg",
    items: [
      {
        name: "Flax Seeds",
        image: "/assets/images/oil-seeds/flaxseeds.jpg",
        description:
          "High-quality flax seeds known for their rich omega-3 fatty acid content and dietary fiber.",
        varieties: ["Russia", "Ukraine", "Canada"],
        features: [
          "Rich in omega-3 fatty acids",
          "High dietary fiber",
          "Premium quality",
        ],
      },
      {
        name: "Peanut In-Shell",
        image: "/assets/images/oil-seeds/peanutsinshell.jpg",
        description:
          "Whole peanuts encased in their shells, preserving freshness and flavor.",
        varieties: ["China", "USA"],
        features: ["Fresh and natural", "Preserved flavor", "High quality"],
      },
      {
        name: "Blanch Peanut",
        image: "/assets/images/oil-seeds/blanchpeanuts.jpg",
        description:
          "Peanuts blanched to remove skins, offering a smooth texture and mild taste.",
        varieties: ["India", "China", "USA", "Brazil", "Argentina"],
        features: ["Skin removed", "Smooth texture", "Mild taste"],
      },
      {
        name: "Peanut Kernel",
        image: "/assets/images/oil-seeds/peanutskernel.jpg",
        description:
          "Shelled peanuts ready for consumption, ideal for snacking or culinary uses.",
        varieties: [
          "India",
          "China",
          "Sudan",
          "USA",
          "Brazil",
          "Argentina",
          "Madagascar",
          "Senegal",
        ],
        features: ["Shelled", "Ready to use", "Versatile"],
      },
      {
        name: "Pumpkin Seeds",
        image: "/assets/images/oil-seeds/pumpkinseeds.jpg",
        description:
          "Nutrient-rich pumpkin seeds, commonly used in snacks and baking.",
        varieties: ["China"],
        features: ["Nutrient rich", "Popular snack", "Versatile in baking"],
      },
      {
        name: "Sesame Seeds",
        image: "/assets/images/oil-seeds/sesameseeds.jpg",
        description:
          "Versatile sesame seeds, available in natural and hulled varieties, widely used in cooking and baking.",
        varieties: [
          "Ethiopia",
          "Sudan",
          "Burkina Faso",
          "India",
          "Nigeria",
          "Tanzania",
          "Mozambique",
        ],
        features: ["Natural and hulled", "Widely used", "High quality"],
      },
      {
        name: "Soya Beans",
        image: "/assets/images/oil-seeds/soyabeans.jpg",
        description:
          "High-protein soybeans suitable for various food products and oil extraction.",
        varieties: [
          "Togo",
          "Nigeria",
          "Ethiopia",
          "Argentina",
          "Brazil",
          "USA",
        ],
        features: ["High protein", "Versatile use", "Premium quality"],
      },
      {
        name: "Sunflower Seeds",
        image: "/assets/images/oil-seeds/sunfloweseeds.jpg",
        description:
          "Nutritious sunflower seeds, available in whole and hulled forms, commonly used in snacks and baking.",
        varieties: ["Ukraine", "Russia", "China", "Argentina"],
        features: ["Whole and hulled", "Nutritious", "Popular snack"],
      },
      {
        name: "Watermelon Seeds",
        image: "/assets/images/oil-seeds/watermelonseeds.jpg",
        description:
          "Lightly roasted watermelon seeds, enjoyed as a healthy snack in various cultures.",
        varieties: ["Africa"],
        features: ["Lightly roasted", "Healthy snack", "Rich in nutrients"],
      },
    ],
  },
  {
    id: "spices",
    name: "Spices",
    description:
      "A wide range of spices including black pepper, cloves, coriander seeds, cumin seeds, fennel seeds, fenugreek, ginger, green cardamom, red chili, and tamarind.",
    image: "/assets/images/spices/spices.jpg",
    items: [
      {
        name: "Black Pepper",
        image: "/assets/images/spices/blackpepper.webp",
        description: "Premium black peppercorns with strong aroma and flavor.",
        varieties: ["Whole Black Pepper", "Crushed Black Pepper"],
        features: ["Strong aroma", "Uniform size", "High pungency"],
      },
      {
        name: "Cloves",
        image: "/assets/images/spices/cloves.jpg",
        description: "Aromatic cloves with excellent quality and freshness.",
        varieties: ["Whole Cloves"],
        features: ["Strong aroma", "Properly dried", "High oil content"],
      },
      {
        name: "Coriander Seeds",
        image: "/assets/images/spices/corianderseeds.jpg",
        description:
          "Clean and fresh coriander seeds suitable for culinary and industrial use.",
        varieties: ["Whole Coriander Seeds", "Crushed Coriander Seeds"],
        features: [
          "High essential oil content",
          "Clean and sorted",
          "Fresh quality",
        ],
      },
      {
        name: "Cumin Seeds",
        image: "/assets/images/spices/cuminseeds.jpg",
        description: "Premium cumin seeds with excellent flavor and aroma.",
        varieties: ["Whole Cumin Seeds", "Ground Cumin"],
        features: ["Strong aroma", "Uniform size", "Clean and fresh"],
      },
      {
        name: "Fennel Seeds",
        image: "/assets/images/spices/fennelseeds.jpg",
        description: "Fresh fennel seeds with a sweet aroma and taste.",
        varieties: ["Whole Fennel Seeds"],
        features: ["Sweet aroma", "Clean and sorted", "Premium quality"],
      },
      {
        name: "Fenugreek",
        image: "/assets/images/spices/fenugreek.webp",
        description: "Clean and fresh fenugreek seeds, rich in nutrients.",
        varieties: ["Whole Fenugreek Seeds", "Fenugreek Powder"],
        features: ["Rich in nutrients", "Properly cleaned", "Fresh quality"],
      },
      {
        name: "Ginger",
        image: "/assets/images/spices/ginger.jpg",
        description: "Dried ginger with strong aroma and medicinal properties.",
        varieties: ["Whole Dried Ginger", "Ginger Powder"],
        features: ["Strong aroma", "Clean and dry", "High quality"],
      },
      {
        name: "Green Cardamom",
        image: "/assets/images/spices/greencardamom.jpg",
        description:
          "Premium green cardamom pods with strong aroma and flavor.",
        varieties: ["Whole Green Cardamom"],
        features: ["Strong aroma", "Fresh quality", "Uniform size"],
      },
      {
        name: "Red Chili",
        image: "/assets/images/spices/redchili.jpeg",
        description:
          "Hot and spicy red chili peppers, available whole or powdered.",
        varieties: ["Whole Red Chili", "Red Chili Powder"],
        features: ["High pungency", "Fresh and clean", "Consistent quality"],
      },
      {
        name: "Tamarind",
        image: "/assets/images/spices/tamarind.webp",
        description: "Natural tamarind pods and paste with rich tangy flavor.",
        varieties: ["Whole Tamarind Pods", "Tamarind Paste"],
        features: ["Rich flavor", "Fresh and clean", "No additives"],
      },
    ],
  },
  {
    id: "bird-feed",
    name: "Bird Feed",
    description:
      "Products like niger seeds, raisins, red sorghum, safflower seeds, and yellow millet.",
    image: "/assets/images/bird-feed/birdfeed.jpg",
    items: [
      {
        name: "Niger Seeds",
        image: "/assets/images/bird-feed/nigerseeds.jpg",
        description:
          "High-quality niger seeds for bird feed, rich in nutrients.",
        varieties: ["Raw Niger Seeds"],
        features: [
          "Rich in oil content",
          "Cleaned and sorted",
          "Premium quality",
        ],
      },
      {
        name: "Raisins",
        image: "/assets/images/bird-feed/raisins.jpg",
        description:
          "Sweet and nutritious raisins, perfect for bird feed mixes.",
        varieties: ["Natural Raisins", "Sun-dried Raisins"],
        features: [
          "High sugar content",
          "Fresh and clean",
          "Consistent quality",
        ],
      },
      {
        name: "Red Sorghum",
        image: "/assets/images/bird-feed/redsorghum.jpg",
        description: "Premium red sorghum grains, ideal for bird feed.",
        varieties: ["Whole Red Sorghum"],
        features: [
          "High nutritional value",
          "Clean and sorted",
          "Uniform size",
        ],
      },
      {
        name: "Safflower Seeds",
        image: "/assets/images/bird-feed/safflowerseeds.jpg",
        description: "High-quality safflower seeds rich in oil and nutrients.",
        varieties: ["Raw Safflower Seeds"],
        features: ["Rich in oil", "Clean and fresh", "Premium quality"],
      },
      {
        name: "Yellow Millet",
        image: "/assets/images/bird-feed/yellowmillet.jpg",
        description:
          "Nutritious yellow millet grains, ideal for various bird species.",
        varieties: ["Whole Yellow Millet"],
        features: [
          "High nutritional value",
          "Clean and sorted",
          "Fresh quality",
        ],
      },
    ],
  },
  {
    id: "dried-fruits-nuts",
    name: "Dried Fruits & Nuts",
    description:
      "A variety of dried fruits and nuts, including cashews, almonds, walnuts, raisins, and dried apricots.",
    image: "/assets/images/dried-nuts/driednuts.jpg",
    items: [
      {
        name: "Cashews",
        image: "/assets/images/dried-nuts/cashews.webp",
        description:
          "Premium quality cashew nuts, rich in flavor and nutrients.",
        varieties: ["Whole Cashews", "Split Cashews"],
        features: ["Fresh and clean", "Uniform size", "Premium quality"],
      },
      {
        name: "Almonds",
        image: "/assets/images/dried-nuts/almonds.jpg",
        description: "High-quality almonds, rich in vitamins and minerals.",
        varieties: ["Whole Almonds", "Sliced Almonds"],
        features: [
          "Fresh and clean",
          "Rich in nutrients",
          "Consistent quality",
        ],
      },
      {
        name: "Walnuts",
        image: "/assets/images/dried-nuts/walnuts.jpg",
        description: "Fresh walnuts with excellent taste and texture.",
        varieties: ["Whole Walnuts", "Shelled Walnuts"],
        features: ["Fresh and clean", "Rich in omega-3", "Premium quality"],
      },
      {
        name: "Raisins",
        image: "/assets/images/dried-nuts/raisins.jpg",
        description:
          "Sweet and nutritious raisins, perfect for snacking or cooking.",
        varieties: ["Natural Raisins", "Sun-dried Raisins"],
        features: [
          "High sugar content",
          "Fresh and clean",
          "Consistent quality",
        ],
      },
      {
        name: "Deyhydrate Fruits",
        image: "/assets/images/dried-nuts/fruits.jpg",
        description: "Natural dried Fruits, rich in vitamins and fiber.",
        varieties: [],
        features: [
          "Natural sweetness",
          "Fresh and clean",
          "High fiber content",
        ],
      },
    ],
  },
];
