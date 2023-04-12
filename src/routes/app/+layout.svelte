<script lang="ts">
  import "@picocss/pico/css/pico.min.css";
  import "../../app.css";
</script>

<nav class="container-fluid">
  <ul>
    <li>Agile Analytix</li>
  </ul>
  <ul>
    <li><a href="/app">Home</a></li>
    <li><a href="/app/profile">Profile</a></li>
  </ul>
</nav>
<slot />

<style>
  nav {
    border-bottom: thin solid var(--primary);
  }
</style>
