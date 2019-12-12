var i18nZHData = {
      'tran-site-categories':'网站分类',
      'tran-site-tags':'网站标签',
      'tran-posted-in':'发布到',
      'tran-tags':'标签：',
      'tran-archives':'归档',
      'tran-categories':'分类：',
      'tran-comments':'评论',
      'tran-readmore':'继续阅读...',
      'tran-prev-page':'&laquo; 上一页',
      'tran-next-page':'下一页 &raquo;',
      'tran-disqus-comments':'评论'
    };

document.addEventListener('DOMContentLoaded',function(){
  const el = document.getElementById('navbarSNSRssSwitchBtn');
  el.addEventListener('click',function(){
    const $target = document.getElementById('navbarSNSRssButtons');
    el.classList.toggle('is-active');
    $target.classList.toggle('is-active');
  });

  var userLang = navigator.language || navigator.userLanguage; 
  if(userLang.indexOf('zh') != -1){
    var result = Object.keys(i18nZHData);
    for (var i = 0; i < result.length; i++) {
        var key = result[i];
        var eles = document.querySelectorAll('.'+key);
        eles.forEach(function(ele){
          ele.innerHTML = i18nZHData[key];
        });
    }
  }

});