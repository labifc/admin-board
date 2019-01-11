//提示用户升级浏览器
(function(w) {
  var d = document.createElement("div");
  d.className = "browsehappy";
  d.innerHTML = '<div style="width:100%;height:100px;font-size:20px;line-height:100px;text-align:center;background-color:#ff9068;color:#fff;margin-bottom:40px;">你的浏览器实在<strong>太太太太太太旧了</strong>，放学别走， <a target="_blank" rel="external nofollow" href="https://browsehappy.com/" style="background-color:#31b0d5;border-color: #269abc;text-decoration: none;padding: 6px 12px;background-image: none;border: 1px solid transparent;border-radius: 4px;color:#FFFFFF;">立即升级</a></div>';
  var f = function() {
    var s = document.getElementsByTagName("body")[0];
    if ("undefined" == typeof(s)) {
      setTimeout(f, 10)
    } else {
      s.insertBefore(d, s.firstChild)
    }
  };
  f()
}(window));
