window.addEventListener("load" , async ()=>{

    $('.slide-menu').on("click" , async function(){
        let idx = $(this).data('idx');
        let result = JSON.parse(await $.ajax(`/getUnit?idx=${idx}`));
        drawMenu(result);
    });

});

function drawMenu(result) {//좀큰 리스트
    $('.list').html('');
    $('.display_unit').html('');
    result.forEach(item =>{
        $('.list').append(`
            <div class="unitMenu">
                <img src="resourse/unit/Dept/${item.idx}.png" alt="1">
                <p>${item.text}</p>
            </div>
        `);
    });
}