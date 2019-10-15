<template>
  <ul class="cart-list">
    {{ message }}
    <template v-if="stackedCardItems.length">
      <div class="item" v-for="(item, index) in stackedCardItems" :key="index">
          <div class="main-content flex-row col-5">
            <span class="item-title">{{ item.name }}</span>
            <p class="price">{{checkCurrentPrice[item.name][0].price}} kr/st</p>
          </div>
          <div class="cart-actions flex-row-end col-7">
            <button class="sub-action" @click="removeItem(item)">-</button>
                <span class="mx-2">{{ calculateNrOfOccursnses(item.name).length }}</span>
            <button class="sub-action" @click="addItem(item)">+</button>
          </div>
      </div>
      <b-col class="mt-2 px-5">
        <b-row>
          <div class="flex-row col-5">Your assets:</div>
          <div class="flex-row-reverse col-7">&nbsp; {{personalAssets}}</div>
        </b-row>
        <b-row>
          <div class="flex-row col-5">Total cost:</div>
          <div class="flex-row-reverse col-7">-{{checkSum()}}</div>
        </b-row>
        <b-row v-bind:class="`${className} mt-2`">
          <div class="flex-row col-5">Assets left:</div>
          <div class="flex-row-reverse col-7">&nbsp; {{calculateassetsLeft}}kr</div>
        </b-row>
      </b-col>
      <sui-divider section />
      <b-button size="sm" variant="danger" class="mt-2 no-br" @click="clearItems">
        Remove all items
      </b-button>
    </template>
    <template v-else>
      <p>Cart is empty.</p>
    </template>
  </ul>
</template>
<script>
import DefaultList from './List'

export default {
  name: 'list',
  extends: DefaultList,

  props: {
    cartItems: {
      type: Array,
      default: () => [],
    },

    message: {
      type: String,
      default: '',
    },

    items: {
      type: Array,
      default: () => [],
    },

    update: {
      type: Function,
      default: () => null,
    },

    personal: {
      type: Object,
      default: () => {}
    },
  },
}
</script>
<style lang="css" src="@/assets/style/css/scoped/list.css" scoped></style>
