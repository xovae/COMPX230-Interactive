window.levelSelect = (id) =>
{
    let level = document.getElementById(id);
    level.classList.add("active");

    let checkmark = document.getElementById(id + "Checkmark");
    if (checkmark != null)
    {
        checkmark.style.color = "white";
    }
}

window.saveCode = async () =>
{
    code = document.getElementById("wsimCode").innerHTML;
    code = code.replaceAll("<br>", "\n");
    code = code.replaceAll("&emsp;", "\t")
    saveFile(code, "code.s");
}

window.saveFile = async (content, name) =>
{
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

window.objectiveUncheckAll = () =>
{
    const checkmarks = document.getElementsByClassName('inputCheckmark');

    for (let i = 0; i < checkmarks.length; i++) {
        id = checkmarks[i].id;
        objectiveUncheck(id);
    }
}

window.levelCompleted = () =>
{
    id = window.location.pathname.substring(1);
    localStorage.setItem(id, true);
    levelCheck();
}

window.levelCheck = () =>
{
    const levelIDs = document.getElementsByTagName('a');

    for (let i = 0; i < levelIDs.length; i++)
    {
        id = levelIDs[i].id;
        if (localStorage.getItem(id) != null)
        {
            checkmarkID = id + "Checkmark";
            let checkmark = document.getElementById(checkmarkID);
            checkmark.style.opacity = 1;
        }
    }
}

var popover;

window.triggerPopover = (error) =>
{
    var popoverElement = document.getElementById('compileButton');
    popoverElement.setAttribute('data-bs-content', error);
    popover = new bootstrap.Popover(popoverElement);
    popover.show();
}

window.clearPopover = () =>
{
    popover.disable();
}

window.initPopper = () =>
{
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
    const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))
}