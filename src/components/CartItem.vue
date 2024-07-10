<template>
    <div class="container">
      <div class="image-wrapper">
        <img :src="product.image" :width="width" :height="height" alt="" />
      </div>
      <br>
      <div class="actions">
        <a class="action-button" @click="removeItem(product)"> - </a>
        <small>{{ product.quantity }}</small>
        <a class="action-button" @click="increase_quantity(product)">+</a>
      </div>
      <br>      
    </div>
  </template>
  
  <script setup>
  import { useCart } from "../stores/cart";
  import { useNotification } from "../stores/notification";

  const notification = useNotification();
  const cart = useCart();
  
  const props = defineProps({
    product: {
      type: Object,
      required: true
    },
    width: {
      type: [String, Number],
      default: null
    },
    height: {
      type: [String, Number],
      default: null
    }
  });
  
  function removeItem(item) {    
    cart.remove(item);
    notification.show("Item removed from cart successfully!","success")
  }
  
  function increase_quantity(item) {    
    cart.increase_quantity(item);
    notification.show("Item added to cart successfully!","success")
  }
  </script>
  
  <style scoped>
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  .image-wrapper {
    display: flex;
    flex-direction: column;
  }
  
  .actions {
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 0.5em;
  }
  
  .action-button {
    cursor: pointer;
  }
  
  small {
    z-index: 99;
  }
  </style>
  