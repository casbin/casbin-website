/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import siteConfig from '@generated/docusaurus.config';

const prismIncludeLanguages = (PrismObject) => {
  if (ExecutionEnvironment.canUseDOM) {
    const {
      themeConfig: {prism: {additionalLanguages = []} = {}},
    } = siteConfig;
    window.Prism = PrismObject;
    additionalLanguages.forEach((lang) => {
      require(`./prism-${lang}`); // eslint-disable-line
    });

      require('./prism-java');//java language support
      require('./prism-python');
      require('./prism-rust');
      require('./prism-csv');
      require('./prism-php');
      require('./prism-pascal');
      require('./prism-csharp');
      require('./prism-ruby');
    
    delete window.Prism;
  }
};

export default prismIncludeLanguages;
