import React, {useEffect} from 'react';
import GitHubButton from 'react-github-btn';
import clsx from 'clsx';
import Layout from '@theme/Layout';

import Button from'@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles, ThemeProvider, createMuiTheme, withStyles } from '@material-ui/core/styles';
import { purple, green } from '@material-ui/core/colors';

import Head from '@docusaurus/Head'
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import custom from '../css/custom.css'
import HomepageFeatures from '../components/HomepageFeatures';
import useBaseUrl from '@docusaurus/useBaseUrl'
//import Users from './users'
//import users from './users'

import CodeBlock from '@theme/CodeBlock';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  square: {

  },
  rounded: {
    color: '#fff',
    backgroundColor: green[500],
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

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

const LangButton = withStyles((theme) =>({
  root: {
    color: theme.palette.getContrastText('#443E7E'),
    backgroundColor: '#443E7E',
    '&:hover': {
      backgroundColor: '#443E7E',
    },
  },
}))(Button);

//Policy persistence section
function PolicyPersistence() {
  return (
  <Container>
  <Grid container spacing={3} align="center" justify="center">
  <Grid item xs={6}>
  <Container>
    <h2>Policy persistence</h2>
    In Casbin, the policy storage is implemented as an adapter(aka middleware for Casbin).
    To keep light-weight, we don't put adapter code in the main library (except the default file adapter). 
    A complete list of Casbin adapters is provided as below. 
    Any 3rd-party contribution on a new adapter is welcomed, please inform us and I will put it in this list:) 
    For details of adapters, please refer to the documentation: <a href='https://casbin.org/docs/en/adapters'>https://casbin.org/docs/en/adapters</a>
  </Container>
  </Grid>
  <Grid item xs={6}>
  <Container><img src='img/store.png' /></Container>
  </Grid>
  </Grid>
  </Container>

  )
}

function PolicyEnforcement() {
  return (
    <Container>
      <Grid container spacing={3} align="center" justify="center">
      <Grid item xs={6}>
      <Container><img src='img/scale.png' /></Container>
      </Grid>
      <Grid item xs={6}>
      <Container>
      <h2>Policy enforcement at scale</h2>
      Some adapters support filtered policy management. 
      This means that the policy loaded by Casbin is a subset of the policy in storage based on a given filter. 
      This allows for efficient policy enforcement in large, multi-tenant environments when parsing the entire policy becomes a performance bottleneck.
      
      <br /><br />
      To use filtered policies with a supported adapter, simply call the <code>LoadFilteredPolicy</code> method. The valid format for the filter parameter depends on the adapter used. 
      To prevent accidental data loss, the <code>SavePolicy</code> method is disabled when a filtered policy is loaded. 
      <br /><br />
      For example, the following code snippet uses the built-in filtered file adapter and the RBAC model with domains. In this case, the filter limits the policy to a single domain. 
      Any policy lines for domains other than <code>domain1</code> are omitted from the loaded policy:
      </Container>
      </Grid>
      </Grid>
    </Container>
  )
}

function RoleManager(){
  return (
    <Container>
      <Grid container spacing={3} align="center" justify="center">
        <Grid item xs={6}>
          <Container>
          <h2>Role manager</h2>
          The role manager is used to manage the RBAC role hierarchy (user-role mapping) in Casbin. 
          A role manager can retrieve the role data from Casbin policy rules or external sources such as LDAP, Okta, Auth0, Azure AD, etc. 
          We support different implementations of a role manager. 
          To keep light-weight, we don't put role manager code in the main library (except the default role manager). 
          A complete list of Casbin role managers is provided as: <a href='https://casbin.org/docs/en/role-managers'>https://casbin.org/docs/en/role-managers</a>
          </Container>
        </Grid>
        <Grid item xs={6}>
          <Container><img src='img/role.png' /></Container>
        </Grid>
      </Grid>
    </Container>
  )
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const classes = useStyles();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <Container align="center">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <Link
              className="button button--lg"
              to='/docs/get-started'>
              Get Start
          </Link>
          <br />
          <br />
        <Grid align="center" container spaceing={7} className={classes.root}>
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
          <Container align="center">
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
          </Container>
        </Grid>
      </Container>
    </header>
  );
}

