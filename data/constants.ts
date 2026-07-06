import { PackageOpen, Recycle, Timer, TruckElectric } from "lucide-react";
export const NAVLINKS = [
  { name: "Subscription", href: "#subscription" },
  { name: "Pickup", href: "#pickup" },
  { name: "Testimonials", href: "#Testimonials" },
];

export const FEATURES = [
  { icon: PackageOpen, label: "free bags", desc: "reusable packaging" },
  { icon: Timer, label: "24/7 service", desc: "rush available" },
  { icon: Recycle, label: "eco-friendly", desc: "plant-based" },
  { icon: TruckElectric, label: "fast delivery", desc: "free deliveries" },
];

export const PLANS = [
  {
    name: "Basic",
    tag: "",
    price: 15000,
    color: "indigo",
    features: [
      "2 pickups / month",
      "10 items / pickup",
      "wash & Iron",
      "free delivery",
    ],
    popular: false,
  },
  {
    name: "Standard",
    tag: "free laundry bags",
    price: 30000,
    color: "indigo",
    features: [
      "up to 15 items",
      "regular clothes",
      "Wash & Iron",
      "weekly pickup",
      "same-day option",
      "free delivery",
    ],
    popular: true,
  },
  {
    name: "Family",
    tag: "free laundry bags",
    price: 60000,
    color: "purple",
    features: [
      "up to 30 items",
      "Duvet & Beddings",
      "Wash & Iron",
      "weekly pickup",
      "same-day option",
      "free delivery",
    ],
    popular: false,
  },
];
