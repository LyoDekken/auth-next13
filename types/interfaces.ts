enum Role {
  user,
  admin,
  colaborator,
};

export interface User {
    id: string;
    name: string;
    email: string;
    avatar_url: string;
    role: Role;
}
