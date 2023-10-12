import './Add.css'
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Add = () => {
  const [value, setValue] = useState('');

  

  return (
    <div className="new">
      <div className="content">
      <input type="text" placeholder="Title"/>
      <div className="editors-box">
      <ReactQuill className="editor" theme="snow" value={value} onChange={setValue} />
      </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish Blog</h1>
          <span>
            <b>Status :</b> Draft
          </span>
          <span>
            <b> Visibility :</b> Public
          </span>
          <input className="choose" type="file" id="file"/>
          <label className="file" htmlFor="file">Upload Image</label>
          <div className="buttons">
          <button className="button-draft">Save As Draft</button>
          <button className="button-update">Update</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <input type="radio" name="category" id="development" value="development"/>
          <label htmlFor="development">Development</label>
          <input type="radio" name="category" id="lifestyle" value="lifestyle"/>
          <label htmlFor="lifestyle">Lifestyle</label>
          <input type="radio" name="category" id="financialLiteracy" value="fiancialLiteracy"/>
          <label htmlFor="financialLiteracy">Financial Literacy</label>
          <input type="radio" name="category" id="wellness" value="wellness"/>
          <label htmlFor="wellness">Wellness</label>
          <input type="radio" name="category" id="tech" value="tech"/>
          <label htmlFor="tech">Tech</label>
        </div>
      </div>
    </div>
  )
}

export default Add