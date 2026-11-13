export function getTranslatedText(item, field, language) {
  if (!item) return "";

  const lang = language?.split("-")[0] || "en";

  if (lang !== "en") {
    const translated = item[`${field}_${lang}`];

    if (typeof translated === "string" && translated.trim()) {
      return translated;
    }
  }

  return item[field] || "";
}