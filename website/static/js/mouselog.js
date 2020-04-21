(function() {
  var script = document.createElement("script");
  script.src = "https://test.mouselog.org/mouselog.min2.js";
  script.onload = function() {
    var config = {
      websiteId: "casbin_0.3.3",
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
