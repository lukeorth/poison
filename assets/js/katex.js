document.addEventListener("DOMContentLoaded", function() {
    // provides an escape for dollar sign chars if KaTeX is not desired
    let posts = document.getElementsByClassName("post");

    for (let i = 0; i < posts.length; i++) {
        let children = posts[i].children
        for (let j = 0; j < children.length; j++) {
            if (children[j].tagName == "P") {
                children[j].innerHTML = children[j].innerHTML.replace(/\\\$/g, '<span>$</span>');
            }
        }
    }

    renderMathInElement(document.body, {
        delimiters: [
            {left: "$$", right: "$$", display: true},
            {left: "$", right: "$", display: false}
        ]
    });
});
