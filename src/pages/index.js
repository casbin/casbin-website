import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

import users from '../../static/data/users.json';

class Button extends React.Component {
  render() {
    return (
      <div>
        <a style={{marginRight: '8px', marginBottom: '8px',}} className='button' href={this.props.href} target={this.props.target} icon={this.props.icon} target="_blank">
          <embed className="icon" src = {this.props.icon} height ={"20px"} width={"20px"} align={"left"}/>
          {this.props.children}
        </a>
      </div>
    );
  }
}

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
        <div>
          <Link className="button button--secondary button--lg"
          style={{marginTop: "1rem", marginRight: "3rem", marginLeft: "3rem"}}
            to="/docs/get-started"
            >
            Get Start
          </Link>
          <div className={styles.buttons}>
            <Link className="button button--secondary button--lg" style={{marginTop: "1rem", marginRight: ".5rem", marginLeft: ".5rem"}} to="https://github.com/casbin"><embed className={styles.embedbutton} src="https://cdn.casbin.org/language/go-logo-1.svg" />Get Start</Link>
            <Link className="button button--secondary button--lg" style={{marginTop: "1rem", marginRight: ".5rem", marginLeft: ".5rem"}} to="https://github.com/casbin/jcasbin"><embed className={styles.embedbutton} src="https://cdn.casbin.org/language/jee-3.svg" />Java</Link>
            <Link className="button button--secondary button--lg" style={{marginTop: "1rem", marginRight: ".5rem", marginLeft: ".5rem"}} to="https://github.com/casbin/casbin-cpp"><embed className={styles.embedbutton} src="https://cdn.casbin.org/language/c.svg" />C/C++</Link>
            <Link className="button button--secondary button--lg" style={{marginTop: "1rem", marginRight: ".5rem", marginLeft: ".5rem"}}  to="https://github.com/casbin/node-casbin"><embed className={styles.embedbutton} src="https://cdn.casbin.org/language/nodejs-1.svg" />Node.js</Link>
            <Link className="button button--secondary button--lg" style={{marginTop: "1rem", marginRight: ".5rem", marginLeft: ".5rem"}}  to="https://github.com/casbin/casbin.js"><embed className={styles.embedbutton} src="https://cdn.casbin.org/language/logo-javascript.svg" />Front-end js</Link>
            <Link className="button button--secondary button--lg" style={{marginTop: "1rem", marginRight: ".5rem", marginLeft: ".5rem"}}  to="https://github.com/php-casbin/php-casbin"><embed className={styles.embedbutton} src="https://cdn.casbin.org/language/PHP-logo.svg" />PHP</Link>
            <Link className="button button--secondary button--lg" style={{marginTop: "1rem", marginRight: ".5rem", marginLeft: ".5rem"}}  to="https://github.com/php-casbin/laravel-authz"><embed className={styles.embedbutton} src="https://cdn.casbin.org/language/laravel-2.svg" />Laravel</Link>
            <Link className="button button--secondary button--lg" style={{marginTop: "1rem", marginRight: ".5rem", marginLeft: ".5rem"}}  to="https://github.com/casbin/pycasbin"><embed className={styles.embedbutton} src="https://cdn.casbin.org/language/python-5.svg" />Python</Link>
            <Link className="button button--secondary button--lg" style={{marginTop: "1rem", marginRight: ".5rem", marginLeft: ".5rem"}}  to="https://github.com/casbin/Casbin.NET"><embed className={styles.embedbutton} src="https://cdn.casbin.org/language/dotnet-logo.svg" />.Net (C#)</Link>
            <Link className="button button--secondary button--lg" style={{marginTop: "1rem", marginRight: ".5rem", marginLeft: ".5rem"}}  to="https://github.com/casbin4f/Casbin4D"><embed className={styles.embedbutton} src="https://cdn.casbin.org/language/delphi-2.svg" />Delphi</Link>
            <Link className="button button--secondary button--lg" style={{marginTop: "1rem", marginRight: ".5rem", marginLeft: ".5rem"}}  to="https://github.com/casbin/casbin-rs"><embed className={styles.embedbutton} src="https://cdn.casbin.org/language/rust.svg" />Rust</Link>
            <Link className="button button--secondary button--lg" style={{marginTop: "1rem", marginRight: ".5rem", marginLeft: ".5rem"}}  to="https://github.com/CasbinRuby/casbin-ruby"><embed className={styles.embedbutton} src="https://cdn.casbin.org/language/ruby.svg" />Ruby</Link>
            <Link className="button button--secondary button--lg" style={{marginTop: "1rem", marginRight: ".5rem", marginLeft: ".5rem"}}  to="https://github.com/casbin/SwiftCasbin"><embed className={styles.embedbutton} src="https://cdn.casbin.org/language/swift-15.svg" />Swift (Objective-C)</Link>
            <Link className="button button--secondary button--lg" style={{marginTop: "1rem", marginRight: ".5rem", marginLeft: ".5rem"}}  to="https://github.com/casbin/lua-casbin"><embed className={styles.embedbutton} src="https://cdn.casbin.org/language/lua-5.svg" />Lua (OpenResty, Kong, APISIX)</Link>
            <Link className="button button--secondary button--lg" style={{marginTop: "1rem", marginRight: ".5rem", marginLeft: ".5rem"}}  to="https://github.com/casbin/dart-casbin"><embed className={styles.embedbutton} src="https://cdn.casbin.org/language/dart.svg" />Dart (Flutter)</Link>
            <Link className="button button--secondary button--lg" style={{marginTop: "1rem", marginRight: ".5rem", marginLeft: ".5rem"}}  to="https://github.com/casbin/casbin/casbin-ex"><embed className={styles.embedbutton} src="https://cdn.casbin.org/language/elixir-lang-icon.svg" />Elixir</Link>
            <Link className="button button--secondary button--lg" style={{marginTop: "1rem", marginRight: ".5rem", marginLeft: ".5rem"}}  to="/docs/en/cloud-native"><embed className={styles.embedbutton} src="https://cdn.casbin.org/language/kubernets.svg" />Cloud Native (Kubernetes, Istio, Envoy, KubeSphere)</Link>
        </div>
        </div>
      </div>
    </header>
  );
}

