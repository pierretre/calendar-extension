<script>
	import {createEventDispatcher} from 'svelte';
    
    export let date;
    export let cDate;

    export const events = [];

    const dayDate = new Date(date)
    const currentDate = new Date(cDate)
    const dateNum = dayDate.getDate()
    const dispatch = createEventDispatcher();

    function develop(){
        dispatch('displayDay', {
            text: dayDate
        });
    }

    function dayHighlight(){
        if(dayDate.getMonth() != currentDate.getMonth()) return "off"
        return (dateNum == currentDate.getDate())? "active" : "";
    }
</script>

<main>
    <div class={dayHighlight()} on:click={develop}>{dateNum}</div>
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