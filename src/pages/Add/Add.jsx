import { useState } from "react";
import axios from "axios";
import { FaImage } from "react-icons/fa6";
import "./Add.css";
import { toast } from "react-toastify";
const Add = ({ url }) => {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    author: "",
    price: "",
    category: "",
  });
  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("author", data.author);
    formData.append("price", Number(data.price));
    formData.append("category", data.category);
    formData.append("image", image);
    const response = await axios.post(`${url}/book/add`, formData);
    if (response.data.success) {
      setData({
        name: "",
        author: "",
        price: "",
        category: "Children",
      });
      setImage(false);
      toast.success(response.data.message);
    } else {
      toast.error(response.data.message);
    }
  };
  return (
    <div className="add">
      <form className="flex-col" onSubmit={onSubmitHandler}>
        <div className="add-img-upload flex-col">
          <p>Upload Image</p>
          <label htmlFor="image">
            {image ? <img src={URL.createObjectURL(image)} /> : <FaImage />}
          </label>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            id="image"
            required
          />
        </div>
        <div className="add-product-name flex-col">
          <p>Book Name</p>
          <input
            onChange={onChangeHandler}
            value={data.name}
            type="text"
            name="name"
            placeholder="Type Here"
          />
        </div>
        <div className="add-product-author flex-col">
          <p>Author Name</p>
          <input
            name="author"
            type="text"
            onChange={onChangeHandler}
            value={data.author}
            placeholder="write Author name here"
          />
        </div>
        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>product category</p>
            <select onChange={onChangeHandler} name="category">
              <option value="Children">Children</option>
              <option value="Fiction">Fiction</option>
              <option value="Horror">Horror</option>
              <option value="Poetry">Poetry</option>
              <option value="Romance">Romance</option>
              <option value="Scifi">Science Fiction</option>
              <option value="Thriller">Thriller</option>
            </select>
          </div>
          <div className="add-price flex-col">
            <p>Book price</p>
            <input
              type="number"
              onChange={onChangeHandler}
              value={data.price}
              name="price"
              placeholder="$20"
            />
          </div>
        </div>
        <button type="submit" className="add-btn">
          ADD
        </button>
      </form>
    </div>
  );
};

export default Add;
