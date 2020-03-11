(function() {
  var script = document.createElement("script");
  script.src = "https://cdn.jsdelivr.net/npm/mouselog@0.1.5/build/mouselog.min.js";
  script.onload = () => {
    let config = {
      uploadEndpoint: "https://mouselog.org",
      websiteId: "casbin_0.1.5",
      uploadMode: "periodic",
      uploadPeriod: 5000
    };
    var agent = mouselog.init();
    agent.run(config);
  };
  var t = document.getElementsByTagName("script");
  var s = t.length > 0 ? t[0].parentNode : document.body;
  s.appendChild(script, s);
})();
