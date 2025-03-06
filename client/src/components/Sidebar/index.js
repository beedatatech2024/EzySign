import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { FaHourglass } from "react-icons/fa6";
import { FaUpload } from "react-icons/fa";
import { TiGroup } from "react-icons/ti";
import { IoSettingsOutline } from "react-icons/io5";
import { LuLogOut } from "react-icons/lu";


import "./index.css";

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <h2 className="sidebar-title">EzySign</h2>
            <ul className="sidebar-menu">
                <li className="sidebar-item">
                    <HiOutlineClipboardDocumentList className="sidebar-icon"/>
                    <span className="sidebar-text">My Documents</span>
                </li>
                <li className="sidebar-item">
                    <FaHourglass className="sidebar-icon"/>
                    <span className="sidebar-text">Pending Signatures</span>
                </li>
                <li className="sidebar-item">
                <FaUpload className="sidebar-icon"/>
                    <span className="sidebar-text">Upload Forms</span>
                </li>
                <li className="sidebar-item">
                <TiGroup className="sidebar-icon"/>
                    <span className="sidebar-text">Teams</span>
                </li>
                <li className="sidebar-item">
                <IoSettingsOutline className="sidebar-icon"/>
                    <span className="sidebar-text">Settings</span>
                </li>
                <li className="sidebar-item">
                <LuLogOut className="sidebar-icon"/>
                    <span className="sidebar-text">Logout</span>
                </li>
            </ul>
        </aside>
    );
};

export default Sidebar;
