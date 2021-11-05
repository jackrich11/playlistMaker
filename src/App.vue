<template>
  <div id="app">
    <title>帅阿飞 Music</title>
    <div id="nav">
      <div id="logo-header">
        <img src="./assets/whitemusicnote.png"/>
        <h1>PlaylistMaker</h1>
      </div>
      <div id="nav-links">
        <router-link to="/">About</router-link>
        <p id="spacer" ><strong>&nbsp;|&nbsp;</strong></p>
        <router-link to="/browse">Browse</router-link>
        <p id="spacer" ><strong>&nbsp;|&nbsp;</strong></p>
        <router-link v-if="this.$root.$data.playlists.length === 0" to="/playlists">Playlists</router-link>
        <router-link v-else to="/playlists">Playlists ({{this.$root.$data.playlists.length}})</router-link>
      </div>
    </div>
    <router-view/>
    <div id="footer">
      <p>Jack Richardson &#38; TJ Barden</p>
      <a href="https://github.com/jackrich11/playlistMaker.git" target="_blank">Github Repository</a>
      <div v-show="false">Icons made by <a href="https://www.flaticon.com/authors/becris" title="Becris">Becris</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    </div>
  </div>
</template>

<style>
* {
  padding: 0;
  margin: 0;
}

#spacer {
  color: #F08700;
  
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #225560;
}

#nav {
  display: flex;
  justify-content: space-between;
  align-content: center;
  margin-bottom: 20px;
}

#nav-links {
  display: flex;

}

#nav h1 {
  color: white;
}

#nav, #footer {
  padding: 30px;
  background-color: #225560;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#footer {
  margin-top: 20px;
}

#footer a {
  color: white;
}

#footer p {
  color: white;
}

#nav a {
  color: #F08700;
}

#logo-header {
  display: flex;
}

#logo-header * {
  margin: 5px;
}

#logo-header img {
  width: 40px;
  height: auto;
}

a {
  color: #F08700;
}

a:visited {
  color: #F08700;
}
</style>


