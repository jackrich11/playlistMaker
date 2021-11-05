<template>
    <div id="wrapper">
        <h3 v-if="playlists.length === 0">You haven't made any playlists yet! Head to our <router-link to="/browse">Browse</router-link> section to get started.</h3>
        <h3 v-else-if="playlists.length === 1">You currently have {{playlists.length}} playlist!</h3>
        <h3 v-else>You currently have {{playlists.length}} playlists!</h3>

        <div id="playlist-box" v-for="playlist in playlists" :key="playlist.name">
            <hr v-if="playlist.name  === playlists[0].name">
            <div id="total-box">
                <div id="playlist-info">
                    <p id="playlist-name"><strong>{{playlist.name}}</strong></p>
                    <div id="song-list">
                        <p class="song-name" v-for="song in playlist.songs" :key="song.name"> &#9; - {{song.title}}</p>
                    </div>
                </div>
                <div id="remove-button">
                    <h6 @click="removePlaylist(playlist)">Remove</h6>
                </div>
            </div>
            <hr>
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
    },
    methods: {
        removePlaylist(playlist) {
            let playlistIndex = this.playlists.indexOf(playlist);

            if(playlistIndex > -1)
            {
                this.playlists.splice(playlistIndex, 1);
            }

            console.log(`Removed ${playlist.name} from the list`);
        }
    }
}
</script>

<style scoped>

    * {
        padding: 0;
        margin: 0;
    }

    hr {
        width: 45%;
        margin: auto;
    }

    h3 {
        margin-bottom: 5px;
    }

    #total-box {
        display: flex;
        justify-content: space-between;
        width: 35%;
        margin:  10px auto;
        text-align: left;
        
    }

    #remove-button {
        padding: 10px;
    }

    #remove-button p {
        /*text-decoration: underline;*/
        font-size: small;
    }

    h6:hover {
        text-decoration: underline;
        color: #F08700;
        cursor: pointer;
    }

    #playlist-info * {
        margin: 3px;
    }

    #playlist-name {
        font-size: 170%;
    }

    #song-list {
        
        font-size: 150%;
    }

    

</style>
