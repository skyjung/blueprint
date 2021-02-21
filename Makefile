### help - help docs for this Makefile
.PHONY: help
help :
	@sed -n '/^###/p' Makefile

### install - install requirements in venv
.PHONY: install
install:
	#  install dependencies
	npm i --s;

### open app 
.PHONY: start
start:
	#  open web browswer
	expo start;