<?

?>
<script src="/dev/jquery-3.6.0.js"></script>
<script src="/dev/app.js"></script>
<script>
    function checkTarget(event) {
        var ele = event.currentTarget;
        console.log(ele);
    }
</script>
<div class="container">
    <div class="bg">
        <img src="/resourse/Civilopedia.png">
        <img src="/resourse/logo.png">
    </div>
    <div class="menu-list">

        <a href="rule">
            <div class="menu">
                <img src="/resourse/icon/rule.png" alt="1">
                <h2>게임룰</h2>
                <p>뉴 프론티어 패스</p>
            </div>
        </a>
        <a href="ground">
        <div class="menu">
            <img src="/resourse/icon/tile.png" alt="1">
            <h2>지형&시설</h2>
            <p>지형부터 시설까지</p>
        </div>
        </a>
        <a href="unit">
        <div class="menu">
            <img src="/resourse/icon/unit.png" alt="1">
            <h2>유닛&병법</h2>
            <p>지피지기 백전백승</p>
        </div>
        </a>
        <a href="tech">
        <div class="menu">
            <img src="/resourse/icon/tech.png" alt="1">
            <h2>기술&사회제도</h2>
            <p>유레카!</p>
        </div>
        </a>
        <a href="civ">
        <div class="menu">
            <img src="/resourse/icon/civ.png" alt="1">
            <h2>문명</h2>
            <p>나이자 친구이자 적</p>
        </div>
        </a>
    </div>
</div>