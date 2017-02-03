const pgPool = require('../utility/pg-pool');
const Boom = require('boom');
const JSONAPISerializer = require('jsonapi-serializer').Serializer;

const EnterprisesSerializer = new JSONAPISerializer('enterprises',
  {attributes : ['name']});

const EnterpriseSerializer = new JSONAPISerializer('enterprises',
    {
      attributes : ['name','liabilities'],
      liabilities : {ref: function(collection, field) {
            // console.log('c->', collection);
            // console.log('f->', field);
            return field.id;
          },
          attributes: ['amount']}
    });

const enterpriseHandlers = {
    getEnterpriseList : function (request, reply) {
        pgPool.connect(function(err, client, done) {
          if(err) {
            return console.error('error fetching client from pool', err);
          }
          client.query('SELECT * from treasury.party', function(err, result) {
            //call `done()` to release the client back to the pool
            done();

            if(err) {
              reply(Boom.wrap(err));
              return console.error('error running query', err);
            }
            reply(EnterprisesSerializer.serialize(result.rows));
            console.log(result.rows);
            //output: 1
          });
        });
    },
    getEnterprise : function (request, reply) {
        pgPool.connect(function(err, client, done) {
          if(err) {
            return console.error('error fetching client from pool', err);
          }
          client.query(
            'SELECT * from treasury.party where id=$1',
            [request.params.id],
            function(err, result) {
              if(err) {
                reply(Boom.wrap(err));
                return console.error('error running query', err);
              }
              var enterprise = result.rows[0];
              client.query(
                'SELECT * from treasury.liability where party_id=$1',[request.params.id],
                function(err, result) {
                  //call `done()` to release the client back to the pool
                  done();
                  if(err) {
                    reply(Boom.wrap(err));
                    return console.error('error running query', err);
                  }
                  enterprise.liabilities = result.rows;
                  console.log(enterprise);
                  reply(EnterpriseSerializer.serialize(enterprise));
                }
              );
            }
          );
        });
    }

};

module.exports = enterpriseHandlers;
