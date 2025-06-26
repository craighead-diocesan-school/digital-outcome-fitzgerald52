<script>
  import { user } from '$lib/state.svelte.js'
</script>

<header class="hero is-primary">
  <div class="hero-body">
    <h1 class="title">UniVerse - {user.displayName}</h1>
  </div>
</header>
<h2 class="subtitle">map your path discover your universe</h2>

<style>
  .subtitle {
    margin-top: 10px;
    padding: 15px;
    background-color: #495d63;
    color: aliceblue;
    font-size: 25px;
  }
  .title {
    font-size: 40px;
  }
</style>
