#!/bin/bash
echo source `pwd`/shell/portal.sh >> ~/.bashrc
touch ~/.portal
cp `pwd`/bin/portal-exec /usr/local/bin/portal-exec
