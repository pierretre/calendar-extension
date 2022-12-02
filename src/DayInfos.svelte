<script>
    import { dateStore } from './stores';

    const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var dateObj = new Date();

    dateStore.subscribe((data) => {
		dateObj = new Date(data);
	})
</script>

<main>
    <header>
        <h2 >{weekDays[dateObj.getDay()]} {dateObj.getDate()}</h2>
        <button on:click={() => {
            console.log("clicked on today btn")
            dateStore.update( data => {return new Date()})
        }}>Today</button>
    </header>
</main> 

<style>
    header{
        text-align: center;
    }

    header > *{
        display: inline-block;
    }
    h2{
        text-align: center;
    }
</style>