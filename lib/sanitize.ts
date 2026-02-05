export const sanitizeText = (value: string) =>
  value.trim().replace(/[<>]/g, "").replace(/\s+/g, " ");