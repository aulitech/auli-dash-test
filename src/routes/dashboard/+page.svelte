<script>
	import { authHandlers } from "../../store/store";

    let testDataList = [];
    function info() {

    }
</script>

<div class="main-container">
    <div class="header-container">
        <h1>You have been logged in!</h1>
        <div>
            <button on:click={authHandlers.logout}>Log Out</button>
        </div>
    </div>
    <main>

    </main>
  
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
        padding: 10px 18px;
        border: 2px solid #52525b;
        border-radius: 5px;

    }

    main {
        display: flex;
        flex-direction: column;
        gap: 8px;
        flex: 1;
    }
</style>