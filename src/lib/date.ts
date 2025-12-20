export function toDatetimeLocal(value?: string | null) {
  if (!value) return "";
  const date = new Date(value);

  const pad = (n: number) => n.toString().padStart(2, "0");

  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(
    date.getDate()
  )}T${pad(date.getHours())}:${pad(date.getMinutes())}`;
}

export function fromDatetimeLocal(value?: string | null) {
  if (!value) return null;
  return new Date(value).toISOString();
}

export function formatDateTimeBR(value?: string | null) {
  if (!value) return "";

  const date = new Date(value);

  return date.toLocaleString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}
