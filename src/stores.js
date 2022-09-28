import { writable } from 'svelte/store';

function createDateStore() {
    let cDate = new Date()

    const { subscribe, set, update } = writable(0);

    return {
        subscribe,
        set: (date) => {
            // if (localStorage.getItem('date') === null) {
            
            // }
            cDate = new Date(date)
            console.log("new value")
            console.log(cDate)
        },
        reset: () => cDate = new Date()
    };
}

export const dateStore = createDateStore()


