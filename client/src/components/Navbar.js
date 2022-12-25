import { Fragment, useEffect, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLogout } from "../redux/slice/userSlice";
import { useNavigate } from "react-router-dom";
import { searchAllUsers, getAllUsers } from "../redux/slice/userSlice";

import { useParams } from "react-router-dom";
import "./Navbar.css";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Example() {
    const { user, allusers } = useSelector((state) => ({ ...state.user }));
    const { id } = useParams();
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    function handleLogout() {
        dispatch(setLogout());
        window.location.reload();
        navigate("/login");
    }
    function handleChange(e) {
        setSearchTerm(e.target.value);
    }
    function searchSuggestions() {
        dispatch(getAllUsers());
    }
    function onSearch(abc) {
        console.log(abc);
        setSearchTerm(abc);
    }

    useEffect(() => {
        searchSuggestions();
    }, []);

    return (
        <Disclosure as="nav" className="navpurple">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
                        <div className="flex h-16 justify-between">
                            <div className="flex px-2 lg:px-0">
                                <div className="flex flex-shrink-0 items-center">
                                    <img
                                        className="block h-8 w-auto lg:hidden"
                                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Android_O_Preview_Logo.png/1024px-Android_O_Preview_Logo.png"
                                        alt="Your Company"
                                    />
                                    <img
                                        className="hidden h-8 w-auto lg:block mr-10"
                                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Android_O_Preview_Logo.png/1024px-Android_O_Preview_Logo.png"
                                        alt="Your Company"
                                    />
                                </div>
                                <div className="hidden lg:ml-6 lg:flex lg:space-x-8">
                                    {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                                    <Link
                                        to="/"
                                        className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium  hover:border-gray-300 hover:text-[#9570DD] cursor-pointer"
                                    >
                                        <ul>
                                            <li>Home</li>
                                        </ul>{" "}
                                    </Link>

                                    <li className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium  hover:border-gray-300 hover:text-[#9570DD] cursor-pointer">
                                        Team
                                    </li>
                                    <Link
                                        to="/register"
                                        className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium  hover:border-gray-300 hover:text-[#9570DD] cursor-pointer"
                                    >
                                        <ul>
                                            <li>Register</li>{" "}
                                        </ul>{" "}
                                    </Link>

                                    <Link
                                        to="/login"
                                        className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium  hover:border-gray-300 hover:text-[#9570DD] cursor-pointer"
                                    >
                                        <ul>
                                            <li>Login</li>{" "}
                                        </ul>
                                    </Link>
                                </div>
                            </div>
                            <div className="flex flex-1 items-center justify-center px-2 lg:ml-6 lg:justify-end">
                                <div className="w-full max-w-lg lg:max-w-xs">
                                    <label htmlFor="search" className="sr-only">
                                        Search
                                    </label>
                                    <div className="relative">
                                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 cur"></div>

                                        <input
                                            id="search"
                                            name="search"
                                            value={searchTerm}
                                            onChange={handleChange}
                                            className="block w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-3 leading-5 placeholder-gray-500 focus:border-indigo-500 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm text-black relative"
                                            placeholder="Search"
                                            type="search"
                                        />
                                        <div className="absolute w-full glass ">
                                            {allusers

                                                .filter((item) => {
                                                    const fullname =
                                                        item.username.toLowerCase();
                                                    const searchValue =
                                                        searchTerm.toLowerCase();
                                                    return (
                                                        searchValue &&
                                                        fullname.startsWith(
                                                            searchValue
                                                        ) &&
                                                        fullname !== searchValue
                                                    );
                                                })
                                                .map((item) => (
                                                    <div className="p-2 opacity-75 hover:bg-sky-700 rounded-sm">
                                                        <Link
                                                            reloadDocument
                                                            to={`/profile/${item._id}`}
                                                        >
                                                            <h3
                                                                onClick={() =>
                                                                    onSearch(
                                                                        item.username
                                                                    )
                                                                }
                                                            >
                                                                {item.username}
                                                            </h3>
                                                        </Link>
                                                    </div>
                                                ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center lg:hidden">
                                {/* Mobile menu button */}
                                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                    <span className="sr-only">
                                        Open main menu
                                    </span>
                                    {open ? (
                                        <XMarkIcon
                                            className="block h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    ) : (
                                        <Bars3Icon
                                            className="block h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="hidden lg:ml-4 lg:flex lg:items-center">
                                {/* Profile dropdown */}
                                <Menu
                                    as="div"
                                    className="relative ml-4 flex-shrink-0"
                                >
                                    <div>
                                        <div className="flex">
                                            <Menu.Button className="flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mr-3">
                                                <span className="sr-only">
                                                    Open user menu
                                                </span>
                                                {user ? (
                                                    <img
                                                        className="h-8 w-8 rounded-full cover"
                                                        src={user?.img}
                                                        alt=""
                                                    />
                                                ) : (
                                                    <></>
                                                )}
                                            </Menu.Button>
                                            {user && (
                                                <Link
                                                    reloadDocument
                                                    to={`/profile/${user._id}`}
                                                >
                                                    {" "}
                                                    <h3 className="align-middle mt-1">
                                                        {user.username}{" "}
                                                    </h3>{" "}
                                                </Link>
                                            )}{" "}
                                        </div>
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
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <Link
                                                        reloadDocument
                                                        to={`/profile/${user._id}`}
                                                    >
                                                        {" "}
                                                        <h3
                                                            className={classNames(
                                                                active
                                                                    ? "bg-gray-100"
                                                                    : "",
                                                                "block px-4 py-2 text-sm text-gray-700"
                                                            )}
                                                        >
                                                            Your Profile
                                                        </h3>
                                                    </Link>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(
                                                            active
                                                                ? "bg-gray-100"
                                                                : "",
                                                            "block px-4 py-2 text-sm text-gray-700"
                                                        )}
                                                    >
                                                        Settings
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <h3
                                                        onClick={handleLogout}
                                                        className={classNames(
                                                            active
                                                                ? "bg-gray-100"
                                                                : "",
                                                            "block px-4 py-2 text-sm text-gray-700"
                                                        )}
                                                    >
                                                        Sign out
                                                    </h3>
                                                )}
                                            </Menu.Item>
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="lg:hidden">
                        <div className="space-y-1 pt-2 pb-3">
                            {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800" */}
                            <Disclosure.Button
                                as="a"
                                href="#"
                                className="block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700 hover:text-[#9570DD] cursor-pointer normaltext"
                            >
                                Home
                            </Disclosure.Button>
                            <Disclosure.Button
                                as="a"
                                href="#"
                                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium normaltext  hover:bg-[#693699] hover:text-[#9570DD] cursor-pointer"
                            >
                                Team
                            </Disclosure.Button>
                            <Disclosure.Button
                                as="a"
                                href="#"
                                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium normaltext  hover:bg-[#693699] hover:text-[#9570DD] cursor-pointer"
                            >
                                Projects
                            </Disclosure.Button>
                            <Disclosure.Button
                                as="a"
                                href="#"
                                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium normaltext  hover:bg-[#693699] hover:text-[#9570DD] cursor-pointer"
                            >
                                Calendar
                            </Disclosure.Button>
                        </div>
                        <div className="border-t border-gray-200 pt-4 pb-3">
                            <div className="flex items-center px-4">
                                <div className="flex-shrink-0">
                                    <img
                                        className="h-10 w-10 rounded-full"
                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                        alt=""
                                    />
                                </div>
                                <div className="ml-3">
                                    <div className="text-base font-medium text-gray-800">
                                        Tom Cook
                                    </div>
                                    <div className="text-sm font-medium text-gray-500">
                                        tom@example.com
                                    </div>
                                </div>
                                <button
                                    type="button"
                                    className="ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                    <span className="sr-only">
                                        View notifications
                                    </span>
                                    <BellIcon
                                        className="h-6 w-6"
                                        aria-hidden="true"
                                    />
                                </button>
                            </div>
                            <div className="mt-3 space-y-1">
                                <Disclosure.Button
                                    as="a"
                                    href="#"
                                    className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:bg-[#693699] hover:text-[#9570DD] cursor-pointer"
                                >
                                    Your Profile
                                </Disclosure.Button>
                                <Disclosure.Button
                                    as="a"
                                    href="#"
                                    className="block px-4 py-2 text-base font-medium hover:bg-[#693699] hover:text-[#9570DD] cursor-pointer"
                                >
                                    Settings
                                </Disclosure.Button>
                                <Disclosure.Button
                                    as="a"
                                    href="#"
                                    className="block px-4 py-2 text-base font-medium hover:bg-[#693699] hover:text-[#9570DD] cursor-pointer"
                                >
                                    Sign out
                                </Disclosure.Button>
                            </div>
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
}
