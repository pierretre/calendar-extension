<script>
    import CalDay from "./CalDay.svelte"

    const current_date = new Date();
    const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];

    function getExtendedMonthDays(year, month){    
        const dates = [];

        const firstDay = new Date(year, month, 1)
        firstDay.setDate(firstDay.getDate() - (firstDay.getDay()%7)+1)

        const lastDay = new Date(year, month + 1, 1)
        lastDay.setDate(lastDay.getDate()-1)
        lastDay.setDate(lastDay.getDate()+ (7-lastDay.getDay()%7));
        
        // console.log(firstDay)
        // console.log(lastDay)

        var d = new Date(firstDay) 
        while (d <= lastDay) {
            dates.push(new Date(d));
            d.setDate(d.getDate() + 1);
        }
        return dates;
    }

    var displayedDays = getExtendedMonthDays(current_date.getFullYear(), current_date.getMonth())

</script>

<main>
    <h3 style="text-align: center;">{monthNames[current_date.getMonth()]}</h3>
    <div class="wrapper head">
        <div>Mon</div>
        <div>Tue</div>
        <div>Wed</div>
        <div>Thu</div>
        <div>Fri</div>
        <div>Sat</div>
        <div>Sun</div>
    </div>
    <div class="wrapper">
        {#each displayedDays as day}
            <CalDay date={day} cDate={current_date}/>
        {/each}
    </div>
</main>

<style>
    .head{
        background-color: rgb(207, 21, 21);
        width: auto;
        height: 40%;
        text-align: center;
    }

    /* .wrapper div{
        float: left;
        background-color: hsl(180, 100%, 50%, 10%);
        outline: 1px solid;
    } */

    .wrapper {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        /* grid-auto-rows: minmax(40%, auto); */
    }
</style>