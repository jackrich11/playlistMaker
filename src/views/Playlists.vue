<template>
  <div class="browse">
    <h1>Here are your current playlists:</h1>
    <PlaylistList :songs="songs"/>
  </div>
</template>

<script>
// @ is an alias to /src
import PlaylistList from '@/components/PlaylistList.vue'

export default {
  name: 'Playlists',
  components: {
    PlaylistList
  },
  computed: {
    songs()
    {
      return this.$root.$data.songs;
    }
  }
}
</script>
