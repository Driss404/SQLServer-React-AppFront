const config = {
    user: 'codingWith_driss',
    password: 'foo',
    server:'DRISS-DAIF',
    database:'sql tutorial',
    options: {
        trustServerCertificate: true,
        trustedConnection: false,
        enableArithAbort: true,
        instancename: 'SQLEXPRESS'
    },
    port: 16000
}

module.exports = config;

