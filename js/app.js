const time = document.querySelector(".time p");
const dropdown_main = document.querySelector(".dropdown-about p");
const dropdown_list = document.querySelector(".dropdown-about ul");
const sec_text = document.querySelector(".flex-container span");

function date_time(){
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const secs = date.getSeconds();
    time.innerText = 
    `${hours<10 ? `0${hours}` : hours} : ${minutes <10 ? `0${minutes}` : minutes} : ${secs <10 ? `0${secs}` : secs}`;
}

setInterval(date_time, 1000);

dropdown_main.addEventListener("mouseenter", () => {
    dropdown_list.style.display = "block"
});

dropdown_list.addEventListener("mouseleave", () => {
    dropdown_list.style.display = "none"
});

window.onscroll= () => scroll_progress1();

function scroll_progress1() {
    // ความสูงของหน้าต่างเว็บ - ความสูงของ client height ไม่รวม scroll bar
    // 0 - 1
    const page_height = (document.documentElement.scrollHeight - document.documentElement.clientHeight);
    const scroll_top = document.documentElement.scrollTop;
    const scroll = scroll_top/page_height * 100;
    document.querySelector(".progress").style.visibility = "visible";
    document.querySelector(".progress").style.width = `${scroll}%`;
}