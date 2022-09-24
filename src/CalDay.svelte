<script>
    export let date;
    export let cDate;
    export const events = [];

    date = new Date(date)
    const current_date = new Date(cDate)

    const dateNum = date.getDate()

    function develop(){
        // display events and all
        console.log("display "+date)
    }

</script>

<main>
    <div class="date" on:click={develop}>
        {dateNum}
    </div>
</main>

<style>
    :hover{
        background-color: coral;
    }
</style>