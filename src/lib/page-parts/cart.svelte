<script>
  import { degrees } from '$lib/data.js'
</script>

{#await degrees}
  <p>Loading...</p>
{:then degrees}
  {#each degrees as degree}
    <p>{degree.name} {degree.cost} {degree.uni} {degree.prerequisites}</p>{/each}
{/await}
