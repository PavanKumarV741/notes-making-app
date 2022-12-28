import { useState, useEffect } from 'react';
import './App.css';
import NotesList from './component/Noteslist';
import Search from './component/search';
import Header from './component/Header';

const App = () => {
	const [notes, setNotes] = useState([
		{
			id: 1,
      heading:"personal note",
			text: 'This is my first note!',
			date: '15/04/2022',
		},
		{
			id: 2,
      heading:"science topic",
			text: 'This is my second note!',
			date: '16/04/2022',
		},
		{
			id: 3,
      heading:"math topic",
			text: 'This is my third note!',
			date: '28/04/2021',
		},
		{
			id: 4,
      heading:"regarding songs name",
			text: 'This is my new note!',
			date: '30/04/2022',
		},
	]);

	const [searchText, setSearchText] = useState('');

	useEffect(() => {
		const savedNotes = JSON.parse(
			localStorage.getItem('react-notes-app-data')
		);

		if (savedNotes) {
			setNotes(savedNotes);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem(
			'react-notes-app-data',
			JSON.stringify(notes)
		);
	}, [notes]);

	const addNote = (text,heading) => {
		const date = new Date();
		const newNote = {
			id: notes.length+1,
			text: text,
      heading:heading,
			date: date.toLocaleDateString("en-GB"),//default "en-US"
		};
		const newNotes = [...notes, newNote];
		setNotes(newNotes);
	};

	const deleteNote = (Id) => {
		const newNotes = notes.filter((note) => note.id !== Id);
		setNotes(newNotes);
	};

	return (
		<div>
			<div className='container'>
				<Header/>
				<Search handleSearchNote={setSearchText} />
				<NotesList
        //search by heading= filtering heading
					notes={notes.filter((note) =>
						note.heading.toLowerCase().includes(searchText.toLowerCase())
					)}
					handleAddNote={addNote}
					handleDeleteNote={deleteNote}
				/>
			</div>
		</div>
	);
};

export default App;
