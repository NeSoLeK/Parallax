let forms = document.querySelector(".app-title")
let spans = forms.getElementsByTagName('span')

function onSend(spans){
    // form.innerHTML = "<div class=`app-title`><span>CONTACT</span><span>US</span></div>"

    spans[0].innerText = "YOUR MESSAGE"
    spans[1].innerText = "HAS BEEN SENT!"
}

document.getElementById('btn_send').onclick = () => {
    onSend(spans);
}