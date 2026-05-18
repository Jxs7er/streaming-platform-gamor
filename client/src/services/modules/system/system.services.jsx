import { apiClient } from "@/services/apiClient";
import BaseServices from "../baseServices";

class SystemServices extends BaseServices {
  constructor() {
    super({
      url: "/api/v1",
    });
  }

  async healthCheck() {
    const response = await apiClient.get(`${this.url}/health`);
    return response.data;
  }
}

export default new SystemServices();
