// eslint-disable-next-line unused-imports/no-unused-imports
import NextAuth from "next-auth";

enum Role {
  user,
  admin,
  colaborator,
};

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      name: string;
      email: string;
      avatar_url: string;
      role: Role;
      accessToken: string;
    };
  }
}
