<script>
    import { authHandlers, todoStore } from '../../store/store';

    let todoList = ["Something to do"];
    let currTodo = "";
    let error = false;
    let download = false;
    let txtLink = "";
    let firstTodo = 0;

    function addTodo() {
        if(firstTodo === 0) {
            let remove = todoList.shift();
            todoList = remove;
            return;
        } 
        error = false;
        if(!currTodo) {
            error = true;
        }
        todoList = [...todoList, currTodo];
        currTodo = "";
    }

    function setUpData() {
        let todoMap = [];
        let stored = {};

        todoStore.subscribe((value) => {
            stored = value;
        });

        const mapTodoList = (item, index) => {
            return todoMap = [...todoMap, `${index + 1}. ${item}`];
        }
        
        todoStore.set({
            data: []
        });
        console.log("Reset todoStore")
        
        if(stored.data.length === 0) {
            todoList.map(mapTodoList);
            todoStore.set({
                data: todoMap
            });
            console.log("Successful set todoStore");
            download = true;
            return downloadFile(todoMap);
        }
    }

    function downloadFile(data) {
        const blob = new Blob([data], {type: 'text/plain'});
        txtLink = URL.createObjectURL(blob);
    }

</script>

<div class="main-container">
    <div class="header-container">
        <h1>You have been logged in.</h1>
    </div>
    <div class="header-container">
        <button class="saveBtn" on:click={setUpData}>Save</button>
        {#if download}
        <a download="test.txt" href={`${txtLink}`}>Download text file</a>
        {/if}
    </div>
    <main>
        {#each todoList as todo, index}
        <div>
            <p>
                {index+1}. {todo}
            </p>
            <div class="actions">
                <button>--trash--</button>
                <button>--edit--</button>
            </div>
        </div>
        {/each}
    </main>
    <div class={"enterTodo"}>
        <input bind:value={currTodo} type="text" placeholder="Enter todo"/>
        <button on:click={addTodo}>Add</button>
    </div>
</div>

<style>
    .main-container {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        gap: 24px;
        padding: 24px;
        width: 100%;
        max-width:1000px;
        margin: 0 auto;
    }

    .header-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .header-container button {
        background: #52525b;
        color: white;
        padding: 8px 10px;
        border: 2px solid #52525b;
        border-radius: 5px;
        display: flex;
    }
    .saveBtn {
        background: #52525b;
        color: white;
        padding: 8px 10px;
        border: 2px solid #52525b;
        border-radius: 5px;
        display: flex;
    }

    main {
        display: flex;
        flex-direction: column;
        gap: 8px;
        flex: 1;
    }

    .errorTodo {
        border-color: 2px solid red;
    }

    .enterTodo {
        display: flex;
        align-items:stretch;
        border: 1px solid #52525b;
        border-radius: 5px;
    }

    .enterTodo input {
        background: #52525b;
        border: none;
        padding: 14px;
        color: white;
        flex: 1;
        font-size: 1rem;
    }

    .enterTodo input:focus {
        outline: none;
    }

    .enterTodo button {
        padding: 10px 20px;
        background: #52525b;
        font-weight: 400;
        color: white;
        border: none;
        border-left: 1px solid white;
        font-size: 1.2rem;
    }

    .enterTodo button:hover {
        cursor: pointer;
        opacity: 70%;
    }
</style>