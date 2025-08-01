'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Bars3Icon, XMarkIcon, EnvelopeIcon, ComputerDesktopIcon, CloudIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline';

export default function Home() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navLinks = [
        { name: 'Portafolio', href: '/portafolio' },
        { name: 'Contacto', href: '/contacto' },
    ];

    // Obtener el año actual dinámicamente para el copyright
    const currentYear = new Date().getFullYear();

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

            {/* Encabezado - Sección Hero con fondo mejorado */}
            <header className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-20 text-center">
                <Link href="/" className="inline-block">
                    <Image 
                        src="/marennadev-logo.png" 
                        alt="Marenna Dev Logo" 
                        width={300}
                        height={80}
                        priority
                        className="mx-auto"
                    />
                </Link>
                <p className="text-2xl font-light italic mt-4">
    El código que impulsa tu negocio, la experiencia que tus clientes aman.
</p>
            </header>

            {/* Contenedor principal */}
            <div className="container mx-auto p-8 md:p-16">
                {/* Sección Sobre Mí con efecto visual */}
                <section className="mb-20 border-b border-gray-200 pb-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div>
<h2 className="text-4xl font-bold mb-6">La historia detrás del código</h2>
<p className="text-lg leading-relaxed text-gray-700">
    Hay una idea que me obsesiona: que un buen proyecto merece existir de verdad. Desde La Plata, me dedico a tomar esas ideas y darles forma en el mundo digital: construyendo sitios web a medida, optimizando tiendas online en Tienda Nube para que vendan más y, porque la tecnología es un todo, asegurando que la base sea sólida con mi servicio de reparación de computadoras. Al final del día, mi propósito es simple: que tu proyecto, de principio a fin, funcione impecablemente.
</p>
                        <div className="mt-6">
                            <Link href="/contacto" className="inline-block bg-black text-white px-8 py-3 rounded-md font-semibold hover:bg-gray-700 transition-colors duration-300">
                                Conversemos
                            </Link>
                        </div>
                    </div>
                    <div className="relative w-64 h-64 rounded-full overflow-hidden mx-auto shadow-lg hover:shadow-2xl transition-shadow duration-300">
                        <Image src="/perfil.png" alt="Mi Perfil" layout="fill" objectFit="cover" />
                    </div>
                </section>

                {/* Sección de Servicios con efectos mejorados */}
                <section className="mb-20">
    <h2 className="text-4xl font-bold mb-10 text-center">Soluciones Tecnológicas a tu Medida</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Servicio Desarrollo Web */}
        <div className="border-2 border-gray-200 p-8 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transform transition-all duration-300 flex flex-col items-center text-center">
            <ComputerDesktopIcon className="h-12 w-12 text-gray-900 mb-4 transition-transform duration-300 group-hover:rotate-6" />
            <h3 className="text-2xl font-semibold mb-2">Desarrollo Web a Medida</h3>
            <p className="text-gray-700 leading-relaxed">
                Creamos tu presencia online desde cero con sitios web únicos, funcionales y optimizados para el crecimiento de tu proyecto, desde landing pages hasta plataformas complejas.
            </p>
        </div>

        {/* Servicio Ecommerce */}
        <div className="border-2 border-gray-200 p-8 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transform transition-all duration-300 flex flex-col items-center text-center">
            <CloudIcon className="h-12 w-12 text-gray-900 mb-4 transition-transform duration-300 group-hover:rotate-6" />
            <h3 className="text-2xl font-semibold mb-2">Ecommerce con Tienda Nube</h3>
            <p className="text-gray-700 leading-relaxed">
                Diseñamos y optimizamos tu tienda online para que vendas más y ofrezcas una experiencia de compra impecable. Nos enfocamos en la configuración y personalización que genera resultados.
            </p>
        </div>

        {/* Servicio Reparación de PC */}
        <div className="border-2 border-gray-200 p-8 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transform transition-all duration-300 flex flex-col items-center text-center">
            <WrenchScrewdriverIcon className="h-12 w-12 text-gray-900 mb-4 transition-transform duration-300 group-hover:rotate-6" />
            <h3 className="text-2xl font-semibold mb-2">Reparación de Computadoras</h3>
            <p className="text-gray-700 leading-relaxed">
                Servicio técnico profesional y confiable para que nada te detenga. Soluciones eficientes para problemas de hardware y software, asegurando el óptimo funcionamiento de tu equipo.
<div className="mt-4">
<Link
href="https://tienda.vtkaccesorios.com/servicio-tecnico/"
className="inline-flex items-center bg-white border border-gray-300 rounded-md shadow-sm px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
target="_blank"
rel="noopener noreferrer"
>
<WrenchScrewdriverIcon className="h-5 w-5 mr-2 text-gray-500" aria-hidden="true" />
Ver más en VTK Accesorios
</Link>
</div>
            </p>
        </div>
    </div>
</section>

                {/* Sección de Contacto - CTA mejorado */}
<section className="py-16 bg-gray-100 rounded-lg shadow-md hover:bg-gray-200 transition-colors duration-300">
    <div className="max-w-md mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">La primera página de tu proyecto</h2>
        <p className="text-lg text-gray-700 mb-6">Quizás en algún momento te diste cuenta de que tenías una idea que merecía más, que necesitaba existir de verdad. Si ese momento es ahora, este es el lugar.
</p>
        <Link 
            href="/contacto" 
            className="inline-block bg-gradient-to-r from-gray-900 to-gray-700 text-white px-10 py-4 rounded-full text-xl font-semibold hover:from-gray-700 hover:to-gray-900 transition-colors duration-300 transform hover:scale-105"
        >
            <EnvelopeIcon className="h-6 w-6 inline-block mr-2 align-middle" /> Contame tu idea
        </Link>
    </div>
</section>
            </div>

            {/* Pie de página con año dinámico */}
            <footer className="bg-black text-gray-400 py-8 text-center mt-20">
                <div className="container mx-auto">
                    <p className="mb-2">Marenna Dev | Desarrollo Web & Reparación de PC</p>
                    <p className="text-sm">© {currentYear}. Todos los derechos reservados. | La Plata, Buenos Aires.</p>
                </div>
            </footer>
        </div>
    );
}