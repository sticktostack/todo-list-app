let resultBox = document.querySelector("#searchbox");
let addBtn = document.querySelector("#addbtn");
let resultarea = document.querySelector(".resultarea");
let resultsArray = [];
// let delebuttons = [];

addBtn.addEventListener('click',() => {
    if(resultBox.value === ''){
        alert('please write someting')
    }else{
        resultsArray.push(resultBox.value);
        console.log(resultsArray);
        resultarea.innerHTML = ''

        resultsArray.forEach((result) =>{
            console.log("result " + result);
            let resultdiv = document.createElement('div')
            resultdiv.id = 'results'
            
            let textDiv = document.createElement('div')
            textDiv.id = 'resultext'
            textDiv.innerHTML = result

            let deleteButtonAreaDiv = document.createElement("div");
            deleteButtonAreaDiv.id = "deletebuttonarea";

            let deleteButton = document.createElement("button");
            deleteButton.id = "deletebutton";
            deleteButton.innerHTML = '<i class="ri-delete-bin-6-line"></i>';

            // delebuttons.push(deleteButton)
           
            deleteButton.addEventListener('click',() => {
                resultdiv.remove()
                let index = resultsArray.indexOf(result)
                if(index>-1){
                    resultsArray.splice(index, 1);
                }
            })
            // console.log(resultsArray);
            deleteButtonAreaDiv.appendChild(deleteButton);
            resultdiv.appendChild(textDiv);
            resultdiv.appendChild(deleteButtonAreaDiv);
            resultarea.appendChild(resultdiv) 
        })
    }
})