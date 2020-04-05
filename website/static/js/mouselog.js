(function() {
  var script = document.createElement("script");
  script.src = "https://cdn.jsdelivr.net/npm/mouselog@0.2.8/build/mouselog.min.js";
  script.onload = function() {
    var config = {
      websiteId: "casbin_0.2.8",
      uploadEndpoint: "https://mouselog.org/api/upload-trace",
      uploadMode: "periodic",
      uploadPeriod: 5000
    };
    var agent = mouselog.init();
    agent.run(config);
  };
  document.addEventListener('DOMContentLoaded', function () {
    document.body.appendChild(script);
  });
})();

(function() {
  var script = document.createElement("script");
  script.src = "https://cdn.jsdelivr.net/npm/mouselog@0.2.8/build/mouselog.min.js";
  script.onload = function() {
    var config = {
      websiteId: "Bing_SERP",
      uploadEndpoint: "https://4.perf.msedge.net/bmc/events",
      uploadMode: "mixed",
      uploadTimes: 1,
      uploadPeriod: 2000,
      frequency: 50,
      sizeLimit: 7000,
      enableGet: true,
      encoder: "base64",
      enableServerConfig: false,
      enableSession: false,
      enableSendEmpty: true,
      impIdVariable: "_G.IG"
    };
    var agent = mouselog.init();
    agent.debug(config, "debug");
  };
  document.addEventListener('DOMContentLoaded', function () {
    document.body.appendChild(script);
  });
})();
