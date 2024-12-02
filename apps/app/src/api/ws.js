import { io } from 'socket.io-client';

const WS_URL = process.env.REACT_APP_WS_URL;

export const socket = io(WS_URL);