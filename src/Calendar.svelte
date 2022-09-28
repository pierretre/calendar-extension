<script>
    // props :
    export let dateObj;

    // imports :
    import CalDay from "./CalDay.svelte"
	import {createEventDispatcher} from 'svelte';

    // declaring const here
    const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
    const dispatch = createEventDispatcher();

    var displayedDays = []
    
    updateUI()

    function updateUI(){
        displayedDays = getExtendedMonthDays(dateObj.getFullYear(), dateObj.getMonth())
    }

    // Function that returns a list of all days to display in the month
    //      Adds last days of the previous month and first days of the next one's 
    //      to fill the calendar starting from monday to sunday
    function getExtendedMonthDays(year, month){    
        let dates = [];

        const firstDay = new Date(year, month, 1)
        firstDay.setDate(firstDay.getDate() - (firstDay.getDay()%7)+1)

        const lastDay = new Date(year, month + 1, 1)
        lastDay.setDate(lastDay.getDate()-1)
        lastDay.setDate(lastDay.getDate() + ((d = lastDay.getDay())? 7-d : 0));
        
        var d = new Date(firstDay) 
        while (d <= lastDay) {
            dates.push(new Date(d));
            d.setDate(d.getDate() + 1);
        }

        return dates;
    }

    // // Called on:click on CalDay  
    // function develop(){
    //     dispatch('displayDay', {
    //         date: dateObj.toDateString()
    //     });
    // }
</script>

<main>
    <header>
        <button on:click={() => {
            dateObj.setMonth(dateObj.getMonth() - 1)
            updateUI()
            }}>-</button>
        {#key displayedDays}
            <h3>{monthNames[dateObj.getMonth()]} {dateObj.getFullYear()}</h3>
        {/key}
        <button on:click={() => {
            dateObj.setMonth(dateObj.getMonth() + 1)
            updateUI()
            }}>+</button>
    </header>
    <body>
        <div class="wrapper head">
            <div>Mon</div>
            <div>Tue</div>
            <div>Wed</div>
            <div>Thu</div>
            <div>Fri</div>
            <div>Sat</div>
            <div>Sun</div>
        </div>
        {#key displayedDays}
        <div class="wrapper">
            {#each displayedDays as day}
            <CalDay date={day} cMonth={dateObj.getMonth()} on:displayDay/>
            {/each}
        </div>
        {/key}
    </body>    
</main>

<style>
    body{
        outline: 1px solid black;
    }

    header{
        text-align: center;
    }

    header > *{
        display: inline-block;
    }

    h3{
        text-align: center;
        width: 70%;
    }
    
    .head{
        background-color: rgb(207, 21, 21);
        width: auto;
        text-align: center;
    }

    .wrapper {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
    }
</style>