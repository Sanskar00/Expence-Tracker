let name= document.querySelector("#name")
let date=document.querySelector("#date")
let amount=document.querySelector("#amount")
let addExpence=document.querySelector("button")
let table=document.querySelector("table")
let count=0;
addExpence.addEventListener('click',()=>{
    let tableRow=document.createElement("tr")
    let nameInput=document.createElement("td")
    let dateInput=document.createElement("td")
    let amountInput=document.createElement("td")
    let totalInput=document.createElement("td")
    let deleteButton=document.createElement("button")
    deleteButton.innerText='X'
    nameInput.innerText=name.value
    dateInput.innerText=date.value
    amountInput.innerText=amount.value
    totalInput.innerText+=amount.value
    tableRow.appendChild(nameInput)
    tableRow.appendChild(dateInput)
    tableRow.appendChild(amountInput)
    tableRow.appendChild(totalInput)
    tableRow.appendChild(deleteButton)
    count+=1
    if(table.rows[2]==undefined){
        totalInput=0;
        totalInput.innerText=parseInt(totalInput.innerText)+amount.value
    }
    else{
        totalInput.innerText=parseInt(table.rows[count-1]["cells"][3].innerText)+parseInt(amount.value)
    }

    table.appendChild(tableRow)
    deleteButton.addEventListener('click',()=>{
        tableRow.remove()
    })


})
