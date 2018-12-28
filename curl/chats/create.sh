#!/bin/bash

API="http://localhost:3000"
URL_PATH="/chats"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
      "owner": "'"${ID}"'",
      "body": "'"${BODY}"'"
  }'

echo
