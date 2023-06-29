<script>
  let directoryConnect = false;

let fileHandle;
const pickerOpts = {
  types: [
    {
      description: "gesture.cato",
      accept: {
        "application/JSON": [".cato"],
      },
    },
  ],
  excludeAcceptAllOption: true,
  multiple: false,
};

async function getFile() {
  [fileHandle] = await window.showOpenFilePicker(pickerOpts);
}


let directory;
async function getDirectory() {
  try {
        directory = await window.showDirectoryPicker({
            id: 'AULI_CATO'
        });
        console.log(directory)
        if(typeof directory !== "undefined") {
        if ((await directory.queryPermission()) === 'granted') {
            let newFile = await directory.getFileHandle('cg.txt', { create: true });
            directoryConnect = true;
        }
    }

} catch(e) {
        console.log(e);
  }
}
</script>

<div>
  <p>Begin by clicking 'Start' and creating 'cg.txt'</p>
  <button on:click={getDirectory}>Directory Test</button>
  <p class={directoryConnect ? "connected" : "noConnect"}>Connected</p>
  <button on:click={getFile}>Access Cato</button>
</div>

<style>
  .connected {
    color: green;
  }

  .noConnect {
    opacity: 50%;
  }

</style>