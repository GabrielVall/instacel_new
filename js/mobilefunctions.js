function detectStep(tipo){
    let actualStep;
    if(tipo === 'next'){
        actualStep = $('.step.active').next()[0];
        if(!actualStep){
            actualStep = $('.step')[0];
        }
        return actualStep;
    }else{
        actualStep = $('.step.active').prev()[0];
        if(!actualStep){
            actualStep = $('.step').last()[0];
        }
        return actualStep;
    }
}
$(function(){
    $('body').swiperight(function() {
        let step = detectStep('prev');
        let stepId = step.getAttribute('data-num');
        cambiarImagen(stepId,step); 
    });
    $('body').swipeleft(function() {
        let step = detectStep('next');
        let stepId = step.getAttribute('data-num');
        cambiarImagen(stepId,step); 
    });
});