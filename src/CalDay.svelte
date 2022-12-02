<script>
    export let date;
    export let cMonth;

    import { fly } from 'svelte/transition';    
    import { dateStore } from './stores';
    
    const dayDate = new Date(date)
    const currentDate = new Date()
    var dateObj = new Date()

    dateStore.subscribe((data) => {
		dateObj = new Date(data);
	})

    // set time to 0 for later comparison
    dayDate.setHours(0, 0, 0, 0)
    currentDate.setHours(0, 0, 0, 0)
    dateObj.setHours(0, 0, 0, 0)

    function dayHighlight(){
        return ((dayDate.getTime() == currentDate.getTime())? "current" : "") 
            + ((dayDate.getTime() == dateObj.getTime())? " selected" : "")
            + ((dayDate.getMonth() != cMonth)? " off" : "");
    }
</script>

<main>
    <div class={dayHighlight()}         
        in:fly={{ y: -8 }}
        on:click={() => {
            dateStore.update((data => {return dayDate}))
        }}
        on:keydown
        on:keypress>
        {dayDate.getDate()}
    </div>
</main>

<style>
    :hover{
        background-color: coral;
    }

    .off{
        opacity: 30%;
    }

    .current{
        outline:3px solid black;
    }

    .selected{
        background-color: darkorange;
    }
    
    div{
        text-align: center;
    }
</style>