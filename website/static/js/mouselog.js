(function() {
  var script = document.createElement("script");
  script.src = "https://cdn.jsdelivr.net/npm/mouselog@0.2.7/build/mouselog.min.js";
  script.onload = function() {
    var config = {
      websiteId: "casbin_0.2.7",
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
