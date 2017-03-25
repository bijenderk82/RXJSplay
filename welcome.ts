// (function(){
//     console.log("********************************")
//     console.log("this is the auto widget");

// document.write("<h1>this is the h1 tag</h1>");

// })()

import template from "./welcome.html";

class CTWidget {
    constructor(message: string){
        console.log(message + "= this is the constructor");
    }

    render() {
        document.write("<h1>this is the h1 tag</h1>");
    }
}

let wd = new CTWidget("bijender");
wd.render();