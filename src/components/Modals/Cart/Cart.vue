<template>
  <span>
    <i class="cart icon mb-2"><span class="color-second">0</span></i>
  </span>
</template>
<script>
import DefaultCart from './Cart'
export default {
  name: 'cart',
  extends: DefaultCart
}
</script>
<style>
.cart::before {
  font-size: 22px;
  padding: 12px;
}

.cart {
  flex: 0 0 auto;
  color: rgba(0, 0, 0, 0.54);
  padding: 12px;
  overflow: visible;
  font-size: 1.5rem;
  text-align: center;
  transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 50%;
}

.cart:hover {
  cursor: pointer;
}

.cart:hover::before,
.cart:hover::after {
  border-radius: 50%;
  background-color: rgba(33%, 33%, 33%, 0.2) !important;
}

</style>
