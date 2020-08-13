<div id='addAliasPart'>
  {#if add}
    <input 
      bind:value={aliaskey}
    />
    <span class='equal'>
      =
    </span>
    <input
      bind:value={aliasdef}
      on:keyup={(e) => {
        if(e.key === 'Enter') {
          e.preventDefault();
          add = false;
          dispatch('newAlias', {
            key: aliaskey,
            def: aliasdef
          });
        }
      }}
    />
    <span
      on:click={() => { 
        dispatch('newAlias', {
          key: aliaskey,
          def: aliasdef
        }); 
        add = false; 
      }}
    >
      +
    </span>
  {:else}
    <span
      class="add"
      on:click={() => { add = true; aliaskey = ''; aliasdef = ''; }}
    >
      +
    </span>
  {/if}
</div>

<style>
  #addAliasPart {
    display: flex;
    flex-direction: row;
    margin: 20px 0px 10px 0px;
    padding: 0px;
  }

  #addAliasPart input {
    width: 125px;
  }

  .equal {
    margin: 5px;
    color: black;
  }

  .add {
    color: red;
    cursor: pointer;
  }
</style>

<script>
  import { createEventDispatcher } from 'svelte';
  
  const dispatch = createEventDispatcher();
  
  let add = false;
  let aliaskey = '';
  let aliasdef = '';
</script>
