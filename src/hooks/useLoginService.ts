import LoginService from "@/services/LoginService";
import { useService } from "react-services";

export const useLoginService = (property: string) => {
  const serviceProperty = useService(LoginService, property);

  return serviceProperty;
};
