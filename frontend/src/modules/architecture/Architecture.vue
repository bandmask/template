<template>
  <div class="about">
    <h1 class="header">Architecture</h1>
    <div class="gallery">
      <div v-for="(image, $index) in vm.images"
           :key="$index"
           class="gallery-image">
        <img :alt="image.name"
             :src="image.src"
             :title="image.description" />
      </div>
    </div>
    <div class="content">
      <div>
        <p>
          <s><i class="emphasis">Monoliths</i></s> has for me been the way to develop web. Ever since starting with front end development, using ASP.Net, all the way through MVC .Net and angular. MVC-pattern became the norm and .Net with IIS was the way to host it.
        </p>
        <p>This time we go all in <i class="emphasis">micro.</i></p>
        <p>This time we <i class="emphasis">containerize.</i></p>
      </div>
      <div>
        <h3>Hosting</h3>
        <p>
          Replacing IIS comes with a lot of opportunity and the goal was to go as light weight as possible. Hosting on a single board computer, raspberry, was a good start and from there it grew.
        </p>
        <p>
          The above images are an early mind map for structuring the project, using containerized, self-maintained "pods" with docker.
        </p>
      </div>
      <div>
        <h3>Buzzwords</h3>
        <p>
          <ul>
            <li>Containers</li>
            <li>Docker & Docker Compose</li>
            <li>NodeJs</li>
            <li>Vue</li>
            <li>DocumentDB & Redis</li>
          </ul>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import imgArchDiscovery from '@/assets/arcitecture_discovery.jpg'
import imgArchContainers from '@/assets/architecture_containers.jpg'

export default {
  data () {
    return {
      images: [
        {
          src: imgArchDiscovery,
          name: 'Container discovery',
          description: 'Container discovery'
        },
        {
          src: imgArchContainers,
          name: 'Container architecture',
          description: 'Container architecture'
        }
      ]
    }
  },
  computed: {
    vm () {
      return this
    }
  }
}
</script>

<style scoped lang="less">
.about {
  cursor: default;
  user-select: none;

  .gallery {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 250px;

    .gallery-image {
      display: flex;
      padding: 0px 8px;
      border-radius: 4px;
      margin: 0px 10px;
      justify-content: center;
      align-items: center;
      cursor: cell;

      &:hover {
        img {
          transform: scale(1.1);
          box-shadow: 0px 0px 17px 0px rgba(50, 50, 50, 0.7);
        }
      }

      img {
        border-radius: 2px;
        height: 200px;
        transition-duration: 1.1s;
      }
    }
  }
  .content {
    width: 500px;
    margin: 0px auto;
    font-size: 10px;

    text-align: left;

    ul {
      margin: 0px;
      padding-left: 20px;
    }

    .emphasis {
      font-size: 12;
      font-weight: 600;
    }
  }
}
</style>
