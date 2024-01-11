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
    renderLeads(myLeads)
}

inputBtn.addEventListener("click", function() {
    function renderLeads() {
        let listItems = ""
        for (let i = 0; i < myLeads.length; i++) {
            listItems += `
                <li>
                    <a target='_blank' href='${myLeads[i]}'>
                        ${myLeads[i]}
                    </a>
                </li>
            `
        }
        ulEl.innerHTML = listItems  
    }

    myLeads.push(inputEl.value)
    inputEl.value = ""

    localStorage.setItem("myLeads",JSON.stringify(myLeads))//to store the array to the local storage
    
    renderLeads()

    console.log(localStorage.getItem("myLeads"))
})

deleteAll.addEventListener("dblclick",function(){
    // console.log("double clicked")
    localStorage.clear()
    myLeads=[]
    renderLeads()
})


