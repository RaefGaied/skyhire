// types/index.ts
export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface MenuItem {
  name: string;
  path: string;
  icon: string;
}