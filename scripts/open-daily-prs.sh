#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

git fetch origin main chore/refresh-daily-curation chore/refresh-trending-daily || true

create_pr_if_missing() {
  local branch="$1"
  local title="$2"
  local body="$3"

  local existing
  existing=$(gh pr list --head "$branch" --state open --json number --jq 'length')
  if [ "$existing" != "0" ]; then
    echo "Open PR already exists for $branch"
    return 0
  fi

  if git ls-remote --exit-code --heads origin "$branch" >/dev/null 2>&1; then
    gh pr create --base main --head "$branch" --title "$title" --body "$body"
  else
    echo "Remote branch $branch does not exist, skipping"
  fi
}

create_pr_if_missing \
  "chore/refresh-trending-daily" \
  "chore: refresh trending products" \
  "Actualiza la selección de Trending programada para las 6:00 AM hora Santo Domingo."

create_pr_if_missing \
  "chore/refresh-daily-curation" \
  "chore: refresh daily curation metadata" \
  "Actualiza metadata curada diaria del marketplace para mantener movimiento visible en el repo."
