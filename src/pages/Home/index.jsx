import React from "react";
import { BgBlog } from "../../assets";
import { Button, BlogItem } from "../../components";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    return (
        <div className="max-w-[100vw] bg-gray-100 min-h-[100vh] flex justify-center">
            <div className="h-full w-[90%] gap-10 flex flex-col items-center justify-center py-24">
                <div className="self-end">
                    <Button
                        onClick={() => navigate("/create-blog")}
                        title="Create Blog"
                    ></Button>
                </div>
                <BlogItem
                    title="Blog Title"
                    image={BgBlog}
                    desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis temporibus inventore soluta aliquam nemo exercitationem tenetur rem quas ab suscipit.\"
                    author="faqih"
                    id={1}
                ></BlogItem>
                <BlogItem
                    title="Blog Title"
                    image={BgBlog}
                    desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis temporibus inventore soluta aliquam nemo exercitationem tenetur rem quas ab suscipit.\"
                    author="faqih"
                ></BlogItem>
                <BlogItem
                    title="Blog Title"
                    image={BgBlog}
                    desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis temporibus inventore soluta aliquam nemo exercitationem tenetur rem quas ab suscipit.\"
                    author="faqih"
                ></BlogItem>
                <BlogItem
                    title="Blog Title"
                    image={BgBlog}
                    desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis temporibus inventore soluta aliquam nemo exercitationem tenetur rem quas ab suscipit.\"
                    author="faqih"
                ></BlogItem>
                <BlogItem
                    title="Blog Title"
                    image={BgBlog}
                    desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis temporibus inventore soluta aliquam nemo exercitationem tenetur rem quas ab suscipit.\"
                    author="faqih"
                ></BlogItem>
                <BlogItem
                    title="Blog Title"
                    image={BgBlog}
                    desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis temporibus inventore soluta aliquam nemo exercitationem tenetur rem quas ab suscipit.\"
                    author="faqih"
                ></BlogItem>
                <BlogItem
                    title="Blog Title"
                    image={BgBlog}
                    desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis temporibus inventore soluta aliquam nemo exercitationem tenetur rem quas ab suscipit.\"
                    author="faqih"
                ></BlogItem>
            </div>
        </div>
    );
};

export default Home;
