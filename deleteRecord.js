function deleteRecord(){
    const {PythonShell} = require("python-shell");

    var inum = document.getElementById("inum").value;
    var options = {
        // pythonOptions: ['-u'],
        scriptPath : './logic',
        args:[inum], 
    }

    var pyScript = new PythonShell('deleteRecord.py', options);
    pyScript.on('message', function(message){
        // console.log(message);
        alert(message)
        window.location.replace("index.html")
        });
    }

