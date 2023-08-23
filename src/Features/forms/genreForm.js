import React, {useState} from 'react';
// import submitGenre from './submitFuctions/submitGenre';

function GenreForm () {
    const [genre, setGenre] = useState("")

    //   console.log('genre from form', genre);

      const handleChange = e => {
          setGenre( e.target.value )
      };

      const handleSubmit = e => {
          e.preventDefault();
          console.log("Submitted Title",genre)
          setGenre("")
        //   return genre === ""//if the form is empty return null
        //   ? null : submitGenre(genre)  //if not submit new state
        
          
      }
      return (
          <div>
            <h2>Search Games By Genre:</h2>
            <form onSubmit={handleSubmit}>
                <label>TITLE:</label>
                <input
                    type='text'
                    value={genre}
                    name='name'
                    onChange={handleChange}
                />
                <button type="submit">Add</button>
            </form>
          </div>
      )
}

export default GenreForm
