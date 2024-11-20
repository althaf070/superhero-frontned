import { create } from "zustand";
import axios, { AxiosError } from "axios";
import { SERVER_URL } from "@/lib/serverurl";
import { toast } from "sonner";

axios.defaults.withCredentials = true;
axios.defaults.baseURL ='https://superhero-backend-7b38.onrender.com'
interface User {
  _id: string;
  username: string;
  email: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  error: string | null;
  isLoading: boolean;
  isCheckingAuth: boolean;
}

interface AuthActions {
  signup: (username: string, email: string,password: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  checkAuth: () => Promise<void>;
  logout: () => Promise<void>;
}

// Combine state and actions into a single type
type AuthStore = AuthState & AuthActions;

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  isAuthenticated: false,
  error: null,
  isLoading: false,
  isCheckingAuth: true,

  signup: async (username: string, email: string, password: string) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.post(`${SERVER_URL}/register`, {
        username,
        email,
        password,
      });
      set({
        user: response.data.user,
        isAuthenticated: true,
        isLoading: false,
      });
      toast.success(response.data.message)
    } catch (err: unknown) {
      const error = err as AxiosError<{ message?: string }>;
      set({
        error: error.response?.data?.message || "Error signing up",
        isLoading: false,
      });
      toast.error(error.response?.data?.message)
      throw error;
    }
  },

  login: async (email: string, password: string) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.post(`${SERVER_URL}/login`, {
        email,
        password,
      });
      set({
        user: response.data.user,
        isAuthenticated: true,
        isLoading: false,
      });
      toast.success(response.data.message)
    } catch (err: unknown) {
      const error = err as AxiosError<{ message?: string }>;
      set({
        error: error.response?.data?.message || "Error logging in",
        isLoading: false,
      });
      toast.error(error.response?.data?.message)
      throw error;
    }
  },

  logout: async () => {
    set({ isLoading: true, error: null });
    try {
      await axios.post(`${SERVER_URL}/logout`);
      set({
        user: null,
        isAuthenticated: false,
        isLoading: false,
      });
    } catch (error) {
      set({
        error: "Error logging out",
        isLoading: false,
      });
      throw error;
    }
  },
// check if user is logged in
  checkAuth: async () => {
    set({ isCheckingAuth: true, error: null });
    try {
      const response = await axios.get(`${SERVER_URL}/check`);
      set({
        user: response.data.user,
        isAuthenticated: true,
        isCheckingAuth: false,
      });
    } catch (error) {
      console.log(error);
      set({
        error: null,
        isCheckingAuth: false,
        isAuthenticated: false,
      });
    }
  },
}));
