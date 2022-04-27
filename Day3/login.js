//----------------------------------------------------------------day 3----------------------------------------------------------------//

let get_btn = document.getElementById("btn1");
get_btn.addEventListener("click",buttonClickHandler);

function buttonClickHandler(){
    console.log("you have clicked the Get button");
    // create the instance of XMLHttpRequest Object

    const xhr = new XMLHttpRequest();
    // Open Request

    //xhr.open('POST',"http://dummy.restapiexample.com/api/v1/create",true)
    xhr.open('GET',"loginServer.JSON",true)  
    //xhr.getResponseHeader('Content-Type' , 'application/json');
    // when response is ready to deliver from server to client
    xhr.onprogress=function(){
        console.log("in progress....");
    }

    xhr.onreadystatechange=function(){
        console.log("ready state is", xhr.readyState);
    }

    xhr.onload = function(){
        if (this.status=== 200){
            let obj = JSON.parse(this.responseText);
            console.log(obj);
        
        let input = document.getElementById("u1").value;
        let pass = document.getElementById("p1").value;
        for(key in obj.Users){
            if(obj.Users[key].Username==input && obj.Users[key].Password==pass ){

            console.log("Login is Successful...!!");
        break;}
            else{
                console.log("Login Declined...!!");
            }
        }
    }
        else{
            console.error("Some Error occured");
        }
    }
    xhr.send();
    // send the request to the server
    //prmtrs = '{"name":"Ram","salary":"12000","age":"25"}';
    //xhr.send(prmtrs);
    //console.log("work done......!")

}