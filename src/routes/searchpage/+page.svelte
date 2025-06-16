<script>
  import Header from '$lib/Header.svelte'
  import Footer from '../../lib/footer.svelte'
  import { getdegrees, login } from '$lib/db.js'
  import { data } from '$lib/data'
  let contents = data
  let plan = []
  let search = ''
  plan = [
    {
      uni: '',
      name: '',
      cost: '',
      location: '',
      minors: [],
      prerequisites: '',
    },
  ]
  let degrees = getdegrees()

  function addToPlan() {
    plan = [...plan, { uni: '', name: '', cost: '', location: '', minors: [], prerequisites: '' }]
  }
  function filter() {
    contents = []
    for (const degree of data) {
      if (degree.name.includes(search)) {
        contents = [...contents, degree]
      }
    }
  }
</script>

<Header />

<nav>
  <a href="/searchpage">searchpage</a>
  <a href="/loginpage">loginpage</a>
  <a href="/">home</a>
</nav>
<input class="text" placeholder="Search.." name="search" bind:value={search} />
<button type="submit" onclick={filter}><img src="loupe.png" alt="" /></button>
{#await degrees}
  <p>Loading...</p>
{:then degrees}
  {#each degrees as degree}
    <p>{degree.name} {degree.cost} {degree.uni} {degree.prerequisits}</p>{/each}
{/await}

<table>
  <thead>
    <tr>
      <th>degree</th>
      <th>University</th>
      <th>cost</th>
      <th>prerequisites</th>
    </tr>
  </thead>
  <tbody>
    {#each contents as degree}
      <tr>
        <td>{degree.name}</td>
        <td>{degree.uni}</td>
        <td>{degree.cost}</td>
        <td>{degree.prerequisites}</td>
        <!-- this is not saving THIS PARTICULAR degree into anything, and also it needs to use all the brackers () => {    } -->
        <td><button class="button" onclick={addToPlan}> Save </button></td>
      </tr>
    {/each}
  </tbody>
</table>

<Footer />

<style>
  img {
    width: 15px;
  }
  table,
  tr,
  td,
  th {
    border: 1px solid black;
    padding: 5px;
  }
  table {
    margin: 20px;
  }
</style>
