<script setup lang="ts">
import cartStore from '@/store/cart';

const store = cartStore();
store.initCartList();

</script>
<template>
  <div class="cart">
    <div class="store-list">
      <div class="store-item" v-for="shopItem in store.shops" :key="shopItem.shopId">
        <p class="store-name">
          <em :class="shopItem.isSelected ? 'selected' : 'unselect'"></em>
          {{shopItem.shopName}}
        </p>
        <div class="cart-list">
          <div class="cart-item" v-for="cartItem in shopItem.carts" :key="cartItem.id">
            <div class="cart-selector">
              <em :class="cartItem.isSelected ? 'selected' : 'unselect'"></em>
            </div>
            <div class="cart-cover">
              <img
                :src="cartItem.coverImg"
                alt=""
              >
            </div>
            <div class="good-detail">
              <p class="title">{{cartItem.title}}</p>
              <div class="price-container">
                <span class="price">{{cartItem.price}}</span>
                <div class="count-container">
                  <span class="minus">-</span>
                  <span class="count">{{cartItem.count}}</span>
                  <span class="plus">+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>
<style lang="scss" scoped>
@import "../../assets/styles/mixins.scss";

.cart {
  background: #F2F3F6;
  min-height: 100vh;
}

.store-list {
  background: #fff;
  border-radius: 16px;
  width: 710px;
  margin: 0 auto;

  & + .store-list {
    margin-top: 20px;
  }
}

.store-name {
  color: #242629;
  font-weight: bold;
  height: 90px;
  padding-left: 5px;
  display: flex;
  align-items: center;

  em {
    margin-right: 5px;
  }
}

.cart-item {
  height: 220px;
  padding-right: 20px;
}

.selected,
.unselect {
  display: inline-block;
  width: 66px;
  height: 66px;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: 0 0;
}

.selected {
  background-image: url('./images/selected.png');
}
.unselect {
  background-image: url('./images/unselect.png');
}

.cart-item {
  display: flex;
}

.cart-selector {
  width: 66px;
  margin: 0 5px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
}

.cart-cover {
  width: 180px;
  height: 180px;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
  }
}

.good-detail {
  margin-left: 20px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .title {
    @include multi-line();
    font-size: 26px;
    line-height: 32px;
    color: #242629;
  }

  .price-container {
    display: flex;
    justify-content: space-between;
    .price {
      color: #FF5A5A;
      font-weight: bold;
      &:before {
        content: '¥';
      }
    }
  }
  .count-container {
    display: flex;
    border: 1px solid #ddd;
    width: 161px;
    height: 44px;
    text-align: center;

    .minus,
    .plus {
      flex-basis: 45px;
      font-weight: bold;
      font-size: 28px;
      line-height: 42px;
    }

    .count {
      flex: 1;
    }
  }
}
</style>
