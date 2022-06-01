import React from "react";
import { Layout } from "../../utils";
import { BgBlog } from "../../assets";

const DetailBlog = () => {
    return (
        <Layout>
            <div className="flex flex-col w-full h-full gap-5">
                <img
                    className="max-h-[600px] w-full object-center rounded object-cover"
                    src={BgBlog}
                    alt=""
                />
                <div className="gap-4 flex flex-col">
                    <div>
                        <h1 className="text-4xl font-semibold">Title Blog</h1>
                        <p className="text-2xl text-gray-400">Author:date</p>
                    </div>
                    <p className="text-xl font-medium">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Deserunt laborum mollitia, hic corporis vel non
                        aut enim aspernatur. Sequi tempore voluptate inventore
                        illo harum rerum architecto, corporis ad soluta culpa
                        modi temporibus saepe cum magni asperiores iusto alias!
                        Consequuntur vero doloribus magni voluptates deserunt,
                        dicta minima necessitatibus cupiditate obcaecati enim?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ex totam commodi quis et ipsum esse, praesentium, nam,
                        magni laborum impedit minima voluptatem ducimus tempore
                        deserunt est maxime rerum harum consequatur asperiores?
                        Sed eius nihil eos optio aliquid incidunt voluptates
                        harum. Porro ullam eius doloremque iusto ipsam
                        laboriosam unde sunt necessitatibus numquam explicabo!
                        Similique nemo quos tenetur, nihil explicabo vel autem
                        fugiat eius optio aperiam assumenda eveniet, deserunt
                        nulla! Expedita magnam placeat tempore voluptas dolores
                        sunt, quas voluptatem officiis at deserunt ea non fugit
                        beatae error molestiae vitae labore odio consequatur
                        assumenda libero. Repellat nemo, fugiat explicabo
                        dignissimos pariatur nulla obcaecati?
                    </p>
                </div>
            </div>
        </Layout>
    );
};

export default DetailBlog;
