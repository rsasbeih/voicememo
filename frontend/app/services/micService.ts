class MicService {
  private stream: MediaStream | null = null;
  async requestMicAccess(): Promise<MediaStream> {
    if (this.stream) return this.stream;
    if (!navigator.mediaDevices.getUserMedia) {
      throw new Error("getUserMedia is not supported in this browser");
    }
    const stream = navigator.mediaDevices.getUserMedia({ audio: true });
    this.stream = await stream;
    return this.stream;
  }
  stopMic() {
    if (!this.stream) return;
    this.stream.getTracks().forEach((track) => track.stop());
    this.stream = null;
  }
}
export const micService = new MicService();
