#!/usr/bin/env bash
set -euo pipefail

cd /home/megtech-storefront
export NODE_ENV=production
d
exec corepack yarn start
