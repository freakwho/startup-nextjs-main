import contentfulClient from "@/contentful/contentfulClient";
import { TypeBlogSkeleton, IAsset } from "@/contentful/types/blog.types";
import RichText from "./richText";

const getBlogContentful = async() => {
  try {
    const data = await contentfulClient.getEntries<TypeBlogSkeleton>();
    console.log(data.items[0].fields.image);
    return data;
  }catch(err){
    console.log(err);
  }
};

export default async function ContentfulView() {
  const blogs = await getBlogContentful();
  return (
    <div>
        <div className="container py-12 md:py-20 lg:py-28">
            <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
                <div className="w-full">
                        <div className="flex">
                          <h1>On Progress</h1>
                            {blogs && blogs.items?.map((blog, idx) => (
                                <div key={idx}>
                                    <div className="mb-2 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
                                        <img src={`https:${(blog.fields.image as IAsset).fields.file.url}`}/>
                                    </div>
                                    <h3 className="ml-2 mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                                        {blog.fields.title}            
                                    </h3>
                                    <RichText document={blog.fields.body}/>
                                </div>
                            ))}
                        </div>
                </div>
            </div>
        </div>
             
      
    </div>
  );
}
