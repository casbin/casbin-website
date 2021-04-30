import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

function imgUrl(img) {
  return siteConfig.baseUrl + 'img/' + img;
}

function docUrl(doc, language) {
  return siteConfig.baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
}

function pageUrl(page, language) {
  return siteConfig.baseUrl + (language ? language + '/' : '') + page;
}

class Button extends React.Component {
  render() {
    return (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={this.props.href} target={this.props.target}>
          {this.props.children}
        </a>
      </div>
    );
  }
}

const PromoSection = props => (
  <div className="section promoSection">
    <div className="promoRow">
      <div className="pluginRowBlock">{props.children}</div>
    </div>
  </div>
);

Button.defaultProps = {
  target: '_self',
};

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button"
            to="https://github.com/casbin/casbin">
            Golang
          </Link>
          <Link
            className="button"
            to="https://github.com/casbin/jcasbin">
            Java
          </Link>
          <Link
            className="button"
            to="https://github.com/casbin/casbin-cpp">
            C/C++
          </Link>
          <Link
            className="button"
            to="https://github.com/casbin/node-casbin">
            Node.js
          </Link>
          <Link
            className="button"
            to="https://github.com/casbin/casbin.js">
            Front-end JS
          </Link>
          <Link
            className="button"
            to="https://github.com/casbin/php-casbin">
            PHP
          </Link>
          <Link
            className="button"
            to="https://github.com/casbin/laravel-authz">
            Laravel
          </Link>
          <Link
            className="button"
            to="https://github.com/casbin/pycasbin">
            Python
          </Link>
          <Link
            className="button"
            to="https://github.com/casbin/Casbin.NET">
            .NET(C#)
          </Link>
          
        </div>
        <div>
        <Link
            className="button"
            to="https://github.com/casbin/Casbin4D">
            Delphi
          </Link>
          <Link
            className="button"
            to="https://github.com/casbin/casbin-rs">
            Rust
          </Link>
          <Link
            className="button"
            to="https://github.com/casbin/casbin-ruby">
            Ruby
          </Link>
          <Link
            className="button"
            to="https://github.com/casbin/SwiftCasbin">
            Swift (Objective-C)
          </Link>
          <Link
            className="button"
            to="https://github.com/casbin/lua-casbin">
            Lua (OpenResty)
          </Link>
          <Link
            className="button"
            to="https://github.com/casbin/dart-casbin">
            Dart (Flutter)
          </Link>
          <Link
            className="button"
            to="https://github.com/casbin/casbin-ex">
            Elixir
          </Link>
        </div>
      </div>

    </header>
    
  );
}



export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
