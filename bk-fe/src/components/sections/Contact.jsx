import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
} from "lucide-react";

import { contactApi } from "../../services/contact";

const API_URL = import.meta.env.VITE_API_URL;

export default function Contact() {
  const [company, setCompany] = useState(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [sending, setSending] = useState(false);

  useEffect(() => {
    contactApi
      .getCompany()
      .then(setCompany)
      .catch(console.error);
  }, []);

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name.trim())
      return toast.error("Nama wajib diisi.");

    if (!form.email.trim())
      return toast.error("Email wajib diisi.");

    if (!/\S+@\S+\.\S+/.test(form.email))
      return toast.error("Format email tidak valid.");

    if (!form.phone.trim())
      return toast.error("Nomor telepon wajib diisi.");

    if (!form.subject.trim())
      return toast.error("Subject wajib diisi.");

    if (form.message.trim().length < 10)
      return toast.error("Pesan minimal 10 karakter.");

    try {
      setSending(true);

      await contactApi.sendMessage(form);

      toast.success("Pesan berhasil dikirim.");

      setForm({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
      toast.error("Gagal mengirim pesan.");
    } finally {
      setSending(false);
    }
  };

  if (!company) {
    return (
      <section className="py-32 text-center">
        Loading...
      </section>
    );
  }

  return (
    <section className="bg-[#FAF6EE] py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-20 text-center">

          <h1
            className="text-5xl text-[#2A2010]"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            KONTAK KAMI
          </h1>

          <p className="mt-5 text-[#6D5C45]">
            Anda adalah alasan di balik seluruh kesuksesan kami. Berikan pertanyaan, testimoni ataupun kritik & saran anda dengan mengirimkan chat Whatsapp / Email / Isi form dibawah.
          </p>

        </div>

        <div className="grid gap-12 lg:grid-cols-2">

          {/* LEFT */}

          <div className="rounded-3xl bg-white p-10 shadow-xl">

            <img
              src={`${API_URL}${company.logo}`}
              alt={company.name}
              className="mb-8 h-24 object-contain"
            />

            <h2
              className="mb-8 text-4xl text-[#2A2010]"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
              }}
            >
              {company.name}
            </h2>

            <div className="space-y-6 text-[#6D5C45]">

              <div className="flex gap-4">

                <MapPin
                  size={22}
                  className="mt-1 text-[#B8935F]"
                />

                <p>{company.address}</p>

              </div>

              <div className="flex gap-4">

                <Phone
                  size={22}
                  className="text-[#B8935F]"
                />

                <p>{company.whatsapp}</p>

              </div>

              <div className="flex gap-4">

                <Mail
                  size={22}
                  className="text-[#B8935F]"
                />

                <p>{company.email}</p>

              </div>

              <div className="flex gap-4">

                <MessageCircle
                  size={22}
                  className="text-[#B8935F]"
                />

                <p>{company.whatsapp}</p>

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <form
            onSubmit={handleSubmit}
            className="space-y-5 rounded-3xl bg-white p-10 shadow-xl"
          >

            <input
              type="text"
              name="name"
              placeholder="Nama"
              value={form.name}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-300 p-4 outline-none transition focus:border-[#B8935F]"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-300 p-4 outline-none transition focus:border-[#B8935F]"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Nomor Telepon"
              value={form.phone}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-300 p-4 outline-none transition focus:border-[#B8935F]"
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={form.subject}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-300 p-4 outline-none transition focus:border-[#B8935F]"
            />

            <textarea
              rows={7}
              name="message"
              placeholder="Message"
              value={form.message}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-300 p-4 outline-none transition focus:border-[#B8935F]"
            />

            <button
              type="submit"
              disabled={sending}
              className="rounded-full bg-[#B8935F] px-8 py-4 text-white transition hover:bg-[#9D7A46] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {sending ? "Mengirim..." : "Kirim Pesan"}
            </button>

          </form>
        
        </div>
        <div className="mt-16 overflow-hidden rounded-3xl shadow-xl">

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4289.26750535531!2d106.85475420000002!3d-6.510482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c1059743e277%3A0xae7567b31d521c54!2sPT%20Cahaya%20Buana%20Furindotama!5e1!3m2!1sen!2sid!4v1783915213740!5m2!1sen!2sidhttps://maps.app.goo.gl/LneEjDdJfXiM49Pn7"
            width="100%"
            height="500"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />

        </div>              
      </div>

    </section>
  );
}