/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? language + '/' : '') + doc;
  }

  render() {
    const currentYear = new Date().getFullYear();
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="66"
                height="58"
              />
            )}
          </a>
          <div>
            <h5>Docs</h5>
            <a href={this.props.config.baseUrl + 'docs/go-quick-start.html'}>
              Getting Started
            </a>
            <a href={this.props.config.baseUrl + 'docs/api.html'}>
              API Reference
            </a>
          </div>
          <div>
            <h5>Community</h5>
            <a href={this.pageUrl('users.html', this.props.language)}>
              Who's using Casbin?
            </a>
            <a
              href="https://stackoverflow.com/search?q=casbin"
              target="_blank"
              rel="noreferrer noopener">
              Stack Overflow
            </a>
            <a href="https://gitter.im/casbin/Lobby"
               target="_blank">
              Project Chat
            </a>
            <a
              href="https://twitter.com/CasbinNews"
              target="_blank"
              rel="noreferrer noopener">
              Twitter
            </a>
          </div>
          <div>
            <h5>GitHub</h5>
            <a
              className="github-button"
              href={this.props.config.goRepoUrl}
              data-icon="octicon-star"
              data-count-href='/stargazers'
              data-show-count={true}
              data-count-aria-label="# stargazers on GitHub"
              aria-label="Star this project on GitHub">
              Casbin
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a
              className="github-button"
              href={this.props.config.javaRepoUrl}
              data-icon="octicon-star"
              data-count-href='/stargazers'
              data-show-count={true}
              data-count-aria-label="# stargazers on GitHub"
              aria-label="Star this project on GitHub">
              jCasbin
            </a>
            <br/>
            <a
              className="github-button"
              href={this.props.config.phpRepoUrl}
              data-icon="octicon-star"
              data-count-href='/stargazers'
              data-show-count={true}
              data-count-aria-label="# stargazers on GitHub"
              aria-label="Star this project on GitHub">
              php-Casbin
            </a>
            &nbsp;&nbsp;&thinsp;&thinsp;
            <a
              className="github-button"
              href={this.props.config.nodeRepoUrl}
              data-icon="octicon-star"
              data-count-href='/stargazers'
              data-show-count={true}
              data-count-aria-label="# stargazers on GitHub"
              aria-label="Star this project on GitHub">
              node-Casbin
            </a>
          </div>
        </section>
        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;
