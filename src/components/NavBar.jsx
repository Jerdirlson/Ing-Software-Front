import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import USER_IMAGE from '../assets/svg/icons/UserBlack.svg'
import LOGO_BLUE_IPS from '../assets/img/logos/LogoIpsBlue_Mesa de trabajo 1.png'
import { navigation } from '../utils/navBarRoutes.routes'
import { useAuth } from '../context/AuthContext'
/**
 * This function takes a list of classes and joins them together in one
 * @param  {...any} classes 
 * @returns a single class
 */
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


/**
 * This component represents the Navegation Bar that is displayed on top of the screen and its fixed.
 * @returns {Component} Navbar
 */
const NavBar = () => {
    const { user, isAuthenticated, logoutContext } = useAuth()
    return (

        <Disclosure as="nav" className="bg-white shadow-customNav fixed top-0 left-0 right-0 z-10">

            {({ open }) => (
                <>
                    <div className="w-full px-2 sm:px-6 lg:px-8">
                        <div className="relative px-10 flex h-16 items-center justify-between xl:px-20">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="absolute -inset-0.5" />
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            {/* Logo section */}
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex flex-shrink-0 items-center">
                                    <a href="/">
                                        <img
                                            className="h-8 w-auto"
                                            src={LOGO_BLUE_IPS}
                                            alt="Salud PRO - IPS"
                                        />
                                    </a>

                                </div>
                            </div>

                            {/* Items section */}
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 ">
                                <div className="hidden sm:ml-36 sm:block">
                                    <div className="flex space-x-6 items-center">
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className={classNames(
                                                    item.current ? ' text-black relative' : ' text-black relative hover:after:content-[""] hover:after:bg-black hover:after:h-[1px] hover:after:w-[46%] hover:after:block hover:after:absolute hover:after:pointer-events-none hover:after:animate-slide-in-left hover:after:left-1/2 hover:after:bottom-2 hover:after:animate-duration-250 ',
                                                    ' relative rounded-md px-3 py-2 text-sm font-medium', ' relative hover:before:content-[""] hover:before:bg-black hover:before:h-[1px] hover:before:w-[46%] hover:before:block hover:before:absolute hover:before:pointer-events-none hover:before:animate-slide-in-right hover:before:right-1/2 hover:before:bottom-2 hover:before:animate-duration-250 ',
                                                )}
                                                aria-current={item.current ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                                {/* Profile dropdown */}
                                <Menu as="div" className="relative ml-8">
                                    <div>
                                        <Menu.Button className="relative flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2">
                                            <span className="absolute -inset-1.5" />
                                            <span className="sr-only bg-white">Open user menu</span>
                                            <img
                                                className="h-8 w-8 rounded-full"
                                                src={USER_IMAGE}
                                                alt=""
                                            />
                                        </Menu.Button>
                                    </div>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            {isAuthenticated ? <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-black')}
                                                    >
                                                        {user.nameUser}
                                                    </a>
                                                )}
                                            </Menu.Item> : ''}
                                            {isAuthenticated ? <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        onClick={(event) => logoutContext(event)}
                                                        href='/'
                                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-black')}
                                                    >
                                                        Log out
                                                    </a>
                                                )}
                                            </Menu.Item> : <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href='/login'
                                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-black')}
                                                    >
                                                        Log in
                                                    </a>
                                                )}
                                            </Menu.Item>}

                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            </div>
                        </div>
                    </div>
                    {/* Items on responsive mode */}
                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        item.current ? 'bg-gray-900 text-black' : 'text-black hover:bg-gray-700 hover:text-white',
                                        'block rounded-md px-3 py-2 text-base font-medium'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}
export default NavBar