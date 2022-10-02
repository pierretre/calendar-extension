<script>
    // props :
    export let dateObj;

    // imports :
    import CalDay from "./CalDay.svelte"
    import Week from "./Week.svelte";

    // declaring const here
    const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];

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

    function getWeeks(){
        let ret = []
        for (let i=0; i < (displayedDays.length/7); i++) {
            ret[i] = displayedDays.slice(i*7, (i+1)*7)
        }
        return ret
    }
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
        <div class="head">
            <div>&nbsp;</div>
            <div>Mon</div>
            <div>Tue</div>
            <div>Wed</div>
            <div>Thu</div>
            <div>Fri</div>
            <div>Sat</div>
            <div>Sun</div>
        </div>
        {#key displayedDays}
            {#each getWeeks() as week}
            <Week days={week} currentMonth={dateObj.getMonth()} on:displayDay/>
            {/each}
        {/key}
        <!-- {#key displayedDays}
        <div>
            {#each displayedDays as day}
            <CalDay date={day} cMonth={dateObj.getMonth()} on:displayDay/>
            {/each}
        </div>
        {/key} -->
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
        display: grid;
        grid-template-columns: repeat(8, 1fr);
        background-color: rgb(207, 21, 21);
        width: max-content;
        text-align: center;
    }

    /* body > div {
        display: grid;
        grid-template-columns: repeat(8, 1fr);
    } */
</style>