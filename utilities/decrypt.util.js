const crypto = require('crypto');

const algorithm = 'aes-256-ctr';
const secretKey = 'iz9Npt8hZ5sLYd6f9OaGwMnViAqGNJpi';
const iv = crypto.randomBytes(16);

const decrypt = (hash) => {

    const decipher = crypto.createDecipheriv(algorithm, secretKey, Buffer.from(hash.iv, 'hex'));

    const decrpyted = Buffer.concat([decipher.update(Buffer.from(hash.content, 'hex')), decipher.final()]);

    return decrpyted.toString();
};


module.exports = {
    decrypt
};
