<script>
	import Calendar from "./Calendar.svelte";
	import browser from "webextension-polyfill";
	import Planning from "./Planning.svelte"
	
	var date = new Date();
	let current_date = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+ date.getDate();
	// let image = "https://images.unsplash.com/photo-1586074299757-dc655f18518c?fit=crop&w=1268&q=80";
	// function change() {
	// 	console.log("change !")
	// 	document.body.style = `background: url(${image})`;
	//    	browser.storage.local.set({ background: image });
	// }
</script>

<main>
	<!-- Image URL: <input type="text" bind:value={image} /> -->
	<!-- <button on:click={change}>Change</button> -->
	<!-- <p>{current_date}<p> -->
	<!-- <Calendar /> -->
	<Planning date={new Date()}/>
</main>  