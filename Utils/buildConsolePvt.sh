##!/bin/bash
CURRENT_DIR=$(cd $(dirname $0); pwd)
LAST_BUILD_VERSION=13;
CRT_VERSION=$(($LAST_BUILD_VERSION+1));

DOCKER_FILE_DIR=/c/Users/xckai/Desktop/Project/console-v3/src
DOCKER_REGISTER=guowang.azurecr.cn
DOCKER_IMAGE_NAME=console-v3-pvt
DOCKER_TAG_PREFIX=kai

DOCKER_IMEGE_FULL_NAME=$DOCKER_REGISTER/$DOCKER_IMAGE_NAME:$DOCKER_TAG_PREFIX.$CRT_VERSION

echo "当前镜像名称：$DOCKER_IMEGE_FULL_NAME 开始编译..."
docker build $DOCKER_FILE_DIR -t $DOCKER_IMEGE_FULL_NAME
echo "当前镜像名称：$DOCKER_IMEGE_FULL_NAME 开始推送..."
docker push $DOCKER_IMEGE_FULL_NAME

echo "镜像：$DOCKER_IMEGE_FULL_NAME 推送成功";
echo "镜像Register: $DOCKER_REGISTER";

sed -i "s/LAST_BUILD_VERSION=13\([0-9]*\)/LAST_BUILD_VERSION=$CRT_VERSION/"  $CURRENT_DIR/buildConsolePvt.sh
#CRT_VERSION=$(grep -Eo 'LAST_BUILD_VERSION=13[0-9].*' $CURRENT_DIR/buildConsolePvt.sh |  sed 's/.*=\([0-9]*\).*/\1/g')；
#echo $(($VERSION+1))
