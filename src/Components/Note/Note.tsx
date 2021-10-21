import { INote } from "../../Interfaces";

interface Props {
  content: INote;
  delContent(noteToDelete: number): void;
}

const Note = ({ content, delContent }: Props) => {
  return (
    <div className="note">
      <div className="content">
        <span>{content.note}</span>
      </div>
      <button
        onClick={() => {
          delContent(content.id);
        }}
      >
        X
      </button>
    </div>
  );
};

export default Note;
