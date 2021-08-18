import React from 'react';
import Layout from '@theme/Layout';


function Hello() {
  return (
    <Layout title="Hello" styles={{padding: '19px',}}>

      <div className="container text--center">
      <br />
        <br />
        <h1>Need help?</h1>
        If you need help with Casbin, you can try one of the mechanisms below.
        <br />
        <br />
        <br />
        <br />
        <div className="row">
          <div className="col">
            <h2>React.js</h2>
            Discuss with maintainers or share your experience about Casbin on <a href="https://forum.casbin.com">Casbin Forum.</a>
              </div>
              <div className="col">
                <h2>Gitter</h2>
                You can join the conversation on <a hrerf="https://gitter.im/casbin/Lobby">Gitter</a> for contributing help.
              </div>
              <div className="col">
                <h2>Tencent QQ</h2>
                You can contact us by joining the QQ group: <a href="https://shang.qq.com/wpa/qunwpa?idkey=8ac8b91fc97ace3d383d0035f7aa06f7d670fd8e8d4837347354a31c18fac885">546057381.</a>
              </div>
              <div className="col">
                <h2>Github</h2>
                At our <a href="https://github.com/casbin/casbin">GitHub repo</a>, browse and submit <a href="https://github.com/casbin/casbin/issues">issues</a> or <a href="https://github.com/casbin/casbin/pulls">pull requests</a> for bugs you find or any new features you may want implemented.
              </div>
              </div>
              </div>
              <br />
              <br />
    </Layout>
  );
}

export default Hello;