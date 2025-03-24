-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3307
-- Generation Time: Mar 24, 2025 at 11:09 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ecommerce`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin_users`
--

CREATE TABLE `admin_users` (
  `admin_id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` enum('Manager','Staff','Owner') DEFAULT 'Staff',
  `created_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `cart_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `category_id` int(11) NOT NULL,
  `category_name` varchar(100) NOT NULL,
  `description` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`category_id`, `category_name`, `description`, `created_at`) VALUES
(1, 'Accessories', 'Computer and smartphone accessories', '2025-03-18 00:47:58'),
(2, 'Keyboards', 'Mechanical and membrane keyboards', '2025-03-18 00:47:58'),
(3, 'Audio', 'Headphones, speakers, and audio accessories', '2025-03-18 00:47:58'),
(5, 'Hubs & Adapters', 'USB hubs, docks, and adapters', '2025-03-18 00:47:58'),
(7, 'Storage Devices', 'External and internal storage devices', '2025-03-18 00:47:58'),
(9, 'Wired & Wireless Mice', 'computer mice, both wired and wireless.', '2025-03-18 00:47:58'),
(10, 'Cooling Pads', 'Cooling solutions for laptops and PCs', '2025-03-18 00:47:58'),
(11, 'Textbooks', 'Textbooks for all classes.', '2025-03-19 15:45:41'),
(12, 'Study guides', 'Study guides for any type of test you may take. ', '2025-03-19 15:45:41');

-- --------------------------------------------------------

--
-- Table structure for table `coupons`
--

