<script>
  import Header from '$lib/Header.svelte'
  import BulmaExamples from '$lib/BulmaExamples.svelte'
  import { addplan, getplans, login } from '$lib/db.js'

  let plans = getplans()

  let newplan = {
    course: '',
    cost: '',
    location: '',
  }
</script>

<nav>
  <a href="/loginpage">loginpage</a>
</nav>
<Header />

<main class="content section">
  {#await plans}
    <p>Loading...</p>
  {:then plans}
    {#each plans as plan}
      <p>{plan.course} {plan.cost} {plan.location}</p>{/each}
  {/await}

  <label class="label">
    course: <input bind:value={newplan.course} />
  </label>

  <label class="label">
    cost: <input type="number" bind:value={newplan.cost} />
  </label>

  <label class="label">
    location: <input bind:value={newplan.location} />
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
