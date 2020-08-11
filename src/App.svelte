<main>
  <h2>Fishy Settings</h2>
  <div id='closure'>
    <Paths 
      fig={fig}
    />
    <Aliases
      fig={fig}
    />
  </div>
  <button
    on:click={() => { close(); }}
  >
    Close
  </button>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    text-align: left;
    padding: 0px;
    margin: 0px;
    width: 100%;
    height: 100%;
  }

  #closure {
    padding: 0px;
    margin: 0px;
    overflow-x: hidden;
    overflow-y: auto;
  }
</style>

<script>
  import Paths from './components/Paths.svelte';
  import Aliases from './components/Aliases.svelte';

  export let fig;

  function close() {
    fig.reposition("7");
  }
</script>

