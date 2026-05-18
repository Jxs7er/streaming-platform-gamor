import { apiClient } from "@/services/apiClient";
import BaseServices from "../baseServices";

class GamesServices extends BaseServices {
  constructor() {
    super({
      url: "/api/v1/searching-games",
    });
  }

  async get() {
    const response = await apiClient.get(this.url);
    return response.data;
  }

  async joinTo({ gameID, teamID }) {
    const response = await apiClient.post(
      `${this.url}/${gameID}/team/${teamID}/join`,
      {},
    );
    return response.data;
  }

  async matching({ gameID }) {
    const response = await apiClient.post(
      `${this.url}/searching-games/${gameID}/join-queue`,
      {},
    );
    return response.data;
  }
}

export default new GamesServices();
