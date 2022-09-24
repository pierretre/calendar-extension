<script>
    let hoursCol = ""
    for(let i=0; i<12; i++)
        hoursCol += "<div style=\"background-color: red\">" + i*2 + ":00</div>" + "<div>&nbsp</div>"
    hoursCol += "<div>&nbsp</div>"

</script>

<main>
    <div class="left" bind:innerHTML={hoursCol} contenteditable="false"></div> 
</main>

<style>
    /* .row:after {
        content: "";
        display: grid;
        clear: both;
    } */
/* 
    .left {
        float: left;
        text-decoration: underline dotted;
        text-align: right;
        width: 30%;
    }

    .right div {
        outline: 1px solid;
        float: left;
    }

    .right {
        background-color: aqua;
        float: left;
        width: 70%;
        display: grid;
        grid-template-rows: repeat(5, 20%);
    } */

    .left {
        display: grid;
        grid-template-rows: repeat(24, 10%);
        float: left;
        text-decoration: underline dotted;
        text-align: right;
        width: 30%;
    }
    
    /* .right div{
        float: left;
        background-color: aqua;
        outline: 1px solid;
    }

    .right {
        background-color: aqua;
        float: left;
        width: 70%;
        display: grid;
        grid-template-rows: repeat(24, 10%);
    } */
</style>