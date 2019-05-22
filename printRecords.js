function printRecords(){
    const {PythonShell} = require("python-shell");

    var options = {
        // pythonOptions: ['-u'],
        scriptPath : './logic', 
    }

    var data =""
    var pyScript = new PythonShell('print.py', options);
    pyScript.on('message', function(message){
        // console.log(message);
        if(message == "None"){
            data += "<h3 class='sorry'>No records yet!</h3>"
        }else{
            records = message.split("$")
            temp = records.pop()
            console.log(records)
            data += "<table id='mytable' border='1'><thead><tr><th>iNUMBER</th><th>NAME</th><th>DESCRIPTION</th><th>QUANTITY</th></tr></th><tbody>"
            records.forEach(record => {
                items = record.split("|")
                data += "<tr><td>"+items[0]+"</td><td>"+items[1]+"</td><td>"+items[2]+"</td><td>"+items[3]+"</td></tr>"
            });
            data += "</tbody></table>"

        }
       
        document.getElementById('op').innerHTML = data;
        // console.log(message)
    });

}