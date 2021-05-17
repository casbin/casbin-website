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
function imgUrl(img) {
  return siteConfig.baseUrl + 'img/' + img;
}

function docUrl(doc, language) {
  return siteConfig.baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
}

function pageUrl(page, language) {
  return siteConfig.baseUrl + (language ? language + '/' : '') + page;
}

const SupportLinks =[
  {
    title: 'Forum',
    content: `Discuss with maintainers or share your experience about Casbin on [Casbin Forum](https://forum.casbin.com/).`,
  },
  {
    title: 'Gitter',
    content: 'You can join the conversation on [Gitter](https://gitter.im/casbin/Lobby) for contributing help.',
  },
  {
    title: 'Tencent QQ',
    content: 'You can contact us by joining the QQ group: [546057381](https://shang.qq.com/wpa/qunwpa?idkey=8ac8b91fc97ace3d383d0035f7aa06f7d670fd8e8d4837347354a31c18fac885).',
  },
  {
    title: 'Github',
    content: 'At our [GitHub repo](https://github.com/casbin/casbin), browse and submit [issues](https://github.com/casbin/casbin/issues) or [pull requests](https://github.com/casbin/casbin/pulls) for bugs you find or any new features you may want implemented.',
  },
]

function SupportLink({title, content}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {title}
      </div>
      <div className="text--center padding-horiz--md">
        {content}
      </div>
    </div>
  )
}

function Test(){
  return (
    <section id={styles.deals}>
      <section class={styles.sale-item}>
      Discuss with maintainers or share your experience about Casbin on [Casbin Forum](https://forum.casbin.com/).
      </section>
      <section class={styles.sale-item}>
      You can join the conversation on [Gitter](https://gitter.im/casbin/Lobby) for contributing help.
      </section>
    </section>
    )
}

export default function Help() {
    const siteConfig = useDocusaurusContext();
    return (
        <Layout>
            <header>
            <h1>Need help?</h1>
            </header>
            <p>
            If you need help with Casbin, you can try one of the mechanisms below.
            <SupportLink />
            </p>
            <>
          <Row>
        <Col span={6}>col-6</Col>
        <Col span={6}>col-6</Col>
        <Col span={6}>col-6</Col>
        <Col span={6}>col-6</Col>
        </Row>
        </>
        </Layout>

    )
}