let hide = document.querySelector('.icon');
let nav = document.querySelector('.nav-1');
hide.addEventListener('click', function(){
    nav.classList.add('d-none');
});
let element = document.querySelector('.dropdown-toggle','.nav-link');
let dropdown = document.querySelector('.dropdown-menu');
let dropdown_items = dropdown.querySelectorAll('.dropdown-item-deep');
// console.log(dropdown_items);
element.addEventListener('mouseover', function(){
    dropdown.classList.add('d-block');
})
dropdown.addEventListener('mouseleave', function(){
    setTimeout(() => {
    dropdown.classList.add('d-none');
    }, 1000);
});
let down_3 = document.querySelector('#down-3');
let down_2 = document.querySelectorAll('.dropdown-item-deep');
let container = document.querySelector('#deep');
    setTimeout(() => {
    container.addEventListener("mouseenter", () => {
        const ul = document.createElement("ul");
        ul.style.backgroundColor="white";
        ul.style.height = "22vh";
        ul.style.paddingTop = "2vh";
        ul.style.borderRadius = "5%";
        const items = ["Deep Dropdown 1","deep Dropdown 2","deep Dropdown 3","deep Dropdown 4","deep Dropdown 5"];
        items.forEach(item => {
            const li = document.createElement("li");
            li.classList.add('li');
            li.textContent = item;
            ul.style.position = "absolute";
            ul.style.right = "10.7vw";
            ul.style.paddingRight = "2vw";
            ul.appendChild(li);
        });
        container.appendChild(ul);
    }, 5000);
});
    function filterImages(filterClass) {
        const allImages = document.querySelectorAll(".images");

        allImages.forEach((img) => img.style.display = "none");
        const filteredImages = document.querySelectorAll(`.images.${filterClass}`);
        filteredImages.forEach((img) => img.style.display = "block");
    }
    document.getElementById("app").addEventListener("click", function () {
        filterImages("app");
        
        
        
    });
    
    document.getElementById("card").addEventListener("click", function () {
        filterImages("photo");
        
    });
    document.getElementById("web").addEventListener("click", function () {
        filterImages("web");
    });
    document.getElementById("all").addEventListener("click", function () {
        const allImages = document.querySelectorAll(".images");
        allImages.forEach((img) => img.style.display = "block");
    });









function counterAnimation(targetSelector,targetValue, duration) {
    const element = document.querySelector(targetSelector);
    const endValue = parseInt(targetValue, 10); // Target value to reach
    let currentValue = 0;
    const increment = Math.ceil(endValue / (duration / 10)); // Increment per 10ms
    const interval = setInterval(() => {
    currentValue += increment;
    if (currentValue >= endValue) {
       element.textContent = endValue; // Set final value
       clearInterval(interval); // Stop the interval
    } else {
       element.textContent = currentValue; // Update value
    }
    }, 20); // Update every 10ms
}
// Start the counter animation on page load
function startAnimation() {
    counterAnimation(".counter", 232, 2000);
    counterAnimation(".counter_1", 521, 2000);
    counterAnimation(".counter_2", 1463, 2000);
    counterAnimation(".counter_3", 15, 2000);
}
window.onload = startAnimation;


function mouseoverDiv(element){
    element.lastElementChild.classList.remove('d-none');
}
function mouseleaveDiv(element){
    element.lastElementChild.classList.add('d-none');
}
let team_div = document.querySelector('.team-div');
team_div.addEventListener('click',function(){
    event.preventDefault();
    document.querySelector('#about').scrollIntoView({behavior: 'smooth'});
    team_div.style.color = '#428bca';
    })
    let service = document.querySelector('.service');
    service.addEventListener('click',function(){
        event.preventDefault();
        document.querySelector('#service').scrollIntoView({behavior: 'smooth' ,block: 'start'});
        service.style.color = '#428bca';

    });
    let about_1 = document.querySelector('.about');
    about_1.addEventListener('click',function(){
        event.preventDefault();
        document.querySelector('#about').scrollIntoView({behavior: 'smooth'});
        about_1.style.color = '#428bca';
        
    });
    let porto = document.querySelector('.portofolio');
    porto.addEventListener('click',function(){
        event.preventDefault();
        document.querySelector('.porto').scrollIntoView({behavior: 'smooth'});
        document.querySelector('.porto').style.marginTop = '20vh';
        
        porto.style.color = '#428bca';
    });
    let team_1 = document.querySelector('.team-1');
    team_1.addEventListener('click',function(){
        event.preventDefault();
        document.querySelector('#team').scrollIntoView({behavior: 'smooth'});
        document.querySelector('#team').style.marginTop = '20vh';
        team_1.style.color = '#428bca';
    });
    let contact_1 = document.querySelector('.contact');
    contact_1.addEventListener('click',function(){
        event.preventDefault();
        document.querySelector('#contact').scrollIntoView({behavior: 'smooth'});
        document.querySelector('#contact').style.marginTop = '40px';
        contact_1.style.color = '#428bca';
    });
let home = document.querySelector('.home');
let about = document.querySelector('.about');
let portofolio = document.querySelector('.portofolio');
let team = document.querySelector('.team');
let contact = document.querySelector('.contact');
let service_1 = document.querySelector('.service');
let dropdown_1 = document.querySelector('.drop');
about.addEventListener('mouseover', function(){
    about.style.color = '#428bca';
});
about.addEventListener('mouseleave', function(){
    about.style.color = '#808080';
});
portofolio.addEventListener('mouseover', function(){
    portofolio.style.color = '#428bca';
});
portofolio.addEventListener('mouseleave', function(){
    portofolio.style.color = '#808080';
});
team.addEventListener('mouseover', function(){
    team.style.color = '#428bca';
});
team.addEventListener('mouseleave', function(){
    team.style.color = '#808080';
});
service.addEventListener('mouseover', function(){
    service.style.color = '#428bca';
});
service.addEventListener('mouseleave', function(){
    service.style.color = '#808080';
});
contact.addEventListener('mouseover', function(){
    contact.style.color = '#428bca';
});
contact.addEventListener('mouseleave', function(){
    contact.style.color = '#808080';
});
dropdown_1.addEventListener('mouseover', function(){
    dropdown_1.style.color = '#428bca';
});
dropdown_1.addEventListener('mouseleave', function(){
    dropdown_1.style.color = '#808080';
});
function topbutton(){
    document.documentElement.scrollTop = 0;
}
window.onscroll = function(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        document.querySelector('.top').style.display = 'block';
    }else{
        document.querySelector('.top').style.display = 'none';
    }
}
