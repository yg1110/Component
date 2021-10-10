export function debounceFrame(callback: FrameRequestCallback) {
  // 1프레임(60초)에 1회 호출
  let nextFrameCallback: number = -1;
  return () => {
    cancelAnimationFrame(nextFrameCallback);
    nextFrameCallback = requestAnimationFrame(callback);
  };
}
