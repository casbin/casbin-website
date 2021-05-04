import React, {useEffect} from 'react';
import GitHubButton from 'react-github-btn';
import clsx from 'clsx';
import Layout from '@theme/Layout';

import Head from '@docusaurus/Head'
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import useBaseUrl from '@docusaurus/useBaseUrl'

import CodeBlock from '@theme/CodeBlock';

//const {siteConfig} = useDocusaurusContext();
function imgUrl(img) {
  return siteConfig.baseUrl + 'img/' + img;
}

function docUrl(doc, language) {
  return siteConfig.baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
}

function pageUrl(page, language) {
  return siteConfig.baseUrl + (language ? language + '/' : '') + page;
}

const textContent = {
  policyPersistence: `
  In Casbin, the policy storage is implemented as an adapter(aka middleware for Casbin).
  To keep light-weight, we don't put adapter code in the main library (except the default file adapter). 
  A complete list of Casbin adapters is provided as below. 
  Any 3rd-party contribution on a new adapter is welcomed, please inform us and I will put it in this list:) 
  For details of adapters, please refer to the documentation: https://casbin.org/docs/en/adapters
  `,
  policyEnforcement: `
  Some adapters support filtered policy management. 
  This means that the policy loaded by Casbin is a subset of the policy in storage based on a given filter. 
  This allows for efficient policy enforcement in large, multi-tenant environments when parsing the entire policy becomes a performance bottleneck.
  <br/><br/>
  To use filtered policies with a supported adapter, simply call the <code>LoadFilteredPolicy</code> method. The valid format for the filter parameter depends on the adapter used. 
  To prevent accidental data loss, the <code>SavePolicy</code> method is disabled when a filtered policy is loaded. 
  <br><br>
  For example, the following code snippet uses the built-in filtered file adapter and the RBAC model with domains. In this case, the filter limits the policy to a single domain. 
  Any policy lines for domains other than <code>domain1</code> are omitted from the loaded policy:
  `,
  roleManager: `
  The role manager is used to manage the RBAC role hierarchy (user-role mapping) in Casbin. 
  A role manager can retrieve the role data from Casbin policy rules or external sources such as LDAP, Okta, Auth0, Azure AD, etc. 
  We support different implementations of a role manager. 
  To keep light-weight, we don't put role manager code in the main library (except the default role manager). 
  A complete list of Casbin role managers is provided as: https://casbin.org/docs/en/role-managers
  `
}

function ActionButton({href, type = 'primary', target, children}) {
  return (
    <a className={`ActionButton ${type}`} href={href} target={target}>
      {children}
    </a>
  );
}

function HomeCallToAction() {
  return (
    <>
      <ActionButton
        type="primary"
        href={useBaseUrl('docs/get-started')}
        target="_self">
        Get started
      </ActionButton>
      <ActionButton
        type="secondary"
        href={useBaseUrl('docs/tutorial')}
        target="_self">
        Learn basics
      </ActionButton>
    </>
  );
}

//Used to the headings which is bold font
function Heading({text}) {
  return <h2 className="Heading">{text}</h2>;
}

//Create a column for text content
function TextColumn({title, text, moreContent}) {
  return (
    <>
      <Heading text={title} />
      <div dangerouslySetInnerHTML={{__html: text}} />
      {moreContent}
    </>
  );
}

//Twitter button used to click and follow casbinnews
function TwitterButton(){
  return (
    <a href="https://twitter.com/intent/follow?screen_name=CasbinNews&region=follow_link" className="twitter-follow-button">
      <div className="icon" />
      Follow @CasbinNews
    </a>
  );
}

//Github star button
function GithubStartButton(){
  return (
    <div className="github-button">
      <GitHubButton
        href="https://github.com/casbin/casbin"
        data-icon="octicon-star"
        data-size="large"
        aria-label="Star Casbin on GitHub">
        Star
      </GitHubButton>
    </div>
  );
}

function Section({
  element = 'section',
  children,
  className,
  background = 'light',
}) {
  const El = element;
  return <El className={`Section ${className} ${background}`}>{children}</El>;
}

