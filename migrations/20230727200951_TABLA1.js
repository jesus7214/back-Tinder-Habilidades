/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.hasTable('tinderhabi').then(function (exists) {
      if (!exists) {
        return knex.schema.createTable('tinderhabi', function (Table) {
          Table.increments("id_TinderHab").primary();
          Table.string("nombre");
          Table.integer("telefono");
          Table.string("correo");
          Table.string("direccion");
        });
      }
    });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function (knex) {
    return knex.schema.hasTable('tinderhabi').then(function (exists) {
      if (exists) {
        return knex.schema.dropTable('tinderhabi');
      }
    });
  };
  