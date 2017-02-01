CREATE TABLE treasury.enterprise
(
  enterprise_id bigint NOT NULL primary key,
  name varchar(250)
)
WITH (
  OIDS=FALSE
);
ALTER TABLE treasury.enterprise
  OWNER TO bbones;
