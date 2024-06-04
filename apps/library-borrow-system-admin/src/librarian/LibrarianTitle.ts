import { Librarian as TLibrarian } from "../api/librarian/Librarian";

export const LIBRARIAN_TITLE_FIELD = "username";

export const LibrarianTitle = (record: TLibrarian): string => {
  return record.username?.toString() || String(record.id);
};
