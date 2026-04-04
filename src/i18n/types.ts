export type Locale = "en" | "fr" | "ar"
export const locales: Locale[] = ["en", "fr", "ar"]
export const defaultLocale: Locale = "en"

export type RTLDir = "ltr" | "rtl"

export interface Dictionary {
  locale: Locale
  dir: RTLDir
  common: {
    shopNow: string
    browseCategories: string
    viewAll: string
    viewProduct: string
    addToCart: string
    loading: string
    back: string
    backToCart: string
    account: string
    cart: string
    menu: string
    language: string
    country: string
    currency: string
    copyright: string
    close: string
    search: string
    home: string
    store: string
    tested: string
  }
  nav: {
    storeName: string
    account: string
    cart: string
    menu: string
    home: string
    store: string
    cartLabel: string // e.g. "Cart" — count appended by component
  }
  home: {
    hero: {
      badge: string
      headline: string
      headlineHighlight: string
      subtext: string
      primaryCTA: string
      secondaryCTA: string
    }
    trustBar: {
      returns: string
      tested: string
      cod: string
      delivery: string
    }
    brands: {
      sectionTitle: string
    }
    categories: {
      sectionTitle: string
      sectionSubtitle: string
      browseAll: string
      gpus: { title: string; description: string }
      laptops: { title: string; description: string }
      accessories: { title: string; description: string }
    }
    latestArrivals: {
      sectionTitle: string
      viewAll: string
    }
    whyMegtech: {
      sectionTitle: string
      sectionSubtitle: string
      features: Array<{ title: string; description: string }>
    }
    socialProof: {
      yearsExp: { value: string; label: string }
      customers: { value: string; label: string }
      coverage: { value: string; label: string }
    }
    testimonials: {
      sectionTitle: string
      reviews: Array<{ name: string; location: string; text: string }>
    }
  }
  footer: {
    description: string
    facebookPage: string
    phone: string
    address: string
    categoriesHeading: string
    collectionsHeading: string
    helpHeading: string
    returnsLink: string
    faqLink: string
    contactLink: string
    copyright: string
    madeWith: string
  }
  store: {
    pageTitle: string
    pageDescription: string
    allProducts: string
    sortBy: string
    sortOptions: {
      latest: string
      priceLow: string
      priceHigh: string
    }
    noProducts: string
    filterBy: string
    showing: string
    loadMore: string
  }
  product: {
    addToCart: string
    outOfStock: string
    selectVariant: string
    quantity: string
    description: string
    details: string
    shipping: string
    relatedProducts: string
    testedBadge: string
    viewProduct: string
    from: string
  }
  cart: {
    title: string
    empty: string
    continueShopping: string
    subtotal: string
    total: string
    checkout: string
    remove: string
    quantity: string
    editCart: string
    summary: string
    discount: string
    taxes: string
    shipping: string
  }
  checkout: {
    title: string
    backToCart: string
    stepAddress: string
    stepDelivery: string
    stepPayment: string
    stepReview: string
    firstName: string
    lastName: string
    email: string
    phone: string
    address: string
    city: string
    postalCode: string
    country: string
    province: string
    company: string
    continueToDelivery: string
    continueToPayment: string
    continueToReview: string
    placeOrder: string
    orderConfirmed: string
    thankYou: string
    editAddress: string
    deliveryMethod: string
    paymentMethod: string
    orderSummary: string
    discountCode: string
    applyDiscount: string
    codLabel: string
    codDescription: string
  }
  account: {
    overview: string
    profile: string
    addresses: string
    orders: string
    logOut: string
    logIn: string
    register: string
    welcomeBack: string
    email: string
    password: string
    firstName: string
    lastName: string
    phone: string
    rememberMe: string
    forgotPassword: string
    noAccount: string
    hasAccount: string
    createAccount: string
    signIn: string
    gotQuestions: string
    customerService: string
    memberTitle: string
    memberDesc: string
    agreeToTerms: string
    privacyPolicy: string
    termsOfUse: string
    noOrders: string
    orderId: string
    orderDate: string
    orderStatus: string
    orderTotal: string
    viewOrder: string
    editProfile: string
    saveChanges: string
    profileUpdated: string
  }
  legal: {
    returns: {
      metaTitle: string
      metaDescription: string
      title: string
      sections: Array<{ heading: string; content: string }>
    }
    privacy: {
      metaTitle: string
      metaDescription: string
      title: string
      sections: Array<{ heading: string; content: string }>
    }
    faq: {
      metaTitle: string
      metaDescription: string
      title: string
      subtitle: string
      items: Array<{ question: string; answer: string }>
    }
  }
  notFound: {
    title: string
    description: string
    backHome: string
  }
}
