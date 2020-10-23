setTimeout(() => {
    try {
        document.getElementsByClassName('categry-selected')[0].addEventListener('click', () => {
            hasAFilter();
            console.log("catagory selected");
        });
    } catch (e) {
        console.log(e);
    }
    hasAFilter();
    
}, 3000)


toggleClass(document.getElementById('footer-options'));


function hasAFilter() {
    try {
        let box = document.getElementsByClassName('categry-selected');
    let height = box[0].offsetHeight;
    const filterBtn = document.getElementById("filter-btn");

    if (height > 0) {
        filterBtn.classList.add('has-a-filter');
    } else {
        filterBtn.classList.remove('has-a-filter');
    }
        
    } catch (error) {
        console.log(error);
    }
}
console.log('hello from pwa mobile');
function hideFilter() {
    try {
        const filter = document.getElementById("myForm");
        const filterBtn = document.getElementById("filter-btn");
        filter.style.display = "none";
        filterBtn.style.display = 'block';
        hasAFilter();
        document.body.style.position = '';
        document.body.style.top = '';
    } catch (e) {
        console.log('error ar hide filter');
    }
}


function showFilter() {
    try {
        const filter = document.getElementById("myForm");
        const filterBtn = document.getElementById("filter-btn");
        filter.style.display = "block";
        filterBtn.style.display = 'none';
        document.body.style.position = 'fixed';
        document.body.style.top = `-${window.scrollY}px`;
        hasAFilter();
    } catch (e) {
        console.log('error ar show filter');
    }
}

function toggleClass(val) {

    let route = window.location.href;
    route = new URL(route)
    console.log(route.pathname,val.children[0].children[0]);
    for(let i =0;i<val.children.length;i++){
        val.children[i].children[0].classList.remove('footer-active');
    }
    if(route.pathname == "/feed")val.children[0].children[0].classList.add('footer-active');
    else if(route.pathname == "/articles")val.children[1].children[0].classList.add('footer-active');
    else if(route.pathname == "/webinars")val.children[2].children[0].classList.add('footer-active');
    else if(route.pathname == "/concalls")val.children[3].children[0].classList.add('footer-active');
    else if(route.pathname == "/user/profile")val.children[4].children[0].classList.add('footer-active');
    else{
        for(let i =0;i<val.children.length;i++){
            val.children[i].children[0].classList.remove('footer-active');
        }
    }
    try {
        document.getElementsByClassName('categry-selected')[0].addEventListener('click', () => {
            hasAFilter();
            console.log("catagory selected");
        });
    } catch (error) {
        console.log(error);
    }
}

history.pushState = ( f => function pushState(){
    var ret = f.apply(this, arguments);
    window.dispatchEvent(new Event('pushstate'));
    window.dispatchEvent(new Event('locationchange'));
    return ret;
})(history.pushState);

history.replaceState = ( f => function replaceState(){
    var ret = f.apply(this, arguments);
    window.dispatchEvent(new Event('replacestate'));
    window.dispatchEvent(new Event('locationchange'));
    return ret;
})(history.replaceState);

window.addEventListener('popstate',()=>{
    window.dispatchEvent(new Event('locationchange'))
});

window.addEventListener('locationchange', function(){
    toggleClass(document.getElementById('footer-options'));
})