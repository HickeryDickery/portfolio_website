import { useState, useRef, FormEvent, ChangeEvent } from "react";
import { Transition } from "../components";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

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
      .then((result) => {
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

    return (
      <div className="pr-[15%] pl-[8%] flex flex-1 my-auto">
        <div>
          <motion.div className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
            <p className="">Get in Touch</p>
            <h3 className="">Contact.</h3>
            <form onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
              <label className="flex flex-col">
                <span className="text-white font-medium mb-4">Your Name</span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Whats your name?"
                  className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                />
              </label>
              <label className="flex flex-col">
                <span className="text-white font-medium mb-4">Your Email</span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Whats your Email?"
                  className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                />
              </label>
              <label className="flex flex-col">
                <span className="text-white font-medium mb-4">
                  Your Message
                </span>
                <textarea
                  rows={7}
                  // type="text"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What do you want to say?"
                  className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                />
              </label>
              <button
                type="submit"
                className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl hover:bg-white-100 hover:text-black-100 transition-all duration-200 ease-in-out"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send"}
              </button>
            </form>
          </motion.div>
        </div>
        <Transition />
      </div>
    );
  };
};

export default Contact;
