<template>
  <div class="browse">
    <h1>Here is our current song library:</h1>
    <SongList :songs="songs"/>
  </div>
</template>

<script>
// @ is an alias to /src
import SongList from '@/components/SongList.vue'

export default {
  name: 'Browse',
  components: {
    SongList
  },
  computed: {
    songs()
    {
      return this.$root.$data.songs;
    }
  }
}
</script>
