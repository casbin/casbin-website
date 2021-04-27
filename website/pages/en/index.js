/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(process.cwd() + '/siteConfig.js');
const translate = require('../../server/translate.js').translate;

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

Button.defaultProps = {
  target: '_self',
};

const SplashContainer = props => (
  <div className="homeContainer">
    <div className="homeSplashFade">
      <div className="wrapper homeWrapper">{props.children}</div>
    </div>
  </div>
);

const Logo = props => (
  <div className="projectLogo">
    <img src={props.img_src} />
  </div>
);

const ProjectTitle = props => (
  <h2 className="projectTitle">
    {siteConfig.title}
    <small>
      {siteConfig.tagline}
    </small>
  </h2>
);

const PromoSection = props => (
  <div className="section promoSection">
    <div className="promoRow">
      <div className="pluginRowBlock">{props.children}</div>
    </div>
  </div>
);

class HomeSplash extends React.Component {
  render() {
    let language = this.props.language || '';
    return (
      <SplashContainer>
        <div className="inner">
          {/*<Button href="https://github.com/casbin/casbin-forum">Need to build your own forum? See: Casbin-Forum</Button>*/}
          <ProjectTitle />
          <PromoSection>
            <Button href={docUrl('overview', language)}><translate>Get Started</translate></Button>
            <Button href="https://github.com/casbin/casbin">Golang</Button>
            <Button href="https://github.com/casbin/jcasbin">Java</Button>
            <Button href="https://github.com/casbin/casbin-cpp">C/C++</Button>
            <Button href="https://github.com/casbin/node-casbin">Node.js</Button>
            <Button href="https://github.com/casbin/casbin.js">Front-end js</Button>
            <Button href="https://github.com/php-casbin/php-casbin">PHP</Button>
            <Button href="https://github.com/php-casbin/laravel-authz">Laravel</Button>
            <Button href="https://github.com/casbin/pycasbin">Python</Button>
            <Button href="https://github.com/casbin/Casbin.NET">.NET (C#)</Button>
            <Button href="https://github.com/casbin4d/Casbin4D">Delphi</Button>
            <Button href="https://github.com/casbin/casbin-rs">Rust</Button>
            <Button href="https://github.com/evrone/casbin-ruby">Ruby</Button>
            <Button href="https://github.com/casbin/SwiftCasbin">Swift (Objective-C)</Button>
            <Button href="https://github.com/casbin/lua-casbin">Lua (OpenResty)</Button>
            <Button href="https://github.com/casbin/dart-casbin">Dart (Flutter)</Button>
            <Button href="https://github.com/casbin/casbin-ex">Elixir</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

const Block = props => (
  <Container
    padding={['bottom', 'top']}
    id={props.id}
    background={props.background}>
    <GridBlock align="center" contents={props.children} layout={props.layout} />
  </Container>
);

const Features = props => (
  <Block layout="fourColumn">
    {[
      {
        content: 'In Casbin, an access control model is abstracted into a CONF file based on the PERM metamodel (Policy, Effect, Request, Matchers). So switching or upgrading the authorization mechanism for a project is just as simple as modifying a configuration.',
        image: imgUrl('model.png'),
        imageAlign: 'top',
        title: 'Hybrid access control models',
      },
      {
        content: 'Besides memory and file, Casbin policy can be stored into lots of places. Currently, dozens of databases are supported, from MySQL, Postgres, Oracle to MongoDB, Redis, Cassandra, AWS S3. Check the full supported list at: https://casbin.org/docs/en/adapters',
        image: imgUrl('storage.png'),
        imageAlign: 'top',
        title: 'Flexible policy storage',
      },
      {
        content: 'Casbin is implemented in Golang, Java, PHP and Node.js. All implementations share the same API and behaviors. You can learn Casbin once and use it everywhere.',
        image: imgUrl('language.png'),
        imageAlign: 'top',
        title: 'Cross-languages & cross-platforms',
      },
    ]}
  </Block>
);

const FeatureCallout = props => (
  <div
    className="productShowcaseSection paddingBottom"
    style={{textAlign: 'center'}}>
    <h2>Feature Callout</h2>
    <MarkdownBlock>These are features of this project</MarkdownBlock>
  </div>
);

const LearnHow = props => (
  <Block background="light">
    {[
      {
        content: 'In Casbin, the policy storage is implemented as an adapter(aka middleware for Casbin). To keep light-weight, we don\'t put adapter code in the main library (except the default file adapter). A complete list of Casbin adapters is provided as below. Any 3rd-party contribution on a new adapter is welcomed, please inform us and I will put it in this list:) For details of adapters, please refer to the documentation: https://casbin.org/docs/en/adapters',
        image: imgUrl('store.png'),
        imageAlign: 'right',
        title: 'Policy persistence',
      },
    ]}
  </Block>
);

const TryOut = props => (
  <Block id="try">
    {[
      {
        content: 'Some adapters support filtered policy management. This means that the policy loaded by Casbin is a subset of the policy in storage based on a given filter. This allows for efficient policy enforcement in large, multi-tenant environments when parsing the entire policy becomes a performance bottleneck.\n' +
          '\n' +
          'To use filtered policies with a supported adapter, simply call the `LoadFilteredPolicy` method. The valid format for the filter parameter depends on the adapter used. To prevent accidental data loss, the `SavePolicy` method is disabled when a filtered policy is loaded.\n' +
          '\n' +
          'For example, the following code snippet uses the built-in filtered file adapter and the RBAC model with domains. In this case, the filter limits the policy to a single domain. Any policy lines for domains other than `"domain1"` are omitted from the loaded policy:\n',
        image: imgUrl('scale.png'),
        imageAlign: 'left',
        title: 'Policy enforcement at scale',
      },
    ]}
  </Block>
);

const Description = props => (
  <Block background="light">
    {[
      {
        content: 'The role manager is used to manage the RBAC role hierarchy (user-role mapping) in Casbin. A role manager can retrieve the role data from Casbin policy rules or external sources such as LDAP, Okta, Auth0, Azure AD, etc. We support different implementations of a role manager. To keep light-weight, we don\'t put role manager code in the main library (except the default role manager). A complete list of Casbin role managers is provided as: https://casbin.org/docs/en/role-managers\n',
        image: imgUrl('role.png'),
        imageAlign: 'right',
        title: 'Role manager',
      },
    ]}
  </Block>
);

const Showcase = props => {
  if ((siteConfig.users || []).length === 0) {
    return null;
  }
  const showcase = siteConfig.users
    .filter(user => {
      return user.pinned;
    })
    .map((user, i) => {
      return (
        <a href={user.infoLink} key={i}>
          <img src={user.image} alt={user.caption} title={user.caption} />
        </a>
      );
    });

  return (
    <div className="productShowcaseSection paddingBottom">
      <h2>
        <translate>Who's using Casbin?</translate>
      </h2>
      <p>
        <translate>Hundreds of projects are using Casbin, from established Fortune 500 companies to hot new startups. If you&#x27;re curious to see what can be accomplished with Casbin,</translate> <a href="/users.html"><translate>check out these apps!</translate></a>
      </p>
      <div className="logos">{showcase}</div>
      <div className="more-users">
        <a className="button" href={pageUrl('users', props.language)}>
          <translate>More</translate> {siteConfig.title} <translate>Users</translate>
        </a>
      </div>
    </div>
  );
};

class Index extends React.Component {
  render() {
    let language = this.props.language || '';

    return (
      <div>
        <div className="announcement">
          <div className="announcement-inner">
            <a style={{color: "white"}} href="https://github.com/casbin/casdoor" target="_blank">
              💖 Also need authentication/SSO? Find more at: Casdoor
            </a>
          </div>
        </div>
        <HomeSplash language={language} />
        <div className="mainContainer">
          <Features />
          <LearnHow />
          <TryOut />
          <Description />
          <Showcase language={language} />
          <script src="https://opencollective.com/casbin/banner.js"></script>
        </div>
      </div>
    );
  }
}

module.exports = Index;
