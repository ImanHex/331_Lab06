import axios from "axios";
import type { AxiosInstance, AxiosResponse } from "axios";
import type { EventItem, OrganizerItem } from "@/type";
import type { studentInfo } from "@/student";

const apiClient: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
export default {
  getEvent(perPage: number, page: number): Promise<AxiosResponse<EventItem[]>> {
    return apiClient.get<Array<EventItem>>(
      "/events?_limit=" + perPage + "&_page=" + page
    );
  },
  getEventById(id: number): Promise<AxiosResponse<EventItem>> {
    return apiClient.get<EventItem>("events/" + id.toString());
  },
  getStudent(): Promise<AxiosResponse<studentInfo[]>> {
    return apiClient.get<studentInfo[]>('/students')
  },
  getOrganizer(perPage: number, page: number): Promise<AxiosResponse<OrganizerItem[]>> {
    return apiClient.get<Array<OrganizerItem>>(
      "/organizer?_limit=" + perPage + "&_page=" + page
    );
  },
  getOrganizeById(id: number): Promise<AxiosResponse<OrganizerItem>> {
    return apiClient.get<OrganizerItem>("organizer/" + id.toString());
  }
  
};
