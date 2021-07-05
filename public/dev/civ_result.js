window.addEventListener("load" , async ()=>{
    
    $('.backBtn').click(function(){
        location.href='civ';
    });

    let idx = getParameterByName('index');
    console.log(idx);
    let leaders = JSON.parse(await $.ajax(`/getleader?index=${idx}`));
    let civ = JSON.parse(await $.ajax(`/getCiv?idx=${idx}`));

    console.log(civ);
    draw_leaderMenu(leaders);
    draw_leader_first(leaders);
    $(document).on("click",".leader_Btn", async function(){
        let leader_idx = $(this).data('leader');
        let leader = JSON.parse(await $.ajax(`/getleader_idx?index=${leader_idx}`));
        draw_leader(leader);
    });
    draw_civ(civ);
});

function draw_leader(result){
    result.forEach(item =>{
        $(".leader_Form").html('');
        $(".say").html('');
        
        $(".leader_Form").append(`
        <div class="leader_name" style="background-color: ${item.leader_color};color : ${item.leader_text_color}">
            <p>${item.leader_name}</p>
            <img src="/resourse/civ/civ_photo/${item.leader_img}.png">
        </div>
        <img src="/resourse/civ/leader_icon/${item.leader_civ_icon}.png">
        <div class="leader_desc">
            <h2>${item.leader_name}</h2>
            <p>${item.leader_title}</p>
            <h2>"${item.leader_saying}"</h2>
            <h5>${item.leader_saying_sub}</h5>
            <div class="desc" data-columns="1">
                <h3>${item.leader_effect}</h3>
                <p>${item.leader_effect_desc}</p>
            </div>
            <div class="desc" data-columns="2">
                <h3>${item.leader_agenda}</h3>
                <p>${item.leader_agenda_desc}</p>
            </div>
        </div>
        `);
        $(".say").append(`
        <p>${item.leader_desc}</P>
    `);
    });
}

function draw_civ(civ){
    console.log(civ[0]);
    $(".civ_title").append(
        `<h2>${civ[0].civ_name}</h2>`
    );
    $(".civ_title").append(
    `<div class="civ_unique">
        <h1>문명<br>특성</h1>
        <div class="uni">
            <img src="/resourse/civ/leader_icon/${civ[0].civ_icon}.png" alt="">
            <h3>${civ[0].civ_ability_name}</h3>
        </div>
        <p>${civ[0].civ_ability}</p>
    </div>
    <div class="civ_unique">
        <h1>고유<br>유닛</h1>
        <div class="uni">
            <img src="/resourse/civ/uu/${civ[0].civ_unit_img}.png" alt="">
            <h3>${civ[0].civ_unique_unit_name}</h3>
        </div>
        <p>${civ[0].civ_unique_unit_ability}</p>
    </div>
    <div class="civ_unique">
        <h1>${civ[0].civ_unique_frame1}</h1>
        <div class="uni">
            <img src="/resourse/civ/unique/${civ[0].civ_unique1_img}.png" alt="">
            <h3>${civ[0].civ_unique1_name}</h3>
        </div>
        <p>${civ[0].civ_unique1_ability}</p>
    </div>
    `
    );
    if(civ[0].civ_unique_frame2 != ""){
        $(".civ_title").append(`
        <div class="civ_unique">
            <h1>${civ[0].civ_unique_frame2}</h1>
            <div class="uni">
                <img src="/resourse/civ/unique2/${civ[0].civ_unique2_img}.png" alt="">
            <h3>${civ[0].civ_unique2_name}</h3>
            </div>
            <p>${civ[0].civ_unique2_ability}</p>
        </div>
        `)
    }
    
}
function draw_leader_first(leader){
    $(".leader_Form").html('');
    $(".say").html('');
    $(".leader_Form").append(`
    <div class="leader_name" style="background-color: ${leader[0].leader_color};color : ${leader[0].leader_text_color}">
        <p>${leader[0].leader_name}</p>
        <img src="/resourse/civ/civ_photo/${leader[0].leader_img}.png">
    </div>
    <img src="/resourse/civ/leader_icon/${leader[0].leader_civ_icon}.png">
    <div class="leader_desc">
        <h2>${leader[0].leader_name}</h2>
        <p>${leader[0].leader_title}</p>
        <h2>"${leader[0].leader_saying}"</h2>
        <h5>${leader[0].leader_saying_sub}</h5>
        <div class="desc" data-columns="1">
            <h3>${leader[0].leader_effect}</h3>
            <p>${leader[0].leader_effect_desc}</p>
        </div>
        <div class="desc" data-columns="2">
            <h3>${leader[0].leader_agenda}</h3>
            <p>${leader[0].leader_agenda_desc}</p>
        </div>
    </div>
    `);
    $(".say").append(`
        <p>${leader[0].leader_desc}</P>
    `);
}
function draw_leaderMenu(result) {
    // $('.leaderSelector').html('');
    result.forEach(item =>{
        $('.leaderSelector').append(`
            <div class="leader_Btn" style="background-color:${item.leader_color};color : ${item.leader_text_color}" data-leader="${item.idx}">
                <p>${item.leader_name}</p>
            </div>
        `);
    });
}

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}