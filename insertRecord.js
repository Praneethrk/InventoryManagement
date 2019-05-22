function insertRecord(){
    const {PythonShell} = require("python-shell");

    var inum = document.getElementById("inum").value;
    var name = document.getElementById("name").value;
    var desc = document.getElementById("desc").value;
    var quant = document.getElementById("quant").value;


    var options = {
        // pythonOptions: ['-u'],
        scriptPath : './logic',
        args:[inum, name, desc, quant, "added"], 
    }

    var pyScript = new PythonShell('insertRecord.py', options);
    pyScript.on('message', function(message){
        // console.log(message);
        alert(message)
        window.location.replace("index.html")
        });
    }

