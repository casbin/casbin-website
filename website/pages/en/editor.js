const React = require('react');

const Editor = () => (
    <div>
      <link rel="stylesheet"
            href="https://unpkg.com/codemirror@5.46.0/lib/codemirror.css"/>
      <link rel="stylesheet"
            href="https://unpkg.com/codemirror@5.46.0/theme/monokai.css"/>
      <link rel="stylesheet"
            href="https://unpkg.com/normalize.css@8.0.1/normalize.css"/>
      <div>
        <div className="editor-group">
          <div className={'editor-container'}>
            <div style={{
              flexDirection: 'row',
              display: 'flex',
              alignItems: 'center',
            }}>
              <h4 style={{padding: 8}}>Model</h4>
              <div>
                <select id="example-switch">
                  <option value="" disabled>Select your model</option>
                  <option defaultChecked={true} value="basic">ACL</option>
                  <option value="basic_with_root">ACL with superuser</option>
                  <option value="basic_without_resources">ACL without
                    resources
                  </option>
                  <option value="basic_without_users">ACL without users</option>
                  <option value="rbac">RBAC</option>
                  <option value="rbac_with_resource_roles">RBAC with resource
                    roles
                  </option>
                  <option value="rbac_with_domains">RBAC with domains/tenants
                  </option>
                  <option value="rbac_with_deny">RBAC with deny-override
                  </option>
                  <option value="abac">ABAC</option>
                  <option value="keymatch">RESTful (KeyMatch)</option>
                  <option value="keymatch2">RESTful (KeyMatch2)</option>
                  <option value="ipmatch">IP match</option>
                  <option value="priority">Priority</option>
                </select>

              </div>
              <button id="reset" style={{marginLeft: 8}} className={'button'}>Reset</button>
              <div style={{padding: 8}}>
                <div id="reset-result"/>
              </div>
            </div>


            <textarea id="model"
                      className={'with-border'}/>
          </div>
          <div className={'editor-container'}>
            <h4 style={{padding: 8}}>Policy</h4>
            <textarea id="policy"
                      className={'with-border'}/>
          </div>
        </div>
        <div className="editor-group">
          <div className={'editor-container'}>
            <h4 style={{padding: 8}}>Request</h4>

            <div>
              <textarea id="test"/>
            </div>
          </div>
          <div className={'editor-container'}>
            <h4 style={{padding: 8}}>Enforcement Result</h4>
            <div>
              <textarea id="test-result"/>
            </div>
          </div>
        </div>
        <div style={{padding: 8}}>
          <button id={'validate'} className={'button'}
                  style={{marginRight: 8}}>Syntax
            Validate
          </button>
          <button id={'run-test'} className={'button'}>Run the Test</button>
        </div>
        <div style={{padding: 8}}>
          <div id="output"/>
        </div>


        <div id={'disqus'}/>
        <script
            src="https://unpkg.com/codemirror@5.46.0/lib/codemirror.js"/>
        <script
            src="https://unpkg.com/codemirror@5.46.0/addon/selection/active-line.js"/>
        <script
            src="https://unpkg.com/codemirror@5.46.0/addon/edit/matchbrackets.js"/>
        <script
            src="https://unpkg.com/codemirror@5.46.0/addon/display/placeholder.js"/>
        <script
            src="https://unpkg.com/codemirror@5.46.0/mode/javascript/javascript.js"/>
        <script src={'/js/mod/casbin/casbin-conf.js'}/>
        <script src={'/js/mod/casbin/casbin-csv.js'}/>
        <script src={'/js/casbin.js'}/>
        <script src={'/js/editor.js'}/>
      </div>
    </div>
);

module.exports = Editor;
