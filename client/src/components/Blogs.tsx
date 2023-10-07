import { SetStateAction, useState } from "react";

interface BlogType {
  title: string;
  picture: string;
  author: string;
  category: string;
  date: string;
  content: string;
}

const Blogs = () => {
  const [blog, setBlogs] = useState<BlogType[]>([
    {
      title: "I Love My Kitchen",
      picture:
        "https://cdn.shortpixel.ai/stsp/to_webp,q_lossy,ret_img/https://superbdemo.com/themes/superb-pixels/wp-content/uploads/2022/09/featured-image-8.png",
      author: "Amanda Smith",
      category: "Cooking",
      date: "September 16, 2022",
      content:
        "Etiam placerat velit vitae dui blandit sollicitudin. Vestibulum tincidunt sed dolor sit amet volutpat. Nullam egestas sem at mollis sodales. Nunc eget lacinia eros, ut tincidunt nunc. Quisque volutpat, enim id volutpat interdum, purus odio euismod neque, sit amet faucibus justo dolor tincidunt dui. Nulla facilisi. Phasellus in tincidunt lacus, in gravida ipsum. Cras id vehicula est, tincidunt pellentesque magna. Etiam porttitor nulla urna, quis vulputate justo euismod ac. Nunc viverra sollicitudin fringilla.",
    },
    {
      title: "6 Easy Brunch Ideas",
      picture:
        "https://cdn.shortpixel.ai/stsp/to_webp,q_lossy,ret_img/https://superbdemo.com/themes/superb-pixels/wp-content/uploads/2022/09/featured-image-7.png",
      author: "Olivia Jones",
      category: "Brunch",
      date: "September 15, 2022",
      content:
        "Etiam placerat velit vitae dui blandit sollicitudin. Vestibulum tincidunt sed dolor sit amet volutpat. Nullam egestas sem at mollis sodales. Nunc eget lacinia eros, ut tincidunt nunc. Quisque volutpat, enim id volutpat interdum, purus odio euismod neque, sit amet faucibus justo dolor tincidunt dui. Nulla facilisi. Phasellus in tincidunt lacus, in gravida ipsum. Cras id vehicula est, tincidunt pellentesque magna. Etiam porttitor nulla urna, quis vulputate justo euismod ac. Nunc viverra sollicitudin fringilla.",
    },
    {
      title: "Awesome Cooking Hacks",
      picture:
        "https://cdn.shortpixel.ai/stsp/to_webp,q_lossy,ret_img/https://superbdemo.com/themes/superb-pixels/wp-content/uploads/2022/09/featured-image-9.png",
      author: "Liam Davis",
      category: "Brunch",
      date: "September 15, 2022",
      content:
        "Etiam placerat velit vitae dui blandit sollicitudin. Vestibulum tincidunt sed dolor sit amet volutpat. Nullam egestas sem at mollis sodales. Nunc eget lacinia eros, ut tincidunt nunc. Quisque volutpat, enim id volutpat interdum, purus odio euismod neque, sit amet faucibus justo dolor tincidunt dui. Nulla facilisi. Phasellus in tincidunt lacus, in gravida ipsum. Cras id vehicula est, tincidunt pellentesque magna. Etiam porttitor nulla urna, quis vulputate justo euismod ac. Nunc viverra sollicitudin fringilla.",
    },
    {
      title: "Something Awesome For The Foodies",
      picture:
        "https://cdn.shortpixel.ai/stsp/to_webp,q_lossy,ret_img/https://superbdemo.com/themes/superb-pixels/wp-content/uploads/2022/09/featured-image-3.png",
      author: "Amanda Smith",
      category: "Brunch",
      date: "September 13, 2022",
      content:
        "Etiam placerat velit vitae dui blandit sollicitudin. Vestibulum tincidunt sed dolor sit amet volutpat. Nullam egestas sem at mollis sodales. Nunc eget lacinia eros, ut tincidunt nunc. Quisque volutpat, enim id volutpat interdum, purus odio euismod neque, sit amet faucibus justo dolor tincidunt dui. Nulla facilisi. Phasellus in tincidunt lacus, in gravida ipsum. Cras id vehicula est, tincidunt pellentesque magna. Etiam porttitor nulla urna, quis vulputate justo euismod ac. Nunc viverra sollicitudin fringilla.",
    },
    {
      title: "Enjoying the Small Things in Life",
      picture:
        "https://cdn.shortpixel.ai/stsp/to_webp,q_lossy,ret_img/https://superbdemo.com/themes/superb-pixels/wp-content/uploads/2022/09/featured-image-10.png",
      author: "Amanda Smith",
      category: "Brunch",
      date: "September 11, 2022",
      content:
        "Etiam placerat velit vitae dui blandit sollicitudin. Vestibulum tincidunt sed dolor sit amet volutpat. Nullam egestas sem at mollis sodales. Nunc eget lacinia eros, ut tincidunt nunc. Quisque volutpat, enim id volutpat interdum, purus odio euismod neque, sit amet faucibus justo dolor tincidunt dui. Nulla facilisi. Phasellus in tincidunt lacus, in gravida ipsum. Cras id vehicula est, tincidunt pellentesque magna. Etiam porttitor nulla urna, quis vulputate justo euismod ac. Nunc viverra sollicitudin fringilla.",
    },
    {
      title: "Cooking For Multiple Days Made Easy",
      picture:
        "https://cdn.shortpixel.ai/stsp/to_webp,q_lossy,ret_img/https://superbdemo.com/themes/superb-pixels/wp-content/uploads/2022/08/featured-image.png",
      author: "Amanda Smith",
      category: "Brunch",
      date: "August 6, 2022",
      content:
        "Etiam placerat velit vitae dui blandit sollicitudin. Vestibulum tincidunt sed dolor sit amet volutpat. Nullam egestas sem at mollis sodales. Nunc eget lacinia eros, ut tincidunt nunc. Quisque volutpat, enim id volutpat interdum, purus odio euismod neque, sit amet faucibus justo dolor tincidunt dui. Nulla facilisi. Phasellus in tincidunt lacus, in gravida ipsum. Cras id vehicula est, tincidunt pellentesque magna. Etiam porttitor nulla urna, quis vulputate justo euismod ac. Nunc viverra sollicitudin fringilla.",
    },
  ]);
  const [search, setSearch] = useState("");
  const searchHandle = (e: { target: { value: SetStateAction<string> } }) =>
    setSearch(e.target.value);
  return (
    <>
      <div className="mx-auto max-w-[960px] my-[2rem]">
        <input
          type="text"
          placeholder="search blogs..."
          className="border-2 w-full p-4 rounded-md"
          value={search}
          onChange={searchHandle}
        />
        <div className="grid grid-cols-3 my-4 gap-6">
          {blog &&
            blog?.map((item, idx) => (
              <div
                key={idx}
                className="col-span-1 shadow-lg shadow-black-500/50 rounded-lg"
              >
                <div className="mb-4">
                  <img
                    src={item?.picture}
                    alt={`${item?.title} picture`}
                    className="rounded-t-lg"
                  />
                </div>
                <div className="p-4">
                  <h3 className="mb-4 text-2xl">{item?.title}</h3>
                  <h4 className="mb-4">{`${item?.author}, ${item?.date}`}</h4>
                  <p className="mb-6 line-clamp-3 text-gray-500">
                    {item?.content}
                  </p>
                  <button className="bg-orange-300 p-3 rounded-lg">
                    Continue Reading
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Blogs;
