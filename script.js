let inp = document.querySelector(".inp")
let inp_btn = document.querySelector(".button1")

inp_btn.addEventListener("click",function () {
    let inp = document.querySelector(".inp")
    let text = inp.value 
    if (text != ''){
        let code = `
            <div class="review">
                            <img src="img/image (1).png" alt="" class="Message_img">
                            <p>${text}</p>
                        </div>
            `
        let review = document.querySelector(".reviews")
        review.innerHTML += code
        inp.value=''
    }
    
})
function open_tab(url,name){
    window.open(url,name)
}

function close_window(){
    if (confirm("Вийти?")){
        window.close()
        open_tab("https://www.google.com", "_blank")
    }
}