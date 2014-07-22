//Javascript/CSS lightweight lightbox
var lightboxDiv;

window.document.onkeydown = function (e)
{
    if (!e){
        e = event;
    }
    if (e.keyCode == 27){
        lightbox_close();
    }
}

function lightbox_open(){
    window.scrollTo(0,0);
    document.getElementById('lightbox').style.display='block';
    document.getElementById('fade').style.display='block';
    $("#lightbox").html('<object data="grade_distribution.html"/>');  
}

function lightbox_close(){
    document.getElementById('lightbox').style.display='none';
    document.getElementById('fade').style.display='none';
    $("#lightbox").html('');
}

$(document).ready(function() {
	$('.lightbox_link').click(lightbox_open);
    $('#fade').click(lightbox_close);
});
