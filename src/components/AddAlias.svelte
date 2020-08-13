<div id='addAliasPart'>
  {#if add}
    <input 
      class="left"
      bind:value={aliaskey}
    />
    <span class='equal'>
      =
    </span>
    <input
      class="right"
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
      class="add"
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
      class="addfirst"
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
    margin: 0px;
    padding: 0px;
  }

  #addAliasPart input {
    width: 125px;
  }

  .left {
    margin: 0px 0px 0px 0px;
  }

  .right {
    margin: 0px 0px 0px 0px;
  }

  .equal {
    margin: 5px 5px 0px 5px;
    color: black;
  }

  .addfirst {
    color: red;
    cursor: pointer;
    font-size: 20px;
    margin: 0px 0px 0px 20px;
  }
  
  .add {
    color: red;
    cursor: pointer;
    font-size: 20px;
    margin: 3px 0px 0px 5px;
  }
</style>

<script>
  import { createEventDispatcher } from 'svelte';
  
  const dispatch = createEventDispatcher();
  
  let add = false;
  let aliaskey = '';
  let aliasdef = '';
</script>
