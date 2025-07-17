import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { db } from "../../services/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";

export default function EditProduct() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      const docSnap = await getDoc(doc(db, "products", id));
      if (docSnap.exists()) {
        const data = docSnap.data();
        setTitle(data.title);
        setPrice(data.price);
        setDescription(data.description);
      }
    };
    fetchProduct();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    await updateDoc(doc(db, "products", id), {
      title,
      price: Number(price),
      description,
    });
    navigate("/admin");
  };

  return (
    <form onSubmit={handleUpdate}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <input
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Price"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <button type="submit">Update Product</button>
    </form>
  );
}
