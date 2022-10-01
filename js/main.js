function cambiarImagen(num,target){
    // Agregamos el atributo num  al container de la imagen para hacer la animación
    $('.top_image')[0].setAttribute('data-step',num);
    //  Ocultamos todos los textos
    $('.text_active').removeClass('showed');
    // Mostramos el texto que coincida con el id imagen a mostrar
    $('.text_active[data-id="'+num+'"').addClass('showed');
    // Removemos las clases activas de .step
    $('.step').removeClass('active');
    // Agregamos la clase activa al .step clickeado
    $(target).addClass('active');
}
$(function(){
    $('.bottom_screen').addClass('active');
    $(document).on('click','.step',function(){
        var num = $(this).data('num');
        cambiarImagen(num,this); 
    });
});