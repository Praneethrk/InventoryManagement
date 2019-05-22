function populateForm(){
    const {PythonShell} = require("python-shell");
    var key = document.getElementById("initKey").value;

    var options = {
        // pythonOptions: ['-u'],
        scriptPath : './logic',
        args:[key], 
    }

    var pyScript = new PythonShell('search.py', options);
    pyScript.on('message', function(message){
        if(message == "NULL"){
            alert("record not found")
            window.location.replace("index.html")
        }else{
            document.getElementById("initForm").style.display = "none";
            document.getElementById("updateForm").style.display = "block";
            record = message.split('|')
            document.getElementById("inum").value = record[0];
            document.getElementById("name").value = record[1]
            document.getElementById("desc").value = record[2]
            document.getElementById("quant").value = record[3]

        }
        
        });

}

function saveUpdate(){
    const {PythonShell} = require("python-shell");

    var inum = document.getElementById("inum").value;
    var name = document.getElementById("name").value
    var desc = document.getElementById("desc").value
    var quant = document.getElementById("quant").value

    var options = {
        // pythonOptions: ['-u'],
        scriptPath : './logic',
        args:[inum], 
    }

    var pyScript = new PythonShell('deleteRecord.py', options);
    pyScript.on('message', function(message){
        // console.log(message);
        });

     options = {
        scriptPath : './logic',
        args:[inum, name, desc, quant, "updated"],
    }

    var script = new PythonShell('insertRecord.py', options);
    script.on('message', function(message){
        // console.log(message);
        alert(message)
        window.location.replace("index.html")
        });
}