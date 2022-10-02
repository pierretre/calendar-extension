<script>
    export let days;
    export let currentMonth;

    import CalDay from "./CalDay.svelte";

    function getWeekNb(){
        var numberOfDays = Math.floor((days[0] - (new Date(days[0].getFullYear(), 0, 1))) / (24 * 60 * 60 * 1000));
        return Math.ceil(( days[0].getDay() + 1 + numberOfDays) / 7);
    }
</script>

<main>
    <div class="weekNb">
        <span>{getWeekNb()}</span>
    </div>
    {#each days as day}
    <CalDay date={day} cMonth={currentMonth} on:displayDay/>
    {/each}
</main>

<style>
    main{
        display: grid;
        grid-template-columns: repeat(8, 1fr);
        height: min-content; 
    }
    .weekNb{            
        display: flex;
    }
    .weekNb span{
        align-self: flex-end;
        font-size: 60%;
    }
</style>