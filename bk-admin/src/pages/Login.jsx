import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { LogIn } from "lucide-react";

import { authApi } from "../services/auth";

export default function Login() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.username.trim()) {
      return toast.error("Username wajib diisi");
    }

    if (!form.password.trim()) {
      return toast.error("Password wajib diisi");
    }

    try {
      setLoading(true);

      const data = await authApi.login(form);
      console.log(data);
      localStorage.setItem("token", data.access_token);

      toast.success("Login berhasil");

      navigate("/dashboard");
    } catch (err) {
      console.error(err);

      toast.error("Username atau Password salah");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#FAF6EE] px-4">
      <div className="w-full max-w-md rounded-3xl bg-white p-10 shadow-xl">
        <div className="mb-8 text-center">
          <h1
            className="text-5xl text-[#2A2010]"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            BigKoil
          </h1>

          <p className="mt-3 text-[#6D5C45]">
            Admin Dashboard Login
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <input
            name="username"
            type="text"
            placeholder="Username"
            value={form.username}
            onChange={handleChange}
            className="w-full rounded-xl border border-gray-300 p-4 outline-none focus:border-[#B8935F]"
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full rounded-xl border border-gray-300 p-4 outline-none focus:border-[#B8935F]"
          />

          <button
            type="submit"
            disabled={loading}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#B8935F] py-4 text-white transition hover:bg-[#9D7A46]"
          >
            <LogIn size={20} />

            {loading ? "Loading..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}