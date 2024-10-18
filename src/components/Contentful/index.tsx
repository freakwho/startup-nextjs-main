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
      <div className="flex p-8 mt-20
        justify-center items-center">
        <h1 className="text-4xl text-center 
          font-semibold text-black dark:text-white">
            Our Promise
        </h1>
      </div>
        <div className="md:container md:mx-auto md:mb-40 md:mt-10">
          {blogs && blogs.items?.map((blog, idx) => (
            <div key={idx} className="md:mx-auto md:my-10">
              <div className="flex">
                <div>
                  <img 
                    className="shadow-2xl bg-white rounded-xl p-4 shadow-red-800"  
                    width={200}
                    height={200}
                    src={`https:${(blog.fields.image as IAsset).fields.file.url}`}
                  />  
                </div>
                <div className="p-3">
                  <h3 className="ml-2 mb-5 text-xl font-bold text-black 
                  dark:text-white sm:text-2xl lg:text-xl xl:text-2xl"
                  >
                    {blog.fields.title}            
                  </h3>
                  <RichText document={blog.fields.body}/>              
                </div>                
              </div>
            </div>
          ))}
        </div>
    </div>
  );
}
