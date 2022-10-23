<script>
	import Calendar from "./Calendar.svelte";
	import DayInfos from "./DayInfos.svelte";
	import {dateStore} from './stores.js'

	// Handle day being return when clicked on calendar
	function handleMessage(event){
		dateStore.set(new Date(event.detail.date))
		const month = event.detail.month
		console.log(event.detail.date)
	}
</script>

<main>
	<div class="wrapper">
		<div>
		<Calendar  
			dateObj={$dateStore}
			on:displayDay={handleMessage}/>
		</div>
		<div>
			{#key $dateStore}
			<DayInfos date={$dateStore}/>
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