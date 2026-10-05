#!/usr/bin/env bash
# build.sh — Build Open Ticket Docker images for all supported architectures.
#
# Usage: ./build.sh <image> [--no-push]
#   image   Full image name, e.g. djj123dj/open-ticket
#
# Example: ./build.sh djj123dj/open-ticket --no-push

set -euo pipefail

cd "$(dirname "$0")/.."
echo "✅ Switched working directory to Open Ticket root"
pwd

IMAGE="${1:?Usage: ./build-docker.sh <image> [--no-push]}"
PLATFORMS="linux/amd64,linux/arm64" # linux/arm/v6,linux/arm/v7,linux/s390x are taking too long to build, so we'll skip them for now
VERSION=$(node -p "require('./package.json').version")

# Create a multi-arch builder if it doesn't exist yet
docker buildx inspect ot-builder &>/dev/null \
    || docker buildx create --name ot-builder --driver docker-container --bootstrap --use
docker buildx use ot-builder

PUSH_FLAG="--push"
[[ "${2:-}" == "--no-push" ]] && PUSH_FLAG=""

docker buildx build \
    --platform "$PLATFORMS" \
    --tag "${IMAGE}:v${VERSION}" \
    --tag "${IMAGE}:latest" \
    --load \
    $PUSH_FLAG \
    .

[[ -n "$PUSH_FLAG" ]] \
    && echo "✅ Pushed ${IMAGE}:v${VERSION} and ${IMAGE}:latest" \
    || echo "✅ Built ${IMAGE}:v${VERSION} (not pushed)"
