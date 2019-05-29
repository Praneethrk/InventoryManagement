function placeRequest(inum, quant){
    const {PythonShell} = require("python-shell");

    var options = {
        // pythonOptions: ['-u'],
        scriptPath : './logic',
        args:[inum], 
    }

    var pyScript = new PythonShell('search.py', options);
    pyScript.on('message', function(message){
        if(message == "NULL"){
            alert("no such item")
        }else {

            var attributes = message.split('|');
            console.log(attributes[3]+ " ||" + quant);
            var num = 10;
            var num2 = 90;
            num = quant;
            num2 = attributes[3];
            if(num > num2){
                alert("Requested quantity out of stock");
            }else{
               //--------------------------------------
                
                    var ops = {
        // pythonOptions: ['-u'],
        scriptPath : './logic',
        args:[inum], 
    }

    var py = new PythonShell('deleteRecord.py', ops);
    py.on('message', function(msg){
        // console.log(message);
        });
    
        py = new PythonShell('search.py',ops);
        py.on('message', function(msg){
            var attributes = message.split('|');
            var ssh = 99;
            ssh = attributes[3];
            ssh = ssh -quant
            var newOps = {
                scriptPath : './logic',
                args:[attributes[0], attributes[1], attributes[2], quant, "updated"],
            }

            var pyScr = new PythonShell('insertRecord.py', newOps);
            pyScr.on('message', function(msss){
                console.log('Reached here on line 48');
            });

        });


                

//------------------------------------


                var options = {
                    scriptPath : './logic',
                    args:[inum, quant],
                }
                var python  = new PythonShell('insertRequest.py', options);
                python.on('message', function(mes){
                    alert(mes);
                })
            }



           
        }
        });
    }

