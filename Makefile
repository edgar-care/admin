AWS_REGION 					:= eu-west-3
AWS_LAMBDA_FUNCTION_NAME	:= admin
AWS_CLI_PROFILE				:= edgar.care
BINARY_NAME					:= build/
BUILD_DIR					:= builds
SOURCE_DIR					:= ./cmd/main
DATE						:= $(shell date +"%d%m%y_%H%M%S")
EXTRA_FILES					:=
ARCHIVE_NAME				:= $(BUILD_DIR)/$(AWS_LAMBDA_FUNCTION_NAME)$(DATE)
z 							?=

all: install

deploy:
	@npm run build && cp .env build/ && aws s3 sync build/ s3://edgar-admin

build:
	@npm run build

zip: build
	@mkdir -p $(BUILD_DIR)
	@zip -r builds/$(AWS_LAMBDA_FUNCTION_NAME)$(DATE) $(BINARY_NAME) $(EXTRA_FILES)

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
