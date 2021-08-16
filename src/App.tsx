import { FC, ChangeEvent, useState } from "react";
import "./App.css";
import Note from "./Components/Note";
import { INote } from "./Interfaces";

const App: FC = () => {
  const [noteContent, setNoteContent] = useState<string>("");
  const [noteList, setNoteList] = useState<INote[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "note") {
      setNoteContent(event.target.value);
    }
  };

  const addNote = (): void => {
    const newContent = { note: noteContent };
    setNoteList([...noteList, newContent]);
    setNoteContent("");
  };

  const delContent = (noteToDelete: string): void => {
    setNoteList(
      noteList.filter((content) => {
        return content.note !== noteToDelete;
      })
    );
  };

  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <input
            type="text"
            placeholder="Add Note..."
            name="note"
            value={noteContent}
            onChange={handleChange}
          />
        </div>
        <button onClick={addNote}>Add Note</button>
      </div>
      <div className="noteList">
        {noteList.map((content: INote, key: number) => {
          return <Note key={key} content={content} delContent={delContent} />;
        })}
      </div>
    </div>
  );
};

export default App;
