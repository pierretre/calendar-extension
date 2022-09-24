
<script>
    console.log(daysInMonth(new Date()))
    function daysInMonth(anyDateInMonth) {
        return new Date(anyDateInMonth.getFullYear(), 
                        anyDateInMonth.getMonth()+1, 
                        0).getDate();
    }

    function generateCalendar(){
        console.log("fill the calendar")

        var content = ""
        let date = new Date()

        for(let dayNb = 1; dayNb <= daysInMonth(date); dayNb++)
            content += "<tr>"

            // for(weekDay = date.getDay)


        content += "</tr>"
        document.getElementById("tbody").innerHTML = content
    }
</script>

<main>
    <div>
        <table id="table">
            <thead>
                <tr>
                    <th>mon</th>
                    <th>tue</th>
                    <th>wed</th>
                    <th>thu</th>
                    <th>fri</th>
                    <th>sat</th>
                    <th>sun</th>
                </tr>
            </thead>
            <tbody id="tbody">
            </tbody>
        </table>    
    </div>
</main>

<style>
    div{
        background-color: rgb(207, 21, 21);
        width: auto;
        height: 40%;
    }
</style>