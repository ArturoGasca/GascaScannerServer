CREATE DATABASE articulos;

CREATE TABLE articulos(
  sku varchar(15) not null,
  item varchar(45) not null default '',
  line varchar(20) not null default '',
  stock decimal not null default 0.00,
  price money not null default 0.00,
  ofrprc money not null default 0.00,
  ofrini date not null default '2001-01-1',
  ofrter date not null default '2001-01-01',
  primary key(sku)
);

CREATE TABLE pplisthead
(
    code varchar(12) not null,
    lsttp varchar(5) not null default '',
    lstnm varchar(80) not null default '',
    lstdt timestamp not null default '2001-01-01 00:00:00',
    primary key(code)
);

CREATE TABLE pplistdetl(
    sku varchar(15) not null default '',
    code varchar(12) not null default '',
    nrow integer not null default 0.00,
    item varchar(80) not null default '',
    stck integer not null default 0.00,
    pric money not null default 0.00,
    offr money not null default 0.00,
    cpnt smallint not null default 1,
    primary key(code, sku),
    foreign key(code) references pplisthead(code) on delete cascade on update cascade
);

insert into articulos
values
('7896014174164', 'Botella de agua epura 500 ml', 'LINE',10, 15.0, 11.0, '10/10/2017', '15/10/2017'),
('7501001164003', 'Detergente líquido Viva  4.65 l', 'LINE',10, 99.0, 0.0, '10/10/2017', '10/11/2017'),
('7702018992102', 'Café soluble Nescafé clásico 400 g', 'LINE',10, 121.0, 100.0, '10/10/2017', '30/11/2017'),
('7501199409702', 'Papel higiénico Kleenex  18 rollos.', 'LINE',10, 109.00, 79.0, '20/12/2017', '29/12/2017'),
('3282770959888', 'Cereal Kelloggs 490 g', 'LINE',10, 37.0, 0.0, '20/10/2018', '30/10/2018'),
('7501001309077', 'Mandarina por kilo', 'LINE',10, 28.9, 0.0, '20/10/2017', '30/11/2017'),
('7501199420080', 'Granada fresh nutribits 300 g', 'LINE',10, 55.0, 35.0, '20/11/2017', '25/11/2017'),
('7501017367498', 'Manzana red delicious por kilo', 'LINE',10, 34.90, 24.9, '10/10/2017', '19/11/2017'),
('7702111241152', 'Manzana granny smith por kg', 'LINE',10, 79.0, 50.50, '19/11/2017', '19/11/2017'),
('7501057006432', 'Perón golden Chihuahua por kilo', 'LINE',10, 38.90, 30.0, '10/11/2017', '19/11/2017')


CREATE TABLE listas(
  "llave" varchar primary key,
  "lista" varchar
);

CREATE TABLE detlista(
  "llave" varchar,
  "cdbar" varchar,
  "descp" varchar,
  "preci" money,
  "cntpn" smallint,
  "exstn" int,
  constraint pk_detlista primary key("llave", "cdbar"),
  constraint fk_detlist foreign key("llave") references listas("llave")
);
