<script>
	import Calendar from "./Calendar.svelte";
	
	var date = new Date();
	let current_date = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+ date.getDate();
	
	function handleMessage(event){
		console.log(event.detail.text)
		const date = new Date(event.detail.text);		
	}
</script>

<main>
	<Calendar on:displayDay={handleMessage} dateObj={new Date()}/>
</main>  