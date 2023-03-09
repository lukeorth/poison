document.addEventListener("DOMContentLoaded", function() {
    plantumlElements = document.querySelectorAll('[id^="plantuml-"]');
    let plantumlInner = ""
    for (let i = 0; i < plantumlElements.length; i++) {
        element = plantumlElements[i];
        if (element.tagName == "SPAN") {
            plantumlInner = element.innerText;
        }
        if (element.tagName == "IMG") {
            element.src = "//www.plantuml.com/plantuml/img/" + window.plantumlEncoder.encode(plantumlInner);
        }
    }
});
