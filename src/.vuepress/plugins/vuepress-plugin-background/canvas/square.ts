import "../style/square.scss"
function square() {
    const div = document.createElement("div");
    const ul = document.createElement("ul");
    for(let i:number=1;i<=6;i++){
        const li=document.createElement("li")
        const span1=document.createElement("span")
        const span2=document.createElement("span")
        const span3=document.createElement("span")
        const span4=document.createElement("span")
        span1.className = "span1"
        span2.className = "span2"
        span3.className = "span3"
        span4.className = "span4"
        li.appendChild(span1)
        li.appendChild(span2)
        li.appendChild(span3)
        li.appendChild(span4)
        ul.appendChild(li)
    }
    div.className = "square-bg";
    ul.className = "square-ul"
    document.body.appendChild(div);
    document.body.appendChild(ul)
}
export default square;
