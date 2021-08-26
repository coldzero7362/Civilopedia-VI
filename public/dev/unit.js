window.addEventListener("load" , async ()=>{

    $('.slide-menu').on("click" , async function(){
        let idx = $(this).data('idx');
        let result = JSON.parse(await $.ajax(`/getUnit?idx=${idx}`));
        drawMenu(result);
    });
    $(document).on("click",".unitMenu",async function(){
        let form_idx = $(this).data('idx');
        let form_result = JSON.parse(await $.ajax(`/getUnit_form?idx=${form_idx}`));
        draw_Unitform(form_result);
    });


});

function drawMenu(result) {
    $('.list').html('');
    $('.display_unit').html('');
    result.forEach(item =>{
        $('.list').append(`
            <div class="unitMenu" data-idx="${item.idx}">
                <img src="resourse/unit/Dept/${item.idx}.png" alt="1">
                <p>${item.text}</p>
            </div>
        `);
    });
}

function draw_Unitform(result) {
    $('.display_unit').html('');
    result.forEach(item =>{
        $('.display_unit').append(`
            <div class="unitForm">
                <div class="name">
                    <img src="resourse\\unit\\port\\${item.img}.png" alt="1">
                    <p>${item.name}</p>
                </div>
                <div class="move">
                    <p>${item.move}</p>
                </div>
                <div class="attack">
                    <p>${item.attack}<p>
                </div>
                <div class="tech">
                    <p>${item.tech}</p>
                </div>
                <div class="resource">
                    <p>${item.resource}</p>
                </div>
                <div class="gold">
                <p>${item.gold}</p>
                </div>
            </div>
        `);
    });
}
