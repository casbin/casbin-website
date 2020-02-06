(function() {
  var script = document.createElement("script");
  script.src = "https://cdn.jsdelivr.net/npm/mouselog@0.0.5-beta2/mouselog.js";
  script.onload = () => {
    mouselog.run("https://mouselog.org", "casbin");
  };
  var t = document.getElementsByTagName("script");
  var s = t.length > 0 ? t[0].parentNode : document.body;
  s.appendChild(script, s);
})();
