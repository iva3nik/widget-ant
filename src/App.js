import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import { Modal, Button, Form, Input } from "antd";
import "./App.css";

function App({ domElement }) {
  const subreddit = domElement.getAttribute("data-subreddit");
  const [isOpened, setIsOpened] = useState(false);
  const [name, SetName] = useState("");
  const [description, SetDescription] = useState("");

  const openModal = () => {
    setIsOpened(true);
  };

  const closeModal = () => {
    setIsOpened(false);
  };

  const handleOk = () => {
    console.log("values: ", { name, description });
    closeModal();
  };

  const handleCancel = () => {
    closeModal();
  };

  return (
    <div className="widget-window">
      <h1 className="title">Test widget</h1>
      <Button type="primary" onClick={openModal}>
        Создать датасет
      </Button>
      <Modal
        title="Создать датасет"
        visible={isOpened}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Создать"
        cancelText="Отменить"
      >
        <Form labelCol={{ span: 5 }}>
          <Form.Item
            name="NAME"
            label="Name"
            required
            style={{ width: "100%" }}
          >
            <Input
              size="large"
              placeholder="Name"
              onChange={(e) => {
                SetName(e.target.value);
              }}
            />
          </Form.Item>
          <Form.Item
            name="DESCRIPTION"
            label="Description"
            style={{ width: "100%" }}
          >
            <Input.TextArea
              rows={4}
              size="large"
              onChange={(e) => {
                SetDescription(e.target.value);
              }}
            />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default App;
