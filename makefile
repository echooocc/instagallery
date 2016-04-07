.PHONY: all

all: run

prep: npm bower build

npm:
	npm install

bower:
	bower install

run:
	node app.js

build:
	gulp build

karma:
	gulp karma

mocha:
	DEBUG=mocha mocha test/app_spec.js

dev:
	gulp

debug: build debug-app

debug-app:
	DEBUG=app node app.js
