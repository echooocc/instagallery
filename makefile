.PHONY: all

all: run

install:
	npm install

run:
	node app.js

dev:
	tsc -w

debug: build debug-app

debug-app:
	DEBUG=app node app.js
