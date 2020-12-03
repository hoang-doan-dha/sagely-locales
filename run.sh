# Env config
export AWS_ACCESS_KEY_ID=test
export AWS_SECRET_ACCESS_KEY=test
export AWS_REGION=us-west-2

# Others config
export SAGELY_SNS_TOPIC_ARN_LOG=arn:aws:sns:us-west-2:123456789012:sagely_log
export SAGELY_SNS_TOPIC_ARN_AUDIT=arn:aws:sns:us-west-2:123456789012:sagely_audit
export SAGELY_SNS_TOPIC_ARN_EVENT=arn:aws:sns:us-west-2:123456789012:sagely_event
export SAGELY_SNS_ENDPOINT=http://localhost:9666
export SAGELY_LAMBDA_NAME_STORAGE=sagely-storage/build/package/index.handler
export SAGELY_LAMBDA_NAME_VALIDATE=sagely-microservices/build/package/validate/validate.validateHandler
export SAGELY_LAMBDA_NAME_KEYS_TO_HREF=sagely-storage/build/package/index.keysToHref
export SAGELY_LAMBDA_NAME_HREF_TO_KEYS=sagely-storage/build/package/index.hrefToKeys
export SAGELY_LAMBDA_NAME_SEND_EMAIL=sagely-scheduled-emailer/build/package/send
export SAGELY_LAMBDA_NAME_CALENDAR_PRINT=sagely-calendar-print/build/package
export SAGELY_LAMBDA_ENDPOINT=http://localhost:9777
export SAGELY_S3_BUCKET_IMAGE=images.sagelyweb.com
export SAGELY_S3_BUCKET_OUTPUT=output.sagelyweb.com
export SAGELY_S3_BUCKET_PUBLISH=publish.sagelyweb.com
export SAGELY_S3_ENDPOINT=http://localhost:9444
export SAGELY_DDB_TABLE_PREFIX=development.sagely.
export SAGELY_DDB_ENDPOINT=http://localhost:8000
export SAGELY_SES_ENDPOINT=http://localhost:9555
export SAGELY_API_GATEWAY_URL=http://localhost:7111


# @TODO: Is there any missing ENV? Please add

# Run the local API server
cd ~/projects/api-gateway-server
npm install
node server ../sagely-calendar-print/etc/cloudformation.yaml ../sagely-reporting/etc/cloudformation.yaml ../sagely-microservices/etc/cloudformation.yaml ../sagely-newsletter/etc/cloudformation.yaml ../sagely-rest/etc/cloudformation.yaml ../sagely-client-log/etc/cloudformation.yaml ../sagely-communications/etc/cloudformation.yaml &

# Run the local SNS server
cd ~/projects/fake_sns
npm install
./fake_sns --port 9666 --region us-west-2 &

# Run the local SES server
cd ~/projects/ses-mock
npm install
node server --port 9555 --region us-west-2 &

# Run the local lambda server
cd ~/projects/lambda-mock
npm install
node server --port 9777 &

# Run the local s3 server
cd ~/projects/fakes3
fakes3 --root ./ --port 9444 --license 2265197502 &

# Run the local DynamoDB server
cd ~/projects/dynamodb
java -D:java.library.path=./DynamoDBLocal_lib/ -jar DynamoDBLocal.jar - inMemory &

# Run the local SQS server
cd ~/projects/fake_sqs
fake_sqs --port 9445 &

# Run the local Redis server
redis-server


export TRIGGER_USER=support@gosagely.com
export TRIGGER_PASSWORD=jf7-93F-8dQ4-h4tV


# Run the local Sagely Website
cd ~/projects/sagely
npm install
grunt bower
grunt buildWeb
node server &

echo "LOAD DATABASE"
etc/loadStaging.sh
