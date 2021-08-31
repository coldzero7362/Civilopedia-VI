window.addEventListener("load" , async ()=>{

    $('.fake').on("click" , async function(){
        let idx = $(this).data('idx');
        if(idx == 4){
            drawfake();
        }else if(idx == 2){
            drawfake2();
        }
    });
});
function drawfake(){
        $(".form").html('');
        
        $(".form").append(`
        <div class="form">
        <table class="governor">
            <tr>
                <td colspan="2" class="form_menu">성주 빅토르</td>
            </tr>
            <tr>
                <td colspan="2">군사 중심적인 빅토르 총독은 외국의 위협으로부터 도시를 강화하고 유지하며 방어하는 데 중요한 역할을 합니다.</td>
            </tr>
            <tr>
                <td class="form_menu">정착에 필요한 턴 수</td>
                <td class="form_menu">턴당 충성도</td>
            </tr>
            <tr>
                <td>3</td>
                <td>8</td>
            </tr>
            <tr>
                <td colspan="2" class="form_menu">기본 능력</td>
            </tr>
            <tr>
                <td colspan="2" class="tech_menu">보루</td>
            </tr>
            <tr>
                <td colspan="2">도시의 전투력 +5</td>
            </tr>
            <tr>
                <td colspan="2" class="form_menu">진급 능력</td>
            </tr>
            <tr>
                <td class="tech_menu">주둔군 사령관</td>
                <td class="tech_menu">방어 병참 지원</td>
            </tr>
            <tr>
                <td>이 도시 영토에서 방어하는 유닛은 전투력 +5<br>9타일 이내의 플레이어 타 도시는 턴당 플레이어 문명을 향한 충성도 +4</td>
                <td>도시가 포위되지 않음. 이 도시에서 턴당 전략자원 +1 추가 누적</td>
            </tr>
            <tr>
                <td class="tech_menu" colspan="2">총안</td>
            </tr>
            <tr>
                <td colspan="2">도시가 턴당 1회 추가 공격 가능<br>이 도시에서 훈련된 군사 유닛이 이미 무료 진급을 갖추고 시작하지 않은 경우 무료 진급을 가짐</td>
            </tr>
            <tr>
                <td class="tech_menu">선제적 대공 방어</td>
                <td class="tech_menu">군비 경쟁 지지자</td>
            </tr>
            <tr>
                <td>이 도시의 영토에서 대공 지원 유닛이 적 공군과 ICBM 대항 시 전투력 +25</td>
                <td>이 도시에서 진행되는 군사용 핵 프로젝트에 대해 생산력 +30%</td>
            </tr>
        </table>
    </div>
        `);
}
function drawfake2(){
    $(".form").html('');
    
    $(".form").append(`
    <div class="form">
            <table class="governor">
                <tr>
                    <td colspan="3" class="form_menu">미네르바의 부엉이</td>
                </tr>
                <tr>
                    <td class="form_menu">단계</td>
                    <td class="form_menu">요구사항</td>
                    <td class="form_menu">내용</td>
                </tr>
                <tr>
                    <td class="tech_menu">시작</td>
                    <td class="tech_menu">도시 국가에 사절 보내기 (80%)</td>
                    <td>경제 정책 슬롯 +1, 교역로가 도시국가와 연결될 때마다 해당 도시국가의 사절이 +1 증가.</td>
                </tr>
                <tr>
                    <td class="tech_menu">의식</td>
                    <td class="tech_menu">세계가 중세시대에 진입</td>
                    <td>은행 대체 건물인 도금 금고 건물을 건설 가능</td>
                </tr>
                <tr>
                    <td class="tech_menu">교화</td>
                    <td class="tech_menu">세계가 산업시대에 진입</td>
                    <td>와일드카드 정책 슬롯 +1, 스파이 최대치 +2 증가.<br>플레이어의 스파이가 자신의 영토에 있을 때는 플레이어의 도시가 턴당 충성심 +4 및 쾌적도 +1 증가.</td>
                </tr>
                <tr>
                    <td class="tech_menu">종합 계획</td>
                    <td class="tech_menu">세계가 원자시대에 진입</td>
                    <td>턴마다 국고 금의 3%를 수입으로 획득. 스파이 공격 임무 성공 시마다 해당 턴에<br>목표 도시가 턴당 획득하는 과학/문화/금/신앙 수치의 절반 수치도 함께 획득.</td>
                </tr>
            </table>
        </div>
    `);
}