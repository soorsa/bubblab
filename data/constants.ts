import {
  FilePenLine,
  ListCheck,
  PackageOpen,
  PhoneCall,
  Recycle,
  ShoppingBasket,
  Smartphone,
  Timer,
  Truck,
  TruckElectric,
  WashingMachine,
} from "lucide-react";
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
    description: "Recommeded for single individuals living in Lagos",
    tag: "",
    price: 15000,
    color: "indigo",
    features: [
      "2 pickups per month",
      "10 items per pickup",
      "wash & Iron",
      "free delivery",
    ],
    popular: false,
  },
  {
    name: "Standard",
    description:
      "Recommeded for individuals, couples & small families living in Lagos",
    tag: "free laundry bags",
    price: 35000,
    color: "indigo",
    features: [
      "up to 15 items per week",
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
    description:
      "Recommeded for couples & small/large families living in Lagos",

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

export const AVAILABLE_ZONES = [
  {
    state: "Lagos",
    cities: [
      "Egbeda",
      "Ikotun",
      "Isheri",
      "Idimu",
      "Igando",
      "Akesan",
      "Ijegun",
    ],
  },
];

export const steps = [
  {
    number: "01",
    icon: Smartphone,
    title: "Sign up",
    description:
      "Choose your subscription plan or schedule a one-time pickup in seconds.",
  },
  {
    number: "02",
    icon: ShoppingBasket,
    title: "We pick up",
    description:
      "Our team collects your laundry at your preferred time — free of charge.",
  },
  {
    number: "03",
    icon: WashingMachine,
    title: "Premium cleaning",
    description:
      "Eco-friendly dry cleaning & laundry with 24h turnaround time.",
  },
  {
    number: "04",
    icon: Truck,
    title: "Fresh delivery",
    description:
      "Get your freshly cleaned laundry delivered right to your doorstep.",
  },
];

export const SUBSCRIPTION_STEPS = [
  {
    number: "01",
    icon: ListCheck,
    title: "Select a plan",
    description:
      "Choose the laundry subscription plan that best fits your needs.",
  },
  {
    number: "02",
    icon: FilePenLine,
    title: "Fill the form",
    description:
      "Tell us your contact details and pickup address so we know where to find you.",
  },
  {
    number: "03",
    icon: PhoneCall,
    title: "We contact you",
    description:
      "We'll reach out to confirm your details and schedule your free pickup.",
  },
  {
    number: "04",
    icon: WashingMachine,
    title: "Pay on Pickup",
    description:
      "Our rider picks up your clothes and you pay at your doorstep. We then wash, iron and deliver them back to you.",
  },
];
