var ibmdb = require('ibm_db');

ibmdb.open("DATABASE=SAMPLE;HOSTNAME=localhost;UID=db2inst1;PWD=db2inst1-pwd;PORT=50000;PROTOCOL=TCPIP", function (err,conn) {
  if (err) return console.log(err);
  
  conn.query('select * from DB2INST1.VSTAFAC2', function (err, data) {
    if (err) console.log(err);
    else console.log(data);

    conn.close(function () {
      console.log('done');
    });
  });
});