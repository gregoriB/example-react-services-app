import UserService from "@/services/UserService";
import { useService } from "react-services";

export const UseUserService = (property: string) => {
  const serviceProperty = useService(UserService, property);

  return serviceProperty;
};
