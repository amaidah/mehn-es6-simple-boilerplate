Simple boilerplate for MEHN apps in a full ES6 environment
- Uses only package.json scripts
- Must have xcode, node, npm, sass installed

### Getting Started

- `git clone <repo>`
- `npm install`
- `git remote rm origin`
- `git remote -v` // verify removal
- `git remote add origin <your own>`
- `git remote -v` // verify addition
- change project folder name

Serve production
- `npm run start`

Serve dev server
- `npm run dev`

#### Issues

Mac

No sass?
- `gem install sass`
- `sass -v`

No node? https://nodejs.org/en/download/package-manager/#macos
- `brew install node@6`
- `node --version`

No npm?
- should come with node install
- `npm -v`

No brew? https://brew.sh/
- `/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`
- `brew -v`
