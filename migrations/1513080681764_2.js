exports.up = pgm => {
  pgm.sql(`
    CREATE TABLE "authTokens" (
      "id" serial PRIMARY KEY,
      "userId" integer
    )
  `);
};

exports.down = pgm => {
  pgm.sql(`
    DROP TABLE "authTokens"
  `);
};
