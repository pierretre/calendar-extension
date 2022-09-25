<script>
    export let dateObj;
    import CalDay from "./CalDay.svelte"

    const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
    var displayedDays = []
    updateUI()

    function updateUI(){
        displayedDays = getExtendedMonthDays(dateObj.getFullYear(), dateObj.getMonth())
    }

    function getExtendedMonthDays(year, month){    
        let dates = [];

        const firstDay = new Date(year, month, 1)
        firstDay.setDate(firstDay.getDate() - (firstDay.getDay()%7)+1)

        const lastDay = new Date(year, month + 1, 1)
        lastDay.setDate(lastDay.getDate()-1)
        lastDay.setDate(lastDay.getDate()+ (7-lastDay.getDay()%7));
        
        var d = new Date(firstDay) 
        while (d <= lastDay) {
            dates.push(new Date(d));
            d.setDate(d.getDate() + 1);
        }
        return dates;
    }
</script>

<main>
    <header>
        <button on:click={() => {
            dateObj.setMonth(dateObj.getMonth() - 1)
            updateUI()
            }}>-</button>
        {#key displayedDays}
            <h3 style="text-align: center;">{monthNames[dateObj.getMonth()]} {dateObj.getFullYear()}</h3>
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
        width: 50%;
    }
    
    .head{
        background-color: rgb(207, 21, 21);
        width: auto;
        height: 40%;
        text-align: center;
    }

    .wrapper {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
    }
</style>