import { apiClient } from "@/services/apiClient";
import BaseServices from "../baseServices";

class AuthServices extends BaseServices {
  constructor() {
    super({
      url: "/api/v1/auth",
    });
  }

  async me() {
    const response = await apiClient.get(`${this.url}/me`);
    return response.data;
  }

  async refresh_token() {
    const response = await apiClient.post(`${this.url}/refresh-token`, {});
    return response.data;
  }

  async login(credentials) {
    const response = await apiClient.post(`${this.url}/login`, credentials);
    return response.data;
  }

  async logout() {
    const response = await apiClient.post(`${this.url}/logout`, {});
    return response.data;
  }
}

export default new AuthServices();
