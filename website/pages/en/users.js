/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const Container = CompLibrary.Container;

const siteConfig = require(process.cwd() + '/siteConfig.js');
const translate = require('../../server/translate.js').translate;

class Users extends React.Component {
  render() {
    if ((siteConfig.users || []).length === 0) {
      return null;
    }
    const editUrl = siteConfig.repoUrl + '/edit/master/website/siteConfig.js';
    const showcase = siteConfig.users.map((user, i) => {
      return (
        <a href={user.infoLink} key={i}>
          <img src={user.image} alt={user.caption} title={user.caption} />
        </a>
      );
    });

    return (
      <div className="mainContainer">
        <Container padding={['bottom', 'top']}>
          <div className="showcaseSection">
            <div className="prose">
              <h1>
                <translate>Who's using Casbin?</translate>
              </h1>
              <p>
                <translate>Hundreds of projects are using Casbin, from established Fortune 500 companies to hot new startups. If you&#x27;re curious to see what can be accomplished with Casbin, check out these apps!</translate>
              </p>
            </div>
            <div className="logos">{showcase}</div>
            <p>
              <translate>Is your project also using Casbin?</translate>
            </p>
            <a href="https://github.com/casbin/casbin-website/edit/master/website/data/users.js" className="button">
              <translate>Add your company here</translate>
            </a>
          </div>
        </Container>
      </div>
    );
  }
}

module.exports = Users;