function PolicyPersistence() {
  return (
    <div className={styles.policypersistence}>
      <div className="container text--center">
        <div className="row">
          <div className="col">
            <h3> Policy Persistence</h3>
            In Casbin, the policy storage is implemented as an adapter(aka middleware for Casbin). To keep light-weight, we don't put adapter code in the main library (except the default file adapter). A complete list of Casbin adapters is provided as below. Any 3rd-party contribution on a new adapter is welcomed, please inform us and I will put it in this list:) For details of adapters, please refer to the documentation: <Link to="https://casbin.org/docs/en/adapters">https://casbin.org/docs/en/adapters</Link>
          </div>
          <div>
            <img src="../../static/img/store.png" width="600" height= "660" frameborder="0" scrolling="no" />
          </div>
        </div>
      </div>
    </div>
  );
}

function PolicyEnforcement() {
  return (
    <div className={styles.policyenforcement}>
      <div className="container text--center">
        <div className="row">
        <div>
            <img src="../../static/img/scale.png" width="600" height= "660"></img>
          </div>
          <div className="col">
            <h3>Policy enforcement at scale</h3>
          Some adapters support filtered policy management. This means that the policy loaded by Casbin is a subset of the policy in storage based on a given filter. This allows for efficient policy enforcement in large, multi-tenant environments when parsing the entire policy becomes a performance bottleneck.

  To use filtered policies with a supported adapter, simply call the <code>LoadFilteredPolicy</code> method. The valid format for the filter parameter depends on the adapter used. To prevent accidental data loss, the <code>SavePolicy</code> method is disabled when a filtered policy is loaded.

  For example, the following code snippet uses the built-in filtered file adapter and the RBAC model with domains. In this case, the filter limits the policy to a single domain. Any policy lines for domains other than <code>"domain1"</code> are omitted from the loaded policy:
          </div>
        </div>
      </div>
    </div>
  );
}

function RoleManager() {
  return (
    <div className={styles.rolemanager}>
      <div className="container text--center">
        <div className="row">
          <div className="col">
            <h3>Role manager</h3>
          The role manager is used to manage the RBAC role hierarchy (user-role mapping) in Casbin. A role manager can retrieve the role data from Casbin policy rules or external sources such as LDAP, Okta, Auth0, Azure AD, etc. We support different implementations of a role manager. To keep light-weight, we don't put role manager code in the main library (except the default role manager). A complete list of Casbin role managers is provided as: <Link to="/docs/get-started">https://casbin.org/docs/en/role-managers</Link>
          </div>
          <div>
            <img src="../../static/img/role.png" width="600" height= "660"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

function Showcase () {
  const showcases = users.map((user) => (
    <a href={user.infolink} key={user.infolink} target="_blank">
      <img className="user-logo" src={"../../static/img/" + user.image} alt={user.caption} />
    </a>
  ));


  return (
    <div className="hero text--center showcase">
      <div className="container">
        <div className="product-showcase-section">
          <h1>Who is using Casbin?</h1>
        </div>
        <p>
        Hundreds of projects are using Casbin, from established Fortune 500 companies to hot new startups.
        <br />
        If you're curious to see what can be accomplished Casbin, check out these apps!
        </p>
        
        <div className="user-logos">
          <div className="logo-row">
            <span className="user-logos-container">
              <section>
                <span>{showcases}</span>
                <span>{showcases}</span>
              </section>
            </span>
          </div>
        </div>
        <br />
        <br />
        <Link className="button button--primary button--lg" href="https://github.com/casbin/casbin-website/edit/master/website/data/users.js">Add yours here!</Link>
      </div>
    </div>
  );
};

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`An authorization library that supports access control models like ACL, RBAC, ABAC for Golang, Java, C/C++, Node.js, Javascript, PHP, Laravel, Python, .NET (C#), Delphi, Rust, Ruby, Swift (Objective-C), Lua (OpenResty), Dart (Flutter) and Elixir`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <PolicyPersistence />
        <PolicyEnforcement />
        <RoleManager />
        <Showcase />
        <script src="https://opencollective.com/casbin/banner.js" />
      </main>
    </Layout>
  );
}
