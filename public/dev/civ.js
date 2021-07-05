const { log , dir } = console;
const showLen = 9;

window.addEventListener("load" , async () => {

    const json = await $.getJSON("/resourse/data.json");
    json.forEach( (x,idx) => x.idx = idx );
    const tbody = document.querySelector("#civ_table > tbody");
    
    const origin = {
        "오리지널" : [],
        "DLC" : [],
        "흥망성쇠" : [],
        "몰려드는 폭풍" : [],
        "뉴 프론티어 패스" : []
    };

    const data = json.reduce( ( now , x ) => {
        const { type } = x;
        origin[type].push(x);
        return origin;
    } , origin );

    Object.keys(data).forEach( key => {

        const len = data[key].length;
        const rowSpan =  Math.ceil(len / showLen);


        for(let i = 0; i < rowSpan; i++){

            const start = i * showLen;
            const end = start + showLen;
            const drawData = data[key].slice( start , end );

            const tr = document.createElement("tr");
            const type_td = document.createElement("td");
            
            type_td.classList.add("type_td");
            type_td.classList.add("look");
    
            type_td.setAttribute("rowspan" , rowSpan);
            type_td.innerHTML = key;
            if(i == 0) tr.appendChild(type_td);

            drawData.forEach( item => {

                [ color1 , color2 ] = item.colors;
                if(color2 == undefined) color2 = color1;
                const td = document.createElement("td");

                td.style.background = `linear-gradient(90deg, ${ color1 } 50%, ${ color2 } 50%)`;

                td.innerHTML = `<div class="civ_menu" data-idx="${ item.idx }">
                                    <img src="resourse/civ/civ_icon/${ item.iconSrc }">
                                    <p>${ item.name }</p>
                                </div>`;
                //
                td.querySelector("p").style.color = item.iconColor;
                tr.appendChild(td);

            });

            tbody.appendChild(tr);
        }

    });

    $(document).on("click",".civ_menu", async function(){
        let idx = $(this).data('idx');
        location.href='civ_result?index='+idx;
    });
});