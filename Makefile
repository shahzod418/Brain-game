install: install-deps

run:
	node bin/brain-games.js

install-deps:
	npm ci

lint:
	npx eslint **/*.ts

lintfix:
	npx eslint **/*.ts --fix

publish:
	npm publish --dry-run