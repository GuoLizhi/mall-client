<template>
  <div class="cart">
    <div class="store-list">
      <div class="store-item">
        <p class="store-name">
          <em class="selected"></em>
          看客图书专营店
        </p>
        <div class="cart-list">
          <div class="cart-item">
            <div class="cart-selector"></div>
            <div class="cart-cover">
              <img
                src="//imgservice.suning.cn/uimg1/b2c/image/ctdUTaMiHsO1tPMFQRaKkw.png_200w_200h_4e"
                alt=""
              >
            </div>
            <div class="good-detail">
              <p class="title">纽伯瑞儿童文学奖 世界经典文学名著 四五六年级中小学生课外阅读故事书非注音版10-12-14岁课外书 草原小镇</p>
              <div class="price-container">
                <span class="price">100.00</span>
                <div class="count-container">
                  <span class="minus">-</span>
                  <input type="text">
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
.cart {
  background: #F2F3F6;
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
  line-height: 90px;
  height: 90px;
}

.cart-item {
  height: 220px;
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
</style>
