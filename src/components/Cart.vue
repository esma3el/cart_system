<template>
  <div class="cart-nav">
    <details class="dropdown">
      <summary>
        <div class="cart">
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
          <div style="display: flex; font-size: medium">
            <mark v-if="cart.data.discount_status == 1"><del>${{ cart.data.total_price }}</del></mark>
            <mark v-else>${{ cart.data.total_price }}</mark>
            <mark v-if="cart.data.discount_status == 1">${{ cart.get_total_price_after_discount() }}</mark>
          </div>
        </div>
      </summary>
      <ul class="cart-body">
        <li class="secondary" v-if="cart.data.cart_items.length > 0">
          <div class="cart-summary">
            <small
              ><a class="clear-cart" @click="clear_all()">Clear Cart</a></small
            >
          </div>          
        </li>
        <li v-else>The Cart Is Empty</li>
        <li
          class="cart-item"
          v-for="product in cart.data.cart_items"
          :key="product.id"
        >
          <CartItem :product="product" width="72" height="72" />
        </li>   
        <li class="discount-body" v-if="cart.data.cart_items.length > 0">
          <Discount />
        </li>             
      </ul>
    </details>
    &nbsp; 20% Dicount Code : NX100
  </div>
</template>

<script setup>
import { useCart } from "../stores/cart";
import CartItem from "./CartItem.vue";
import Discount from "./Discount.vue";
import { useNotification } from "../stores/notification";


const notification = useNotification();
const cart = useCart();
cart.setData();

function clear_all() {
  cart.clear_all();
  notification.show("Cart cleared successfully!.","success")
}
</script>

<style scoped>
.dropdown summary {
  cursor: pointer;
}

.cart-summary {
  display: flex;
  justify-content: space-between;
}

.clear-cart {
  cursor: pointer;
  background-color: #0172ad;
  color: white;
}

.cart {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2em;
}
.cart-icon {
  width: 24px;
  height: 24px;
  color: darkgray;
}
.cart-body{
  max-height: 600px;
  overflow-y: scroll;
}
</style>
