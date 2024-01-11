let myLeads = [] 

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteAll = document.getElementById("delete-all")
// localStorage.setItem("myleads","www.leads.com")
// console.log( localStorage.getItem("myLeads") ) 

// localStorage.clear() 

const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )
// console.log(leadsFromLocalStorage)

if(leadsFromLocalStorage){
    myLeads=leadsFromLocalStorage
    render(myLeads)
}

function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems  
}
inputBtn.addEventListener("click", function() {

    myLeads.push(inputEl.value)
    inputEl.value = ""

    localStorage.setItem("myLeads",JSON.stringify(myLeads))//to store the array to the local storage
    
    render(myLeads)

    console.log(localStorage.getItem("myLeads"))
})

deleteAll.addEventListener("dblclick",function(){
    // console.log("double clicked")
    localStorage.clear()
    myLeads=[]
    render(myLeads)
})


