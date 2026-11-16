const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');

const s3 = new S3Client({
  region: 'us-east-1', // change if your bucket is elsewhere
});

async function uploadImage(fileBuffer, fileName, mimeType) {
  await s3.send(
    new PutObjectCommand({
      Bucket: 'student-sustenance-images',
      Key: fileName,
      Body: fileBuffer,
      ContentType: mimeType,
    })
  );

  return `https://student-sustenance-images.s3.amazonaws.com/${fileName}`;
}

module.exports = {
  uploadImage,
};