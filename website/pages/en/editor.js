const React = require('react');

const Editor = () => (
    <div>
      <iframe
          src="https://optimistic-wozniak-4e6a8d.netlify.com"
          style={{width: '100%', height: '100vh', display: 'block'}}
          title="Casbin-editor"
          allowFullScreen={true}
      />
      <div id={'disqus'}/>
    </div>
);

module.exports = Editor;
