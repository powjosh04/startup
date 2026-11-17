const fs = require('fs');
const storage = require('./storage');

async function test() {
  const fileBuffer = fs.readFileSync('./test.jpg');

  const imageUrl =
    await storage.uploadImage(
      fileBuffer,
      'test.jpg',
      'image/jpeg'
    );

  console.log(imageUrl);
}

test();