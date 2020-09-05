
// Portfolio Item Filter

const FilterContainer = document.querySelector(".portfolio-filter"),
filterBtns = FilterContainer.children,
totalFilterBtn = filterBtns.length;
portfolioItems = document.querySelectorAll(".portfolio-item"),
/* console.log(portfolioItems); */
totalPortfolioItem = portfolioItems.length;

for(let i=0; i<totalFilterBtn; i++){
    filterBtns[i].addEventListener("click", function(){
        FilterContainer.querySelector(".active").classList.remove("active");
        this.classList.add("active");

        const filterValue = this.getAttribute("data-filter");
        for(let k=0; k < totalPortfolioItem; k++){
            if(filterValue===portfolioItems[k].getAttribute("data-category")){
                portfolioItems[k].classList.add("show");
                portfolioItems[k].classList.remove("hide");
            }
            else{
                portfolioItems[k].classList.add("hide");
                portfolioItems[k].classList.remove("show");
            }
            if(filterValue ==="all"){
                portfolioItems[k].classList.add("show");
                portfolioItems[k].classList.remove("hide");
            }
        }
    });
}


// portfolio lightbox
const lightbox = document.querySelector(".lightbox"),
lightboxImg = lightbox.querySelector(".lightbox-img"),
lightboxclose = lightbox.querySelector('lightbox-close'),
lightboxText = lightbox.querySelector(".caption-text"),
lightboxCounter = lightbox.querySelector(".caption-counter");

let itemIndex = 0;

for(let i=0; i<totalPortfolioItem; i++){
    portfolioItems[i].addEventListener("click", function(){
        itemIndex=i;
        changeItem();
        toggleLightbox();
    })
}

function nextItem(){
    if(itemIndex === totalPortfolioItem-1){
        itemIndex= 0;
    }else{
        itemIndex++;
    }
    changeItem();
}

function prevItem(){
    if(itemIndex === 0){
        itemIndex = totalPortfolioItem-1;
    }else{
        itemIndex--;
    }
    changeItem();
}


function toggleLightbox(){
    lightbox.classList.toggle("open");
}


function changeItem(){
    imgSrc = portfolioItems[itemIndex].querySelector(".portfolio-img img").getAttribute("src");
    lightboxImg.src=imgSrc;
    lightboxText.innerHTML=portfolioItems[itemIndex].querySelector("h4").innerHTML;
    lightboxCounter.innerHTML = (itemIndex+1)  + "of" + totalPortfolioItem;
}

// Close Lightbox

lightbox.addEventListener("click", function(event){
    if(event.target===lightboxclose || event.target === lightbox){
        toggleLightbox();
    }
})