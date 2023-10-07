import { SetStateAction, useState } from "react";
import { Link } from "react-router-dom";

interface BlogType {
  title: string;
  picture: string;
  author: string;
  category: string;
  date: string;
  content: string;
}

const Blogs = () => {
  const [blog] = useState<BlogType[]>([
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
    {
      title: "Cooking At A Bakery Is Meaningful",
      picture:
        "https://cdn.shortpixel.ai/stsp/to_webp,q_lossy,ret_img/https://superbdemo.com/themes/superb-pixels/wp-content/uploads/2022/07/featured-image-8.png",
      author: "Amanda Smith",
      category: "Brunch",
      date: "July 16, 2022",
      content:
        "Etiam placerat velit vitae dui blandit sollicitudin. Vestibulum tincidunt sed dolor sit amet volutpat. Nullam egestas sem at mollis sodales. Nunc eget lacinia eros, ut tincidunt nunc. Quisque volutpat, enim id volutpat interdum, purus odio euismod neque, sit amet faucibus justo dolor tincidunt dui. Nulla facilisi. Phasellus in tincidunt lacus, in gravida ipsum. Cras id vehicula est, tincidunt pellentesque magna. Etiam porttitor nulla urna, quis vulputate justo euismod ac. Nunc viverra sollicitudin fringilla.",
    },
    {
      title: "Enjoying the weekend with friends",
      picture:
        "https://cdn.shortpixel.ai/stsp/to_webp,q_lossy,ret_img/https://superbdemo.com/themes/superb-pixels/wp-content/uploads/2022/07/featured-image-7.png",
      author: "Amanda Smith",
      category: "Cooking",
      date: "July 13, 2022",
      content:
        "Etiam placerat velit vitae dui blandit sollicitudin. Vestibulum tincidunt sed dolor sit amet volutpat. Nullam egestas sem at mollis sodales. Nunc eget lacinia eros, ut tincidunt nunc. Quisque volutpat, enim id volutpat interdum, purus odio euismod neque, sit amet faucibus justo dolor tincidunt dui. Nulla facilisi. Phasellus in tincidunt lacus, in gravida ipsum. Cras id vehicula est, tincidunt pellentesque magna. Etiam porttitor nulla urna, quis vulputate justo euismod ac. Nunc viverra sollicitudin fringilla.",
    },
    {
      title: "Peachful Dinner Cooking Tips",
      picture:
        "https://cdn.shortpixel.ai/stsp/to_webp,q_lossy,ret_img/https://superbdemo.com/themes/superb-pixels/wp-content/uploads/2022/07/featured-image-1.png",
      author: "Amanda Smith",
      category: "Cooking",
      date: "July 12, 2022",
      content:
        "Etiam placerat velit vitae dui blandit sollicitudin. Vestibulum tincidunt sed dolor sit amet volutpat. Nullam egestas sem at mollis sodales. Nunc eget lacinia eros, ut tincidunt nunc. Quisque volutpat, enim id volutpat interdum, purus odio euismod neque, sit amet faucibus justo dolor tincidunt dui. Nulla facilisi. Phasellus in tincidunt lacus, in gravida ipsum. Cras id vehicula est, tincidunt pellentesque magna. Etiam porttitor nulla urna, quis vulputate justo euismod ac. Nunc viverra sollicitudin fringilla.",
    },
  ]);
  const [search, setSearch] = useState("");
  const searchHandle = (e: { target: { value: SetStateAction<string> } }) =>
    setSearch(e.target.value);
  const blogFilter = blog.filter((blog) => {
    if (search == "") {
      return blog;
    }
    return (
      blog.title.toLowerCase().includes(search.toLowerCase()) ||
      blog.category.toLowerCase().includes(search.toLowerCase()) ||
      blog.author.toLowerCase().includes(search.toLowerCase())
    );
  });
  return (
    <>
      <div className="mx-auto max-w-[960px] my-[2rem]">
        <div className="lg:mx-0 mx-4">
          <input
            type="text"
            placeholder="search by titll, category or author"
            className="border-2 w-full p-4 rounded-md lg:mx-0"
            value={search}
            onChange={searchHandle}
          />
        </div>
        <div className="grid lg:grid-cols-3 my-4 lg:gap-6 gap-4">
          {blogFilter &&
            blogFilter?.map((item, idx) => (
              <div
                key={idx}
                className="col-span-1 shadow-lg shadow-black-500/50 rounded-lg lg:mx-0 mx-4"
              >
                <div className="mb-4 relative">
                  <img
                    src={item?.picture}
                    alt={`${item?.title} picture`}
                    className="rounded-t-lg"
                  />
                  <p className="absolute top-[20px] bg-gray-100 py-2 px-3 rounded-r-full">
                    {item?.category}
                  </p>
                </div>
                <div className="p-4">
                  <h3 className="mb-4 text-2xl">{item?.title}</h3>
                  <h4 className="mb-4">{`${item?.author}, ${item?.date}`}</h4>
                  <p className="mb-6 line-clamp-3 text-gray-500">
                    {item?.content}
                  </p>
                  <button className="bg-orange-300 p-3 rounded-lg">
                    <Link to={`/blog/${idx}`}>Cotinue Reading</Link>
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
