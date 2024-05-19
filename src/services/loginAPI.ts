import axios from "axios";

export const login=async(credentials:any)=>{
    const response = await axios.post(
        `${import.meta.env.VITE_API_URL}api/auth/login`,
        credentials,
        {
          headers: {
            "ngrok-skip-browser-warning": "skip-browser-warning",
          },
        }
      );

      return response;
}