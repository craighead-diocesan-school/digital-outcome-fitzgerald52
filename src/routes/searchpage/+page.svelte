<script>
  import Header from '$lib/Header.svelte'
  import Footer from '../../lib/footer.svelte'
  import { addplan, getplans, login } from '$lib/db.js'
  import { data } from '$lib/data'
  let contents = data
  let search = ''

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
