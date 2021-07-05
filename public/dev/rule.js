window.onload = ()=>{
    console.log("테스트");
    
    $('.slide-menu').on("click" , async function(){
        let idx = $(this).data('idx');
        let result = JSON.parse(await $.ajax(`/getRule?idx=${idx}`));
        drawMidMenu(result);
        $(this).css({
            'box-shadow': '0 0 10px #ffb52c',
            'transform': 'scale(1.1)',
            '-webkit-box-reflect': 'color-stop(100%, transparent)'
        });
        $(this).siblings().css({
            'box-shadow': '0 0 10px #fdfdfd',
            'transform': 'scale(0.9)'
        });
    });

    $(document).on("click",".detail_menu",async function(){
        let num = $(this).data('num');
        console.log(num);
        let list_rst = JSON.parse(await $.ajax(`/getRule_list?num=${num}`));
        console.log(list_rst);
        drawRstMenu(list_rst);
    });

    $(document).on("click",".result_list",async function(){
        let index = $(this).data('index');
        console.log(index);
        let rst = JSON.parse(await $.ajax(`/getRule_text?num=${index}`));
        drawResult(rst);
    });
}

function drawMidMenu(result) {//좀큰 리스트
    $('.list').html('');
    $('.mid-menu').html('');
    $('.textarea').html('');
    result.forEach(item =>{
        $('.mid-menu').append(`
            <div class="detail_menu" data-num="${item.idx}">
                <img src = "${item.img}">
                <h2>${item.title}</h2>
                <p>${item.descript}<p>
            </div>
        `);
    });
}

function drawRstMenu(result) {//리스트
    $('.list').html('');
    $('.textarea').html('');
    result.forEach(item =>{
        $('.list').append(`
        <div class="result_list" data-index="${item.idx}">
            <img src="${item.img}" alt="1">
            <h3>${item.title}</h3>
        </div>
        `);
    });
}

function drawResult(result) {
    $('.textarea').html('');
    result.forEach(item =>{
        $('.textarea').append(`
            <div class="result" data-num="${item.idx}">
                <img src = "${item.img}">
                <div class="text">
                    <h1>${item.title}</h1>
                    <p>${item.text}</p>
                </div>
            </div>
        `);
    });
}

