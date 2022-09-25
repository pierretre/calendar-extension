<script>
	import Calendar from "./Calendar.svelte";
	
	var date = new Date();
	let current_date = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+ date.getDate();
	
	function handleMessage(event){
		const date = new Date(event.detail.date);	
		// console.log(date)	
	}
</script>

<main>
	<Calendar on:displayDay={handleMessage} dateObj={new Date()}/>
</main>  