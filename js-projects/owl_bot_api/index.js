function dis(pageID) {
    let pages = document.querySelectorAll(".fun");
    pages.forEach(page => {
        page.style.display = "none";
    });
    document.querySelector(pageID).style.display = "block"

}
location.hash = "";
location.hash = "#Word-search";
window.addEventListener("hashchange", (hash) => {
    dis(location.hash);
});

// api javascript

function search(word) {
    let head = document.getElementById('search-result');
    head.textContent = 'Searching,please wait....';


    const url = "https://owlbot.info/api/v4/dictionary/" + word;

    const options = {
        headers: {
            Authorization: "Token de6cee09a2f30c7223b7c616994c4fc20a7c2929"
        }
    }

    function addHtmlToWord(data) {
        head = document.getElementById('search-result');
        head.textContent = '';
        let li = document.createElement("li");

        li.textContent = "Word : " + data.word;
        head.appendChild(li);

        const def = data.definitions;

        function addLiTag(define) {
            var tag = document.createElement("li");
            var heading = document.createElement("h5");
            var pera = document.createElement("p");
            var pera1 = document.createElement("p");

            var type = document.createTextNode("Type : " + define.type);
            var text = document.createTextNode("Definition :  " + define.definition);
            var exapmle = document.createTextNode("Example :  " + define.example);

            pera.appendChild(text);
            heading.appendChild(type);
            pera1.appendChild(exapmle);
            tag.appendChild(heading);
            tag.appendChild(pera);
            tag.appendChild(pera1);

            tag.classList.add("define");
            var element = document.getElementById("search-result");
            element.appendChild(tag);
        }

        def.forEach(define => {
            addLiTag(define);
        });

    }

    fetch(url, options)
        .then(res => {
            if (!res.ok) {
                head.textContent = '';
                let li = document.createElement("li");
                li.textContent = 'word not found';
                head.appendChild(li);
            } else {
                res.json().then(data => {
                    addHtmlToWord(data)
                });
            }
        })
}
