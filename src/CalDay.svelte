<script>
	import {createEventDispatcher} from 'svelte';
    
    export let date;
    export let cMonth;

    const dateObj = new Date(date)
    const currentDate = new Date()

    // set time to 0 for later comparison
    dateObj.setHours(0, 0, 0, 0)
    currentDate.setHours(0, 0, 0, 0)

    const dispatch = createEventDispatcher();

    function develop(){
        dispatch('displayDay', {
            text: "hi mom"
        });
    }

    function dayHighlight(){
        return ((dateObj.getTime() == currentDate.getTime())? "active" : "") + ((dateObj.getMonth() != cMonth)? " off" : "");
    }
</script>

<main>
    <div class={dayHighlight()} on:click={develop}>{dateObj.getDate()}</div>
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