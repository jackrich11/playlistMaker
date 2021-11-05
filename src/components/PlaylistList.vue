<template>
    <div id="wrapper">
        <h3 v-if="playlists.length === 0">You haven't made any playlists yet! Head to our <router-link to="/browse">Browse</router-link> section to get started.</h3>
        <h3 v-else-if="playlists.length === 1">You currently have {{playlists.length}} playlist!</h3>
        <h3 v-else>You currently have {{playlists.length}} playlists!</h3>

        <div id="playlist-box" v-for="playlist in playlists" :key="playlist.name">
            <p><strong>{{playlist.name}}</strong></p>
            <ol>
                <li v-for="song in playlist.songs" :key="song.name">{{song.title}}</li>
            </ol>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PlaylistList',
    props: {
        playlists: Array
    },
    data() {
        return {}
    }
}
</script>

<style scoped>

</style>
