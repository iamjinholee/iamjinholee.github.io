// JY: vanilla js code for readmore toggle 081222

// eventlisteners are recommended to load after dom contents are loaded
document.addEventListener("DOMContentLoaded", () => {
    // I assumed that readmore button is under readmorediv class
    // I assumed that we have only readmore in one document :).... i have no time lol
    // you can use other selector and for-loop for entire documents
    const readmoreEl = document.querySelector(".read-more-div");
    new ReadMoreToggle(readmoreEl);
});


// This type of implementation is similar with class concept in other languages :)

function ReadMoreToggle(readmore) {
    this.readmore = readmore;
    this.registerEvt(this.readmore);
}

ReadMoreToggle.prototype = {
    registerEvt: function(readmore) {
        this.btn = this.readmore.querySelector(".read-more-btn");
        this.text = this.readmore.querySelector(".more-text");
        this.btn.addEventListener("click", (evt) => {
            if(evt.target.innerText == "Read More") {
                evt.target.innerText = "Read Less";
                this.showText(this.text);
            } else {
                evt.target.innerText = "Read More";
                this.hideText(this.text);
            }
        })
    },
    showText: function(text) {
        text.style.display = "inline";
    },
    hideText: function(text) {
        text.style.display = "none";
    }
}