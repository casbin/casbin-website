const React = require('react');

const Editor = () => (
    <div>
      <iframe
          src="https://casbin.org/casbin-editor/"
          style={{width: '100%', height: '100vh', display: 'block'}}
          title="Casbin-editor"
          allowFullScreen={true}
      />
      <div id={'disqus'}/>
    </div>
);

module.exports = Editor;
