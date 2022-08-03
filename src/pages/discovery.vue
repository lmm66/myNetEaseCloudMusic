<template>
  <div class="discovery-container">
    <!-- 轮播图 -->
    <el-carousel :interval="4000" type="card">
      <el-carousel-item v-for="(item, index) in banners" :key="index">
        <img :src="item.imageUrl" alt="" />
      </el-carousel-item>
    </el-carousel>

    <!-- 推荐歌单 -->
    <div class="recommend">
      <h3 class="title">推荐歌单</h3>
      <div class="items">
        <div
          class="item"
          v-for="(item, index) in playList"
          :key="index"
          @click="toPlaylist(item.id)"
        >
          <div class="img-wrap">
            <div class="desc-wrap">
              <span class="desc">{{ item.name }}</span>
            </div>
            <img :src="item.picUrl + '?param=200y200'" alt="" />
            <span class="iconfont icon-play"></span>
          </div>
          <p class="name">{{ item.name }}</p>
        </div>
      </div>
    </div>

    <!-- 最新音乐 -->
    <div class="news">
      <h3 class="title">最新音乐</h3>
      <div class="items">
        <div
          class="item"
          v-for="(item, index) in newSongs"
          :key="index"
          @click="playMusic(item.id)"
        >
          <div class="img-wrap">
            <img :src="item.picUrl" alt="" />
            <span class="iconfont icon-play"></span>
          </div>
          <div class="song-wrap">
            <div class="song-name">{{ item.name }}</div>
            <div class="singer">{{ item.song.artists[0].name }}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- 最新MV -->
    <div class="mvs">
      <h3 class="title">推荐MV</h3>
      <div class="items">
        <div
          class="item"
          v-for="(item, index) in mvs"
          :key="index"
          @click="toMv(item.id)"
        >
          <div class="img-wrap">
            <img :src="item.picUrl" alt="" />
            <span class="iconfont icon-play"></span>
            <div class="num-wrap">
              <!-- 播放次数 -->
              <div class="num">{{ item.playCount }}</div>
            </div>
          </div>
          <div class="info-wrap">
            <!-- MV名 -->
            <div class="name">{{ item.name }}</div>
            <!-- 歌手名 -->
            <div class="singer">{{ item.artistName }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      banners: [],
      playList: [],
      newSongs: [],
      mvs: [],
    };
  },
  methods: {
    toPlaylist(id) {
      console.log(id);
    },
    // 播放音乐
    playMusic(id) {
      axios({
        url: "http://localhost:3000/song/url",
        method: "GET",
        params: {
          id,
        },
      }).then((res) => {
        let musicUrl = res.data.data[0].url;
        this.$parent.musicUrl = musicUrl;
      });
    },
    // 播放MV
    toMv(id) {
      console.log(id);
    },
  },
  created() {
    // 轮播图接口
    axios({
      url: "http://localhost:3000/banner",
      method: "GET",
    }).then((res) => {
      this.banners = res.data.banners;
    });

    // 推荐歌单接口
    axios({
      url: "http://localhost:3000/personalized",
      method: "GET",
      withCredentials: true,
      params: {
        limit: 30,
      },
    }).then((res) => {
      this.playList = res.data.result;
    });

    // 最新音乐接口
    axios({
      url: "http://localhost:3000/personalized/newsong",
      method: "GET",
      // params: {
      //   limit: 30,
      // },
    }).then((res) => {
      this.newSongs = res.data.result;
    });

    // 最新MV接口
    axios({
      url: "http://localhost:3000/personalized/mv",
      method: "GET",
    }).then((res) => {
      this.mvs = res.data.result;
    });
  },
};
</script>

<style>
</style>