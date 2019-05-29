


function printRequests(){
    const {PythonShell} = require("python-shell");

    var options = {
        // pythonOptions: ['-u'],
        scriptPath : './logic', 
    }

    var data =""
    var pyScript = new PythonShell('printRequest.py', options);
    pyScript.on('message', function(message){
        // console.log(message);
        if(message == "None"){
            data += "<h3 class='display sorry'>No requests yet!</h3>"
        }else{
            records = message.split("$")
            temp = records.pop()
            // console.log(records)
            data += "<table class='display table table-striped' id='mytable' border='1'><thead class='thead-dark'><tr><th>iNUMBER</th><th>REQUESTED QUANTITY</th></tr></th><tbody>"
            records.forEach(record => {
                items = record.split("|")
                data += "<tr><td>"+items[0]+"</td><td>"+items[1]+"</td></tr>"
            });
            data += "</tbody></table>"

        }
       
        document.getElementById('reqDiv').innerHTML = data;
        // console.log(message)
    });

}