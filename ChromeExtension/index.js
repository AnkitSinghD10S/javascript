
// here "click" sepcify the event and the function is define which is to be envoked

let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
const inputEl = document.getElementById("input-el")
const inputBtn=document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
inputBtn.addEventListener("click",function(){
    myLeads.push(inputEl.value)
})
let listItems=""
for(let i=0;i<myLeads.length;i++){
//ulEl.innerHTML+="<li>"+myLeads[i]+"</li>"
// create element
// set text content
// append to ul
// const li =document.createElement("li")
// li.textContent = myLeads[i]
// ulEl.append(li)
    listItems += "<li>"+myLeads[i]+"</li>"
    // console.log(listItems)
}
ulEl.innerHTML = listItems