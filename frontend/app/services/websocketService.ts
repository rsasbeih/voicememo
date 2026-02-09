export const SERVER_URL = "ws://localhost:8787";
class WebSocketService {
  socket: WebSocket | null = null;
  connect() {
    if (
      this.socket &&
      (this.socket.readyState === WebSocket.OPEN ||
        this.socket.readyState === WebSocket.CONNECTING)
    )
      return;
    this.socket = new WebSocket(SERVER_URL);

    this.socket.onopen = () => {
      console.log("WebSocket connected");
    };
    this.socket.onclose = () => {
      console.log("🔴 WebSocket disconnected");
    };

    this.socket.onerror = (err) => {
      console.error("⚠️ WebSocket error", err);
    };

    this.socket.onmessage = (event) => {
      console.log("⬅️ Received message from server:", event.data);
    };
  }
  disconnect() {
    this.socket?.close();
    this.socket = null;
  }
  sendMessage(message: string) {
    //socket could exist but could not be open yet, so we check readyState
    if (this.socket && this.socket.readyState === WebSocket.OPEN) {
      this.socket.send(message);
      console.log("➡️ Sent message to server:", message);
      return true;
    }
    return false;
  }
}
export const webSocketClient = new WebSocketService();
