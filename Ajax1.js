let get_btn = document.getElementById("btn1");
get_btn.addEventListener("click",buttonClickHandler);

function buttonClickHandler(){
    console.log("you have clicked the Get button");
    // create the instance of XMLHttpRequest Object

    const xhr = new XMLHttpRequest();
    // Open Request

    xhr.open('GET',"AjaxServer.txt",true)
    // when response is ready to deliver from server to client
    xhr.onprogress=function(){
        console.log("in progress....");
    }

    xhr.onload = function(){
        if (this.status=== 200){
            console.log(this.responseText);
        }
        else{
            console.error("Some Error occured");
        }
    }
    // send the request to the server
    xhr.send();
}