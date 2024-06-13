<script>
export default {
  data() {
    return {
      video_i: 0,
      videos: ['/src/asset/IMG_2469.mp4', '/src/asset/IMG_1785.mp4'],
      // , '/src/asset/IMG_8275.mp4', '/src/asset/День_студента.mp4'
    }
  },
  mounted() {

  },
  methods: {
    /*Запускает селедущее видио при ощибки и при заканчивание*/
    nextVideo() {
      console.log(this.video_i);
      if (this.video_i < this.videos.length - 1) {
        this.video_i += 1
      } else {
        this.video_i = 0
      }
      console.log(this.video_i);
    },
  }
}
</script>

<template>
  <video @error="nextVideo()" @ended="nextVideo()" :src="videos[this.video_i]" autoplay muted></video>
</template>

<style scoped></style>