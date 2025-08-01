'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

// 1. FIX: Se define un tipo para la estructura del objeto 'proyecto'
type Proyecto = {
    nombre: string;
    descripcion: string;
    imagen: string;
    enlace: string;
    detalles: string[];
};

// 2. FIX: Se tipan los props del componente DetallesModal
const DetallesModal = ({ proyecto, isOpen, onClose }: { proyecto: Proyecto, isOpen: boolean, onClose: () => void }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center p-4 z-50">
      <div className="bg-white p-8 rounded-xl shadow-2xl max-w-lg w-full relative max-h-[90vh] overflow-y-auto">
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 text-2xl"
        >
          &times;
        </button>
        <h2 className="text-3xl font-bold mb-4">{proyecto.nombre}</h2>
        <p className="text-gray-700 text-lg mb-6">{proyecto.descripcion}</p>
        
        <h3 className="text-2xl font-semibold mb-2">Características Principales</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          {proyecto.detalles.map((detalle, index) => (
            <li key={index}>{detalle}</li>
          ))}
        </ul>

        <div className="mt-8 text-center">
          <Link href={proyecto.enlace} className="inline-block bg-black text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-700 transition-colors duration-300">
            Ver Proyecto
          </Link>
        </div>
      </div>
    </div>
  );
};

export default function PortafolioPage() {
    const [modalOpen, setModalOpen] = useState(false);
    const [proyectoSeleccionado, setProyectoSeleccionado] = useState<Proyecto | null>(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    const abrirModal = (proyecto: Proyecto) => {
        setProyectoSeleccionado(proyecto);
        setModalOpen(true);
    };

    const cerrarModal = () => {
        setModalOpen(false);
        setProyectoSeleccionado(null);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navLinks = [
        { name: 'Portafolio', href: '/portafolio' },
        { name: 'Contacto', href: '/contacto' },
    ];

    // Array de proyectos, ahora con una propiedad 'detalles'
    const proyectos: Proyecto[] = [
        {
            nombre: 'Bonipuntos',
            descripcion: 'Plataforma completa de fidelización de clientes para PyMes. Desarrollado con una interfaz de usuario (front-end) para la gestión de puntos y un robusto panel de administración (back-end) para el control de clientes, premios, cupones y la revisión de reseñas.',
            imagen: '/vtk.png',
            enlace: 'https://rewards.vtkaccesorios.com/',
            detalles: [
                'Panel de administración con Dashboard intuitivo y modo de mantenimiento',
                'Sistema de puntos y recompensas 100% personalizable',
                'Configuración de reglas de puntos (ej: valor del peso por punto)',
                'Gestión de clientes y base de datos con filtros de búsqueda',
                'Registro de clientes flexible (por el cliente o desde el panel)',
                'Notificaciones automáticas por email (alta, suma de puntos, canje)',
                'Identificación de clientes por DNI para un registro rápido',
                'Modificación dinámica de premios y cupones',
                'Revisión y moderación de reseñas',
            ],
        },
        {
            nombre: 'Valentaffa Tienda Online',
            descripcion: 'Tienda online completa sobre Tienda Nube con un diseño personalizado, optimizada para SEO y pensada para maximizar las ventas.',
            imagen: '/valen.png',
            enlace: 'https://valentaffa.store/',
            detalles: [
                'Diseño personalizado y maquetación adaptada a la marca',
                'Optimización SEO on-page (productos, categorías y meta-tags)',
                'Integración con pasarelas de pago seguras (Mercado Pago, etc.)',
                'Configuración de métodos de envío y logística',
                'Soporte y asesoramiento post-lanzamiento',
                'Diseño 100% responsive para todos los dispositivos',
            ],
        },
        {
            nombre: 'VTK Accesorios - Tienda Online',
            descripcion: 'Tienda online completa desarrollada para la marca VTK Accesorios. Incluye un diseño moderno, optimización para SEO y una experiencia de usuario fluida para potenciar las ventas.',
            imagen: '/vtk1.png',
            enlace: 'https://tienda.vtkaccesorios.com/',
            detalles: [
                'Diseño personalizado y maquetación adaptada a la marca',
                'Optimización SEO on-page (productos, categorías y meta-tags)',
                'Integración con pasarelas de pago seguras (Mercado Pago, etc.)',
                'Configuración de métodos de envío y logística',
                'Soporte y asesoramiento post-lanzamiento',
                'Diseño 100% responsive para todos los dispositivos',
            ],
        },
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
                <h1 className="text-4xl font-bold mb-8 text-center">Portafolio de Proyectos</h1>
                <p className="text-lg text-gray-700 text-center max-w-2xl mx-auto">
                    Aquí te presento una selección de los proyectos más recientes en los que he trabajado. Cada uno es un reflejo de mi compromiso con la calidad y la innovación.
                </p>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {proyectos.map((proyecto, index) => (
                        <div key={index} className="border border-gray-300 rounded-xl overflow-hidden shadow-xl hover:scale-105 transform transition-transform duration-300">
                            <div className="relative w-full h-56 bg-gray-200">
                                <Image
                                    src={proyecto.imagen}
                                    alt={proyecto.nombre}
                                    layout="fill"
                                    objectFit="cover"
                                    className="hover:opacity-75 transition-opacity duration-300"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-bold mb-2">{proyecto.nombre}</h3>
                                <p className="text-gray-700">{proyecto.descripcion}</p>
                                <div className="mt-4">
                                    <button onClick={() => abrirModal(proyecto)} className="inline-block border border-gray-800 text-gray-800 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                                        Más detalles
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            {/* Pie de página */}
            <footer className="bg-black text-gray-400 py-8 text-center mt-20">
                <div className="container mx-auto">
                    <p className="mb-2">Marenna Dev | Desarrollo Web & Reparación de PC</p>
                    <p className="text-sm">© 2025. Todos los derechos reservados. | La Plata, Buenos Aires.</p>
                </div>
            </footer>

            {/* Renderizado del Modal */}
            {proyectoSeleccionado && (
                <DetallesModal
                    proyecto={proyectoSeleccionado}
                    isOpen={modalOpen}
                    onClose={cerrarModal}
                />
            )}
        </div>
    );
}