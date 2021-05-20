import React, {useEffect} from 'react';
import GitHubButton from 'react-github-btn';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './help.css';
import HomepageFeatures from '../components/HomepageFeatures';
import { Row, Col } from 'antd';

import CodeBlock from '@theme/CodeBlock';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
function imgUrl(img) {
  return siteConfig.baseUrl + 'img/' + img;
}

function docUrl(doc, language) {
  return siteConfig.baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
}

function pageUrl(page, language) {
  return siteConfig.baseUrl + (language ? language + '/' : '') + page;
}

function SupportLink() {
  return (
    <Container>
      <h1>Need help?</h1>
      If you need help with Casbin, you can try one of the mechanisms below.
      <br />
      <br />
      <br />
      <Grid container spacing={4} align="center" justify="center">
      <Grid item xs={3}>
        <h1>
          Forum
        </h1>
        Discuss with maintainers or share your experience about Casbin on <a href="https://forum.casbin.com/">Casbin Forum</a>.
      </Grid>
      <Grid item xs={3}>
        <h1>
          Gitter
        </h1>
        You can join the conversation on <a href="https://gitter.im/casbin/Lobby">Gitter</a> for contributing help.
      </Grid>
      <Grid item xs={3}>
        <h1>
          Tencent QQ
        </h1>
        You can contact us by joining the QQ group: <a href="https://shang.qq.com/wpa/qunwpa?idkey=8ac8b91fc97ace3d383d0035f7aa06f7d670fd8e8d4837347354a31c18fac885">546057381</a>.
      </Grid>
      <Grid item xs={3}>
        <h1>
          Github
        </h1>
        At our <a href="https://github.com/casbin/casbin">GitHub repo</a> for bugs you find or any new features you may want implemented.
      </Grid>
      </Grid>
    </Container>
  )
}

export default function Help() {
    const siteConfig = useDocusaurusContext();
    return (
        <Layout>
            <SupportLink />
        </Layout>

    )
}