<template>
  <div class="playlists-container">
    <!-- 同步 -->
    <div class="top-card">
      <!-- 封面 -->
      <div class="icon-wrap">
        <img :src="imgUrl" alt="" />
      </div>
      <div class="content-wrap">
        <div class="tag">精品歌单</div>
        <!-- 标题 -->
        <div class="title">
          {{ this.name }}
        </div>
        <!-- 介绍 -->
        <div class="info">
          {{ this.description }}
        </div>
      </div>
      <!-- 背景 -->
      <img :src="this.imgUrl" alt="" class="bg" />
      <div class="bg-mask"></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      imgUrl: "",
      name: "",
      description: "",
    };
  },
  created() {
    axios({
      url: "http://localhost:3000/top/playlist/highquality",
      method: "GET",
      params: {
        limit: 3,
      },
    }).then((res) => {
      this.imgUrl = res.data.playlists[2].coverImgUrl;
      this.description = res.data.playlists[2].description;
      this.name = res.data.playlists[2].name;
      console.log(res);
    });
  },
  methods: {},
};
</script>

<style>
</style>