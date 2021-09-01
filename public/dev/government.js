window.addEventListener("load" , async ()=>{
    $('.popup_bg').hide();
    $('.button').on("click" , async function(){
        let idx = $(this).data('idx');
        let result = JSON.parse(await $.ajax(`/get_policy?idx=${idx}`));
        drawPolicy(result);
    });
    $('.ideology').on("click" , async function(){
        $('.popup_bg').show();
        let idx = $(this).data('idx');
        let result = JSON.parse(await $.ajax(`/get_government?idx=${idx}`));
        drawGovernment(result);
    });
    $(document).on("click",".close",async function(){
        $('.popup_bg').hide();
    });
});

function drawPolicy(result) {
    $('.list').html('');
    result.forEach(item =>{
        $('.list').append(`
            <div class="policy_form">
                <div class="name">
                    <p>${item.name}</p>
                </div>
                <div class="tech">
                    <p>${item.tech}</p>
                </div>
                <div class="ability">
                    <p>${item.ability}</p>
                </div>
                <div class="back">
                    <p>${item.back}</p>
                </div>
            </div>
        `);
    });
}
function drawGovernment(result) {
    $('.popup_bg').html('');
    result.forEach(item =>{
        $('.popup_bg').append(`
        <div class="popup">
            <div class="bar">
                <h2>정부 설명</h2>
                <div class="close"></div>
            </div>
            <div class="profile">
                <div class="photo">
                    <img src="/resourse/Government/profile/${item.idx}.png" alt="">
                    <h2>${item.name}</h2>
                </div>
                <div class="desc">
                    <table>
                        <tr>
                            <td class="table_title" colspan="4" height="25px">필요 사회 정책</td>
                        </tr>
                        <tr>
                            <td class="table_desc" colspan="4"height="50px"><h2>${item.tech}</h2></td>
                        </tr>
                        <tr>
                            <td class="table_title" colspan="4" height="25px">정부 개요</td>
                        </tr>
                        <tr>
                            <td class="a">군사정책 슬롯</td>
                            <td class="b">경제정책 슬롯</td>
                            <td class="c">외교정책 슬롯</td>
                            <td class="d">와일드카드 슬롯</td>
                        </tr>
                        <tr>
                            <td class="table_desc cnt">${item.slot1}</td>
                            <td class="table_desc cnt">${item.slot2}</td>
                            <td class="table_desc cnt">${item.slot3}</td>
                            <td class="table_desc cnt">${item.slot4}</td>
                        </tr>
                    </table>
                </div>
            </div>
            <div class="bonus">
                    <table border="1">
                        <tr>
                            <td width="200px">우호도</td>
                            <td>${item.friendly}</td>
                        </tr>
                        <tr>
                            <td width="200px">환심</td>
                            <td>${item.favor}</td>
                        </tr>
                        <tr>
                            <td width="200px">유산 보너스</td>
                            <td>${item.bonus1}</td>
                        </tr>
                        <tr>
                            <td width="200px">기본 보너스</td>
                            <td>${item.bonus2}</td>
                        </tr>
                    </table>
                </div>
            </div>
        `);
    });
}