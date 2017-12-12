exports.up = (pgm) => {
  return pgm.createTable('auth_tokens', {
    id: 'id',
    user_id: 'integer'
  });
};

exports.down = (pgm) => {
  return pgm.dropTable('auth_tokens');
};
