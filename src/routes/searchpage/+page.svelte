<script>
  import Header from '$lib/Header.svelte'
  import Footer from '../../lib/footer.svelte'
  import { addplan, getplans, login } from '$lib/db.js'
  let content = [
    {
      uni: '',
      cost: '',
      prerequisits: '',
      name: '',
    },
    {
      uni: '',
      cost: '',
      prerequisits: '',
      name: '',
    },
    {
      uni: '',
      cost: '',
      prerequisits: '',
      name: '',
    },
  ]
</script>

<Header />

<nav>
  <a href="/searchpage">searchpage</a>
  <a href="/loginpage">loginpage</a>
</nav>
<input type="text" placeholder="Search.." name="search" />
<button type="submit"><img src="loupe.png" alt="" /></button>

<table>
  <thead>
    <tr>
      <th>course</th>
      <th>University</th>
      <th>cost</th>
      <th>prerequisits</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      {#each content as course}
        <th>{course.name}</th>
        <th>{course.uni}</th>
        <th>{course.cost}</th>
        <th>{course.prerequisits}</th>
      {/each}
    </tr>
  </tbody>
</table>

<Footer />

<style>
  img {
    width: 15px;
  }
</style>
