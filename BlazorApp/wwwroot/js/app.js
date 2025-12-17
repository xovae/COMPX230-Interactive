window.levelSelect = (id) => {
    let level = document.getElementById(id);
    level.classList.add("active");
}

window.saveCode = async () => {
    code = document.getElementById("wsimCode").innerHTML;
    code = code.replaceAll("<br>", "\n");
    code = code.replaceAll("&emsp;", "\t")
    const file = new Blob([code], { type: 'text/plain' });

    const link = document.createElement('a');
    link.download = "code.s";
    link.href = URL.createObjectURL(file);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(link.href);
}

window.quacker = () =>
{
    let audio = document.getElementById("quackAudio");
    audio.play();
}