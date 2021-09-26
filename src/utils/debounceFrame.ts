export function debounceFrame(callback) {
  // 1프레임(60초)에 1회 호출
  let nextFrameCallback = -1;
  return () => {
    cancelAnimationFrame(nextFrameCallback);
    nextFrameCallback = requestAnimationFrame(callback);
  };
}
