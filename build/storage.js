const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');

const s3 = new S3Client({
  region: 'us-east-1',
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

const {
  S3Client,
  PutObjectCommand,
  DeleteObjectCommand,
} = require('@aws-sdk/client-s3');

async function deleteImage(imageUrl) {
  const key = imageUrl.split('/').pop();

  await s3.send(
    new DeleteObjectCommand({
      Bucket: 'student-sustenance-images',
      Key: key,
    })
  );
}

module.exports = {
  uploadImage,
  deleteImage,
};