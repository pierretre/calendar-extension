<script>
    export let date;

    const dateObj = new Date(date)
    const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

</script>

<main>
    <h2 >{weekDays[dateObj.getDay()]} {dateObj.getDate()}</h2>

</main> 

<style>
    h2{
        text-align: center;
    }
</style>