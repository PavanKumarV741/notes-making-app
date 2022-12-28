import { MdDeleteForever } from 'react-icons/md';

const Note = ({ id, text, date, handleDeleteNote,heading }) => {
	return (
		<div className='note'>
            <h3>{heading}</h3>
			<p className='text'>{text}</p>
			<div className='note-footer'>
				<small>{date}</small>
				<MdDeleteForever
					onClick={() => handleDeleteNote(id)}
					className='delete-icon'
					size='1.3em'
				/>
			</div>
		</div>
	);
};

export default Note;