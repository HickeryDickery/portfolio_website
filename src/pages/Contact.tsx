import { useState, FormEvent, ChangeEvent } from "react";
import { Transition } from "../components";
import emailjs from "@emailjs/browser";
// import { motion } from "framer-motion";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // console.log(import.meta.env.VITE_APP_EMAILJS_SERVICE_ID);

    if (form.name === "" || form.email === "" || form.message === "") {
      alert("Please fill in all fields");
      setLoading(false);
      return;
    }

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Khizar",
          from_email: form.email,
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        alert("Thank You! I'll get back to you shortly");
        setForm({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.log(error.text);
        alert("Something went wrong. Please try again later :(");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="sm:pr-[15%] sm:pl-[8%] max-sm:mx-[10%] flex flex-1 my-auto justify-center items-center sm:mt-8">
      <div className="flex flex-1 flex-col items-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl mb-8 font-bold text-center">
          Get in Touch
        </h1>
        <form
          onSubmit={handleSubmit}
          className="flex w-full sm:w-3/4 lg:sm:w-1/2 flex-col gap-8 my-6 border-2 border-black dark:border-white p-4 sm:p-6 rounded-xl formBackground"
        >
          <label className="flex flex-col cursor-none">
            <span className="font-semibold text-lg mb-4 ">Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Whats your name?"
              className="py-4 px-6 rounded-lg outline-none font-medium bg-white dark:bg-black border-2 border-black dark:border-white"
            />
          </label>

          <label className="flex flex-col">
            <span className="font-semibold mb-4 text-lg">Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Whats your Email"
              className="py-4 px-6 rounded-lg outline-none font-medium bg-white dark:bg-black border-2 border-black dark:border-white"
            />
          </label>

          <label className="flex flex-col">
            <span className="font-semibold mb-4 text-lg">Message</span>
            <textarea
              rows={7}
              // type="text"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="py-4 px-6 rounded-lg outline-none font-medium bg-white dark:bg-black border-2 border-black dark:border-white"
            />
          </label>
          <button
            type="submit"
            className=" py-3 px-8 outline-none w-fit font-bold shadow-md rounded-xl hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-200 ease-in-out bg-white dark:bg-black border-2 border-black dark:border-white"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
      <Transition />
    </div>
  );
};

export default Contact;
