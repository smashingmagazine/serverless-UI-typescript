export interface INote {
  note: string;
}

export interface Props {
  content: INote;
  delContent(noteToDelete: string): void;
}
