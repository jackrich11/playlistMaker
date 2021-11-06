<template>
    <div id="wrapper">
        <h1>Here's where you can view your playlists!</h1>
        <PlaylistList :playlists="playlists"/>


    </div>
</template>

<script>
import PlaylistList from '../components/PlaylistList.vue'

export default {
    name: 'Playlists',
    components: {
        PlaylistList
    },
    data() {
        return {

        }
    },
    computed: {
        numPlaylists() {
            return this.$root.$data.playlists;
        },
        playlists() {
            return this.$root.$data.playlists;
        }
    }
}
</script>

<style scoped>
    #wrapper {
        margin: 40px;
    }
</style>
