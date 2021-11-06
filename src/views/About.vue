<template>
<div id="wrapper">
  <div class="about">
      <br>
    <h1>Welcome to 帅阿飞 Music!</h1>
    <p class = "quote">“Music is life itself.”</p>
  </div>
<br>
<br>
<br>
    <h3>How to use this service:</h3>
    <ol class = "list">
    <li>Browse for your favorite music in our <router-link to ="/browse"> Music Library</router-link></li>
    <li>Select the songs you want in your new playlist.</li>
    <li>Name your new playlist and click "Add".</li>
    <li>Get to listening! You can view all your created playlists <router-link to ="/playlists"> here</router-link>.</li>
    </ol>
</div>
</template>

<style>
.list {
    list-style-type: decimal !important;
    margin-bottom: 10%;
        list-style-position: inside;
        width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
}
li {
    margin-top: 3px;
    margin-bottom:3px;
}
.content {
        float: center;
        width: 50%;
        text-align: center;
}
</style>
                                                                             



<!--<template>
<div id="wrapper">
  <div class="about">
    <h1>Welcome to 帅阿飞 Music!</h1>
    <p class = "quote">“Music is life itself.”</p>
    <br>
    <br>
    <br>
    <div class = "content">
    <h3>How to use this service:</h3>
    <ol>
    <li>Browse for your favorite music in our <router-link to ="/browse"> Music Library</router-link></li>
    <li>Select the songs you want in your new playlist</li>
    <li>Name your new playlist and click "Add"</li>
    <li>Get to listening! You can view all your created playlists <router-link to ="/playlists"> here</router-link>.</li>
    <li> (And don't worry if you forgot one of your favorite songs! You can always add to a playlist later.)</li>
    </ol>
    </div>
  </div>
</div>
</template>

<style>
.content {
  width: 60%;
}

ol {
  list-style-type: cjk-ideographic;
  margin-bottom: 50%;
}
.quote {
    font-family: 'Courier New', Courier, monospace;
    font-size: medium;
    font-style: oblique;
    text-align: center;
}
</style> -->


<!--<template>
<div id="wrapper">
  <div class="about">
    <h1>Welcome to 帅阿飞 Music!</h1>
    <p class = "quote">“Music is life itself.”</p>
  </div>
  <div class = "content">
    <h3>How to use this service:</h3>
    <ol>
    <li>Browse for your favorite music in our <router-link to ="/browse"> Music Library</router-link></li>
    <li>Select the songs you want in your new playlist</li>
    <li>Name your new playlist and click "Add"</li>
    <li>Get to listening! You can view all your created playlists <router-link to ="/playlists"> here</router-link>. (And don't worry if you forgot one of your favorite songs! You can always add to a playlist later.)</li>
    </ol>
  </div>
</div>
</template>

<style>
</style>-->
