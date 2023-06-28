<script>
	import { authHandlers, authStore } from "../store/store";

    let email="";
    let password="";
    let confirmPass="";
    let error = false;
    let register = false;
    let authenticating = false;

    async function handleAuth() {
        if (authenticating) {
            return;
        }
        if(!email || !password || (register && !confirmPass)) {
            error=true;
            return;
        }

        authenticating = true;
        try {
            if (!register) {
                await authHandlers.login(email, password);
            } else {
                await authHandlers.signup(email, password);

            }
        }  catch(err) {
            console.log('auth error occured',  err)
            error = true;
        }
    }

    function handleRegister() {
        register = !register;
    }
    
</script>

<div class=auth-container>
    <form>
        <h1>{register ? "Register" : "Login"}</h1>
        {#if error}
        <p class="error">Email or password is incorrect.</p>
        {/if}
        <label>
            <input 
                bind:value={email}
                type="email" 
                placeholder="Email" 
            />
        </label>
        <label>
            <input 
                bind:value={password}
                type="password" 
                placeholder="Password"
            />
        </label>
        {#if register}
        <label>
            <input
                bind:value={confirmPass} 
                type="password" 
                placeholder="Confirm Password" 
            />
        </label>
        {/if}
        <button on:click={handleAuth} type="button">
            {#if authenticating}
            -loading-
            {:else}
            Submit
            {/if}
        </button>
    </form>
    <br/>
    <div>
        {#if register}
            <div class="whichAuth">
                <p>Already have an account?</p>
                <button  class="logReg" on:click={handleRegister} on:keydown={() => {}}>LOGIN</button>
            </div>
        {:else}
            <div class="whichAuth">
                <p>Don't have an account?</p>
                <button class="logReg" on:click={handleRegister} on:keydown={() => {}}>REGISTER</button>
            </div>
        {/if}
    </div>
</div>

<style>
    .auth-container {
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        flex: 1;
        padding: 24px;
    }

    h1 {
        text-align: center;
        font-size: 3rem;
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 14px;
        width: 400px;
        max-width: 100%;
        margin:0 auto;
    }

    form label {
        position: relative;
        border: 1px solid #52525b;
        border-radius: 5px;
    }

    form input {
        width: 100%;
        border: none;
        background: transparent;
        color: #52525b;
        padding: 14px;
    }

    form input:focus {
        border: none;
        outline: none;
    }

    form button {
        background: #52525b;
        color: white;
        border: none;
        padding: 10px 0px;
        border-radius: 5px;
        cursor: pointer;
        font-size: 1.2rem;
    }

    form button:hover {
        background: #71717a;
    }

    .error {
        color:indianred;

    }

    .whichAuth {
        display: flex;
        margin: 10px 0px;
        justify-content: space-between;
        flex-direction:row;
    }

    .logReg {
        color: #93c5fd;
        margin: 0px 20px;
        padding: 1px;
    }

    .logReg:hover {
        cursor: pointer;
        text-shadow: 1px 1px 2px #dbeafe;
        border-radius: 5px;
    }

</style>