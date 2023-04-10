import React, { useEffect, useState } from "react";
import { blogImg } from "../../assets/images";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

const Blogs = () => {
  const allBlogs = [
    {
      title: "Heading title one",
      id: "one",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis deserunt ea ipsum enim facilis, voluptate voluptatibus. Odio dolorum expedita eligendi similique veritatis a tenetur maxime repellat. Alias ea sunt quos?",
      img: "https://img.freepik.com/free-photo/freelance-young-businesswoman-casual-wear-using-laptop-working-living-room-home_7861-3050.jpg?size=626&ext=jpg&ga=GA1.1.1706456642.1681098824&semt=sph",
    },
    {
      title: "Heading title two",
      id: "two",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis deserunt ea ipsum enim facilis, voluptate voluptatibus. Odio dolorum expedita eligendi similique veritatis a tenetur maxime repellat. Alias ea sunt quos?",
      img: "https://img.freepik.com/free-photo/freelance-young-businesswoman-casual-wear-using-laptop-working-living-room-home_7861-3050.jpg?size=626&ext=jpg&ga=GA1.1.1706456642.1681098824&semt=sph",
    },
    {
      title: "Heading title three",
      id: "three",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis deserunt ea ipsum enim facilis, voluptate voluptatibus. Odio dolorum expedita eligendi similique veritatis a tenetur maxime repellat. Alias ea sunt quos?",
      img: "https://img.freepik.com/free-photo/freelance-young-businesswoman-casual-wear-using-laptop-working-living-room-home_7861-3050.jpg?size=626&ext=jpg&ga=GA1.1.1706456642.1681098824&semt=sph",
    },
    {
      title: "Heading title four",
      id: "four",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis deserunt ea ipsum enim facilis, voluptate voluptatibus. Odio dolorum expedita eligendi similique veritatis a tenetur maxime repellat. Alias ea sunt quos?",
      img: "https://img.freepik.com/free-photo/freelance-young-businesswoman-casual-wear-using-laptop-working-living-room-home_7861-3050.jpg?size=626&ext=jpg&ga=GA1.1.1706456642.1681098824&semt=sph",
    },
  ];

  // states
  const [search, setSearch] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section>
      <div className="blog-img-section">
        <img src={blogImg} alt="" className="img-fluid" />
      </div>

      <div className="container mt-4">
        <div className="row">
          <div className="col-12 col-md-3 mb-3">
            <div className="side-blogs">
              <div>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Search</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Search Here..."
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </Form.Group>
              </div>
              <h6 className="recent-post-heading">Recent Posts</h6>
              {allBlogs
                .filter((blog) =>
                  blog.title
                    .toLocaleLowerCase()
                    .includes(search.toLocaleLowerCase())
                )
                .map((blog, i) => (
                  <div key={i} className="blog-sub mb-2 pb-2 text-capitalize">
                    <a
                      href={`/blog#${blog?.id}`}
                      className="text-decoration-none"
                    >
                      {blog?.title}
                    </a>
                  </div>
                ))}
            </div>
          </div>

          <div className="col-12 col-md-9">
            {allBlogs
              .filter((blog) =>
                blog.title
                  .toLocaleLowerCase()
                  .includes(search.toLocaleLowerCase())
              )
              .map((blog, i) => (
                <Card key={i} className="mb-3" id={blog?.id}>
                  <Card.Img variant="top" src={blog?.img} />
                  <Card.Body>
                    <Card.Title>{blog?.title}</Card.Title>
                    <Card.Text>{blog?.desc}</Card.Text>
                  </Card.Body>
                </Card>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
