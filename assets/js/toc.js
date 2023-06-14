/*
    Original Author: Bramus Van Damme
    Link to original: https://www.bram.us/2020/01/10/smooth-scrolling-sticky-scrollspy-navigation/

    Most of this code comes courtesy of Bramus Van Damme, with some minor tweaks
    to get it working for my use case.  Thanks, Bramus!
*/

let activeElement = null;
window.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver(entries => {
        if (entries) {
            const contents = document.getElementById("contents");
            if (contents) {
                contents.innerHTML = "Contents";
            }
        }
        entries.forEach(entry => {
            if (activeElement) {
                document.querySelectorAll("nav[id='TableOfContents'] li").forEach((node) => {
                    node.classList.add('inactive');
                    node.classList.replace('active', 'inactive');
                });
            }
            if (entry.intersectionRatio > 0) {
                activeElement = entry.target.getAttribute('id');
            }
            if (activeElement) {
                document.querySelector(`nav[id='TableOfContents'] li a[href="#${activeElement}"]`).parentElement.classList.replace('inactive', 'active');
            }
        });
    });

    const post = document.querySelector(".post");
    post.querySelectorAll("h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]").forEach((section) => {
        observer.observe(section);
    });
});
