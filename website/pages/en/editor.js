const React = require('react');

class Editor extends React.Component {
  render() {
    return (
      <div>
        <iframe
          src="https://editor.casbin.org/"
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
