'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Bars3Icon, XMarkIcon, UserIcon, EnvelopeIcon, TagIcon, DocumentTextIcon } from '@heroicons/react/24/outline';
import { FaWhatsapp } from 'react-icons/fa';
import Image from 'next/image';
import React from 'react'; // Agregado para usar React.ChangeEvent

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    tipoProyecto: 'Desarrollo Web',
    descripcion: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // FIX: Se agregó el tipo de evento 'e' para solucionar el error de TypeScript
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');

    const numeroWhatsapp = '542317402288';
    const mensaje = `¡Hola, Marenna Dev! Quiero solicitar un presupuesto. Nombre: ${formData.nombre}, Email: ${formData.email}, Tipo de Proyecto: ${formData.tipoProyecto}, Descripción: ${formData.descripcion}`;
    const mensajeCodificado = encodeURIComponent(mensaje);
    const urlWhatsapp = `https://wa.me/${numeroWhatsapp}?text=${mensajeCodificado}`;
    
    window.open(urlWhatsapp, '_blank');
    
    setMessage('¡Redirigiendo a WhatsApp! Tu mensaje está listo para ser enviado.');
    setIsLoading(false);
    setFormData({
      nombre: '',
      email: '',
      tipoProyecto: 'Desarrollo Web',
      descripcion: '',
    });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'Portafolio', href: '/portafolio' },
    { name: 'Contacto', href: '/contacto' },
  ];

  return (
    <div className="bg-white text-gray-800 min-h-screen font-sans">
      {/* Navegación Mejorada */}
      <nav className="bg-gray-900 text-white p-4 sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
<Link href="/" className="transition-colors duration-300 hover:opacity-80">
    <Image
        src="/marennadev-logo.png"
        alt="Marenna Dev Logo"
        width={140}
        height={35}
    />
</Link>

          <div className="md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              {isMenuOpen ? (
                <XMarkIcon className="h-6 w-6 text-white" />
              ) : (
                <Bars3Icon className="h-6 w-6 text-white" />
              )}
            </button>
          </div>

          <div className="hidden md:flex space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`
                  font-semibold py-2 px-3 rounded-lg transition-colors duration-300
                  ${pathname === link.href ? 'bg-gray-700 text-white' : 'hover:bg-gray-700 hover:text-white text-gray-400'}
                `}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-screen' : 'max-h-0'
          }`}
        >
          <div className="flex flex-col space-y-2 mt-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={toggleMenu}
                className={`
                  block font-semibold py-2 px-4 rounded-lg transition-colors duration-300
                  ${pathname === link.href ? 'bg-gray-700 text-white' : 'hover:bg-gray-700 hover:text-white text-gray-400'}
                `}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      <main className="container mx-auto p-8 md:p-16">
        <h1 className="text-4xl font-bold mb-8 text-center">Solicitar Presupuesto</h1>
        <p className="text-lg text-gray-700 text-center max-w-2xl mx-auto">
          Completa el siguiente formulario para obtener un presupuesto. Serás redirigido a WhatsApp con un mensaje precargado para enviarlo.
        </p>

        <div className="mt-12 max-w-xl mx-auto">
          {message && (
            <div className={`p-4 mb-4 rounded-md text-center font-semibold ${message.includes('éxito') || message.includes('Redirigiendo') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
              {message}
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">Nombre</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <UserIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input type="text" id="nombre" value={formData.nombre} onChange={handleChange} required className="block w-full rounded-md border border-gray-300 py-2 pl-10 pr-3 focus:ring-black focus:border-black" />
              </div>
            </div>
            
            <div className="relative">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <EnvelopeIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input type="email" id="email" value={formData.email} onChange={handleChange} required className="block w-full rounded-md border border-gray-300 py-2 pl-10 pr-3 focus:ring-black focus:border-black" />
              </div>
            </div>

            <div className="relative">
              <label htmlFor="tipoProyecto" className="block text-sm font-medium text-gray-700">Tipo de Proyecto</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <TagIcon className="h-5 w-5 text-gray-400" />
                </div>
                <select id="tipoProyecto" value={formData.tipoProyecto} onChange={handleChange} required className="block w-full rounded-md border border-gray-300 py-2 pl-10 pr-3 focus:ring-black focus:border-black">
                  <option>Desarrollo Web</option>
                  <option>Ecommerce</option>
                  <option>Otro</option>
                </select>
              </div>
            </div>
            
            <div className="relative">
              <label htmlFor="descripcion" className="block text-sm font-medium text-gray-700">Descripción Detallada del Proyecto</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="pointer-events-none absolute top-3 left-0 flex items-center pl-3">
                  <DocumentTextIcon className="h-5 w-5 text-gray-400" />
                </div>
                <textarea id="descripcion" rows={6} value={formData.descripcion} onChange={handleChange} required className="block w-full rounded-md border border-gray-300 py-2 pl-10 pr-3 focus:ring-black focus:border-black"></textarea>
              </div>
            </div>
            
            <div>
              <button 
                type="submit" 
                disabled={isLoading}
                className="w-full bg-black text-white py-3 px-6 rounded-md font-semibold hover:bg-gray-700 transition-colors duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  'Redirigiendo...'
                ) : (
                  <>
                    <FaWhatsapp className="h-5 w-5" /> Enviar por WhatsApp
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </main>

      {/* Pie de página */}
      <footer className="bg-black text-gray-400 py-8 text-center mt-20">
        <div className="container mx-auto">
          <p className="mb-2">Marenna Dev | Desarrollo Web & Reparación de PC</p>
          <p className="text-sm">© 2025. Todos los derechos reservados. | La Plata, Buenos Aires.</p>
        </div>
      </footer>
    </div>
  );
}