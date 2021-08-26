window.addEventListener("load" , async ()=>{
    $('.product').on("click" , async function(){
        let idx = $(this).data('idx');
        let result = JSON.parse(await $.ajax(`/getCity_kind?idx=${idx}`));
        let list = JSON.parse(await $.ajax(`/getCity_list?idx=${idx}`));
        drawCityKind(result,list);
    });

});

function drawCityKind(result,list) {
    $('.city_header').html('');
    $('.envoy_form').html('');
    $('.city_list').html('');
    result.forEach(item =>{
        $('.city_header').append(`
            <img src="resourse/UI/${item.icon}.png" alt="1">
            <h2>${item.kind}</h2>
        `);
        $('.envoy_form').append(`
        <div class="one_block">
            <div class="cnt">
                <p>1</p>
            </div>
            <div class="bonus">
                <p>${item.one}</p>
            </div>
        </div>

        <div class="one_block">
            <div class="cnt">
                <p>3</p>
            </div>
            <div class="bonus">
                <p>${item.two}</p>
            </div>
        </div>

        <div class="one_block">
            <div class="cnt">
                <p>6</p>
            </div>
            <div class="bonus">
                <p>${item.three}</p>
            </div>
        </div>
        `);
    });
    list.forEach(item=>{
        $('.city_list').append(`
            <div class="bar">
                <div class="icon">
                    <img src="resourse/city/${item.idx}.png" alt="1">
                    <p>${item.name}</p>
                </div>
                <div class="desc">
                    <p>${item.bonus}</p>
                </div>
            </div>
        `);
    });
}