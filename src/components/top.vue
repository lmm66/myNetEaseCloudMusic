<template>
  <div class="top-container">
    <div class="left-box">
      <div class="icon-wrapper">
        <span class="iconfont icon-home"></span>
        <!-- <span class="iconfont icon-sami-select"></span> -->
        <span class="iconfont icon-full-screen"></span>
      </div>
      <!-- <div class="history-wrapper">
        <span class="iconfont icon-arrow-lift"></span>
        <span class="iconfont icon-arrow-right"></span>
      </div> -->
    </div>
    <div class="right-box">
      <div class="el-input el-input--small el-input--prefix">
        <input
          type="text"
          autocomplete="off"
          placeholder="搜索"
          v-model="inputVal"
          @keyup.enter="toResult"
          class="el-input__inner"
        />
        <span class="el-input__prefix">
          <i class="el-input__icon el-icon-search"></i>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputVal: "",
    };
  },
  methods: {
    toResult() {
      if (this.inputValue === "") {
        alert("请输入内容!");
      } else {
        // this.$router.push("/result"); // 编程式导航(当跳转有判断逻辑时)
        this.$router.push("/result?q=" + this.inputValue); // 路由传参
      }
    },
  },
};
</script>

<style>
</style>