CREATE TABLE `coupons` (
  `coupon_id` int(11) NOT NULL,
  `code` varchar(50) NOT NULL,
  `discount_percentage` decimal(5,2) DEFAULT NULL,
  `valid_from` timestamp NULL DEFAULT current_timestamp(),
  `valid_until` timestamp NULL DEFAULT NULL,
  `active` tinyint(1) DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `customer_support`
--

CREATE TABLE `customer_support` (
  `ticket_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `subject` varchar(255) NOT NULL,
  `message` text NOT NULL,
  `status` enum('Open','In Progress','Resolved','Closed') DEFAULT 'Open',
  `created_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `discounts`
--

CREATE TABLE `discounts` (
  `discount_id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `discount_percentage` decimal(5,2) DEFAULT NULL,
  `start_date` timestamp NULL DEFAULT current_timestamp(),
  `end_date` timestamp NULL DEFAULT NULL,
  `active` tinyint(1) DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `inventory`
--

CREATE TABLE `inventory` (
  `inventory_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `last_updated` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE `login` (
  `login_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `login_time` timestamp NULL DEFAULT current_timestamp(),
  `ip_address` varchar(45) DEFAULT NULL,
  `user_agent` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `order_id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `product_id` int(11) NOT NULL,
  `total_price` decimal(10,2) NOT NULL,
  `order_status` enum('pending','shipped','delivered','cancelled') DEFAULT 'pending',
  `order_date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`order_id`, `user_id`, `product_id`, `total_price`, `order_status`, `order_date`) VALUES
(2, 1, 31, 49.98, 'pending', '2025-03-18 01:02:31'),
(3, 2, 32, 29.99, 'shipped', '2025-03-19 16:13:41'),
(4, 3, 35, 19.99, 'pending', '2025-03-19 16:13:41'),
(5, 4, 41, 99.99, 'delivered', '2025-03-19 16:13:41'),
(6, 5, 50, 14.99, 'cancelled', '2025-03-19 16:13:41');

-- --------------------------------------------------------

--
-- Table structure for table `payments`
--

CREATE TABLE `payments` (
  `payment_id` int(11) NOT NULL,
  `order_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `amount` decimal(10,2) NOT NULL,
  `payment_method` enum('credit_card','paypal','bank_transfer','cash_on_delivery') NOT NULL,
  `payment_status` enum('pending','completed','failed') DEFAULT 'pending',
  `payment_date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `payments`
--

INSERT INTO `payments` (`payment_id`, `order_id`, `user_id`, `amount`, `payment_method`, `payment_status`, `payment_date`) VALUES
(1, 2, 1, 49.98, '', 'completed', '2025-03-19 16:13:29'),
(2, 2, 1, 49.98, '', 'completed', '2025-03-19 16:13:49'),
(3, 3, 2, 29.99, 'paypal', 'completed', '2025-03-19 16:13:49'),
(4, 4, 3, 19.99, '', 'pending', '2025-03-19 16:13:49'),
(5, 5, 4, 99.99, '', 'completed', '2025-03-19 16:13:49'),
(6, 6, 5, 14.99, '', 'failed', '2025-03-19 16:13:49');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `product_id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `description` text DEFAULT NULL,
  `price` decimal(10,2) NOT NULL,
  `stock_quantity` int(11) NOT NULL,
  `category_id` int(11) DEFAULT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`product_id`, `name`, `description`, `price`, `stock_quantity`, `category_id`, `image_url`, `created_at`) VALUES
(31, 'Wireless Mouse', 'Ergonomic wireless mouse with USB receiver', 24.99, 100, 9, 'mouse.jpg', '2025-03-18 00:52:32'),
(32, 'Logitech Keyboard', 'Logitech keyboard with back lighting', 59.99, 50, 2, 'keyboard.jpg', '2025-03-18 00:52:32'),
(33, 'Noise Cancelling Headphones', 'Bluetooth headphones with active noise cancellation', 129.99, 30, 3, 'headphones.jpg', '2025-03-18 00:52:32'),
(34, 'Smartphone Stand', 'Adjustable aluminum stand for smartphones and tablets', 19.99, 75, 1, 'stand.jpg', '2025-03-18 00:52:32'),
(35, 'USB-C Hub', 'Multi-port USB-C hub with HDMI, USB, and SD card reader', 39.99, 40, 5, 'usb_hub.jpg', '2025-03-18 00:52:32'),
(37, 'Portable SSD', '1TB USB-C external solid-state drive', 129.99, 60, 7, 'ssd.jpg', '2025-03-18 00:52:32'),
(38, 'Wireless Earbuds', 'True wireless earbuds with noise cancellation', 89.99, 90, 3, 'earbuds.jpg', '2025-03-18 00:52:32'),
(39, 'Mechanical Gaming Mouse', 'High-DPI gaming mouse with customizable RGB lighting', 49.99, 55, 9, 'gaming_mouse.jpg', '2025-03-18 00:52:32'),
(40, 'Laptop Cooling Pad', 'Cooling pad with dual fans for laptops up to 17 inches', 34.99, 80, 10, 'cooling_pad.jpg', '2025-03-18 00:52:32'),
(41, 'Computer Networking: Principles, Protocols, and Practice', 'Comprehensive guide to modern networking protocols and practices.', 79.99, 25, 11, 'networking_textbook.jpg', '2025-03-19 15:49:04'),
(42, 'Introduction to Algorithms', 'The standard textbook for learning algorithms, covering fundamental data structures and problem-solving techniques.', 89.99, 30, 11, 'algorithms_textbook.jpg', '2025-03-19 15:49:04'),
(43, 'Operating System Concepts', 'A detailed textbook covering the architecture, design, and functionality of modern operating systems.', 69.99, 20, 11, 'os_concepts.jpg', '2025-03-19 15:49:04'),
(44, 'Database Management Systems', 'An essential textbook on database theory, SQL, and modern DBMS technologies.', 74.99, 35, 11, 'dbms_textbook.jpg', '2025-03-19 15:49:04'),
(45, 'Cybersecurity Essentials', 'A textbook covering modern cybersecurity threats, protection strategies, and ethical hacking.', 84.99, 15, 11, 'cybersecurity_textbook.jpg', '2025-03-19 15:49:04'),
(46, 'CompTIA Security+ Study Guide', 'Comprehensive study guide for the CompTIA Security+ SY0-601 certification exam.', 49.99, 40, 12, 'securityplus_studyguide.jpg', '2025-03-19 15:49:04'),
(47, 'AWS Certified Solutions Architect Study Guide', 'An in-depth study guide for preparing for the AWS Solutions Architect Associate exam.', 59.99, 20, 12, 'aws_architect_studyguide.jpg', '2025-03-19 15:49:04'),
(48, 'Python Crash Course', 'A hands-on, project-based guide to learning Python programming for beginners.', 44.99, 50, 12, 'python_crash_course.jpg', '2025-03-19 15:49:04'),
(49, 'CCNA Certification Guide', 'A complete study guide for Cisco’s CCNA networking certification.', 54.99, 25, 12, 'ccna_studyguide.jpg', '2025-03-19 15:49:04'),
(50, 'Certified Ethical Hacker (CEH) Exam Guide', 'Study guide for the CEH exam covering penetration testing and ethical hacking techniques.', 64.99, 18, 12, 'ceh_studyguide.jpg', '2025-03-19 15:49:04'),
(51, 'SanDisk Ultra 128GB USB 3.0 Flash Drive', 'High-speed USB 3.0 flash drive with read speeds up to 100MB/s.', 24.99, 50, 7, 'sandisk_128gb_usb.jpg', '2025-03-19 15:51:53'),
(52, 'Samsung BAR Plus 256GB USB 3.1 Flash Drive', 'Durable and fast USB 3.1 drive with up to 300MB/s read speed.', 39.99, 40, 7, 'samsung_256gb_usb.jpg', '2025-03-19 15:51:53'),
(53, 'Kingston DataTraveler Exodia 64GB USB 3.2', 'Affordable and reliable USB 3.2 flash drive with a protective cap.', 14.99, 60, 7, 'kingston_64gb_usb.jpg', '2025-03-19 15:51:53'),
(54, 'SanDisk Extreme 128GB SDXC UHS-I Card', 'High-performance SD card for cameras and video recording with speeds up to 150MB/s.', 34.99, 30, 7, 'sandisk_128gb_sd.jpg', '2025-03-19 15:51:53'),
(55, 'Samsung EVO Select 256GB microSDXC', 'High-speed microSDXC card with up to 130MB/s read speed, ideal for smartphones and cameras.', 44.99, 35, 7, 'samsung_256gb_microsd.jpg', '2025-03-19 15:51:53'),
(56, 'USB Flash Drive 64GB', 'Reliable and high-speed USB 3.0 flash drive for storing documents and projects.', 14.99, 100, 1, 'usb_flash_64gb.jpg', '2025-03-19 16:06:14'),
(57, 'Laptop Sleeve 15.6\"', 'Protective neoprene laptop sleeve for 15.6-inch laptops.', 19.99, 50, 1, 'laptop_sleeve.jpg', '2025-03-19 16:06:14'),
(58, 'Adjustable Laptop Stand', 'Ergonomic aluminum laptop stand for better posture and cooling.', 29.99, 30, 1, 'laptop_stand.jpg', '2025-03-19 16:06:14'),
(59, 'Wireless Presenter Remote', 'Presentation remote with laser pointer for PowerPoint slides.', 24.99, 20, 1, 'presenter_remote.jpg', '2025-03-19 16:06:14'),
(60, 'Notebook Cooling Fan', 'USB-powered cooling fan attachment for notebooks and textbooks.', 12.99, 40, 1, 'notebook_cooling_fan.jpg', '2025-03-19 16:06:14'),
(61, 'Noise-Isolating Earbuds', 'Lightweight wired earbuds with built-in microphone for online classes.', 19.99, 80, 3, 'noise_isolating_earbuds.jpg', '2025-03-19 16:06:14'),
(62, 'Over-Ear Wired Headphones', 'Comfortable over-ear headphones with clear audio and noise isolation.', 29.99, 50, 3, 'over_ear_headphones.jpg', '2025-03-19 16:06:14'),
(63, 'USB Conference Microphone', 'High-quality USB microphone for online meetings and lectures.', 49.99, 25, 3, 'usb_microphone.jpg', '2025-03-19 16:06:14'),
(64, 'Wireless Classroom Speaker', 'Portable Bluetooth speaker for classroom presentations.', 69.99, 20, 3, 'classroom_speaker.jpg', '2025-03-19 16:06:14'),
(65, 'Headset with Boom Mic', 'Adjustable headset with noise-canceling boom microphone for study sessions.', 39.99, 30, 3, 'headset_boom_mic.jpg', '2025-03-19 16:06:14'),
(66, 'Wired Optical Mouse', 'Basic wired optical mouse for school and office use.', 9.99, 100, 9, 'wired_optical_mouse.jpg', '2025-03-19 16:06:14'),
(67, 'Wireless Mouse', 'Ergonomic wireless mouse with silent clicking.', 19.99, 80, 9, 'wireless_mouse.jpg', '2025-03-19 16:06:14'),
(68, 'Rechargeable Bluetooth Mouse', 'Slim Bluetooth mouse with rechargeable battery for laptops.', 29.99, 50, 9, 'bluetooth_mouse.jpg', '2025-03-19 16:06:14'),
(69, 'Ambidextrous USB Mouse', 'Symmetric design USB mouse for both left- and right-handed users.', 14.99, 40, 9, 'ambidextrous_mouse.jpg', '2025-03-19 16:06:14'),
(70, 'Ergonomic Vertical Mouse', 'Vertical ergonomic mouse to reduce wrist strain during long study hours.', 24.99, 30, 9, 'vertical_mouse.jpg', '2025-03-19 16:06:14'),
(71, 'Basic Laptop Cooling Pad', 'USB-powered laptop cooling pad with silent fan.', 19.99, 60, 10, 'basic_cooling_pad.jpg', '2025-03-19 16:06:14'),
(72, 'Adjustable Cooling Stand', 'Laptop cooling stand with adjustable height and dual fans.', 29.99, 40, 10, 'adjustable_cooling_stand.jpg', '2025-03-19 16:06:14'),
(73, 'Ultra-Slim Cooling Pad', 'Lightweight and portable cooling pad for students on the go.', 24.99, 50, 10, 'ultra_slim_cooling_pad.jpg', '2025-03-19 16:06:14'),
(74, 'Cooling Pad with LED Fans', 'Advanced cooling pad with RGB LED fans for stylish design.', 34.99, 30, 10, 'led_cooling_pad.jpg', '2025-03-19 16:06:14'),
(75, 'Silent Cooling Fan Base', 'Low-noise cooling fan base for better heat dissipation.', 22.99, 45, 10, 'silent_cooling_base.jpg', '2025-03-19 16:06:14'),
(76, 'Standard Wired Keyboard', 'Full-size wired keyboard with numeric keypad.', 19.99, 100, 2, 'wired_keyboard.jpg', '2025-03-19 16:06:14'),
(77, 'Compact Wireless Keyboard', 'Slim wireless keyboard with long battery life.', 29.99, 80, 2, 'compact_wireless_keyboard.jpg', '2025-03-19 16:06:14'),
(78, 'Ergonomic Split Keyboard', 'Split design ergonomic keyboard for comfortable typing.', 49.99, 40, 2, 'ergonomic_keyboard.jpg', '2025-03-19 16:06:14'),
(79, 'USB Keyboard with Silent Keys', 'Quiet USB keyboard with soft-touch keys for studying.', 24.99, 60, 2, 'silent_usb_keyboard.jpg', '2025-03-19 16:06:14'),
(80, 'Foldable Bluetooth Keyboard', 'Compact foldable keyboard for tablets and laptops.', 39.99, 30, 2, 'foldable_keyboard.jpg', '2025-03-19 16:06:14');

-- --------------------------------------------------------

--
-- Table structure for table `reviews`
--

CREATE TABLE `reviews` (
  `review_id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `product_id` int(11) DEFAULT NULL,
  `rating` int(11) DEFAULT NULL CHECK (`rating` between 1 and 5),
  `review_text` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `reviews`
--

INSERT INTO `reviews` (`review_id`, `user_id`, `product_id`, `rating`, `review_text`, `created_at`) VALUES
(11, 2, 31, 5, 'Great wireless mouse! Works perfectly for my school assignments.', '2025-03-19 16:09:46'),
(12, 3, 32, 4, 'The keyboard is good, but the keys are a bit stiff at first.', '2025-03-19 16:09:46'),
(13, 4, 35, 5, 'Very useful USB-C hub, now I can connect multiple devices easily.', '2025-03-19 16:09:46'),
(14, 5, 41, 5, 'Networking textbook is detailed and easy to follow.', '2025-03-19 16:09:46'),
(15, 6, 50, 4, 'The CEH study guide is great for certification prep.', '2025-03-19 16:09:46');

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `session_id` varchar(255) NOT NULL,
  `user_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `expires_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `shipping`
--

CREATE TABLE `shipping` (
  `shipping_id` int(11) NOT NULL,
  `order_id` int(11) DEFAULT NULL,
  `shipping_address` text NOT NULL,
  `tracking_number` varchar(50) DEFAULT NULL,
  `shipping_status` enum('pending','shipped','delivered') DEFAULT 'pending',
  `estimated_delivery` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `address` text DEFAULT NULL,
  `user_type` enum('customer','admin') DEFAULT 'customer',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `first_name`, `last_name`, `email`, `password`, `phone`, `address`, `user_type`, `created_at`) VALUES
(1, 'John', 'Doe', 'johndoe@example.com', 'securepassword', '1234567890', '123 Main St, NY', 'customer', '2025-03-18 01:02:24'),
(2, 'Alice', 'Johnson', 'alice@example.com', 'password123', '1234567890', '123 School Rd, NY', '', '2025-03-19 16:09:23'),
(3, 'Bob', 'Smith', 'bob@example.com', 'securepass', '9876543210', '456 College Ave, CA', '', '2025-03-19 16:09:23'),
(4, 'Charlie', 'Brown', 'charlie@example.com', 'mypassword', '5555555555', '789 Tech St, TX', '', '2025-03-19 16:09:23'),
(5, 'David', 'Williams', 'david@example.com', 'password456', '4444444444', '321 Library Ln, FL', 'admin', '2025-03-19 16:09:23'),
(6, 'Emma', 'Davis', 'emma@example.com', 'pass1234', '3333333333', '654 Bookstore Dr, IL', '', '2025-03-19 16:09:23');

-- --------------------------------------------------------

--
-- Table structure for table `wishlist`
--

CREATE TABLE `wishlist` (
  `wishlist_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin_users`
--
ALTER TABLE `admin_users`
  ADD PRIMARY KEY (`admin_id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`cart_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`category_id`),
  ADD UNIQUE KEY `category_name` (`category_name`);

--
-- Indexes for table `coupons`
--
ALTER TABLE `coupons`
  ADD PRIMARY KEY (`coupon_id`),
  ADD UNIQUE KEY `code` (`code`);

--
-- Indexes for table `customer_support`
--
ALTER TABLE `customer_support`
  ADD PRIMARY KEY (`ticket_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `discounts`
--
ALTER TABLE `discounts`
  ADD PRIMARY KEY (`discount_id`);

--
-- Indexes for table `inventory`
--
ALTER TABLE `inventory`
  ADD PRIMARY KEY (`inventory_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`login_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`order_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `payments`
--
ALTER TABLE `payments`
  ADD PRIMARY KEY (`payment_id`),
  ADD KEY `order_id` (`order_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`product_id`),
  ADD KEY `category_id` (`category_id`);

--
-- Indexes for table `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`review_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`session_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `shipping`
--
ALTER TABLE `shipping`
  ADD PRIMARY KEY (`shipping_id`),
  ADD UNIQUE KEY `tracking_number` (`tracking_number`),
  ADD KEY `order_id` (`order_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `wishlist`
--
ALTER TABLE `wishlist`
  ADD PRIMARY KEY (`wishlist_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `product_id` (`product_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin_users`
--
ALTER TABLE `admin_users`
  MODIFY `admin_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `cart`
--
ALTER TABLE `cart`
  MODIFY `cart_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `category_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `coupons`
--
ALTER TABLE `coupons`
  MODIFY `coupon_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `customer_support`
--
ALTER TABLE `customer_support`
  MODIFY `ticket_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `discounts`
--
ALTER TABLE `discounts`
  MODIFY `discount_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `inventory`
--
ALTER TABLE `inventory`
  MODIFY `inventory_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `login`
--
ALTER TABLE `login`
  MODIFY `login_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `order_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `payments`
--
ALTER TABLE `payments`
  MODIFY `payment_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=81;

--
-- AUTO_INCREMENT for table `reviews`
--
ALTER TABLE `reviews`
  MODIFY `review_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `shipping`
--
ALTER TABLE `shipping`
  MODIFY `shipping_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `wishlist`
--
ALTER TABLE `wishlist`
  MODIFY `wishlist_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE,
  ADD CONSTRAINT `orders_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`) ON DELETE CASCADE;

--
-- Constraints for table `payments`
--
ALTER TABLE `payments`
  ADD CONSTRAINT `payments_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`order_id`) ON DELETE CASCADE,
  ADD CONSTRAINT `payments_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE;

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`category_id`) ON DELETE SET NULL;

--
-- Constraints for table `reviews`
--
ALTER TABLE `reviews`
  ADD CONSTRAINT `reviews_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE,
  ADD CONSTRAINT `reviews_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`) ON DELETE CASCADE;

--
-- Constraints for table `shipping`
--
ALTER TABLE `shipping`
  ADD CONSTRAINT `shipping_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`order_id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
