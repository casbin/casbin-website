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
            <a href={this.docUrl('get-started', this.props.language)}>
              Getting Started
            </a>
            <a href={this.docUrl('management-api', this.props.language)}>
              Management API
            </a>
            <a href={this.docUrl('rbac-api', this.props.language)}>
              RBAC API
            </a>
            <a href={this.docUrl('middlewares', this.props.language)}>
              Middlewares
            </a>
          </div>
          <div>
            <h5>Community</h5>
            <a href={this.pageUrl('users', this.props.language)}>
              Who's using Casbin?
            </a>
            <a href="mailto:sales@casbin.com">
              Pricing & Sales
            </a>
            <a href="mailto:contact@casbin.com">
              Contact
            </a>
            <a
              href="https://stackoverflow.com/search?q=casbin"
              target="_blank"
              rel="noreferrer noopener">
              Stack Overflow
            </a>
          </div>
          <div>
            {/*<h5>Social</h5>*/}
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
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
              href={this.props.config.nodeRepoUrl}
              data-icon="octicon-star"
              data-count-href='/stargazers'
              data-show-count={true}
              data-count-aria-label="# stargazers on GitHub"
              aria-label="Star this project on GitHub">
              Node-Casbin
            </a>
            &nbsp;&nbsp;&nbsp;
            <a
              className="github-button"
              href={this.props.config.phpRepoUrl}
              data-icon="octicon-star"
              data-count-href='/stargazers'
              data-show-count={true}
              data-count-aria-label="# stargazers on GitHub"
              aria-label="Star this project on GitHub">
              PHP-Casbin
            </a>
            <a
              className="github-button"
              href={this.props.config.pythonRepoUrl}
              data-icon="octicon-star"
              data-count-href='/stargazers'
              data-show-count={true}
              data-count-aria-label="# stargazers on GitHub"
              aria-label="Star this project on GitHub">
              PyCasbin
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a
              className="github-button"
              href={this.props.config.dotnetRepoUrl}
              data-icon="octicon-star"
              data-count-href='/stargazers'
              data-show-count={true}
              data-count-aria-label="# stargazers on GitHub"
              aria-label="Star this project on GitHub">
              Casbin.NET
            </a>
            <a
              className="github-button"
              href={this.props.config.cppRepoUrl}
              data-icon="octicon-star"
              data-count-href='/stargazers'
              data-show-count={true}
              data-count-aria-label="# stargazers on GitHub"
              aria-label="Star this project on GitHub">
              Casbin-CPP
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a
              className="github-button"
              href={this.props.config.rustRepoUrl}
              data-icon="octicon-star"
              data-count-href='/stargazers'
              data-show-count={true}
              data-count-aria-label="# stargazers on GitHub"
              aria-label="Star this project on GitHub">
              Casbin-RS
            </a>
            {this.props.config.twitterUsername && (
              <div className="social">
                <a
                  href={`https://twitter.com/${this.props.config.twitterUsername}`}
                  className="twitter-follow-button">
                  Follow @{this.props.config.twitterUsername}
                </a>
              </div>
            )}
            {this.props.config.facebookAppId && (
              <div className="social">
                <div
                  className="fb-like"
                  data-href={this.props.config.url}
                  data-colorscheme="dark"
                  data-layout="standard"
                  data-share="true"
                  data-width="225"
                  data-show-faces="false"
                />
              </div>
            )}
          </div>
        </section>
        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;
