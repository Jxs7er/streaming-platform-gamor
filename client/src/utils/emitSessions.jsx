export const emitSessionExpired = () => {
  window.dispatchEvent(new CustomEvent("session:expired"));
};

export const emitHealthCheckFailed = () => {
  window.dispatchEvent(new CustomEvent("healcheck:failed"));
};
