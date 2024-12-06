import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";

const Header = () => {
  const items = [
    {
      label: <Link to="/become-exhibitor">Become Exhibitor</Link>,
      key: "0",
    },
    {
      label: <Link to="/exhibitors">Exhibitor Directory</Link>,
      key: "1",
    },
   
  ];

  const eventItems = [
    {
      label: <Link to="/agenda">Agenda</Link>,
      key: "2",
    },
    {
      label: <Link to="/media">Media</Link>,
      key: "3",
    },
    {
      label: <Link to="/floor-plan">Floor Plan</Link>,
      key: "4",
    },
    {
      label: <Link to="/attendees-from-industries">Industries</Link>,
      key: "5",
    },
   
  ];
  return (
    <header className="main-header">
      <div className="header-container">
        {/* Logo Section */}
        {/* <div className="logo-section">
          <img src="tech-expo-logo.png" alt="Tech Expo Logo" className="logo" />
          <span className="presented-by">
            Presented by <img src="gtpl-logo.png" alt="GTPL Logo" className="gtpl-logo" />
          </span>
        </div> */}

        {/* Navigation */}
        <nav className="navigation">
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about-us">About Us</Link>
            </li>
            <li>
              <Link to="/speakers">Speakers</Link>
            </li>
            <Dropdown
              menu={{
                items,
              }}
              trigger={["click"]}
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  Exhibitor
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>

            <Dropdown
              menu={{
                items: eventItems, // Pass `eventItems` as the value of `items`
              }}
              trigger={["click"]}
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  About Event
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>

            <li>
              <Link to="/contactus">Contact Us</Link>
            </li>
          </ul>
          {/* <a href="#" className="cta-button">Book Your Tickets</a> */}
        </nav>
      </div>
    </header>
  );
};

export default Header;
