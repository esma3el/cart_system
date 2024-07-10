<template>
  <article class="product-card">
    <div class="product-details">
      <img :src="product.image" :width="width" :height="height" alt="" />
      <div class="product-details1">
        <small>{{ product.title }}</small>
        <small>Price : ${{ product.price }}</small>
        <button class="add-to-cart" @click="addToCart(product)">
          <svg
            class="cart-icon"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="{1.5}"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
          Add To Cart
        </button>
      </div>
    </div>
  </article>
</template>

<script setup>
import { useCart } from "../stores/cart";
import { useNotification } from "../stores/notification";

const cart = useCart();
const notification = useNotification();

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
  width: {
    type: [String, Number],
    default: null,
  },
  height: {
    type: [String, Number],
    default: null,
  },
});

function addToCart(item) {
  cart.add(item);
  notification.show("Item added to cart successfully!", "success");
}
</script>

<style scoped>
.product-card {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  max-width: auto;
  min-width: auto;
  width: 500px;
  height: 300px;
  overflow: hidden;
}

.product-details {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  gap: 3em;
}
.product-details1 {
  width: max-content;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2em;
}

.add-to-cart {
  cursor: pointer;
}
.cart-icon {
  width: 20px;
  height: 20px;
}

button {
  width: 140px;
  height: 60px;
  padding: 1em;
  font-size: 15px;
}
img {
  min-height: 300px;
  max-height: fit-content;
}
</style>
