import React, {useEffect} from 'react';
import GitHubButton from 'react-github-btn';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

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



export default function Help() {
    const siteConfig = useDocusaurusContext();
    return (
        <Layout>
            <header>
            <h1>Need help?</h1>
            </header>
            <p>
            If you need help with Casbin, you can try one of the mechanisms below.
            </p>
            <div>
                
            </div>
        </Layout>
    )
}