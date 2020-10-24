const React = require('react');

class Editor extends React.Component {
  render() {
    return (
      <div>
        <iframe
          src="https://casbin.org/casbin-editor/"
          style={{width: '100%', height: '150vh', display: 'block'}}
          title="Casbin-editor"
          allowFullScreen={true}
        />
        <div id={'disqus'}/>
      </div>
    );
  }
}

module.exports = Editor;
