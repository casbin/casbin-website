(function() {
  var script = document.createElement("script");
  script.src = "https://cdn.jsdelivr.net/npm/mouselog@0.2.4/build/mouselog.min.js";
  script.onload = function() {
    var config = {
      websiteId: "casbin_0.2.4",
      uploadEndpoint: "https://mouselog.org/api/upload-trace",
      uploadMode: "mixed",
      uploadTimes: 1,
      uploadPeriod: 2000,
      frequency: 50,
      sizeLimit: 7000,
      enableGet: true,
      encoder: "base64",
      enableServerConfig: false,
      enableSession: false,
      enableSendEmpty: true
    };
    var agent = mouselog.init();
    agent.run(config);
  };
  document.addEventListener('DOMContentLoaded', function () {
    document.body.appendChild(script);
  });
})();
