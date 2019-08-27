#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e
echo '开始'
git add -A
echo '添加完成'
git commit -m 'vuex模块2拆分'
echo 'commit 完成'
git push origin master
echo 'push完成'

