let myLeads = [] 

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteAll = document.getElementById("delete-all")
const tabBtn= document.getElementById("tab-btn")
// localStorage.setItem("myleads","www.leads.com")
// console.log( localStorage.getItem("myLeads") ) 
// localStorage.clear() 

const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )
// console.log(leadsFromLocalStorage)

tabBtn.addEventListener("click",function(){
    // console.log("clicked")
    // console.log(tabs[0].url)

    // chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    //     // since only one tab should be active and in the current window at once
    //     // the return variable should only have one entry
    //     let activeTab = tabs[0]
    //     let activeTabId = activeTab.id // or do whatever you need
    // })

    chrome.tabs.query({active: true, currentWindow: true},function(tabs){
        myLeads.push(tabs[0].url) 
        localStorage.setItem("myLeads",JSON.stringify(myLeads))
        render(myLeads)
    })
})

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


