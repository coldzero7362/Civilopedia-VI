window.addEventListener("load" , async ()=>{

    $('.slide-menu').on("click" , async function(){
        let idx = $(this).data('idx');
        if(idx == 1){
            drawfake1();
        }else if(idx == 2){
            drawfake2();
        }else{
            drawfake3();
        }
    });
});