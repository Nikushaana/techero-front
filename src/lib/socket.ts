import { io } from "socket.io-client";

export const socket = io(process.env.NEXT_PUBLIC_API_URL as string, {
    path: "/socket.io/",
    transports: ["websocket"], // Forces raw websockets instantly to avoid Cloudflare long-polling loops
    secure: true,
    withCredentials: true,
    autoConnect: true,
});