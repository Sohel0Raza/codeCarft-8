import React from 'react';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-secondary">
                <div className="flex-1">
                    <a className="normal-case text-xl md:text-2xl font-bold mx-5 md:mx-16 text-white">CODE CRAFT</a>
                </div>
                <div className="flex-none gap-2 mr-10">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-14 rounded-full text-center">
                                <img src="/public/flat-business-man-user-profile-avatar-icon-vector-4333097.jpg" />
                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;