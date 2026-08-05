export type WsMessageType =
  | "voice"
  | "append"
  | "replace"
  | "commit"
  | "partial"
  | "status"
  | "error";

export interface WsMessage {
  type: WsMessageType;
  text?: string;
}

export interface UseSpeechRecognitionOptions {
  serverWsUrl: string;
  isCodeMode?: boolean;
  onAppendText?: (text: string) => void;
  onReplaceText?: (text: string) => void;
  onCommitText?: (text: string) => void;
  onStatus?: (message: string, color?: string) => void;
}

export interface UseSpeechRecognitionReturn {
  isListening: boolean;
  startListening: () => Promise<void>;
  stopListening: () => void;
}
