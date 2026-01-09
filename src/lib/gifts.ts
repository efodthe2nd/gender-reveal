export interface Gift {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  featured?: boolean;
}

export const gifts: Gift[] = [
  {
    id: 1,
    name: "Cash Gift",
    description: "Monetary contribution to support our new journey together",
    price: "Any amount",
    image: "/images/gifts/cash-gift.jpg",
    featured: true,
  },
  {
    id: 2,
    name: "Air Conditioner",
    description: "High-efficiency air conditioner for a cool home",
    price: "₦300,000",
    image: "/images/gifts/air-conditioner.jpg",
  },
  {
    id: 3,
    name: "Bedding Set",
    description: "Premium cotton bedding set for comfortable nights",
    price: "₦25,000",
    image: "/images/gifts/bedding-set.jpg",
  },
  {
    id: 4,
    name: "Blending Machine",
    description: "High-speed blending machine for smoothies and more",
    price: "₦75,000",
    image: "/images/gifts/blender.jpg",
  },
  {
    id: 5,
    name: "Bookshelf",
    description: "Stylish bookshelf for a growing library",
    price: "₦45,000",
    image: "/images/gifts/bookshelf.jpg",
  },
  {
    id: 6,
    name: "Dining Table Set",
    description: "Elegant 6-seater dining table with chairs",
    price: "₦180,000",
    image: "/images/gifts/dining-set.jpg",
  },
  {
    id: 7,
    name: "Microwave Oven",
    description: "Modern microwave oven for quick meals",
    price: "₦65,000",
    image: "/images/gifts/microwave.jpg",
  },
  {
    id: 8,
    name: "Washing Machine",
    description: "Automatic washing machine for laundry convenience",
    price: "₦250,000",
    image: "/images/gifts/washing-machine.jpg",
  },
  {
    id: 9,
    name: "Television",
    description: "55-inch smart TV for family entertainment",
    price: "₦350,000",
    image: "/images/gifts/television.jpg",
  },
  {
    id: 10,
    name: "Kitchen Utensils Set",
    description: "Complete set of quality kitchen utensils",
    price: "₦35,000",
    image: "/images/gifts/kitchen-utensils.jpg",
  },
  {
    id: 11,
    name: "Generator",
    description: "Reliable power backup generator",
    price: "₦400,000",
    image: "/images/gifts/generator.jpg",
  },
  {
    id: 12,
    name: "Refrigerator",
    description: "Double-door refrigerator for fresh food storage",
    price: "₦280,000",
    image: "/images/gifts/refrigerator.jpg",
  },
];
