<!-- <script>
  import Header from '$lib/Header.svelte'
  import BulmaExamples from '$lib/BulmaExamples.svelte'
  import { adddegree, getdegrees, login } from '$lib/db.js'

  let degrees = getdegrees()

  let newdegree = {
    uni: '',
    name: '',
    cost: '',
    location: '',
    minors: [],
    prerequisites: '',
  }
</script>

<nav>
  <a href="/loginpage">loginpage</a>
</nav>
<Header />

<main class="content section">
  {#await degrees}
    <p>Loading...</p>
  {:then degrees}
    {#each degrees as degree}
      <p>{degree.name} {degree.cost} {degree.uni} {degree.prerequisits}</p>{/each}
  {/await} -->

<!-- <label class="label">
    name: <input bind:value={newplan.name} />
  </label>

  <label class="label">
    cost: <input type="number" bind:value={newplan.cost} />
  </label>

  <label class="label">
    uni<input bind:value={newplan.uni} />
  </label>

  <label class="label">
    prerequisites: <input bind:value={newplan.prerequisites} />
  </label> -->
<!-- <button class="button" onclick={adddegree(newdegree)}> Save </button>
</main>
<footer class="footer">
  <p class="has-text-centered">&copy; Craighead Diocesan School 2025</p>
</footer>

let content = getplans()

{#await content}
  <p>Loading...</p>
{:then content}
  <table>
    <thead>
      <tr>
        <th>course</th>
        <th>University</th>
        <th>cost</th>
        <th>prerequisites</th>
      </tr>
    </thead>
    <tbody>
      {#each content as course}
        <tr>
          <td>{course.name}</td>
          <td>{course.uni}</td>
          <td>{course.cost}</td>
          <td>{course.prerequisites}</td>
        </tr>
      {/each}
    </tbody>
  </table>
{/await} -->
