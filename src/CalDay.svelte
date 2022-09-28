<script>
    export let date;
    export let cMonth;

    import { fly } from 'svelte/transition';    
	import {createEventDispatcher} from 'svelte';
    
    const dateObj = new Date(date)
    const currentDate = new Date()
    const dispatch = createEventDispatcher();

    // set time to 0 for later comparison
    dateObj.setHours(0, 0, 0, 0)
    currentDate.setHours(0, 0, 0, 0)

    function dayHighlight(){
        return ((dateObj.getTime() == currentDate.getTime())? "active" : "") + ((dateObj.getMonth() != cMonth)? " off" : "");
    }
</script>

<main>
    <div class={dayHighlight()}         
        in:fly={{ y: -8 }}
        on:click={() => {
            dispatch('displayDay', {
                date: dateObj.toDateString(),
                month: cMonth
            });
        }}>
        {dateObj.getDate()}
    </div>
</main>

<style>
    :hover{
        background-color: coral;
    }

    .off{
        opacity: 30%;
    }

    .active{
        outline:3px solid black;
    }
    
    div{
        text-align: center;
    }
</style>