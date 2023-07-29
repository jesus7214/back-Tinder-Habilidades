/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.hasTable('cliente').then(function (exists) {
      if (!exists) {
        return knex.schema.createTable('cliente', function (Table) {
          Table.increments("id_cliente").primary();
          Table.integer("id_rappi")
          Table.integer("id_tinder")
  
          Table.string("nombre");
          Table.integer("edad");
          Table.string("direccion");
          Table.string("correo");
          Table.string("habilidad");
          Table.integer("precio_hora");
  
          // Aqui se defininen las LLAVES FORÁNEAS
          Table.foreign("id_rappi").references("id_rapi").inTable('rapi');
          Table.foreign("id_tinder").references("id_TinderHab").inTable('tinderhabi');
        });
      }
    });
  };
  
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function (knex) {
    return knex.schema.hasTable('cliente').then(function (exists) {
      if (exists) {
        return knex.schema.dropTable('cliente');
      }
    });
  };
  