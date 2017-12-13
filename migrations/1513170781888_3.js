exports.up = pgm => {
  pgm.sql(`
    CREATE TABLE "files" (
      "id" serial PRIMARY KEY,
      "userId" integer REFERENCES "users",
      "name" text,
      "type" text,
      "size" integer,
      "content" bytea
    )
  `)
}

exports.down = pgm => {
  pgm.sql(`
    DROP TABLE "files"
  `)
}
