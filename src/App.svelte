<script>
	import Calendar from "./Calendar.svelte";
	import DayInfos from "./DayInfos.svelte";
	
	var date = new Date();
	
	function handleMessage(event){
		const month = event.detail.month
		console.log(event.detail.date)
	}
</script>

<main>
	<div class="wrapper1">
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
	.wrapper1 {
        display: grid;
        grid-template-columns: repeat(2,1fr);
    }
</style>