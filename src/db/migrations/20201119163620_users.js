
exports.up = function(knex) {
  //essa função tem sempre que retornar uma promessa
  return knex.schema
  .createTable('users', function(table){
    table.increments('id');
    table.string('primeiro_nome',255).notNullable();
    table.string('ultimo_nome',255).notNullable();
    // table.text('nome').unique().notNullable();
    // table.timestamp('created_at').defaultTo(knex.fn.now());
    // table.timestamp('update_at').defaultTo(knex.fn.now());
    //up dropa uma tabela no banco de dados
  })
};

exports.down = function(knex) {
    return knex.schema
    .dropTable('users')
    //down faz o drope ser desfeito
};
