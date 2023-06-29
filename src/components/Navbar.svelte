<script>
    import { authHandlers, showNav } from "../store/store";

    function logOut() {
        authHandlers.logout;
        showNav.set({
            isUser: false
        })
    }
</script>

<div>
    <div class="head">
        <img src="/fulllogo_transparent.png" alt="full logo" width="10%"/>
        <button button on:click={authHandlers.logout}>Log Out</button>
    </div>
    <nav>
        <a href="/dashboard">Demo</a>
        <a href="/fileTest">Configure</a>
    </nav>
</div>

    



<style>
    .head {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        color:#52525b;
        background-color: #fafafa;
    }



    button {
        padding: 2px 6px;
        color: #52525b;
        border: none;
        border-radius: 5px;
        display: flex;
    }

    nav {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        background-color: #52525b;
    }
    nav a{
        margin: .5em;
        text-decoration: none;
        font-weight: 800;
        color:#fafafa;
    }
    nav a:hover{
        text-decoration: underline;
    }
</style>