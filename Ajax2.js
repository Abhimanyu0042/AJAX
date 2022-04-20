//----------------------------------------------------------------day 2----------------------------------------------------------------//

let get_btn = document.getElementById("btn1");
get_btn.addEventListener("click",buttonClickHandler);

function buttonClickHandler(){
    console.log("you have clicked the Get button");
    // create the instance of XMLHttpRequest Object

    const xhr = new XMLHttpRequest();
    // Open Request

    xhr.open('POST',"http://dummy.restapiexample.com/api/v1/create",true)  
    xhr.getResponseHeader('Content-Type' , 'application/json');
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
        
        //let lst = document.getElementById("list");
        //str="";
        //for(key in obj.data){
        //    str+=`<li>$(obj.data[key].employee_name)</li>`;
        //}
        //lst.innerHTML = str;
    }
        else{
            console.error("Some Error occured");
        }
    }
    // send the request to the server
    xhr.send();


// Illutration of on ready state change functions

// 0 UNSENT - Client has been created open() not called yet
// 1 OPENED - open() has been called 
// 2 HEADERS_RECEIVED - send() has been called and headers and statusare available
// 3 LOADING - Downloading responseText holds partial data
// 4 DONE - the operation is completed



}