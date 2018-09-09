<template>
  <div class="gallery" :class="vm.$mq">
    <div v-for="(image, $index) in vm.images"
          :key="$index"
          class="gallery-image">
      <img :alt="image.name"
            :src="image.src"
            :title="image.description" />
    </div>
  </div>
</template>

<script>
export default {
  props: ['images'],
  computed: {
    vm () {
      return this
    }
  }
}
</script>

<style lang="less" scoped>
.gallery {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 380px;

  .gallery-image {
    display: flex;
    padding: 0px 8px;
    border-radius: 4px;
    margin: 0px 20px;
    justify-content: center;
    align-items: center;
    cursor: cell;

    &:hover {
      img {
        transform: scale(1.1);
        box-shadow: 0px 0px 30px 0px rgba(50, 50, 50, 0.7);
      }
    }

    img {
      border-radius: 2px;
      height: 300px;
      transition-duration: 1.1s;
    }
  }
}
</style>
