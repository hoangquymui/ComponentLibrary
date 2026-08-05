/**
 * Chuyển đổi dữ liệu âm thanh Float32 từ Web Audio API sang 16-bit PCM (ArrayBuffer)
 */
export function floatTo16BitPCM(input: Float32Array): ArrayBuffer {
  const output = new Int16Array(input.length);
  for (let i = 0; i < input.length; i += 1) {
    const sample = Math.max(-1, Math.min(1, input[i]));
    output[i] = sample < 0 ? sample * 0x8000 : sample * 0x7fff;
  }
  return output.buffer;
}
