<script>
    import { onMount } from 'svelte';
    import { auth, db } from '../lib/firebase/firebase'
	import { getDoc, doc, setDoc } from 'firebase/firestore';
    import {authStore, showNav} from "../store/store";
	import Navbar from '../components/Navbar.svelte';

    const nonAuthRoutes = ["/", "product"]

    let storedNav = false;
    showNav.subscribe((value) => {
        storedNav = value;
    })

    onMount(() => {
        console.log('mounting')
        const unsubscribe = auth.onAuthStateChanged(async user => {
            const currentPath = window.location.pathname

            if (!user && !nonAuthRoutes.includes(currentPath)) {
                window.location.href = "/";
                return;
            }

            if (user && currentPath === '/') {
                window.location.href = "/dashboard";
                return;
            }

            if (user) {
                showNav.set({
                    isUser: true
                })
            }

            if (!user) {
                return;
            }

            let dataToSetToStore;

            const docRef = doc(db, "users", user.uid);
            const docSnap = await getDoc(docRef);

            if (!docSnap.exists()) {
                const userRef = doc(db, "user", user.uid);

                dataToSetToStore = {
                    email: user.email,
                    uid: user.uid
                };
                //console.log(dataToSetToStore)
                await setDoc(userRef, dataToSetToStore, { merge: true });

            } else {
                const userData = docSnap.data()
                dataToSetToStore = userData;
            }
            authStore.update((current) => {
                return {
                    ...current,
                    user,
                    data: dataToSetToStore,
                    loading: false
                }
            })
        })
    })
</script>


<div>
    {#if storedNav.isUser}
    <Navbar/>
    {/if}
    <div class="main-container">
        <slot/>
    </div>
</div>

<style>
    .main-container {
        min-height: 100vh;
        background:#fafafa;
        color: #52525b;
        position: relative;
        display: flex;
        flex-direction: column;
    }
</style>