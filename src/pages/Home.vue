<script setup>
import Cart from "../components/Cart.vue";
import { useCart } from "../stores/cart";
import { products } from "../data/mockdata";
import Item from "../components/Item.vue";
import Notification from "../components/Notification.vue"

const cart = useCart();
cart.setData();
</script>

<template>
  <main class="container-fluid">
    <Notification />
    <div class="cart-container">
      <Cart />
    </div>
    <blockquote>
      <article>
    <div class="items-container">

      <Item
      :product="product"
      width="200"
      height="200"
      v-for="product in products"
      :key="product.id"
      />
    </div>
  </article>
  </blockquote>
  </main>
</template>

<style scoped>
.cart-container {
  width: 350px;
}

.items-container {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
}
</style>

