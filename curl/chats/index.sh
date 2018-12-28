#!/bin/sh

API="http://localhost:3000"
URL_PATH="/chats"

curl "${API}${URL_PATH}" \
  --include \
  --request GET \
  --header "Authorization: Bearer ${TOKEN}"

echo
