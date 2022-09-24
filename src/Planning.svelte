<script>
    export let date = new Date();
    
    let current_date = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+ date.getDate()
    var events = [];

    let hoursCol = ""
    for(let i=0; i<12; i++)
        hoursCol += "<div style=\"background-color: red\">" + i*2 + ":00</div>" + "<div>&nbsp</div>"
    hoursCol += "<div>&nbsp</div>"

    let planningRows = ""

</script>

<main>
    <div id="outer">
        <div class="left" bind:innerHTML={hoursCol} contenteditable="false"></div>
        <div class="right">
            <div>test</div>
            <div>test</div>
            <div>test</div>
            <div>test</div>
            <div>test</div>
            <div>test</div>
            <div>test</div>
        </div>
    </div>
</main>

<style>
    /* .row:after {
        content: "";
        display: table;
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

    .left div{
        float: left;
        background-color: red;
    }

    .left {
        display: grid;
        grid-template-rows: repeat(24, 10%);
        float: left;
        text-decoration: underline dotted;
        text-align: right;
        width: 30%;
    }
    
    .right div{
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
    }
</style>