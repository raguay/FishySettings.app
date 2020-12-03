<div id='paths'>
  {#each paths as path}
    <div class='pathLine'>
      <span class='path'>{path}</span>
      <span
        on:click={() => { deletePath(path); }}
        class='delete'
      >
        X
      </span>
    </div>
  {/each}
</div>
<AddPath 
  on:newPath={(e) => {
    addPath(e.detail);
  }}
/>

<style>
  #paths {
    display: flex;
    flex-direction: column;
    padding: 0px;
    margin: 0px 0px 10px 0px;
    width: 100%;
  }

  .path {
    margin: 5px 0px 0px 10px;
  }

  .pathLine {
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
  
  import AddPath from '../components/AddPath.svelte';

  export let fig;

  let rawFile = [];
  let paths = [];
  let rawFigPath = '';
  
  onMount(() => {
    fig.fread('~/.fig/user/aliases/env.fish', (data, err) => {
      if(err) {
        //
        // Error: file most likely doesn't exist. Read from zsh version.
        //
        paths = ['~/.fig/apps','~/.fig/user/apps', '~/.fig/team/apps']
        savePaths();
      } else {
        //
        // Read the paths that we currently have.
        //
        if((data !== null)&&(typeof data === 'string')&&(data !== '')) {
          rawFile = data.split('\n');
          rawFigPath = rawFile.filter(line => line.includes('FIGPATH'))[0];
          paths = rawFigPath.split(' ')[3].replace(new RegExp('\"','g'),'').split(':');
        } else if(data !== null) {
          rawFile = data;
          rawFigPath = rawFile.filter(line => line.includes('FIGPATH'))[0];
          paths = rawFigPath.split(' ')[3].replace(new RegExp('\"','g'),'').split(':');
        }
      }
    });
  });

  function addPath(newPath) {
    if((typeof newPath === 'string')&&(newPath !== '')) {
      paths.push(newPath);
      savePaths();
      paths = paths;
    }
  }

  function savePaths() {
    var addSource = true;
    var addPath = true;
    var saveFile = rawFile.map(line => {
      if(line.includes('FIGPATH')) {
        line = `set -xg FIGPATH "${paths.join(':')}"`;
        addPath = false;
      }
      if(line.includes('aliases.fish')) {
        addSource = false;
      }
      return line;
    });
    if(addPath) {
      saveFile.push(`set -xg FIGPATH "${paths.join(':')}";`);
    }
    if(addSource) {
      saveFile.push('\nsource ~/.fig/user/aliases/aliases.fish;\n');
    }
    fig.fwrite("~/.fig/user/aliases/env.fish", saveFile.join('\n'), (error) => {
      console.log(`Error: ${error}`);
    });
  }

  function deletePath(line) {
    paths = paths.filter(aline => !(aline === line));
    savePaths();
  }
</script>

