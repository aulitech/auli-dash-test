<script>
  let txtData = [];
  let currTxt = "";
  let fileName = "";
  let download = false;
  //let newFile;
  let saveFile;

  async function createFile() {
    try {
        saveFile = await window.showSaveFilePicker({
            suggestedName: 'filename.txt',
            types: [{
                accept: {
                    'text/plain': ['.txt'],
                }
            }],
        });
        const file = await saveFile.getFile();
        const contents = await file.text();
    } catch(e) {
        console.log(e);
    }
  }

  async function addData() {
    if(typeof saveFile !== "undefined") {
        if ((await saveFile.queryPermission()) === 'granted') {
            const writable = await saveFile.createWritable();
            await writable.write(currTxt);
            await writable.close();
        }
    }
    txtData = [...txtData, currTxt];
    currTxt = "";
  }


  async function downloadFile() {
    download = true;
      const blob = new Blob([txt], {type: 'text/plain'});
      const file = new File([blob], `${fileName}.txt`, { type: blob.type });
      
    }

</script>

<div class="wrapper">
  <h1>Save File to Cato</h1>
  
  <div class="file-options">
      <div class="option file-name">
        <div>
          <p>First create file and then add text to file, it will update.</p>
          <br/>
          <button on:click={createFile} class="save-btn">Create File</button>
        </div>
        <div>
          <p>File text:</p>

          <ul>
            {#each txtData as data}
              <li>{data}</li>
            {/each}
          </ul>
        </div>
        <div>
          <h6>Add Text</h6>
          <div class="row">
            <input bind:value={currTxt} placeholder="text"/>
            <button class="save-btn" on:click={addData}>Add</button>
          </div>
        </div>
      </div>
    </div>
  </div>

<style>
.wrapper{
  border-radius: 7px;
  padding: 30px 25px 40px;
}

.wrapper h1 {
  display: flex;
  align-items: center;
  justify-content: center;
}
.wrapper :where(textarea, input, button){
  width: 100%;
  outline: none;
  border: none;
  font-size: 17px;
  border-radius: 5px;
}


.wrapper input{
  resize: none;
  padding: 8px 13px;
  font-size: 17.6px;
  border: 1px solid #ccc;
}
.wrapper .file-options{
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  align-items: center;
  justify-content: center;
}

.row {
  display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
}

.option input{
  height: 50px;
  padding: 0 13px;
  border-radius: 5px;
  border: 1px solid #bfbfbf;
}
.save-btn{
  color: #fff;
  cursor: pointer;
  opacity: 0.6;
  padding: 14px 0;
  background: #17A2B8;
}
.save-btn:hover{
  background: #148c9f;
}
</style>