'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db, callback) {
  db.createTable('user', {
    columns: {
      id: {
        type: 'int',
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: 'string',
        length: 255
      },
      username: {
        type: 'string',
        unique: true
      },
      password: {
        type: 'string',
      },
      is_delete: {
        type: 'int',
        notNull: true,
        defaultValue: 0
      },
      created_at: {
        type: 'timestamp',
        notNull: true,
        defaultValue: new String('now()')
      },
      updated_at: {
        type: 'timestamp',
        notNull: true,
        defaultValue: new String('now()')
      }
    },
    ifNotExists: true
  }, callback)
};

exports.down = function(db) {
  return null;
};

exports._meta = {
  "version": 1
};
