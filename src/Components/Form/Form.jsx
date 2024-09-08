import React from 'react'
import './form.css'
const Form = ({ setProfile }) => {
  const handleUploadImage = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get('name');
    const image = form.get("image");
    const data = new FormData()
    data.append('image',image)

    fetch(
      "https://api.imgbb.com/1/upload?key=54db20428616ae85e6c12b04f32dc595",
      {
        method: "POST",
        body: data,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
      })
      .catch((error) => console.log(error));
  }
  return (
    <form onSubmit={handleUploadImage} className="user-form">
      <label htmlFor="name">Name :</label>
      <input type="text" name="name" placeholder="Name" />
      <label htmlFor="image">Image :</label>
      <input type="file" name="image" id="" />
      <button>Upload</button>
    </form>
  );
};

export default Form