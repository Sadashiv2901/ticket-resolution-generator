function generateResolution() {
    const issue = document.getElementById("issue").value;
    const investigation = document.getElementById("investigation").value;
    const action = document.getElementById("action").value;
    const status = document.getElementById("status").value;

    let resolution = "";

    resolution += "Investigated the reported issue: " + issue + " ";

    if (investigation) {
        resolution += investigation + " ";
    }

    if (action) {
        resolution += action + " ";
    }

    if (status === "resolved") {
        resolution += "The issue has been resolved and the ticket can be closed.";
    } else if (status === "closed") {
        resolution += "The ticket has been closed.";
    } else {
        resolution += "The ticket remains pending further confirmation.";
    }

    document.getElementById("resolution").textContent = resolution;
}

function copyResolution() {
    const resolution = document.getElementById("resolution").textContent;

    navigator.clipboard.writeText(resolution);

    alert("Resolution copied!");
}
