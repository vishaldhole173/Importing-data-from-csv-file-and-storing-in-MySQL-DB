const options = {
    client: 'mysql2',
    version: '8.0.27',
    connection: {
      host : '127.0.0.1',
      port : 3306,
      user : 'root',
      password : '****',
      database : 'userdata'
    }
}

const knex = require('knex')(options);

const parse=require('csv-parser')
const fs=require('fs')
const csvData=[];
fs.createReadStream(__dirname + '/userdata.csv')
.pipe(
    parse({
        delimiter: ','
    })
)
.on('data', function(dataRow){
    csvData.push(dataRow);
})
.on('end',function(){
    knex('users').insert(csvData).then(() => console.log("data inserted"))
    .catch((err) => { console.log(err); throw err })
    .finally(() => {
        knex.destroy();
    });
});

