type BasketItem = {
  title: string;
  id: number;
};

const localStorageBasket = JSON.parse(localStorage.getItem("testBasket")) || [];
const basketStorage: Array<BasketItem> = ref(localStorageBasket);

function addToBasket(product: BasketItem) {
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
