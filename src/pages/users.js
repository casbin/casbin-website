import React, {useEffect} from 'react';
import GitHubButton from 'react-github-btn';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './help.css';
import HomepageFeatures from '../components/HomepageFeatures';
import CodeBlock from '@theme/CodeBlock';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

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
  
export default function Users() {
    const siteConfig = useDocusaurusContext()
    return (
        <Layout>
        <Container align="center">
                <h1>
                    Who's using Casbin?
                </h1>
                Hundreds of projects are using Casbin, from established Fortune 500 companies to hot new startups. If you're curious to see what can be accomplished Casbin, check out these apps!
          <Grid container spaceing={5} className={classes.root}>
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
        <a href="https://www.honeywell.com/us/en">
            <img src="img/users/honeywell.png" height="150" width="150" />
        </a>
      </Grid>
      </Container>
        </Layout>
    )
}