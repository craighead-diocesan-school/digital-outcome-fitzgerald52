<script>
  import Header from '$lib/Header.svelte'
  import BulmaExamples from '$lib/BulmaExamples.svelte'
  import { login } from '$lib/db.js'

  let newplan = {
    uni: '',
    cost: '',
    prerequisits: '',
    name: '',
  }
</script>

<nav>
  <a href="/loginpage">loginpage</a>
</nav>
<Header />

<main class="content section">
  <!-- {#await plans}
    <p>Loading...</p>
  {:then plans}
    {#each plans as plan}
      <p>{plan.name} {plan.cost} {plan.uni} {plan.prerequisits}</p>{/each}
  {/await} -->

  <label class="label">
    name: <input bind:value={newplan.name} />
  </label>

  <label class="label">
    cost: <input type="number" bind:value={newplan.cost} />
  </label>

  <label class="label">
    uni<input bind:value={newplan.uni} />
  </label>

  <label class="label">
    prerequisits: <input bind:value={newplan.prerequisits} />
  </label>
  <button
    class="button"
    on:click={() => {
      addplan(newplan)
    }}
  >
    Save
  </button>
</main>
<footer class="footer">
  <p class="has-text-centered">&copy; Craighead Diocesan School 2025</p>
</footer>

<!-- use java script variables eg 
content {
  title 
  subtitle
  uni
  cost
  prerequisits 
}
then use <header> <title>title.content</title></header> -->
