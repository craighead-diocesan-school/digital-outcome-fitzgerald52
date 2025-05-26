<script>
  import Header from '$lib/Header.svelte'
  import Footer from '../../lib/footer.svelte'
  import { addplan, getplans, login } from '$lib/db.js'
  import { user } from '$lib/state.svelte.js'
</script>

<main class="columns">
  <div class="column is-one-third">
    <p>Find information on all 12 of New Zealand Universities and directly compare different options and plan for your future without stress and confusion</p>
  </div>
  <div class="column">
    <Header />
    <button
      class="button is-primary is-large"
      on:click={() => {
        login(login)
      }}
      >login
    </button>
  </div>
</main>
<nav>
  <a href="/searchpage">searchpage</a>
  <a href="/loginpage">loginpage</a>
</nav>
<Footer />

<style>
  p {
    padding: 35px;
    padding-top: 80px;
    padding-bottom: 80px;
    font-size: 40px;
    background-color: #eaf9ff;
  }
  .is-large {
    width: 300px;
    height: 125px;
    font-size: 75px;
    margin-top: 75px;
  }
</style>
