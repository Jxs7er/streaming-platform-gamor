import { apiClient } from "@/services/apiClient";
import BaseServices from "../baseServices";

class CategoriesServices extends BaseServices {
  constructor() {
    super({
      url: "/api/v1/categories",
    });
  }

  async get() {
    const response = await apiClient.get(this.url);
    return response.data;
  }
}

export default new CategoriesServices();
