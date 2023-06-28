<script>
    import { authHandlers, showNav } from "../store/store";

    function logOut() {
        authHandlers.logout;
        showNav.set({
            isUser: false
        })
    }
</script>

<nav>
    <a href="/dashboard">To Do List</a>
    <a href="/fileTest">File Test</a>
    <div>
        <button on:click={authHandlers.logout}>Log Out</button>
    </div>
</nav>


<style>
    nav {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        background-color: #52525b;
    }
    nav a{
        margin: .5em;
        color: white;
        text-decoration: none;
        font-weight: 800;
    }
    nav button {
        padding: 2px 6px;
        background: white;
        color: #52525b;
        border: none;
        border-radius: 5px;
        display: flex;
    }
</style>