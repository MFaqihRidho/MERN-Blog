import React from "react";
import { Input, Upload, TextArea, Button } from "../../components";
import { Layout } from "../../utils";

const CreateBlog = () => {
    return (
        <Layout>
            <div className="w-1/2 flex flex-col gap-2 justify-center items-center">
                <h1 className="text-3xl font-bold">Create New Blog Post</h1>
                <form className="w-full flex flex-col gap-5">
                    <Input label="Title" type="text" placeholder="Title" />
                    <Upload></Upload>
                    <TextArea label="Description"></TextArea>
                    <Button type="submit" title="Upload"></Button>
                </form>
            </div>
        </Layout>
    );
};

export default CreateBlog;
