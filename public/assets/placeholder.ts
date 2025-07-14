// Image map for the website
export const placeholderImages = {
  // Hero images
  hero: "https://api.deepai.org/job-view-file/9c1173d9-b6ef-4a9f-8b22-6a99656736ee/outputs/output.jpg",

  // About page images
  about1:
    "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1920&h=1080&auto=format&fit=crop",
  about2:
    "https://images.unsplash.com/photo-1530507629858-e3759c3e9c9f?q=80&w=1920&h=1080&auto=format&fit=crop",
  about3:
    "https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?q=80&w=1920&h=1080&auto=format&fit=crop",

  // Category images - higher quality
  pulses:
    "https://ik.imagekit.io/lvn5j5ljp/wp-content/uploads/2023/08/Untitled-design-38.png",
  "oil-seeds":
    "https://www.health.com/thmb/cA6xW4AR-rfkL46LXMGhO28IzIw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Health-GettyImages-SeedOils-7c4777d3f9c74642bec8d56fb0b73473.jpg",
  spices: "https://www.hamstech.com/wp-content/uploads/2022/02/Spices.jpg",
  "grains-cereals":
    "https://media.newyorker.com/photos/59095e38019dfc3494e9fa85/master/pass/Vara-Ancient-Grains-primary-2.jpg",
  "animal-feed":
    "https://www.bruker.com/en/applications/food-analysis-and-agriculture/animal-feed/feed-and-ingredients/_jcr_content/root/herostage/backgroundImageVPL.coreimg.82.1920.jpeg/1597816809108/feed-ingredients.jpeg",

  // Product images - Pulses (higher quality, natural settings)
  chickpeas:
    "https://5.imimg.com/data5/OX/MT/MY-13852228/white-chick-peas-chana-500x500.jpg",

  greenmoongbeans:
    "https://5.imimg.com/data5/TY/FB/MY-16624432/green-moong-500x500.jpg",

  redlentils:
    "https://organicfud.in/wp-content/uploads/2022/10/2.-Red-Lentil-whole-without-Husk.jpeg",

  toordal: "https://adidevgroup.com/img/products/toor-daal.jpg",

  uraddal:
    "https://5.imimg.com/data5/WG/KY/MY-66802549/washed-urad-dal-500x500.jpeg",

  chanadal:
    "https://5.imimg.com/data5/TZ/DM/MP/SELLER-110562642/chana-dal.jpeg",

  // Product images - Oil Seeds (higher quality, natural settings)
  sesameSeeds:
    "https://images.unsplash.com/photo-1638828303714-5b14a7bab0d5?q=80&w=800&h=800&auto=format&fit=crop",
  groundnuts:
    "https://images.unsplash.com/photo-1567892737950-30c3a27feaad?q=80&w=800&h=800&auto=format&fit=crop",
  mustardSeeds:
    "https://images.unsplash.com/photo-1626906722163-bd4c03cb3b9b?q=80&w=800&h=800&auto=format&fit=crop",
  flaxSeeds:
    "https://images.unsplash.com/photo-1613758235402-745466bb7ded?q=80&w=800&h=800&auto=format&fit=crop",

  // Product images - Spices (higher quality, natural settings)
  corianderSeeds:
    "https://images.unsplash.com/photo-1620010392737-ec44d91e2940?q=80&w=800&h=800&auto=format&fit=crop",
  cuminSeeds:
    "https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?q=80&w=800&h=800&auto=format&fit=crop",
  fennelSeeds:
    "https://images.unsplash.com/photo-1599909366630-620fa328eccd?q=80&w=800&h=800&auto=format&fit=crop",
  fenugreekSeeds:
    "https://images.unsplash.com/photo-1599909120027-122c9b761cf1?q=80&w=800&h=800&auto=format&fit=crop",
  ajwainSeeds:
    "https://images.unsplash.com/photo-1600691735227-77fd37249aad?q=80&w=800&h=800&auto=format&fit=crop",

  // Product images - Grains (higher quality, natural settings)
  basmatiRice:
    "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=800&h=800&auto=format&fit=crop",
  nonBasmatiRice:
    "https://images.unsplash.com/photo-1626078436898-3670bea86191?q=80&w=800&h=800&auto=format&fit=crop",
  wheat:
    "https://images.unsplash.com/photo-1530189380268-bac77d0a27ec?q=80&w=800&h=800&auto=format&fit=crop",
  maize:
    "https://images.unsplash.com/photo-1599593797688-9819fadf9387?q=80&w=800&h=800&auto=format&fit=crop",
  millets:
    "https://images.unsplash.com/photo-1586579095052-32bd96d7dc26?q=80&w=800&h=800&auto=format&fit=crop",

  // Product images - Animal Feed (higher quality, natural settings)
  soybeanMeal:
    "https://images.unsplash.com/photo-1600857544200-b2f468e9a2f6?q=80&w=800&h=800&auto=format&fit=crop",
  rapeseedMeal:
    "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?q=80&w=800&h=800&auto=format&fit=crop",
  deoiledCake:
    "https://images.unsplash.com/photo-1626445244258-69ca5e80f5eb?q=80&w=800&h=800&auto=format&fit=crop",
  maizeBran:
    "https://images.unsplash.com/photo-1629651480694-edb5fabf5cdf?q=80&w=800&h=800&auto=format&fit=crop",

  // Contact page
  contactHero:
    "https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=1920&h=600&auto=format&fit=crop",
};

// Helper function to get product image
export function getProductImage(path: string): string {
  if (path.startsWith("/assets/")) {
    const imageName = path.split("/").pop()?.split(".")[0];
    if (imageName && imageName in placeholderImages) {
      return placeholderImages[imageName as keyof typeof placeholderImages];
    }
  }

  // If the path is already a URL, return it directly
  if (path.startsWith("http")) {
    return path;
  }

  // Return the path as is, or a default placeholder if needed
  return path || "/placeholder.svg";
}
