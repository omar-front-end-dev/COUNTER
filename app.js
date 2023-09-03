const numberContainer = document.querySelectorAll(".number-container h2");

numberContainer.forEach((item)=>{
    let number = +item.textContent;
    let increaseNumber = parseInt((5 / 100) * number);
    item.textContent = 0
    let counter = setInterval(() => {
    item.textContent = +item.textContent + increaseNumber;
    if (item.textContent >= number) {
        item.textContent = number;
        item.parentElement.style.backgroundColor = "green"
        clearInterval(counter);
    }
}, 60);
})


