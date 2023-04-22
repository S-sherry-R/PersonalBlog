import "../style/square.scss"
function square() {
    const div = document.createElement("div");
    const ul = document.createElement("ul");
    for(let i:number=1;i<=6;i++){
        const li=document.createElement("li")
        const span1=document.createElement("span")
        const span2=document.createElement("span")
        if(i<=2){
            span1.className="upLine"
            span2.className="downLine"
        }else{
            span1.className="leftLine"
            span2.className="rightLine"
        }
        li.appendChild(span1)
        li.appendChild(span2)
        ul.appendChild(li)
    }
    div.className = "square-bg";
    ul.className = "square-ul"
    document.body.appendChild(div);
    document.body.appendChild(ul)
}
export default square;
