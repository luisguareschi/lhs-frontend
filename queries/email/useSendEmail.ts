import { useMutation } from "@tanstack/react-query";
import { SendEmailProps } from "./types";
import axios from "axios";
import toast from "react-hot-toast";

interface props {
  onSuccess?: () => void;
}

export const useSendEmail = ({ onSuccess }: props) => {
  return useMutation({
    mutationFn: async (props: SendEmailProps) => {
      const response = await axios.post("/api/send_email", props);
      return response.data;
    },
    onSuccess: () => {
      onSuccess?.();
      toast.success("Email sent successfully");
    },
    onError: (error: any) => {
      console.log(error);
      try {
        toast.error("Error: " + error.response.data.error);
      } catch {
        toast.error("Error sending email");
      }
    },
  });
};
