window.levelSelect = (id) => {
    let level = document.getElementById(id);
    level.classList.add("active");
}

window.saveCode = async () => {
    code = document.getElementById("wsimCode").innerHTML;
    code = code.replaceAll("<br>", "\n");
    code = code.replaceAll("&emsp;", "\t")
    saveFile(code, "code.s");
}

window.saveFile = async (content, name) => {
    const file = new Blob([content], { type: 'text/plain' });

    const link = document.createElement('a');
    link.download = name;
    link.href = URL.createObjectURL(file);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(link.href);
}

window.quacker = () =>
{
    let audio = document.getElementById("duckQuack");
    audio.play();
}

window.objectiveCheck = (id) =>
{
    let checkmark = document.getElementById(id);
    let audio = document.getElementById("duckQuack");
    if (checkmark != null)
    {
        checkmark.style.opacity = 1;
        audio.play();
    }
}

window.objectiveUncheck = (id) =>
{
    let checkmark = document.getElementById(id);
    let audio = document.getElementById("kcauQkcud");
    if (checkmark != null && checkmark.style.opacity == 1)
    {
        checkmark.style.opacity = 0;
        audio.play();
    }
}

window.initTooltips = () =>
{
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
}