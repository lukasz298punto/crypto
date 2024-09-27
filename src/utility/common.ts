export const removeDiacritics = (text: string) => {
    return text
        .normalize('NFKD') // Normalizowanie tekstu do formy NFKD (usuwa znaki diakrytyczne)
        .replace(/[\u0300-\u036f]/g, '') // Usuwanie znaków diakrytycznych
        .replace(/[^a-zA-Z0-9\s]/g, '') // Usuwanie znaków specjalnych (poza literami i cyframi)
        .trim() // Usuwanie białych znaków z początku i końca tekstu
        .toLowerCase(); // Zamiana na małe litery
};
