document.addEventListener("DOMContentLoaded", function() {

    // provides an escape for dollar sign chars if KaTeX is not desired
    document.body.innerHTML = document.body.innerHTML.replace(/\$/g, '<span>$</span>');

    renderMathInElement(document.body, {
        delimiters: [
            {left: "$$", right: "$$", display: true},
            {left: "$", right: "$", display: false}
        ]
    });
});
