module default {
	type Person {
		required name: str;
	}

	type Movie {
		required title: str;
		multi actors: Person;
	}

	type User {
    required  email -> str { constraint exclusive };
    required  createdAt -> datetime { default := datetime_current() };
    link password := .<user[is Password];
  }

  type Password {
    required  hash -> str;
    required link user -> User {
      constraint exclusive;  # one-to-one
      on target delete delete source;
    }
  }
};
