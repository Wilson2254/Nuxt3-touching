type BasketItem = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: Array<string>;
};

const localStorageBasket = JSON.parse(localStorage.getItem("testBasket")) || [];
const basketStorage: Array<BasketItem> = ref(localStorageBasket);

function addToBasket(product: BasketItem) {
  product.buyCount = 1;
  basketStorage.value.push(product);
  localStorage.setItem("testBasket", JSON.stringify(basketStorage.value));
}

function removeFromBasket(id: number) {
  const existingProductIndex = basketStorage.value.findIndex(
    (item) => id.value === item.id
  );
  basketStorage.value.splice(existingProductIndex, 1);
  localStorage.setItem("testBasket", JSON.stringify(basketStorage.value));
}

export default function useBasket() {
  return { basketStorage, addToBasket, removeFromBasket };
}
