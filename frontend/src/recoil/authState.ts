// src/recoil/authState.ts
import { atom } from 'recoil';

type User = {
  id: string;
  name: string;
};

type AuthState = {
  isLoggedIn: boolean;
  user: User | null; // ✅ null 또는 User 객체 가능
};

export const authState = atom<AuthState>({
  key: 'authState',
  default: {
    isLoggedIn: false,
    user: null,
  },
});
