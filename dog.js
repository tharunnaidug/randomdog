const img=document.getElementById("image")
const btn=document.getElementById("btn")


const getDog=()=>{

    fetch("https://dog.ceo/api/breeds/image/random")
    .then(response=>response.json())
    .then(json => {
        if(json.status=='success'){
        img.innerHTML=`<img src="${json.message}" alt="image">`
        }
        else{
            img.innerText=`There was some problem`
        }
    })
    
}
// getDog();
btn.onclick=() =>getDog();