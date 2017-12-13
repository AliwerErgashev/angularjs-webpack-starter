exports.up = pgm => {
  pgm.sql(`
    CREATE TABLE "users" (
      "id" serial PRIMARY KEY,
      "username" text,
      "password" text
    )
  `)
}

exports.down = pgm => {
  pgm.sql(`
    DROP TABLE "users"
  `)
}
