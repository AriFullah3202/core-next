import { useForm } from "react-hook-form";
import styles from "@/styles/Create.module.css";

const CreateNews = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    fetch("/api/news", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("News Successfully Created");
        }
      });
  };
  return (
    <div>
      <form
        className={styles.form}
        onSubmit={handleSubmit(onSubmit)}
        name="form_item_path"
        layout="vertical"
        style={{
          width: "50%",
          margin: "50px auto",
        }}
      >
        <input
          {...register("id")}
          placeholder="Id"
          style={{ marginBottom: "10px" }}
        />
        <input {...register("title")} placeholder="Title" />

        <input
          {...register("description")}
          placeholder="Description"
          style={{ margin: "10px 0px" }}
        />

        <input {...register("author")} placeholder="Author" />
        <input
          {...register("release_date")}
          placeholder="Release Date"
          type="date"
          style={{ margin: "10px 0px" }}
        />
        <input {...register("category")} placeholder="Category" />
        <input
          {...register("comment_count")}
          placeholder="Number of Comments"
          type="number"
          style={{ margin: "10px 0px" }}
        />
        <input {...register("image_url")} placeholder="Image URL" />
        <input
          type="submit"
          value="Create News"
          style={{ margin: "10px 0px", width: "100%" }}
        />
      </form>
    </div>
  );
};

export default CreateNews;