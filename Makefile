install:
	npm ci
	npm link

lint:
	npx eslint **/*.ts

lintfix:
	npx eslint **/*.ts --fix

publish:
	npm publish --dry-run
	
test:
	npm test
	
test-coverage:
	npm test -- --coverage --coverageProvider=v8
	