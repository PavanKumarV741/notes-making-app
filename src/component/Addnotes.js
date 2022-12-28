import { useState } from 'react';

const AddNote = ({ handleAddNote }) => {
	const [noteText, setNoteText] = useState('');
    const [heading,setheading]=useState("")
	const characterLimit = 200;

	const handleChange = (event) => {
		if (characterLimit - event.target.value.length >= 0) {
			setNoteText(event.target.value);
		}
	};

    const handleheading=(e)=>{
        setheading(e.target.value)
    }

	const handleSaveClick = () => {
		if (noteText.trim().length > 0  || heading.trim().length > 0) {
			handleAddNote(noteText,heading);
            setheading('')
			setNoteText('');
		}
	};

	return (
		<div className='note new'>
            <input type="text" value={heading} onChange={handleheading} placeholder='Type to add a heading...'/>
			<textarea
				rows='8'
				cols='10'
				placeholder='Type to add a note...'
				value={noteText}
				onChange={handleChange}
			></textarea>
			<div className='note-footer'>
				<small>
					{characterLimit - noteText.length} Remaining
				</small>
				<button className='save' onClick={handleSaveClick}>
					Save
				</button>
			</div>
		</div>
	);
};

export default AddNote;