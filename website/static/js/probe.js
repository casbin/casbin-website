(function() {
  var script = document.createElement("script");
  script.src = "https://probe.gdevelop.cn/probe.js";
  script.onload = function() {
    window._G = {
      IG: window.URL.createObjectURL(new Blob([])).substring(31),
      lsUrl: "/abc",
    };
    mouselog.init();
  };
  document.addEventListener('DOMContentLoaded', function () {
    document.body.appendChild(script);
  });
})();