function Showcase() {
  const classes = useStyles();
  return (
    <>
    <Container align="center">
    <h2 >
      <font color='#443F7C'>
        Who's using Casbin?
        </font>
      </h2>
      <p>
        Hundreds of projects are using Casbin
        <br></br>
        From established Fortune 500 companies to hot new startups.
        <br></br>
        If you&#x27;re curious to see what can be accomplished with Casbin, check out these apps!
      </p>
      
      </Container>
      <br />
        <Container align="center">
          <Grid container spaceing={3} className={classes.root}>
        <a href="https://github.com/intel/rmd">
          <img src="img/users/intel.png" height="150" width="150" title="Intel RMD" />
        </a>
        <a href="https://github.com/goharbor/harbor">
          <img src="img/users/vmware.png" height="150" width="150" title="Vmware Harbor" />
        </a>
        <a href="https://docs.docker.com/engine/extend/legacy_plugins/#authorization-plugins">
          <img src="img/users/docker.png" height="150" width="150" title="Docker" />
        </a>
        <a href="https://github.com/orange-cloudfoundry/gobis">
          <img src="img/users/orange.png" height="150" width="150" title="Orange Gobis" />
        </a>
        <a href="https://www.linkedin.com/in/openmohan/">
          <img src="img/users/cisco.svg" height="150" width="150" title="Cisco" />
        </a>
        <a href="https://github.com/microsoft/mouselog">
          <img src="img/users/microsoft.png" height="150" width="150" title="Microsoft" />
        </a>
        <a href="https://github.com/casbin/casbin/pull/56">
          <img src="img/users/verizon.png" height="150" width="150" title="Verizon" />
        </a>
        <a href="https://github.com/skydive-project/skydive">
          <img src="img/users/redhat.png" height="150" width="150" title="Redhat" />
        </a>
        <a href="https://github.com/tkestack/tke">
          <img src="img/users/tencent.png" height="150" width="150" title="Tencent" />
        </a>
        <a href="https://github.com/netsec-ethz/">
          <img src="img/users/eth.jpg" height="150" width="150" title="ETH Zurich" />
        </a>
        <a href="https://github.com/tmobile/jazz">
          <img src="img/users/t-mobile.png" height="150" width="150" title="T-Mobile" />
        </a>
        <a href="https://loopback.io/doc/en/lb4/migration-auth-access-control-example.html#using-casbin">
          <img src="img/users/ibm.png" height="150" width="150" title="IBM" />
        </a>
        <a href="https://github.com/casbin/casbin/issues/299">
          <img src="img/users/f5.png" height="150" width="150" title="F5" />
        </a>
        <a href="https://github.com/casbin/casbin/issues/302">
          <img src="img/users/bose.png" height="150" width="150" title="Bose" />
        </a>
        <a href="https://github.com/r-spacex/SpaceX-API/commit/f8daa8f9878dcd7a281fc8081e3aeb8e5d216089">
          <img src="img/users/rspacex.png" height="150" width="150" title="r/SpaceX" />
        </a>
        <a href="https://www.elastic.co/guide/en/cloud-on-k8s/master/k8s-dependencies.html">
          <img src="img/users/elastic.svg" height="150" width="150" title="Elastic" />
        </a>
        <a href="https://ovo.id/">
          <img src="img/users/ovo.png" height="150" width="150" title="OVO" />
        </a>
        <a href="https://www.musma.net/">
          <img src="img/users/musma.svg" height="150" width="150" title="Musma" />
        </a>
        <a href="https://docs.kubemq.io/license/open-source-software-notices">
          <img src="img/users/kubemq.png" height="150" width="150" title />
        </a>
        <a href="https://jdlt.co.uk/">
          <img src="img/users/jdlt.svg" height="150" width="150" />
        </a>
        <a href="https://www.linkedin.com/in/andrew-weng/">
          <img src="img/users/360.jfif" height="150" width="150" />
        </a>
      </Grid>
      <br />
      <br />
      <Button align="center" variant="outlined" color="#443F7C">
        More Casbin Uesrs
      </Button>
      </Container>
      </>
      
  )
}

function Support(){
  return (
    <Container>
      <script src="https://opencollective.com/casbin/banner.js"></script>
    </Container>
  )
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
        <HomepageFeatures />
        <Container>
        <PolicyPersistence />
        </Container>
        <PolicyEnforcement />
        <RoleManager />
        <Showcase />
        <Support />
      </Layout>
  );
}
