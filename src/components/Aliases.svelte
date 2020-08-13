<div id='figAlias'>
  <h3>Fig Aliases</h3>
  <div id='aliases'>
    {#each Object.entries(aliases) as [key, value]}
      <div class='aliasLine'>
        <span class='alias'>{key}</span>
        <span class='equals'> = </span>
        <span class='alias'>{value}</span>
        <span
          on:click={() => { deleteAlias(key,value); }}
          class='delete'
        >
          X
        </span>
      </div>
    {/each}
  </div>
  <AddAlias 
    on:newAlias={(e) => {
      addAlias(e.detail.key, e.detail.def);
    }}
  />
</div>

<style>
  #figAlias {
    display: flex;
    flex-direction: column;
    text-align: left;
    padding: 0px;
    margin: 0px;
    width: 100%;
    height: 100%;
  }

  #aliases {
    display: flex;
    flex-direction: column;
    padding: 0px;
    margin: 0px 0px 10px 0px;
    width: 100%;
  }

  .alias {
    margin: 5px 0px 0px 10px;
  }

  .equals {
    margin: 0px 10px 0px 10px;
  }

  .aliasLine {
    display: flex;
    flex-direction: row;
  }

  .delete {
    color: red;
    height: 20px;
    width: 100px;
    margin: 5px 0px 0px auto;
    cursor: pointer;
  }
</style>

<script>
  import { onMount } from 'svelte';
  
  import AddAlias from '../components/AddAlias.svelte';

  export let fig;

  let rawFile = '';
  let aliases = [];
  
  onMount(() => {
    fig.fread('~/.fig/exports/aliases.fish', (data, err) => {
      if(err) {
        //
        // Error: file most likely doesn't exist. Read from zsh version.
        //
        aliases = [];
        saveAliases();
      } else {
        //
        // Read the aliases that we currently have.
        //
        if((data !== null)&&(typeof data === 'string')&&(data !== '')) {
          rawFile = data.split('\n');
          aliases = [];
          rawFile.forEach((line) => {
            if(line.includes('alias')) {
              var parts = line.split('=');
              aliases[parts[0].split(' ')[1]] = parts[1].replace(new RegExp('\"','g'),'');
            }
          });
        }
      }
      aliases = aliases;
    });
  });

  function addAlias(newAlias, newDef) {
    if((typeof newAlias === 'string')&&
       (typeof newDef === 'string')&&
       (newAlias !== '')&&
       (newDef !== '')) {
      aliases[newAlias] = newDef;
      saveAliases();
      aliases = aliases;
    }
  }

  function saveAliases() {
    var saveFile = '';
    for( var key in aliases) {
      saveFile += `alias ${key}="${aliases[key]}"\n`;
    }
    fig.fwrite('~/.fig/exports/aliases.fish', saveFile, (error) => {
      console.log(`Error: ${error}`);
    });
  }

  function deleteAlias(key, value) {
    delete aliases[key];
    saveAliases();
    aliases = aliases;
  }
</script>

