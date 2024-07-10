<template>
  <div class="notification" :class="notification.type">
    <p>{{ notification.message }}</p>
  </div>
</template>

<script setup>
import { useNotification } from "../stores/notification";

const notification = useNotification()

</script>

<style scoped>
.notification {
  position: fixed;
  width: 300px;
  top: 20px;
  right: 20px;
  padding: 15px;
  border-radius: 5px;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;  
  animation: slide-in 0.3s ease-out;
}

.notification.info {
  background-color: lightblue;
}

.notification.success {
  background-color: lightgreen;
}

.notification.warning {
  background-color: rgb(236, 236, 162);
}


.close-btn {
  background: none;
  border: none;
  color: #fff;
  font-size: 1em;
  cursor: pointer;
  margin-left: 10px;
}

@keyframes slide-in {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}
</style>
