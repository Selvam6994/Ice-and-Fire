let body=document.createElement('div')
body.setAttribute("id","main")
body.innerHTML="<div id= navbar></div>"
document.body.append(body)

let textIcon=document.createElement("div")
textIcon.setAttribute("id","icon")
textIcon.innerHTML="<h2 id=logo>A Song Of Ice And Fire</h2>"
document.getElementById("navbar").appendChild(textIcon)

let menubar=document.createElement('div')
menubar.setAttribute("id","menu")
menubar.innerHTML="<ul><li><a href=index.html>Home</a></li><li><a href=index1.html>About</a></li></ul>"
document.getElementById("icon").appendChild(menubar)

let getDetails=document.createElement("div")
getDetails.setAttribute("id","input")
getDetails.innerHTML="<input id=textBox placeholder=Type_book_numbers_from_1_to_12>"
document.body.append(getDetails)

let error=document.createElement("div")
error.setAttribute("id","inputError")
error.innerHTML="<span id=er></span>"
document.getElementById('input').appendChild(error)

let searchButton=document.createElement('div')
searchButton.setAttribute("id","buttonDiv")
searchButton.innerHTML="<button id=search onclick=getData()>Get Details</button>"
document.getElementById("input").appendChild(searchButton)

let dataDiv = document.createElement('div')
dataDiv.setAttribute("id","booksData")
dataDiv.innerHTML='<ul id=list><li id=list1><li id=list2><li id=list3><li id=list4><li id=list5><li id=list6></li></li></li></li></li></li></ul>'
// dataDiv.innerHTML='<ul id=list></ul>'
document.body.append(dataDiv)

async function getData(){
    let inputValues=document.getElementById('textBox').value
    let data = await fetch(`https://anapioficeandfire.com/api/books/${inputValues}`)
    let data1=await data.json()
    console.log(data1)
    let Name=data1.name;
    let ISBN=data1.isbn;
    let pages=data1.numberOfPages;
    let author=data1.authors;
    let published=data1.released;
    let publisher=data1.publisher;
    
if(document.getElementById('textBox').value===''){
    document.getElementById("er").innerText="Please enter the book number"
    document.getElementById('list1').innerText= ``
    document.getElementById('list2').innerText= ``
    document.getElementById('list3').innerText= ``
    document.getElementById('list4').innerText= `` 
    document.getElementById('list5').innerText= `` 
    document.getElementById('list6').innerText= ``
}else{
    document.getElementById("er").innerText=""
    document.getElementById('list1').innerText= `Name of Book : ${Name}`
    document.getElementById('list2').innerText= `ISBN : ${ISBN}`
    document.getElementById('list3').innerText= `Number of Pages : ${pages}`
    document.getElementById('list4').innerText= `Authors : ${author}` 
    document.getElementById('list5').innerText= `Publisher : ${publisher}` 
    document.getElementById('list6').innerText= `Published on : ${published}` 
    
    document.getElementById("textBox").value="";
}
}
getData()