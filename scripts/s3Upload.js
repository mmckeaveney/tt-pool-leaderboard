const fs = require('fs');
const argv = require('minimist')(process.argv.slice(2));
const s3 = require('s3');

// This script reads the AWS credentials file during the production build and sets them as
// Environment variables so the S3 upload can be performed.
const awsKeys = JSON.parse(fs.readFileSync(argv.awsKeys, 'utf8'));

const client = s3.createClient({
    s3Options: {
        accessKeyId: awsKeys.key,
        secretAccessKey: awsKeys.secret,
        region: "us-east-1"
    }
});

const params = {
    localDir: "dist",
    deleteRemoved: false,
    s3Params: {
        Bucket: argv.bucket,
        Metadata: {
            ContentEncoding: 'gzip'
        },
        ACL: 'public-read'
    }
};

console.log(`Bucket is ${argv.bucket}`);
const uploader = client.uploadDir(params);

uploader.on('error', function(err) {
    console.error("Unable to sync:", err.stack);
});

uploader.on('progress', function() {
    console.log("progress", uploader.progressAmount, uploader.progressTotal);
});

uploader.on('end', function() {
    console.log("done uploading");
});
