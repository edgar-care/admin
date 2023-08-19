AWS_REGION 					:= eu-west-3
AWS_LAMBDA_FUNCTION_NAME	:= admin
AWS_CLI_PROFILE				:= edgar.care
BINARY_NAME					:= main
BUILD_DIR					:= builds
SOURCE_DIR					:= ./cmd/main
DATE						:= $(shell date +"%d%m%y_%H%M%S")
EXTRA_FILES					:=
ARCHIVE_NAME				:= $(BUILD_DIR)/$(AWS_LAMBDA_FUNCTION_NAME)$(DATE)
z 							?=

all: install

ifeq ($(strip $(z)),)
deploy: zip
	@AWS_REGION=$(AWS_REGION) AWS_PAGER= aws lambda update-function-code --function-name $(AWS_LAMBDA_FUNCTION_NAME) --profile $(AWS_CLI_PROFILE) --zip-file fileb://$(ARCHIVE_NAME).zip --output yaml
else
deploy:
	@AWS_REGION=$(AWS_REGION) AWS_PAGER= aws lambda update-function-code --function-name $(AWS_LAMBDA_FUNCTION_NAME) --profile $(AWS_CLI_PROFILE) --zip-file fileb://$(z) --output yaml
endif

clean:
	@rm -rf node_modules

install:
	@npm install

start:
	@npm start

.PHONY: all \
		build \
		clean \
		deploy \
		install \
		start \
		zip
