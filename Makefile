.PHONY: install run build-static test lint clean upgrade

SHELL := /bin/bash

install:
	npm install -g "npm@3" && \
	npm install && \
	npm install -g "npm@<3"

run:
	npm run open:dist

test:
	npm install -g "npm@3" && \
	( [ -z "${TEAMCITY_PROJECT_NAME}" ] && npm run test || npm run test-teamcity ) && \
	npm install -g "npm@<3"

lint:
	npm install -g "npm@3" && \
	( [ -z "${TEAMCITY_PROJECT_NAME}" ] && npm run lint:tools src || npm run lint:tools-teamcity src ) && \
	npm install -g "npm@<3"

build-static:
	npm run build-static

clean:
	rm -rf node_modules

upgrade:
	make clean
	ncu -u
	make install
