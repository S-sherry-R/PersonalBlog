import "../style/square.scss"
function square() {
    const div = document.createElement("div");
    const ul = document.createElement("ul");
    for(let i:number=1;i<=6;i++){
        const li=document.createElement("li")
        ul.appendChild(li)
    }
    div.appendChild(ul)
    div.className = "square-bg";
    document.body.appendChild(div);
}
export default square;
