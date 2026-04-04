import type { Dictionary } from "../types"

const en: Dictionary = {
  locale: "en",
  dir: "ltr",
  common: {
    shopNow: "Shop Now",
    browseCategories: "Browse Categories",
    viewAll: "View All",
    viewProduct: "View Product",
    addToCart: "Add to Cart",
    loading: "Loading...",
    back: "Back",
    backToCart: "Back to cart",
    account: "Account",
    cart: "Cart",
    menu: "Menu",
    language: "Language",
    country: "Country",
    currency: "Currency",
    copyright: `© ${new Date().getFullYear()} Megtech. All rights reserved.`,
    close: "Close",
    search: "Search",
    home: "Home",
    store: "Store",
    tested: "Tested",
  },
  nav: {
    storeName: "Megtech Store",
    account: "Account",
    cart: "Cart",
    menu: "Menu",
    home: "Home",
    store: "Store",
    cartLabel: "Cart",
  },
  home: {
    hero: {
      badge: "Cash on delivery • Nationwide delivery • No surprises",
      headline: "Premium Tech.",
      headlineHighlight: "Tested. Trusted.",
      subtext:
        "Imported from Dubai. Fully tested. Delivered across Algeria. Upgrade your setup with confidence without paying retail prices.",
      primaryCTA: "Shop Now",
      secondaryCTA: "Browse Categories",
    },
    trustBar: {
      returns: "Hassle-free returns & replacement",
      tested: "Every product tested",
      cod: "Cash on delivery",
      delivery: "Delivered across Algeria",
    },
    brands: {
      sectionTitle: "Top Brands We Carry",
    },
    categories: {
      sectionTitle: "Shop by Category",
      sectionSubtitle: "Explore our curated selection of premium gear.",
      browseAll: "Browse all products",
      gpus: {
        title: "Graphics Cards (GPUs)",
        description: "Next-gen graphics power for ultimate performance.",
      },
      laptops: {
        title: "Gaming Laptops",
        description: "Thin, light, and powerful portable machines.",
      },
      accessories: {
        title: "Gaming Accessories",
        description: "Premium headsets, mice, and keyboards to complete your setup.",
      },
    },
    latestArrivals: {
      sectionTitle: "Latest Arrivals",
      viewAll: "View all products",
    },
    whyMegtech: {
      sectionTitle: "Why Choose Megtech?",
      sectionSubtitle:
        "We are dedicated to providing premium used tech with complete transparency and trust.",
      features: [
        {
          title: "5+ Years Experience",
          description:
            "A trusted seller in the Algerian tech community with hundreds of satisfied customers.",
        },
        {
          title: "Imported from Dubai",
          description:
            "We source our electronics directly from premium markets to guarantee quality.",
        },
        {
          title: "100% Tested Before Sale",
          description:
            "Every single GPU, CPU, and accessory is rigorously tested to ensure performance.",
        },
        {
          title: "Unbeatable Prices",
          description:
            "We offer significantly better pricing compared to local market standards.",
        },
        {
          title: "Cash On Delivery (COD)",
          description:
            "Pay only when you receive and inspect your product. Zero risk involved.",
        },
      ],
    },
    socialProof: {
      yearsExp: { value: "5+", label: "Years Experience" },
      customers: { value: "200+", label: "Happy Customers" },
      coverage: { value: "58 Wilayas", label: "Coverage" },
    },
    testimonials: {
      sectionTitle: "What our customers say",
      reviews: [
        {
          name: "Amine B.",
          location: "Algiers",
          text: "The delivery was fast and the GPU was perfectly packaged. Installed it right away and it works exactly as described. Highly recommended!",
        },
        {
          name: "Yacine T.",
          location: "Oran",
          text: "Got an RTX 3070 for a price I couldn't find anywhere else in the local shops. Communication on Facebook was top notch and very transparent.",
        },
        {
          name: "Mehdi K.",
          location: "Constantine",
          text: "I was initially skeptical about buying 'used' electronics, but Megtech completely changed my mind. Received the product safely and paid at the door. No surprises, just quality.",
        },
      ],
    },
  },
  footer: {
    description:
      "Premium used tech, imported directly from Dubai. Fully tested, quality-assured, and delivered nationwide across Algeria.",
    facebookPage: "Facebook Page",
    phone: "+213 (0) XX XX XX XX",
    address: "Algiers, Algeria",
    categoriesHeading: "Categories",
    collectionsHeading: "Collections",
    helpHeading: "Help & Policies",
    returnsLink: "Returns / Replacement Policy",
    faqLink: "FAQ",
    contactLink: "Contact Us",
    copyright: `© ${new Date().getFullYear()} Megtech. All rights reserved.`,
    madeWith: "Made with ❤️ in Algeria",
  },
  store: {
    pageTitle: "Store",
    pageDescription: "Explore all of our products.",
    allProducts: "All products",
    sortBy: "Sort by",
    sortOptions: {
      latest: "Latest Arrivals",
      priceLow: "Price: Low → High",
      priceHigh: "Price: High → Low",
    },
    noProducts: "No products found.",
    filterBy: "Filter",
    showing: "Showing",
    loadMore: "Load more",
  },
  product: {
    addToCart: "Add to Cart",
    outOfStock: "Out of Stock",
    selectVariant: "Select a variant",
    quantity: "Quantity",
    description: "Description",
    details: "Details",
    shipping: "Shipping & Delivery",
    relatedProducts: "Related Products",
    testedBadge: "Tested",
    viewProduct: "View Product",
    from: "From",
  },
  cart: {
    title: "Shopping Cart",
    empty: "Your cart is empty.",
    continueShopping: "Continue Shopping",
    subtotal: "Subtotal",
    total: "Total",
    checkout: "Go to Checkout",
    remove: "Remove",
    quantity: "Qty",
    editCart: "Edit Cart",
    summary: "Order Summary",
    discount: "Discount",
    taxes: "Taxes",
    shipping: "Shipping",
  },
  checkout: {
    title: "Checkout",
    backToCart: "Back to shopping cart",
    stepAddress: "Address",
    stepDelivery: "Delivery",
    stepPayment: "Payment",
    stepReview: "Review",
    firstName: "First name",
    lastName: "Last name",
    email: "Email",
    phone: "Phone",
    address: "Address",
    city: "City",
    postalCode: "Postal code",
    country: "Country",
    province: "Province / State",
    company: "Company (optional)",
    continueToDelivery: "Continue to delivery",
    continueToPayment: "Continue to payment",
    continueToReview: "Continue to review",
    placeOrder: "Place order",
    orderConfirmed: "Order Confirmed!",
    thankYou: "Thank you for your order.",
    editAddress: "Edit address",
    deliveryMethod: "Delivery method",
    paymentMethod: "Payment method",
    orderSummary: "Order summary",
    discountCode: "Discount code",
    applyDiscount: "Apply",
    codLabel: "Cash on Delivery",
    codDescription: "Pay with cash when your order is delivered.",
  },
  account: {
    overview: "Overview",
    profile: "Profile",
    addresses: "Addresses",
    orders: "Orders",
    logOut: "Log out",
    logIn: "Sign in",
    register: "Create account",
    welcomeBack: "Welcome back",
    email: "Email address",
    password: "Password",
    firstName: "First name",
    lastName: "Last name",
    phone: "Phone",
    rememberMe: "Remember me",
    forgotPassword: "Forgot password?",
    noAccount: "Don't have an account?",
    hasAccount: "Already have an account?",
    createAccount: "Create account",
    signIn: "Sign in",
    gotQuestions: "Got questions?",
    customerService: "Customer Service",
    memberTitle: "Become a Megtech Store Member",
    memberDesc:
      "Create your Megtech Store Member profile, and get access to an enhanced shopping experience.",
    agreeToTerms: "By creating an account, you agree to Megtech Store's",
    privacyPolicy: "Privacy Policy",
    termsOfUse: "Terms of Use",
    noOrders: "No orders yet.",
    orderId: "Order #",
    orderDate: "Date",
    orderStatus: "Status",
    orderTotal: "Total",
    viewOrder: "View order",
    editProfile: "Edit profile",
    saveChanges: "Save changes",
    profileUpdated: "Profile updated.",
  },
  legal: {
    returns: {
      metaTitle: "Returns & Replacement Policy | Megtech Store",
      metaDescription:
        "Learn about Megtech's returns and replacement policy for used electronics.",
      title: "Returns & Replacement Policy",
      sections: [
        {
          heading: "Our Commitment",
          content:
            "At Megtech, we are committed to providing you with products that exactly match their description. If you receive a product that does not match the description provided at the time of sale, you are entitled to a return or replacement.",
        },
        {
          heading: "Eligibility for Return or Replacement",
          content:
            "You may request a return or replacement if:\n\n• The product does not match the condition described (e.g., described as 'tested and functional' but arrives non-functional).\n• The product is physically different from what was ordered (wrong model, wrong specifications).\n• The product is damaged due to shipping.\n\nAll claims must be submitted within 48 hours of receiving the product via our Facebook page or phone.",
        },
        {
          heading: "How to Request",
          content:
            "To initiate a return or replacement:\n\n1. Contact us via our Facebook page (facebook.com/megtechn) or phone immediately upon identifying the issue.\n2. Provide clear photos or videos documenting the issue.\n3. Our team will review your claim within 24 hours.\n4. Once approved, we will coordinate the collection and replacement at no extra cost to you.",
        },
        {
          heading: "Important Notes",
          content:
            "• This policy covers situations where the product does not match its description. It does not cover damage caused by the customer after delivery.\n• All our products are tested before shipment and come with a product condition report.\n• There is no separate warranty offered. Our guarantee is that the product matches the described condition at time of sale.\n• Cash on Delivery (COD) orders can be refused at the door if the product visibly does not match the description before payment.",
        },
        {
          heading: "Contact Us",
          content:
            "For any return or replacement requests, please contact us via:\n\n• Facebook: facebook.com/megtechn\n• Phone: +213 (0) XX XX XX XX\n\nWe aim to resolve all issues as quickly as possible.",
        },
      ],
    },
    privacy: {
      metaTitle: "Privacy Policy | Megtech Store",
      metaDescription: "How Megtech collects, uses, and protects your personal information.",
      title: "Privacy Policy",
      sections: [
        {
          heading: "Introduction",
          content:
            "Megtech ('we', 'our', 'us') is committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or make a purchase.",
        },
        {
          heading: "Information We Collect",
          content:
            "We collect information you provide directly to us, including:\n\n• Name and contact information (email, phone number, address)\n• Order and purchase history\n• Communications you send to us via Facebook or phone\n\nWe do not collect payment card data. All payments are made via Cash on Delivery.",
        },
        {
          heading: "How We Use Your Information",
          content:
            "We use the information we collect to:\n\n• Process and fulfill your orders\n• Send you order confirmations and updates\n• Respond to your inquiries and customer service requests\n• Improve our website and services\n• Comply with legal obligations",
        },
        {
          heading: "Information Sharing",
          content:
            "We do not sell, trade, or rent your personal information to third parties. We may share your information with delivery partners solely for the purpose of fulfilling your order.",
        },
        {
          heading: "Data Security",
          content:
            "We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, loss, or misuse. However, no internet transmission is 100% secure.",
        },
        {
          heading: "Your Rights",
          content:
            "You have the right to:\n\n• Access the personal information we hold about you\n• Request correction of inaccurate information\n• Request deletion of your data\n• Withdraw consent at any time\n\nTo exercise these rights, contact us via Facebook or phone.",
        },
        {
          heading: "Changes to This Policy",
          content:
            "We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the new policy on this page.",
        },
        {
          heading: "Contact",
          content:
            "For any privacy-related questions, please contact us via:\n\n• Facebook: facebook.com/megtechn\n• Phone: +213 (0) XX XX XX XX",
        },
      ],
    },
    faq: {
      metaTitle: "Frequently Asked Questions | Megtech Store",
      metaDescription:
        "Find answers to common questions about Megtech products, delivery, and policies.",
      title: "Frequently Asked Questions",
      subtitle: "Everything you need to know about buying from Megtech.",
      items: [
        {
          question: "Are the products really tested before sale?",
          answer:
            "Yes, absolutely. Every single product we sell — GPUs, CPUs, laptops, and accessories — is rigorously tested before being listed. We verify that items are fully functional and match the condition described.",
        },
        {
          question: "Where do the products come from?",
          answer:
            "All our products are imported directly from Dubai, UAE. We source from trusted suppliers in the Dubai tech market, which allows us to offer premium quality at competitive prices.",
        },
        {
          question: "How does Cash on Delivery (COD) work?",
          answer:
            "With Cash on Delivery, you only pay when the product is physically delivered to your door. You can inspect the product before handing over payment. If the product doesn't match the description, you can refuse it on the spot.",
        },
        {
          question: "Do you deliver to my city?",
          answer:
            "We deliver to all 58 wilayas across Algeria. Delivery times vary by region: typically 1-2 days for Algiers, 2-4 days for other major cities, and 3-5 days for remote areas.",
        },
        {
          question: "What is your return and replacement policy?",
          answer:
            "If the product you receive does not match the description at time of sale, you are eligible for a return or replacement at no extra cost. Claims must be submitted within 48 hours of delivery with supporting photos or video. We do not offer a warranty beyond matching the described condition.",
        },
        {
          question: "Can I negotiate the price?",
          answer:
            "All prices are final as listed on the website. However, for bulk purchases or specific inquiries, feel free to contact us directly via Facebook for a custom quote.",
        },
        {
          question: "How do I contact Megtech?",
          answer:
            "The fastest way to reach us is via our Facebook page at facebook.com/megtechn. You can also call us directly at +213 (0) XX XX XX XX. We typically respond within a few hours.",
        },
        {
          question: "How long have you been in business?",
          answer:
            "Megtech has been operating in Algeria for over 5 years. We have served hundreds of customers across the country and pride ourselves on transparency, quality, and customer satisfaction.",
        },
      ],
    },
  },
  notFound: {
    title: "Page not found",
    description: "The page you are looking for does not exist.",
    backHome: "Go back home",
  },
}

export default en
