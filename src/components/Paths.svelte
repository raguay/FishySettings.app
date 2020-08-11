<div id='figpath'>
  <h3>Fig Paths</h3>
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
</div>

<style>
  #figPath {
    display: flex;
    flex-direction: column;
    text-align: left;
    padding: 0px;
    margin: 0px;
    width: 100%;
    height: 100%;
  }

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

  let rawFile = '';
  let paths = [];
  let rawFigPath = '';
  
  onMount(() => {
    fig.fread('~/.fig/exports/env.fish', (data, err) => {
      if(err) {
        //
        // Error: file most likely doesn't exist. Read from zsh version.
        //
        fig.fread('~/.fig/exports/env.sh',(data, err) => {
          if(err) {
            paths = ['~/.fig/bin','~/run'];
            rawFile = `set -xg FIGPATH "~/.fig/bin:~/run"\n\nsource "~/.fig/exports/aliases.fish"\n`;
            fig.fwrite('~/.fig/exports/env.fish', rawFile, (err) => {});
          } else {
            if((data !== null)&&(typeof data === 'string')&&(data !== '')) {
              rawFile = data.split('\n');
              rawFigPath = rawFile.filter(line => line.includes('FIGPATH'))[0];
              paths = rawFigPath.split('=')[1].replace(new RegExp('\"','g'),'').split(':');
              rawFile = `set -xg FIGPATH "~/.fig/bin:~/run"\n\nsource "~/.fig/exports/aliases.fish"\n`;
              fig.fwrite('~/.fig/exports/env.fish',rawFile, (err) => {});
            }
        }});
      } else {
        //
        // Read the paths that we currently have.
        //
        if((data !== null)&&(typeof data === 'string')&&(data !== '')) {
          rawFile = data.split('\n');
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
    var saveFile = rawFile.map(line => {
      if(line.includes('FIGPATH')) {
        line = `set -xg FIGPATH "${paths.join(':')}"`;
      }
      return line;
    });
    fig.fwrite("~/.fig/exports/env.fish", saveFile.join('\n'), (error) => {
      console.log(`Error: ${error}`);
    });
  }

  function deletePath(line) {
    paths = paths.filter(aline => !(aline === line));
    savePaths();
  }
</script>

