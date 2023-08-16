import React, {useState} from 'react';
import submitTitle from './submitFuctions/submitTitle';

function TitleForm () {
    const [title, setTitle] = useState("")

    //   console.log('title from form', title);

      const handleChange = e => {
          setTitle( e.target.value )
      };

      const handleSubmit = e => {
          e.preventDefault();
          console.log("Submitted Title",title)
          return title === ""//if the form is empty return null
          ? null : submitTitle(title)  //if not submit new state
        // setTitle("")
          
      }
      return (
          <div>
            <h2>Search Games By Title:</h2>
            <form onSubmit={handleSubmit}>
                <label>TITLE:</label>
                <input
                    type='text'
                    value={title}
                    name='name'
                    onChange={handleChange}
                />
                <button type="submit">Add</button>
            </form>
          </div>
      )
}

export default TitleForm
