<div id='addPathPart'>
  {#if add}
    <input 
      bind:value={path}
      on:keyup={(e) => {
        if(e.key === 'Enter') {
          e.preventDefault();
          add = false;
          dispatch('newPath', path);
        }
      }}
    />
    <span
      class="add"
      on:click={() => { dispatch('newPath', path); add = false; }}
    >
      +
    </span>
  {:else}
    <span
      class="add"
      on:click={() => { add = true; path = ''; }}
    >
      +
    </span>
  {/if}
</div>

<style>
  #addPathPart {
    display: flex;
    flex-direction: row;
    margin: 20px 0px 10px 0px;
    padding: 0px;
  }

  .add {
    color: red;
    cursor: pointer;
    font-size: 20px;
    margin: 0px 0px 0px 20px;
  }
</style>

<script>
  import { createEventDispatcher } from 'svelte';
  
  const dispatch = createEventDispatcher();
  
  let add = false;
  let path = '';
</script>
