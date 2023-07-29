/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.hasTable('rapi').then(function (exists) {
      if (!exists) {
        return knex.schema.createTable('rapi', function (Table) {
          Table.increments("id_rapi").primary();
          Table.string("nombre");
          Table.integer("telefono");
          Table.string("correo");
          Table.integer("pagos_efectuados");
          Table.integer("pagos_pendientes");
        });
      }
    });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function (knex) {
    return knex.schema.hasTable('rapi').then(function (exists) {
      if (exists) {
        return knex.schema.dropTable('rapi');
      }
    });
  };
  