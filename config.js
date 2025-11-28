const STORE_CONFIG = {
  "PRODUCTS": {},
  "DELIVERY_PRICES": {},
  "FREE_DELIVERY": {
    "desk": {
      "enabled": false,
      "minAmount": 5000,
      "wilayas": []
    },
    "home": {
      "enabled": false,
      "minAmount": 7000,
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
    "name": "متجر الأطفال",
    "storeIcon": "👑",
    "storeTitle": "👑 أحدث موديلات الأطفال",
    "tagline": "متجر أفخم الملابس",
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
    "whatsappUrl": ""
  },
  "GOOGLE_SHEETS": {
    "url": "",
    "description": "",
    "autoUpdate": false
  },
  "AVAILABLE_COLORS": [
    "أبيض",
    "أسود",
    "أحمر",
    "أزرق"
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
    },
    "XXL": {
      "heightFrom": 190,
      "heightTo": 205,
      "weightFrom": 95,
      "weightTo": 120,
      "enabled": true
    },
    "A": {
      "heightFrom": 160,
      "heightTo": 200,
      "weightFrom": 50,
      "weightTo": 120,
      "enabled": true
    }
  }
};