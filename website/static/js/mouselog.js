(function() {
  var script = document.createElement("script");
  script.src = "https://cdn.jsdelivr.net/npm/mouselog@latest/build/mouselog.min.js";
  script.onload = () => {
    let config = {
      uploadEndpoint: "https://mouselog.org",
      websiteId: "casbin_0.1.6_2",
      uploadMode: "periodic",
      uploadPeriod: 5000,
      sizeLimit: 7000,
      enableGet: true
    };
    var agent = mouselog.init();
    agent.run(config);
  };
  var t = document.getElementsByTagName("script");
  var s = t.length > 0 ? t[0].parentNode : document.body;
  s.appendChild(script, s);
})();
