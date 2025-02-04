import React, { useState } from "react";

function Contact() {

  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch("http://5.39.202.91:3002/createMess", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      if (response.status === 409) {
        alert("Tento e-mail už existuje v databázi!");
        return;
      }
  
      if (!response.ok) {
        throw new Error(`Chyba při odesílání: ${response.status}`);
      }
  
      const data = await response.json();
      console.log("Server odpověď:", data);
      alert("Zpráva byla úspěšně odeslána!");
    } catch (error) {
      console.error("Chyba při odesílání dat:", error);
    }
  };  

  return (
    <div>
      <form className="pt-0 md:pt-50 flex z-10" onSubmit={handleSubmit}>
        <div className="md:w-1/3 1/2 mx-auto p-10 z-20 form flex-col gap-1 rounded-l flex">
          <h1 className="main-text font-bold text-4xl mb-5 text-center">kontakt</h1>
          <input placeholder="E-mail" required className="rounded" type="email" name="email" value={formData.email} onChange={handleChange} id="" />
          <div className="rounded flex flex-row">
            <input placeholder="Jméno" required className="rounded w-1/2"  type="text" name="firstName" id="" value={formData.firstName} onChange={handleChange}  />
            <input placeholder="Přijmení" required className="rounded w-1/2"  type="text" name="lastName" id="" value={formData.lastName} onChange={handleChange}  />
          </div>
          <textarea placeholder="Zpráva" required name="message" value={formData.message} onChange={handleChange}  id=""></textarea>
          <input
            className="rounded-l hover:bg-neutral-600 ease-in-out duration-300 hover:text-stone-50 py-3 bg-slate-50"
            type="submit"
            value="Odeslat"
          />
        </div>
      </form>
    </div>
  );
}

export default Contact;
