export type RestaurantType = {
  id: string;
  images: string[];
  isFrequentlyOrdered: boolean;
  logo: string;
  name: string;
  place: string;
  reviewCount: number;
  sampleMenus: MenuType[];
  star: number;
};

export interface MenuType {
  foodName: string;
  id: number;
  image: string;
  price: number;
  type: keyof typeof CatMenuType;
}

export const CatMenuType = ['all', 'drink', 'main', 'dessert'];

interface CatType {
  value: (typeof CatMenuType)[number];
  label: string;
}

export const catMenu: CatType[] = [
  {
    value: 'all',
    label: 'All Menu',
  },
  {
    value: 'main',
    label: 'Main',
  },
  {
    value: 'drink',
    label: 'Drink',
  },
  {
    value: 'dessert',
    label: 'Dessert',
  },
];

export interface RestoProps {
  id: number;
  name: string;
  logo: string;
}

export interface CartItemByRestoType {
  restaurantId: number;
  menus: CartItem[];
  subtotal: number;
}

export interface CartItem {
  id: number;
  menu: MenuType;
  quantity: number;
  total: number;
}

export interface InputCartItemType {
  restaurantId: number;
  menu: CartItem;
}

export interface RemoveCartItemType {
  RestoId: number;
  MenuId: number;
}
