// testS3.js

const { S3Client, ListBucketsCommand } = require('@aws-sdk/client-s3');

const client = new S3Client({
  region: 'us-east-1', // adjust if your bucket uses another region
});

async function test() {
  try {
    const result = await client.send(
      new ListBucketsCommand({})
    );

    console.log(result.Buckets);
  } catch (err) {
    console.error(err);
  }
}

test();