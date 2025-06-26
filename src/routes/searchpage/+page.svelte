<script>
  import { onMount } from 'svelte'
  import { user, plan } from '$lib/state.svelte.js'
  import { getplan, saveplan, removeplan, logout } from '$lib/db.js'
  import { data } from '$lib/data'
  import Header from '$lib/Header.svelte'
  import Footer from '../../lib/footer.svelte'
  let contents = data
  let search = ''
  // let plan = getplan()

  // adds a degree to a plan
  function addToPlan(degree) {
    plan.degrees = [...plan.degrees, degree]
    console.dir(plan.degrees)
  }
  // filters through degrees and displays the degrees thats name contains search
  function filter() {
    contents = []
    for (const degree of data) {
      if (degree.name.includes(search)) {
        contents = [...contents, degree]
      }
    }
  }

  // Wait for the page to be ready before checking localStorage
  onMount(() => {
    // // If the user was logged in before...
    if (localStorage.getItem('user')) {
      //   // Get the user data from localStorage
      let data = JSON.parse(localStorage.getItem('user'))

      // Set the person state with the user data
      user.uid = data.uid
      user.email = data.email
      user.displayName = data.displayName
      user.photoURL = data.photoURL

      // Load their plan from Firebase
      getplan()
    }
  })
</script>

<Header />
<button class="button" onclick={logout(logout)}> Logout </button>

{#if user.uid}
  {#each plan.degrees as degree, index}
    <button
      class="button"
      onclick={() => {
        removeplan(index)
        saveplan()
      }}>Remove</button
    >

    {degree.name}
  {/each}
{:else}
  <p>you are not logged in</p>
{/if}
<nav>
  <a href="/searchpage">searchpage</a>
  <a href="/loginpage">loginpage</a>
  <a href="/">home</a>
</nav>
<!-- binds text in search bar so it can be used in filter function -->
<input class="text" placeholder="Search.." name="search" bind:value={search} />
<!-- triggers filter function -->
<button type="submit" onclick={filter}><img src="loupe.png" alt="" /></button>

<!-- displays all degrees in a grid  -->
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
        <td>
          <!-- alerts add to plan funciton as well as another function that is meant to save the plan all together NEED TO FIX  -->
          <button
            class="button"
            onclick={() => {
              addToPlan(degree)
              saveplan()
            }}
          >
            Save
          </button></td
        >
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
