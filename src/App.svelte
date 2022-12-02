<script>
	import Calendar from "./Calendar.svelte";
	import DayInfos from "./DayInfos.svelte";
</script>

<main>
	<div class="wrapper">
		<Calendar/>
		<DayInfos/>
	</div>
</main> 

<style>
	.wrapper {
        display: grid;
        grid-template-columns: repeat(2,1fr);
    }
</style>