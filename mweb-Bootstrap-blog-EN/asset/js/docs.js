$(function(){
	$('.content-responsive img').addClass('img-responsive');
	$('.content-responsive table').addClass('table').addClass('table-bordered')
});

function switchImageByName(ele,name,index){
	var btnG = $(ele).parent();
	var ctEle = btnG.parent().parent().find('.img_content');
	btnG.find('.btn').removeClass('disabled');
	$(ele).addClass('disabled');

	ctEle.find('img').attr('src',name);
	ctEle.find('p').hide().eq(index).show();

}

function preload(arrayOfImages) {
    $(arrayOfImages).each(function(){
        $('<img/>')[0].src = this;
    });
}

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {

}else{
	preload([
    'asset/img/en/1-2.jpg',
    'asset/img/en/1-3.jpg',
    'asset/img/en/2-2.jpg',
    'asset/img/en/3-2.jpg',
    'asset/img/en/3-3.jpg',
    'asset/img/en/4-2.jpg'
	]);
}
