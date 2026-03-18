# Shinkai Docs
This site is built with Docusaurus.

### Development

Install dependencies and run the docs site locally from the repo root:

```
npm install
npm run start
```

### Publishing Changes

Build the static site with:

```bash
npm run build
```

The production output is generated in `build/` and can be deployed to any static hosting provider.

#### Troubleshooting

- Local preview is not starting: run `npm install` and then `npm run start`
- Static build issues: run `npm run clear` and then `npm run build`
