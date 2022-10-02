<script>
	import Calendar from "./Calendar.svelte";
	import DayInfos from "./DayInfos.svelte";
	
	var date = new Date();
	
	// Handle day being return when clicked on calendar
	function handleMessage(event){
		date = new Date(event.detail.date)
		const month = event.detail.month
		console.log(event.detail.date)
	}
</script>

<main>
	<div class="wrapper">
		<div>
		<Calendar 
			on:displayDay={handleMessage} 
			dateObj={date}/>
		</div>
		<div>
			{#key date}
			<DayInfos date={date}/>
			{/key}
		</div>
	</div>
</main> 

<style>
	.wrapper {
        display: grid;
        grid-template-columns: repeat(2,1fr);
    }
</style>