CREATE DATABASE articulos;


CREATE TABLE articulo(
  "codigo" varchar primary key,
  "descrip" varchar,
  "precio" money,
  "precioOfr" money,
  "inicia" date,
  "vigencia" date,
  "linea" varchar
);

insert into articulo
values
('7896014174164', 'Botella de agua epura 500 ml', 15.0, 11.0, '10/10/2017', '10/15/2017'),
('7501001164003', 'Detergente líquido Viva para ropa blanca y de color 4.65 l', 99.0, 0.0, '10/10/2017', '10/15/2017'),
('7702018992102', 'Café soluble Nescafé clásico 400 g', 121.0, 100.0, '10/10/2017', '11/15/2017'),
('7501199409702', 'Papel higiénico Kleenex Cottonelle beauty care 18 rollos.', 109.00, 79.0, '10/20/2017', '10/30/2017'),
('3282770959888', 'Cereal Kelloggs Zucaritas 490 g', 37.0, 0.0, '10/20/2017', '10/30/2017'),
('7501001309077', 'Mandarina por kilo', 28.9, 0.0, '10/20/2017', '10/30/2017'),
('7501199420080', 'Granada fresh nutribits 300 g', 55.0, 35.0, '10/20/2017', '11/10/2017'),
('7501017367498', 'Manzana red delicious por kilo', 34.90, 24.9, '10/29/2017', '11/30/2017'),
('7702111241152', 'Manzana granny smith por kg', 79.0, 50.50, '10/1/2017', '11/20/2017'),
('7501057006432', 'Perón golden Chihuahua por kilo', 38.90, 30.0, '10/25/2017', '10/29/2017')

insert into articulos
  values('1','5.50');

insert into codebar
  values('1','pan');

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

CREATE TABLE articulos(
  "codebar" varchar primary key,
  "precio" money
);

CREATE TABLE codebar(
  "codebar" varchar primary key,
  "descp" varchar,
  constraint fk_codebar foreign key("codebar") references articulos("codebar")
);

CREATE TABLE portaprecio(
  "codigo" varchar,
  "descrip" varchar,
  "precio" money,
  "cantidad" int
)

insert into detlista
  values('aaa','35','pan','5.0',1,1)
