SHELL := /bin/bash
.SILENT:
.DEFAULT_GOAL := help
HOST_IP ?= $(shell hostname -I | awk '{print $$1}')

##### SELF-DOCUMENTATION ####

.PHONY: help
help:
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)



.PHONY: build
build: ## [Setup project dependences]
	( \
		python -m venv venv; \
		source venv/bin/activate; \
		cd smartresto && pip install -r requirements.txt; \
		cd smartresto/smartresto/src/static_bandlers && npm install; \
    )

.PHONY: up
up: ## [Run]
	source venv/bin/activate && cd smartresto && python manage.py runserver

.PHONY: tailwind
tailwind: ## [Run]
	cd smartresto/smartresto/src/static_bandlers; npm run css-dev

.PHONY: webpack
webpack: ## [Run]
	cd smartresto/smartresto/src/static_bandlers; npm start	

.PHONY: unit_test
unit_test: ## [Run]
	cd smartresto && pytest



