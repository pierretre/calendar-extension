<script>
    export const events = [];

    let planningRows = ""

</script>

<main>
    <div class="wrapper">
        <div>test</div>
        <div>test</div>

        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>

        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>

        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
    </div>
</main>

<style>
    .wrapper div{
        float: left;
        background-color: hsl(180, 100%, 50%, 10%);
        outline: 1px solid;
    }

    .wrapper {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        /* grid-auto-rows: minmax(40%, auto); */
    }
</style>