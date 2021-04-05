# rules

This extension is made to provide JH-WebWorks coding guidelines. It Includes a rule set for for coding and corresponding scripts to enforce these rule sets.

# JavaScript & TypeScript

## Install Eslint

Eslint is a package to check your javascript/typescript code. We provide our own configuration for it. To use it:

1. Create a `.yarnrc` in your root directory and fill it with:
   ```
   "@jh-webworks:registry" "https://npm.pkg.github.com"
   ```
   this hooks up the root folder of the package to the github npm package registry
2. install eslint and the eslint-config-jh-webworks package
   ```bash
   yarn add --dev eslint @jh-webworks/eslint-config-jh-webworks@latest
   ```
3. create a `.eslintrc.json` file and fill it with:

   ```json
   {
     "extends": ["@jh-webworks/eslint-config-jh-webworks"]
   }
   ```

4. check your linting with:
   ```bash
   yarn run eslint ./<the folder to lint>
   ```
