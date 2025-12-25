
// =============================================================================
// ⚙️ Fichier de paramètres principal du magasin
// =============================================================================

const STORE_CONFIG = {
  "PRODUCTS": {},
  "DELIVERY_PRICES": {},
  "FREE_DELIVERY": {
    "desk": {
      "enabled": false,
      "minQuantity": null,
      "wilayas": []
    },
    "home": {
      "enabled": false,
      "minQuantity": null,
      "wilayas": []
    },
    "freeDeliveryProducts": []
  },
  "DISCOUNTS": {
    "enableQuantityDiscount": false,
    "minQuantityForDiscount": 2,
    "discountPerItem": 300,
    "discountScope": "all",
    "discountProducts": [],
    "enablePromotionalDiscount": false,
    "promotionalDiscountPercent": 20,
    "promotionalDiscountedPrice": 0,
    "promoDiscountScope": "all",
    "promoDiscountProducts": []
  },
  "STORE_INFO": {
    "name": "Boutique Enfants",
    "tagline": "Boutique de vêtements luxueux",
    "phoneNumbers": [
      "0671466489",
      "0551102155"
    ],
    "logo": "",
    "facebookUrl": "",
    "instagramUrl": "",
    "messengerUrl": "",
    "viberNumber": "",
    "whatsappNumber": "",
    "whatsappUrl": "",
    "tiktokUrl": ""
  },
  "GOOGLE_SHEETS": {
    "url": "",
    "description": "",
    "autoUpdate": false
  },
  "AVAILABLE_COLORS": [
    "Blanc",
    "Noir",
    "Rouge",
    "Bleu"
  ],
  "AVAILABLE_SIZES": [
    "S",
    "M",
    "L",
    "XL",
    "XXL",
    "A"
  ],
  "SIZE_GUIDE": {
    "XS": {
      "heightFrom": 150,
      "heightTo": 160,
      "weightFrom": 40,
      "weightTo": 55,
      "enabled": true
    },
    "S": {
      "heightFrom": 160,
      "heightTo": 175,
      "weightFrom": 50,
      "weightTo": 65,
      "enabled": true
    },
    "M": {
      "heightFrom": 170,
      "heightTo": 180,
      "weightFrom": 65,
      "weightTo": 80,
      "enabled": true
    },
    "L": {
      "heightFrom": 180,
      "heightTo": 195,
      "weightFrom": 70,
      "weightTo": 90,
      "enabled": true
    },
    "XL": {
      "heightFrom": 185,
      "heightTo": 200,
      "weightFrom": 85,
      "weightTo": 110,
      "enabled": true
    }
  },
  "POINTS_SYSTEM": {
    "currentPoints": 416,
    "remainingDays": 19,
    "lastReset": "2025-12-14T16:47:22.307Z",
    "planType": "gratuit",
    "monthlyPoints": 500,
    "resetPeriod": 30,
    "currentMonthDays": 30,
    "lastUpdated": "2025-12-25T18:05:35.464Z"
  },
  "PIXEL_CODES": {
    "facebook": {
      "enabled": false,
      "pixelId": "",
      "events": {
        "pageView": true,
        "addToCart": true,
        "purchase": true,
        "initiateCheckout": true,
        "viewContent": true
      }
    },
    "tiktok": {
      "enabled": false,
      "pixelId": "",
      "events": {
        "pageView": true,
        "addToCart": true,
        "purchase": true,
        "initiateCheckout": true,
        "viewContent": true
      }
    }
  }
};

// =============================================================================
// 🛍️ Fonction de chargement des produits
// =============================================================================

function loadProductsConfig() {
    return STORE_CONFIG.PRODUCTS;
}

// =============================================================================
// 🚚 Fonction de chargement des prix de livraison
// =============================================================================

function loadDeliveryConfig() {
    return {
        deliveryPrices: STORE_CONFIG.DELIVERY_PRICES || {},
        freeDelivery: STORE_CONFIG.FREE_DELIVERY || {},
        freeDeliveryProducts: STORE_CONFIG.FREE_DELIVERY.freeDeliveryProducts || []
    };
}

// =============================================================================
// 💰 Fonction de chargement des paramètres de réduction
// =============================================================================

function loadDiscountConfig() {
    return STORE_CONFIG.DISCOUNTS || {};
}

// =============================================================================
// 🏪 Fonction de chargement des informations du magasin
// =============================================================================

function loadStoreInfo() {
    return STORE_CONFIG.STORE_INFO || {};
}

// =============================================================================
// 🎨 Fonction de chargement des couleurs et tailles
// =============================================================================

function loadSizesColorsConfig() {
    return {
        availableColors: STORE_CONFIG.AVAILABLE_COLORS || [],
        availableSizes: STORE_CONFIG.AVAILABLE_SIZES || [],
        sizeGuide: STORE_CONFIG.SIZE_GUIDE || {}
    };
}

// =============================================================================
// 📊 Fonction de chargement des paramètres de pixel
// =============================================================================

function loadPixelConfig() {
    return STORE_CONFIG.PIXEL_CODES || {};
}

// =============================================================================
// 📊 Fonction de chargement de tous les paramètres
// =============================================================================

function loadAllConfig() {
    return STORE_CONFIG;
}

// =============================================================================
// 🔄 Fonction de mise à jour des paramètres
// =============================================================================

function updateConfig(newConfig) {
    for (const key in newConfig) {
        if (newConfig.hasOwnProperty(key)) {
            STORE_CONFIG[key] = newConfig[key];
        }
    }
    return STORE_CONFIG;
}
