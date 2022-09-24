<script>
    export let date;
    export let cDate;
    export const events = [];

    const dayDate = new Date(date)
    const currentDate = new Date(cDate)

    const dateNum = date.getDate()

    function develop(){
        // display events and all
        console.log("display "+daydate)
    }

    function dayHighlight(){
        if(dayDate.getMonth() != currentDate.getMonth()) return "off"
        console.log(dayDate.getDate()+"    "+currentDate.getDate())
        return (dayDate.getDate() == currentDate.getDate())? "active" : "";
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