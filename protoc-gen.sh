#!/bin/bash

set -ex

protoc --proto_path proto proto/sample.proto \
--go_out=plugins=grpc:server/pb \
--js_out=import_style=commonjs:client/src/pb \
--grpc-web_out=import_style=commonjs+dts,mode=grpcwebtext:client/src/pb
