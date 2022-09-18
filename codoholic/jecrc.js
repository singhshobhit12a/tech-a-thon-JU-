//elements
const elements = document.querySelectorAll(".btn");


//event
elements.forEach(element =>
    {
        element.addEventListerner('click',() =>{
            let command = element.dataset['element'];
            if(command=='createLink'|| command=="isertImage"){
                let url = prompt('Enter the link here:','http://')
                document.execCommand(command,false,url);
            }
            else
            {
            document.execCommand(command,false,null);
            }
        });
    });