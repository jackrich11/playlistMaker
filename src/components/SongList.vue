<template>
    <div id="wrapper">

        <div id="input-box">
            <input v-model="playlist" placeholder="Playlist Name">
            <button v-if="playlist === ''" id="add-playlist">Add {{playlist}}</button>
            <button v-else id="add-playlist" @click="addPlaylist">Add '{{playlist}}' to your list</button>
        </div>

        <p v-for="select in selectedSongs" :key="select.title"><strong>{{select.title}}</strong></p>
        <p v-if="selectedSongs.length === 0">Select some songs to get started!</p>
        <p v-else-if="selectedSongs.length === 1"><em>(so far you have a total of {{selectedSongs.length}} song)</em>:</p>
        <p v-else><em>(so far you have a total of {{selectedSongs.length}} songs)</em>:</p>

        <div id="song-list">
            <div v-for="song in songs" :key="song.title">
                <div id="song-box">
                    <img :src="'https://picsum.photos/id/' + song.art + '/300'"/>
                    <div id="total-info">
                        <div id="song-info">
                            <p>Title: {{song.title}}</p>
                            <p>Artist: {{song.artist}}</p>
                            <p>Album: {{song.album}}</p>
                        </div>
                        <div v-bind:checked="true" id="checkbox-box">
                            <!--<input id="add-box" type="checkbox" @click="checkSong(song)">-->
                            <p id="add-box" @click="checkSong(song)">+</p>
                        </div>
                    </div>                   
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'SongList',
  props: {
      songs: Array
  },
  data() {
      return {
          playlist: '',
          selectedSongs: [],
          isReset: true

      }
  },
  methods: {
      checkSong(song) {
          if(!this.selectedSongs.includes(song))
          {
            console.log(`Adding ${song.title} to list.`);
            this.selectedSongs.push(song);
          } 
          else
          {
              let songIndex = this.selectedSongs.indexOf(song);
              this.selectedSongs.splice(songIndex, 1);
          }
      },
      addPlaylist()
      {
          let newPlaylist = {
              name: this.playlist,
              songs: this.selectedSongs
          }

          if(this.selectedSongs.length !== 0)
          {
            this.$root.$data.playlists.push(newPlaylist);
            this.playlist = '';
            this.selectedSongs = [];
            this.isReset = false;
          }

          console.log(newPlaylist);
      }
  }
}
</script>

<style scoped>
    * {
        padding: 0;
        margin: 0;
    }

    #add-box {
        font-size: large;
    }

    #add-box:hover {
        color: #F08700;
        border-color: #F08700;
        border-style: solid;
        border-width: 1px;
        border-radius: 5px;
    }

    #song-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    #song-box {
        display: flex;
        flex-direction: column;
        align-content: flex-start;
        margin: 20px;
    }

    #song-info  {
        text-align: left;
    }

    #song-info * {
        padding: 5px;
    }

    #total-info {
        display: flex;
    }

    #input-box {
        padding: 5px;
        display: flex;
        justify-content: center;
    }

    #input-box * {
        padding: 6px;
        margin: 5px;
    }

    #checkbox-box {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 15px;
        padding: 0 5px;
        cursor: pointer;
    }
</style>