API="http://localhost:3000"
URL_PATH="/sign-in"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
      "password": "'"${PASSWORD}"'",
      "username": "'"${USERNAME}"'"
  }'

echo
