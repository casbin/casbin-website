/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(process.cwd() + '/siteConfig.js');
const translate = require('../../server/translate.js').translate;

function docUrl(doc, language) {
  return siteConfig.baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
}

class Help extends React.Component {
  render() {
    let language = this.props.language || '';
    const supportLinks = [
      {
        title: 'Forum',
        content: `Discuss with maintainers or share your experience about Casbin on [Casbin Forum](https://forum.casbin.com/).`,
      },
      {
        title: 'Gitter',
        content:
          'You can join the conversation on [Gitter](https://gitter.im/casbin/Lobby) for contributing help.',
      },
      {
        title: 'Tencent QQ',
        content:
          'You can contact us by joining the QQ group: [546057381](https://shang.qq.com/wpa/qunwpa?idkey=8ac8b91fc97ace3d383d0035f7aa06f7d670fd8e8d4837347354a31c18fac885).',
      },
      {
        title: 'GitHub',
        content:
          'At our [GitHub repo](https://github.com/casbin/casbin), browse and submit [issues](https://github.com/casbin/casbin/issues) or [pull requests](https://github.com/casbin/casbin/pulls) for bugs you find or any new features you may want implemented.',
      },
    ];

    return (
      <div className="docMainWrapper wrapper">
        <Container className="mainContainer documentContainer postContainer">
          <div className="placeholderads" />
          <div className="post">
            <header className="postHeader">
              <h1>
                <translate>Need help?</translate>
              </h1>
            </header>
            <p>
              <translate desc="statement made to reader">
                If you need help with Casbin, you can try one of the mechanisms below.
              </translate>
            </p>
            <GridBlock contents={supportLinks} layout="fourColumn" />
          </div>
        </Container>
      </div>
    );
  }
}

Help.title = 'Help';

module.exports = Help;
