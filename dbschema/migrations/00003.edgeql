CREATE MIGRATION m1ybkr7hmy3ktxbr46t2y2rwaxxnu36vlf7nwfurvrsaper6n4g5yq
    ONTO m1nvqy24tlsw4vaya6f34t5kwcjue5722mw62wbi7btxqybo4sfoda
{
  CREATE TYPE default::Password {
      CREATE REQUIRED PROPERTY hash: std::str;
  };
  CREATE TYPE default::User {
      CREATE REQUIRED PROPERTY createdAt: std::datetime {
          SET default := (std::datetime_current());
      };
      CREATE REQUIRED PROPERTY email: std::str {
          CREATE CONSTRAINT std::exclusive;
      };
  };
  ALTER TYPE default::Password {
      CREATE REQUIRED LINK user: default::User {
          ON TARGET DELETE DELETE SOURCE;
          CREATE CONSTRAINT std::exclusive;
      };
  };
  ALTER TYPE default::User {
      CREATE LINK password := (.<user[IS default::Password]);
  };
};
