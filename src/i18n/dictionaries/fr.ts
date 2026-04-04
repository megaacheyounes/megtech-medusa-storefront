import type { Dictionary } from "../types"

const fr: Dictionary = {
  locale: "fr",
  dir: "ltr",
  common: {
    shopNow: "Acheter maintenant",
    browseCategories: "Parcourir les catégories",
    viewAll: "Voir tout",
    viewProduct: "Voir le produit",
    addToCart: "Ajouter au panier",
    loading: "Chargement...",
    back: "Retour",
    backToCart: "Retour au panier",
    account: "Mon compte",
    cart: "Panier",
    menu: "Menu",
    language: "Langue",
    country: "Pays",
    currency: "Devise",
    copyright: `© ${new Date().getFullYear()} Megtech. Tous droits réservés.`,
    close: "Fermer",
    search: "Rechercher",
    home: "Accueil",
    store: "Boutique",
    tested: "Testé",
  },
  nav: {
    storeName: "Megtech Store",
    account: "Mon compte",
    cart: "Panier",
    menu: "Menu",
    home: "Accueil",
    store: "Boutique",
    cartLabel: "Panier",
  },
  home: {
    hero: {
      badge: "Paiement à la livraison • Livraison nationale • Aucune surprise",
      headline: "Tech Premium.",
      headlineHighlight: "Testé. Fiable.",
      subtext:
        "Importé de Dubaï. Entièrement testé. Livré dans toute l'Algérie. Améliorez votre setup sans payer le prix fort.",
      primaryCTA: "Acheter maintenant",
      secondaryCTA: "Parcourir les catégories",
    },
    trustBar: {
      returns: "Retours et remplacement sans tracas",
      tested: "Chaque produit testé",
      cod: "Paiement à la livraison",
      delivery: "Livraison dans toute l'Algérie",
    },
    brands: {
      sectionTitle: "Les grandes marques que nous proposons",
    },
    categories: {
      sectionTitle: "Acheter par catégorie",
      sectionSubtitle: "Explorez notre sélection de matériel premium.",
      browseAll: "Voir tous les produits",
      gpus: {
        title: "Cartes graphiques (GPU)",
        description: "La puissance graphique de nouvelle génération pour des performances ultimes.",
      },
      laptops: {
        title: "Ordinateurs portables gaming",
        description: "Des machines portables fines, légères et puissantes.",
      },
      accessories: {
        title: "Accessoires gaming",
        description: "Casques, souris et claviers premium pour compléter votre setup.",
      },
    },
    latestArrivals: {
      sectionTitle: "Dernières arrivées",
      viewAll: "Voir tous les produits",
    },
    whyMegtech: {
      sectionTitle: "Pourquoi choisir Megtech ?",
      sectionSubtitle:
        "Nous nous engageons à vous fournir de la tech d'occasion premium en toute transparence.",
      features: [
        {
          title: "Plus de 5 ans d'expérience",
          description:
            "Un vendeur de confiance dans la communauté tech algérienne avec des centaines de clients satisfaits.",
        },
        {
          title: "Importé de Dubaï",
          description:
            "Nous approvisionnons notre électronique directement sur les marchés premium pour garantir la qualité.",
        },
        {
          title: "100% testé avant vente",
          description:
            "Chaque GPU, CPU et accessoire est rigoureusement testé pour garantir ses performances.",
        },
        {
          title: "Prix imbattables",
          description:
            "Nous offrons des prix bien meilleurs que les standards du marché local.",
        },
        {
          title: "Paiement à la livraison (COD)",
          description:
            "Vous payez uniquement à la réception et après inspection de votre produit. Zéro risque.",
        },
      ],
    },
    socialProof: {
      yearsExp: { value: "5+", label: "Ans d'expérience" },
      customers: { value: "200+", label: "Clients satisfaits" },
      coverage: { value: "58 Wilayas", label: "Couverture" },
    },
    testimonials: {
      sectionTitle: "Ce que disent nos clients",
      reviews: [
        {
          name: "Amine B.",
          location: "Alger",
          text: "La livraison était rapide et le GPU était parfaitement emballé. Installé immédiatement et il fonctionne exactement comme décrit. Très recommandé !",
        },
        {
          name: "Yacine T.",
          location: "Oran",
          text: "J'ai eu une RTX 3070 à un prix introuvable dans les boutiques locales. La communication sur Facebook était exemplaire et très transparente.",
        },
        {
          name: "Mehdi K.",
          location: "Constantine",
          text: "J'étais sceptique sur l'achat d'électronique 'd'occasion', mais Megtech m'a totalement changé d'avis. Produit reçu en parfait état, paiement à la porte. Aucune surprise.",
        },
      ],
    },
  },
  footer: {
    description:
      "Tech d'occasion premium, importée directement de Dubaï. Entièrement testée, garantie qualité, et livrée partout en Algérie.",
    facebookPage: "Page Facebook",
    phone: "+213 (0) XX XX XX XX",
    address: "Alger, Algérie",
    categoriesHeading: "Catégories",
    collectionsHeading: "Collections",
    helpHeading: "Aide & Politiques",
    returnsLink: "Politique de retour / remplacement",
    faqLink: "FAQ",
    contactLink: "Nous contacter",
    copyright: `© ${new Date().getFullYear()} Megtech. Tous droits réservés.`,
    madeWith: "Fait avec ❤️ en Algérie",
  },
  store: {
    pageTitle: "Boutique",
    pageDescription: "Explorez tous nos produits.",
    allProducts: "Tous les produits",
    sortBy: "Trier par",
    sortOptions: {
      latest: "Dernières arrivées",
      priceLow: "Prix : Croissant",
      priceHigh: "Prix : Décroissant",
    },
    noProducts: "Aucun produit trouvé.",
    filterBy: "Filtrer",
    showing: "Affichage",
    loadMore: "Charger plus",
  },
  product: {
    addToCart: "Ajouter au panier",
    outOfStock: "Rupture de stock",
    selectVariant: "Sélectionner une variante",
    quantity: "Quantité",
    description: "Description",
    details: "Détails",
    shipping: "Livraison",
    relatedProducts: "Produits similaires",
    testedBadge: "Testé",
    viewProduct: "Voir le produit",
    from: "À partir de",
  },
  cart: {
    title: "Panier",
    empty: "Votre panier est vide.",
    continueShopping: "Continuer les achats",
    subtotal: "Sous-total",
    total: "Total",
    checkout: "Passer à la caisse",
    remove: "Supprimer",
    quantity: "Qté",
    editCart: "Modifier le panier",
    summary: "Récapitulatif de commande",
    discount: "Réduction",
    taxes: "Taxes",
    shipping: "Livraison",
  },
  checkout: {
    title: "Paiement",
    backToCart: "Retour au panier",
    stepAddress: "Adresse",
    stepDelivery: "Livraison",
    stepPayment: "Paiement",
    stepReview: "Vérification",
    firstName: "Prénom",
    lastName: "Nom",
    email: "Email",
    phone: "Téléphone",
    address: "Adresse",
    city: "Ville",
    postalCode: "Code postal",
    country: "Pays",
    province: "Wilaya",
    company: "Entreprise (optionnel)",
    continueToDelivery: "Continuer vers la livraison",
    continueToPayment: "Continuer vers le paiement",
    continueToReview: "Continuer vers la vérification",
    placeOrder: "Passer la commande",
    orderConfirmed: "Commande confirmée !",
    thankYou: "Merci pour votre commande.",
    editAddress: "Modifier l'adresse",
    deliveryMethod: "Mode de livraison",
    paymentMethod: "Mode de paiement",
    orderSummary: "Récapitulatif",
    discountCode: "Code de réduction",
    applyDiscount: "Appliquer",
    codLabel: "Paiement à la livraison",
    codDescription: "Payez en espèces à la réception de votre commande.",
  },
  account: {
    overview: "Aperçu",
    profile: "Profil",
    addresses: "Adresses",
    orders: "Commandes",
    logOut: "Se déconnecter",
    logIn: "Se connecter",
    register: "Créer un compte",
    welcomeBack: "Bon retour",
    email: "Adresse email",
    password: "Mot de passe",
    firstName: "Prénom",
    lastName: "Nom",
    phone: "Téléphone",
    rememberMe: "Se souvenir de moi",
    forgotPassword: "Mot de passe oublié ?",
    noAccount: "Pas encore de compte ?",
    hasAccount: "Déjà un compte ?",
    createAccount: "Créer un compte",
    signIn: "Se connecter",
    gotQuestions: "Des questions ?",
    customerService: "Service client",
    memberTitle: "Devenez membre Megtech Store",
    memberDesc:
      "Créez votre profil Megtech Store et accédez à une expérience d'achat améliorée.",
    agreeToTerms: "En créant un compte, vous acceptez les",
    privacyPolicy: "Politique de confidentialité",
    termsOfUse: "Conditions d'utilisation",
    noOrders: "Aucune commande pour l'instant.",
    orderId: "Commande #",
    orderDate: "Date",
    orderStatus: "Statut",
    orderTotal: "Total",
    viewOrder: "Voir la commande",
    editProfile: "Modifier le profil",
    saveChanges: "Enregistrer les modifications",
    profileUpdated: "Profil mis à jour.",
  },
  legal: {
    returns: {
      metaTitle: "Politique de retour et remplacement | Megtech Store",
      metaDescription:
        "Découvrez la politique de retour et de remplacement de Megtech pour les produits électroniques d'occasion.",
      title: "Politique de retour et remplacement",
      sections: [
        {
          heading: "Notre engagement",
          content:
            "Chez Megtech, nous nous engageons à vous fournir des produits qui correspondent exactement à leur description. Si vous recevez un produit qui ne correspond pas à la description fournie lors de la vente, vous avez droit à un retour ou un remplacement.",
        },
        {
          heading: "Conditions de retour ou remplacement",
          content:
            "Vous pouvez demander un retour ou un remplacement si :\n\n• Le produit ne correspond pas à la condition décrite (ex : décrit comme 'testé et fonctionnel' mais reçu non fonctionnel).\n• Le produit est physiquement différent de ce qui a été commandé (mauvais modèle, mauvaises spécifications).\n• Le produit est endommagé pendant la livraison.\n\nToutes les réclamations doivent être soumises dans les 48 heures suivant la réception du produit via notre page Facebook ou par téléphone.",
        },
        {
          heading: "Comment faire une demande",
          content:
            "Pour initier un retour ou un remplacement :\n\n1. Contactez-nous via notre page Facebook (facebook.com/megtechn) ou par téléphone dès que le problème est identifié.\n2. Fournissez des photos ou vidéos claires documentant le problème.\n3. Notre équipe examinera votre réclamation dans les 24 heures.\n4. Une fois approuvée, nous coordonnerons la collecte et le remplacement sans frais supplémentaires.",
        },
        {
          heading: "Notes importantes",
          content:
            "• Cette politique couvre les cas où le produit ne correspond pas à sa description. Elle ne couvre pas les dommages causés par le client après livraison.\n• Tous nos produits sont testés avant expédition.\n• Aucune garantie séparée n'est offerte. Notre garantie est que le produit correspond à la condition décrite au moment de la vente.\n• Les commandes à la livraison (COD) peuvent être refusées à la porte si le produit ne correspond visiblement pas à la description avant paiement.",
        },
        {
          heading: "Nous contacter",
          content:
            "Pour toute demande de retour ou de remplacement, contactez-nous via :\n\n• Facebook : facebook.com/megtechn\n• Téléphone : +213 (0) XX XX XX XX",
        },
      ],
    },
    privacy: {
      metaTitle: "Politique de confidentialité | Megtech Store",
      metaDescription:
        "Comment Megtech collecte, utilise et protège vos informations personnelles.",
      title: "Politique de confidentialité",
      sections: [
        {
          heading: "Introduction",
          content:
            "Megtech ('nous') s'engage à protéger vos informations personnelles et votre droit à la vie privée. Cette politique explique comment nous collectons, utilisons et protégeons vos informations lorsque vous visitez notre site ou effectuez un achat.",
        },
        {
          heading: "Informations collectées",
          content:
            "Nous collectons les informations que vous nous fournissez directement, notamment :\n\n• Nom et coordonnées (email, téléphone, adresse)\n• Historique des commandes\n• Communications envoyées via Facebook ou téléphone\n\nNous ne collectons pas de données de carte bancaire. Tous les paiements se font à la livraison.",
        },
        {
          heading: "Utilisation des informations",
          content:
            "Nous utilisons les informations collectées pour :\n\n• Traiter et exécuter vos commandes\n• Envoyer des confirmations et mises à jour de commande\n• Répondre à vos demandes\n• Améliorer notre site et nos services\n• Respecter nos obligations légales",
        },
        {
          heading: "Partage des informations",
          content:
            "Nous ne vendons pas, n'échangeons pas et ne louons pas vos informations personnelles à des tiers. Nous pouvons partager vos informations avec des partenaires de livraison uniquement pour exécuter votre commande.",
        },
        {
          heading: "Sécurité des données",
          content:
            "Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos informations personnelles contre tout accès non autorisé, perte ou abus.",
        },
        {
          heading: "Vos droits",
          content:
            "Vous avez le droit de :\n\n• Accéder aux informations personnelles que nous détenons\n• Demander la correction d'informations inexactes\n• Demander la suppression de vos données\n• Retirer votre consentement à tout moment\n\nPour exercer ces droits, contactez-nous via Facebook ou téléphone.",
        },
        {
          heading: "Modifications de cette politique",
          content:
            "Nous pouvons mettre à jour cette Politique de confidentialité ponctuellement. Nous vous informerons des changements importants en publiant la nouvelle politique sur cette page.",
        },
        {
          heading: "Contact",
          content:
            "Pour toute question relative à la confidentialité, contactez-nous via :\n\n• Facebook : facebook.com/megtechn\n• Téléphone : +213 (0) XX XX XX XX",
        },
      ],
    },
    faq: {
      metaTitle: "Foire aux questions | Megtech Store",
      metaDescription:
        "Trouvez des réponses aux questions fréquentes sur les produits, la livraison et les politiques de Megtech.",
      title: "Foire aux questions",
      subtitle: "Tout ce que vous devez savoir pour acheter chez Megtech.",
      items: [
        {
          question: "Les produits sont-ils vraiment testés avant la vente ?",
          answer:
            "Oui, absolument. Chaque produit que nous vendons — GPU, CPU, ordinateurs portables et accessoires — est rigoureusement testé avant d'être mis en vente. Nous vérifions que les articles sont entièrement fonctionnels et correspondent à la condition décrite.",
        },
        {
          question: "D'où viennent les produits ?",
          answer:
            "Tous nos produits sont importés directement de Dubaï, aux Émirats arabes unis. Nous nous approvisionnons auprès de fournisseurs de confiance sur le marché tech de Dubaï, ce qui nous permet d'offrir une qualité premium à des prix compétitifs.",
        },
        {
          question: "Comment fonctionne le paiement à la livraison (COD) ?",
          answer:
            "Avec le paiement à la livraison, vous ne payez que lorsque le produit est livré à votre porte. Vous pouvez inspecter le produit avant de payer. Si le produit ne correspond pas à la description, vous pouvez le refuser sur place.",
        },
        {
          question: "Livrez-vous dans ma ville ?",
          answer:
            "Nous livrons dans les 58 wilayas d'Algérie. Les délais varient selon la région : généralement 1-2 jours pour Alger, 2-4 jours pour les autres grandes villes, et 3-5 jours pour les zones éloignées.",
        },
        {
          question: "Quelle est votre politique de retour et remplacement ?",
          answer:
            "Si le produit reçu ne correspond pas à la description au moment de la vente, vous avez droit à un retour ou remplacement sans frais supplémentaires. Les réclamations doivent être soumises dans les 48 heures suivant la livraison avec photos ou vidéo à l'appui.",
        },
        {
          question: "Peut-on négocier le prix ?",
          answer:
            "Tous les prix sont fixes tels qu'affichés sur le site. Cependant, pour des achats en gros ou des demandes spécifiques, n'hésitez pas à nous contacter directement via Facebook pour un devis personnalisé.",
        },
        {
          question: "Comment contacter Megtech ?",
          answer:
            "Le moyen le plus rapide est notre page Facebook facebook.com/megtechn. Vous pouvez également nous appeler au +213 (0) XX XX XX XX. Nous répondons généralement dans les quelques heures.",
        },
        {
          question: "Depuis combien de temps êtes-vous en activité ?",
          answer:
            "Megtech opère en Algérie depuis plus de 5 ans. Nous avons servi des centaines de clients à travers le pays et nous nous engageons sur la transparence, la qualité et la satisfaction client.",
        },
      ],
    },
  },
  notFound: {
    title: "Page introuvable",
    description: "La page que vous recherchez n'existe pas.",
    backHome: "Retour à l'accueil",
  },
}

export default fr
