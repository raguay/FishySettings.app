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

  #addAliasPart span {
    color: red;
    cursor: pointer;
    font-size: 20px;
    margin: 0px 0px 0px 20px;
  }

  #addAliasPart input {
    width: 150px;
  }

  .equal {
    margin: 0px 10px 0px 10px;
  }
</style>

<script>
  import { createEventDispatcher } from 'svelte';
  
  const dispatch = createEventDispatcher();
  
  let add = false;
  let aliaskey = '';
  let aliasdef = '';
</script>
