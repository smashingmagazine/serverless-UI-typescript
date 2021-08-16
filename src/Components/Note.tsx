import { Props } from "../Interfaces";

const Note = ({ content, delContent }: Props) => {
  return (
    <div className="note">
      <div className="content">
        <span>{content.note}</span>
      </div>
      <button
        onClick={() => {
          delContent(content.note);
        }}
      >
        X
      </button>
    </div>
  );
};

export default Note;
