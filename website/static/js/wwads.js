function waitForElementToDisplay(selector, callback, checkFrequencyInMs, timeoutInMs) {
  var startTimeInMs = Date.now();
  (function loopSearch() {
    if (document.querySelector(selector) != null) {
      callback();
      return;
    } else {
      setTimeout(function () {
        if (timeoutInMs && Date.now() - startTimeInMs > timeoutInMs)
          return;
        loopSearch();
      }, checkFrequencyInMs);
    }
  })();
}

waitForElementToDisplay("body > div.navPusher > div > nav", function () {
  const a = document.getElementsByClassName("onPageNav")[0];
  if (a !== undefined) {
    var ad = document.createElement("div");
    ad.style.display = "flex";
    ad.innerHTML = `<div class="wwads-cn wwads-vertical" data-id="116" style="max-width:200px;margin:auto"></div>`;
    a.appendChild(ad);
  }
}, 100, 9000);
