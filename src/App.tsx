import { FC, ChangeEvent, useState } from "react";
import "./App.css";
import Note from "./Components/Note/Note";
import Quote from "./Components/Quote";
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
    const newContent: INote = { id: Date.now(), note: noteContent };
    setNoteList([...noteList, newContent]);
    setNoteContent("");
  };

  const delContent = (noteID: number): void => {
    setNoteList(
      noteList.filter((content) => {
        return content.id !== noteID;
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
        {noteList.map((content: INote) => {
          return (
            <Note key={content.id} content={content} delContent={delContent} />
          );
        })}
      </div>

      <div className="randomJokes">
        <Quote />
      </div>
    </div>
  );
};

export default App;
