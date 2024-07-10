<template>
  <div class="discount-code">
    <input
      type="text"
      name="discount"
      v-model="discount"
      placeholder="Enter discount code"
    />
    <button @click="setDiscount">Apply</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useCart } from "../stores/cart";
import { useNotification } from "../stores/notification";

const msg = ref("");
const discount = ref("");
const notification = useNotification();

const cart = useCart();
function setDiscount() {
  if (cart.data.discount_status == 1) {
    notification.show("discount already applied to cart", "info");
  } else {
    notification.show("20% discount applied successfully!", "success");
  }
  msg.value = cart.setDiscount(discount.value);
}
</script>
<style scoped>
.discount-code {
  width: 210px;
  font: medium;
}
.discount-code input{
  font-size: medium;
}

</style>
