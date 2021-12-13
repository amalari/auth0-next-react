import { toast } from "react-toastify";
import { useEffect } from "react";
import jsCookie from "js-cookie";
import "react-toastify/dist/ReactToastify.css";

export function useToastAlert() {
  if (!jsCookie.get("metax-alert")) {
    return false;
  }
  const alert = JSON.parse(jsCookie.get("metax-alert"));
  const cloneAlert = { ...alert };
  console.log({ cloneAlert });
  let definedToast = toast.info;
  switch (cloneAlert.type) {
    case "error":
      definedToast = toast.error;
      break;
    case "success":
      definedToast = toast.success;

      break;
    case "warning":
      definedToast = toast.warn;
      break;
  }
  definedToast(cloneAlert.message, {
    position: toast.POSITION.BOTTOM_RIGHT,
  });

  useEffect(() => {
    jsCookie.remove("metax-alert", { path: "/" });
  }, []);

  return true;
}
