"use client";

import { useState } from "react";
import qs from "qs";
import { getStrapiURL } from "@/lib/utils";

export function DevisForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    serviceOption: "",
    description: "",
  });

  const [message, setMessage] = useState("");

  const baseUrl = getStrapiURL();

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");

    const url = new URL("/api/devislists", baseUrl);

    try {
      const response = await fetch(url.href, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: {
            FullName: formData.fullName, // Correct casing to match Strapi model
            phone: formData.phone,
            email: formData.email,
            serviceOption: formData.serviceOption,
            description: formData.description,
          },
        }),
      });

      if (response.ok) {
        setMessage("Demande envoyée avec succès !");
        setFormData({ fullName: "", phone: "", email: "", serviceOption: "", description: "" });
      } else {
        const errorData = await response.json();
        console.error("Server Error:", errorData);
        setMessage("Erreur lors de l'envoi du formulaire.");
      }
    } catch (error) {
      console.error("Connection Error:", error);
      setMessage("Erreur de connexion au serveur.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-2xl w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-center text-2xl font-bold text-gray-800">Demande de Devis</h2>

        {message && <p className="text-center text-sm">{message}</p>}

        <form className="space-y-6" onSubmit={handleSubmit}>

         {/* Service Option */}
         <div>
            <label htmlFor="serviceOption" className="block text-sm font-medium text-gray-700">
              Choisissez une option
            </label>
            <select
              id="serviceOption"
              name="serviceOption"
              value={formData.serviceOption}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            >
          
              <option value="Conception-reamenagement">Conception et réaménagement</option>
              <option value="Permis-de-batir">Permis de bâtir</option>
              <option value="pilotage-suivi-chantier">Suivi et pilotage du chantier</option>
              <option value="Plans-evacuations">Plans d'évacuations</option>
              <option value="Plans-reglementaires">Plans réglementaires</option>
              <option value="" className="hidden"></option>
            </select>
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              rows={5}
              value={formData.description}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            ></textarea>
          </div>

          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
              Nom Complet
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Téléphone
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

         

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-fit flex flex-col items-center center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Envoyer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
