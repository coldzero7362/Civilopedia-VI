window.addEventListener("load" , async ()=>{
    let list = JSON.parse(await $.ajax(`/religion_pantheon`));
    drawPantheon(list);

    $('.button').on("click" , async function(){
        let idx = $(this).data('idx');
        let result = JSON.parse(await $.ajax(`/religion_belief?idx=${idx}`));
        console.log(result);
        drawBelief(result);
    });
});

function drawPantheon(list) {
    list.forEach(item =>{
        $('.pantheon_list').append(`
        <div class="pantheon">
            <div class="img_section">
                <img src="/resourse/pantheon/${item.idx}.png" alt="종교관 아이콘">
            </div>
            <div class="text_section">
                <h3>${item.name}</h3>
                <p>${item.ability}</p>
            </div>
        </div>
        `);
    });
}

function drawBelief(result) {
    $('.belief_list').html('');
    result.forEach(item =>{
        $('.belief_list').append(`
        <div class="belief">
            <h2>${item.name}</h2>
            <p>${item.ability}</p>
        </div>
        `);
    });
}