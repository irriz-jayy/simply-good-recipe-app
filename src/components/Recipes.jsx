import React from "react";
import Sidebar from "./Sidebar";
import { Modal, Input, InputNumber, Form, Button, Upload, Select } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useState,useEffect } from "react";
import {
  PencilIcon,
  TrashIcon,
  StarIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";

function Recipes() {
  const [isHovered, setIsHovered] = useState(false);
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();
  const [recipes, setRecipes] = useState([]);
  const [token, setToken] = useState("");

  useEffect(() => {
    // Check if token exists in local storage, indicating that the user is already authenticated
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
      // Perform any additional logic for an already authenticated user (e.g., redirecting)
      console.log("User is already authenticated");
      console.log(token);
    }
  }, []);
  const handleOk = () => {
    form.validateFields()
      .then((values) => {
        const newRecipe = {
          name: values.name,
          time: values.time,
          number_of_people_served: values.servings,
          ingredients: values.ingredients,
          directions: values.directions,
          description:values.description,
          country_of_origin: values.country_of_origin,
          image: values.image,
          user_id: 6, // Initialize with an empty user ID
        };
  
        form.resetFields();
        setOpen(false);

     
        // Send a POST request to the backend to save the new recipe
        fetch(' http://127.0.0.1:3000/recipes', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,          },
          body: JSON.stringify(newRecipe),
        })
          .then((response) => response.json())
          .then((data) => {
            // Handle the response from the backend if needed
            console.log('Recipe saved:', data);
            setRecipes([...recipes, newRecipe]);
          })
          .catch((error) => {
            console.error('Error:', error);
          });
      })
      .catch((errorInfo) => {
        console.log('Validation failed:', errorInfo);
      });
  };
  

  const handleCancel = () => {
    form.resetFields();
    setOpen(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleTouchStart = () => {
    setIsHovered(true);
  };

  const handleTouchEnd = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    console.log("click");
  };

  const handleDelete = (event) => {
    event.stopPropagation();
    console.log("delete");
  };

  const handleFavourite = (event) => {
    event.stopPropagation();
    console.log("favourite");
  };

  const handleEdit = (e) => {
    e.stopPropagation();
    console.log("edit");
  };
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 bg-background1 min-h-[100vh]">
          <main className="min-h-screen">
            <div className="font-medium font-curve text-4xl h-48 text-font2 flex items-center justify-center ">
              Your recipes
            </div>
            <div className="m-4 p-2 grid grid-cols-1 gap-4 flex items-center justify-center md:grid md:grid-cols-2 md:gap-2 lg:grid lg:grid-cols-3">
              <div
                className="relative "
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              >
                <img
                  src="https://cdn.britannica.com/86/145786-050-5BD27317/chef-cooking-restaurant-kitchen.jpg"
                  alt=""
                  className="w-full h-full object-cover "
                />

                {isHovered && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 hover:cursor-pointer">
                    <div className="text-white text-center font-curve">
                      <h3 className="text-xl font-semibold mb-2">
                        Recipe name
                      </h3>
                      <p>description</p>
                      <p>time</p>
                      <p>servings</p>
                      <div
                        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 hover:cursor-pointer"
                        // onClick={handleFavourite}
                      >
                        <StarIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div
                className="relative "
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              >
                <img
                  src="https://cdn.britannica.com/86/145786-050-5BD27317/chef-cooking-restaurant-kitchen.jpg"
                  alt=""
                  className="w-full h-full object-cover "
                />

                {isHovered && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 hover:cursor-pointer">
                    <div className="text-white text-center font-curve">
                      <h3 className="text-xl font-semibold mb-2">
                        Recipe name
                      </h3>
                      <p>description</p>
                      <p>time</p>
                      <p>servings</p>
                      <div
                        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 hover:cursor-pointer"
                        // onClick={handleFavourite}
                      >
                        <StarIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div
                className="relative "
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              >
                <img
                  src="https://cdn.britannica.com/86/145786-050-5BD27317/chef-cooking-restaurant-kitchen.jpg"
                  alt=""
                  className="w-full h-full object-cover "
                />

                {isHovered && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 hover:cursor-pointer">
                    <div className="text-white text-center font-curve">
                      <h3 className="text-xl font-semibold mb-2">
                        Recipe name
                      </h3>
                      <p>description</p>
                      <p>time</p>
                      <p>servings</p>
                      <div
                        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 hover:cursor-pointer"
                        // onClick={handleFavourite}
                      >
                        <StarIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div
                className="relative "
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              >
                <img
                  src="https://cdn.britannica.com/86/145786-050-5BD27317/chef-cooking-restaurant-kitchen.jpg"
                  alt=""
                  className="w-full h-full object-cover "
                />

                {isHovered && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 hover:cursor-pointer">
                    <div className="text-white text-center font-curve">
                      <h3 className="text-xl font-semibold mb-2">
                        Recipe name
                      </h3>
                      <p>description</p>
                      <p>time</p>
                      <p>servings</p>
                      <div
                        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 hover:cursor-pointer"
                        // onClick={handleFavourite}
                      >
                        <StarIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div
                className="relative "
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              >
                <img
                  src="https://cdn.britannica.com/86/145786-050-5BD27317/chef-cooking-restaurant-kitchen.jpg"
                  alt=""
                  className="w-full h-full object-cover "
                />

                {isHovered && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 hover:cursor-pointer">
                    <div className="text-white text-center font-curve">
                      <h3 className="text-xl font-semibold mb-2">
                        Recipe name
                      </h3>
                      <p>description</p>
                      <p>time</p>
                      <p>servings</p>
                      <div
                        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 hover:cursor-pointer"
                        // onClick={handleFavourite}
                      >
                        <StarIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="fixed bottom-4 right-4">
              <button
                className="bg-blue-500 p-3 rounded-md"
                onClick={() => setOpen(true)}
              >
                <PlusIcon className="h-6 w-6 text-white" />
              </button>
            </div>
          </main>
        </div>
      </div>
      <Modal
        title="Create new recipe"
        centered
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
        width={1000}
        okText="Save"
        okButtonProps={{ className: "bg-blue-500" }}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            label="Recipe Name"
            name="name"
            rules={[{ required: true, message: "Please enter recipe name" }]}
          >
            <Input placeholder="Recipe Name" />
          </Form.Item>

          <Form.Item
            label="Description"
            name="description"
            rules={[{ required: true, message: "Please enter description" }]}
          >
            <Input placeholder="Description" />
          </Form.Item>

          <Form.Item
            label="Time"
            name="time"
            rules={[{ required: true, message: "Please enter time" }]}
          >
            <Input placeholder="Time" />
          </Form.Item>

          <Form.Item
            label="Servings"
            name="servings"
            rules={[{ required: true, message: "Please enter servings" }]}
          >
            <InputNumber placeholder="Servings" />
          </Form.Item>

          <Form.Item
            label="Country"
            name="country_of_origin"
            rules={[{ required: true, message: "Please select a country" }]}
          >
            <Input.TextArea
              placeholder="country of origin"
            />
          </Form.Item>

          <Form.Item
            label="Ingredients"
            name="ingredients"
            rules={[{ required: true, message: "Please enter ingredients" }]}
          >
            <Input.TextArea placeholder="Ingredients" />
          </Form.Item>

          <Form.Item
            label="Directions"
            name="directions"
            rules={[
              {
                required: true,
                message: "Please enter directions",
              },
            ]}
          >
            <Input.TextArea placeholder="Cooking instructions" />
          </Form.Item>
          <Form.Item
            label="Image"
            name="image"
            rules={[{ required: true, message: "Please upload an image" }]}
          >
            <Upload>
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

export default Recipes;
