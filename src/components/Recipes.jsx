import React from "react";
import Sidebar from "./Sidebar";
import { Modal, Input, InputNumber, Form, Button, Upload ,Select } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useState } from "react";
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
  const [selectedCountry, setSelectedCountry] = useState(null);


  const countryOptions = [
    { value: 'KE', label: 'Kenya' },
    { value: 'TZ', label: 'Tanzania' },
    { value: 'USA', label: 'United States' },
    { value: 'CA', label: 'Canada' },
  ];

  const handleCountryChange = (selectedOption) => {
    setSelectedCountry(selectedOption);
  };

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        const newRecipe = {
          name: values.name,
          time: values.time,
          servings: values.servings,
          ingredients: values.ingredients,
          directions: values.directions,
          country: values.country,
          image: values.image,
        };

        form.resetFields();
        setOpen(false);
        setRecipes([...recipes, newRecipe]);
      })
      .catch((errorInfo) => {
        console.log("Validation failed:", errorInfo);
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
        <div className="flex-1 bg-background2 bg-opacity-30">
          <main className="min-h-screen">
            <div className="text-center font-medium font-curve text-4xl ">
              Your recipes
            </div>
            <div className="border border-4 border-red-800 m-4 p-2 grid grid-cols-3 gap-4">
              <div
                className="relative h-96"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                onClick={handleClick}
              >
                <img
                  src="https://cdn.britannica.com/86/145786-050-5BD27317/chef-cooking-restaurant-kitchen.jpg"
                  alt=""
                  className="w-full h-full object-cover "
                />

                {isHovered && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 flex-col hover:cursor-pointer">
                    <div className="text-white text-center font-curve">
                      <h3 className="text-xl font-semibold mb-2">
                        Recipe name
                      </h3>
                      <p>description</p>
                      <p>time</p>
                      <p>servings</p>
                    </div>
                    <div
                      className="absolute bottom-6 left-6 hover:cursor-pointer"
                      onClick={handleEdit}
                    >
                      <PencilIcon className="h-6 w-6 text-white" />
                    </div>
                    <div
                      className="absolute bottom-6 left-1/2 transform -translate-x-1/2 hover:cursor-pointer"
                      onClick={handleFavourite}
                    >
                      <StarIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </div>
                    <div
                      className="absolute bottom-6 right-6 hover:cursor-pointer"
                      onClick={handleDelete}
                    >
                      <TrashIcon className="h-6 w-6 text-white" />
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
          name="country"
          rules={[{ required: true, message: 'Please select a country' }]}
        >
          <Select
            value={selectedCountry}
            onChange={handleCountryChange}
            options={countryOptions}
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
