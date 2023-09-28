document.addEventListener("DOMContentLoaded", function() {

  // Get code blocks
  const codeblocks = document.querySelectorAll("pre code");

  // Iterate over each to perform modifications
  codeblocks.forEach((codeblock) => {
    // Create copy button and container element
    const copyButton = document.createElement("button");
    copyButton.className = "copy-button";
    const container = document.createElement("div");
    container.className = "code-container";
    
    // Copy clicked closure
    copyButton.addEventListener("click", () => {
      const code = codeblock.textContent;
      navigator.clipboard.writeText(code);
    });

    // Wrap the codeblock with the container
    codeblock.parentNode.insertBefore(container, codeblock);
    container.appendChild(codeblock);
    // Add the copy button to the container
    container.appendChild(copyButton);
  })
});