function TwoColumns({columnOne, columnTwo, reverse}) {
  return (
    <div className={`TwoColumns ${reverse ? 'reverse' : ''}`}>
      <div className={`column first ${reverse ? 'right' : 'left'}`}>
        {columnOne}
      </div>
      <div className={`column last ${reverse ? 'left' : 'right'}`}>
        {columnTwo}
      </div>
    </div>
  );
}


//Policy persistence section
function PolicyPersistence() {
  return (

    <Section className="PolicyPersistence" background="light">
      <TwoColumns
      reverse
      columnOne={
      <div className="text--center padding-horiz--md">
      <TextColumn
      className={styles.features}
      title="Policy Persistence"
      text={textContent.policyPersistence}
      /></div>}
      columnTwo={<img alt="" src='img/store.png' />}
      />
      </Section>

  )
}

function PolicyEnforcement() {
  return (
    <Section className="PolicyEnforcement" background="tint">
      <TwoColumns
      reverse
      columnOne={
        <div className="text--center padding-horiz--md">
        <TextColumn
        title="Policy enforcement at scale"
        text={textContent.policyEnforcement}
        /></div>
      }
        columnTwo={<img alt="" src={useBaseUrl('img/scale.png')}/>}
        />
    </Section>
  )
}

function RoleManager(){
  return (
    <Section className="RoleManager">
      <TwoColumns
      reverse
      columnOne={
        <div className="text--center padding-horiz--md">
        <TextColumn
        title="Role manager"
        text={textContent.roleManager}
        /></div>}
        columnTwo={<img alt="" src='img/role.png' height="500" wigth="500" />}
        />
    </Section>
  )
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div>
          <Link
              className="button button--lg"
              to='/docs/get-started'
            >
              Get Start
            </Link>
            </div>
            <br></br>
        <div className={styles.buttons}>
          <Link
            className="button button--lg"
            to="https://github.com/casbin/casbin">
            Golang
          </Link>
          <Link
            className="button button--lg"
            to="https://github.com/casbin/jcasbin">
            Java
          </Link>
          <Link
            className="button button--lg"
            to="https://github.com/casbin/casbin-cpp">
            C/C++
          </Link>
          <Link
            className="button button--lg"
            to="https://github.com/casbin/node-casbin">
            Node.js
          </Link>
          <Link
            className="button button--lg"
            to="https://github.com/casbin/casbin.js">
            Front-end JS
          </Link>
          <Link
            className="button button--lg"
            to="https://github.com/casbin/php-casbin">
            PHP
          </Link>
          <Link
            className="button button--lg"
            to="https://github.com/php-casbin/laravel-authz">
            Laravel
          </Link>
          <Link
            className="button button--lg"
            to="https://github.com/casbin/pycasbin">
            Python
          </Link>
          <Link
            className="button button--lg"
            to="https://github.com/casbin/Casbin.NET">
            .NET(C#)
          </Link>
          
        </div>
        <br />
        <div>
        <Link
            className="button button--lg"
            to="https://github.com/casbin/Casbin4D">
            Delphi
          </Link>
          <Link
            className="button button--lg"
            to="https://github.com/casbin/casbin-rs">
            Rust
          </Link>
          <Link
            className="button button--lg"
            to="https://github.com/casbin/casbin-ruby">
            Ruby
          </Link>
          <Link
            className="button button--lg"
            to="https://github.com/casbin/SwiftCasbin">
            Swift (Objective-C)
          </Link>
          <Link
            className="button button--lg"
            to="https://github.com/casbin/lua-casbin">
            Lua (OpenResty)
          </Link>
          <Link
            className="button button--lg"
            to="https://github.com/casbin/dart-casbin">
            Dart (Flutter)
          </Link>
          <Link
            className="button button--lg"
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
        <HomepageFeatures />
        <section className={styles.container}>
          <div className="container">
          <div className="row">
        <PolicyPersistence />
        <PolicyEnforcement />
        <RoleManager />
        </div>
        </div>
        </section>
    </Layout>
  );
}
