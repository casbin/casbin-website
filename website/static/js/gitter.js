((window.gitter = {}).chat = {}).options = {
  room: 'casbin/Lobby',
};

document.write("<script src=\"https://sidecar.gitter.im/dist/sidecar.v1.js\" async defer></script>")

const id = setInterval(function(){
  const gitterCollapseButton = document.getElementsByClassName('gitter-open-chat-button');
  if(gitterCollapseButton.length > 0) {
      gitterCollapseButton[0].style.backgroundColor = "#443d80";

      gitterCollapseButton[0].addEventListener("click", function(){
        const gitterEmbedClass = document.getElementsByClassName('gitter-chat-embed');
        gitterEmbedClass[0].style.top = "7%";
      });
      
      clearInterval(id);
  }
});