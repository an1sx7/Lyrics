let inp=document.getElementById("inp")
let input=document.getElementById("input")
let dv=document.getElementById("dv")
let list=document.getElementById('list')
async function hello() {
  let res=await fetch(`https://api.audd.io/findLyrics/?q=${input.value}&api_token=bf7d39e7fe8c19d504065609502c4504`)
  let js=await res.json()
  list.innerHTML=""
  js.result.map(el=>{
    let li=document.createElement('li')
    li.innerHTML=`${el.full_title}`
    li.addEventListener("click",()=>{
      fl(el.lyrics)
    })
    let hr=document.createElement("hr")
    list.appendChild(li)
    list.appendChild(hr)
  list.style.display="block"
  })
}

function fl(content){
  list.style.display="none"
  dv.innerHTML=""
  let words=content.split("\n")
  words.map(word=>{
    dv.innerHTML+=`
      <p>${word}</p>
    `
  })
  localStorage.setItem("lyrics",dv.innerHTML)
}
onload=()=>{
  dv.innerHTML+=localStorage.getItem("lyrics")
}
