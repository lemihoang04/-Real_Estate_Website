-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 15, 2025 at 03:55 AM
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
-- Database: `real_estate`
--

-- --------------------------------------------------------

--
-- Table structure for table `cache`
--

CREATE TABLE `cache` (
  `key` varchar(255) NOT NULL,
  `value` mediumtext NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cache_locks`
--

CREATE TABLE `cache_locks` (
  `key` varchar(255) NOT NULL,
  `owner` varchar(255) NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

CREATE TABLE `jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `queue` varchar(255) NOT NULL,
  `payload` longtext NOT NULL,
  `attempts` tinyint(3) UNSIGNED NOT NULL,
  `reserved_at` int(10) UNSIGNED DEFAULT NULL,
  `available_at` int(10) UNSIGNED NOT NULL,
  `created_at` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `job_batches`
--

CREATE TABLE `job_batches` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `total_jobs` int(11) NOT NULL,
  `pending_jobs` int(11) NOT NULL,
  `failed_jobs` int(11) NOT NULL,
  `failed_job_ids` longtext NOT NULL,
  `options` mediumtext DEFAULT NULL,
  `cancelled_at` int(11) DEFAULT NULL,
  `created_at` int(11) NOT NULL,
  `finished_at` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '0001_01_01_000000_create_users_table', 1),
(2, '0001_01_01_000001_create_cache_table', 1),
(3, '0001_01_01_000002_create_jobs_table', 1),
(4, '2025_08_12_014524_create_personal_access_tokens_table', 1),
(5, '2025_08_12_014619_create_properties_table', 1),
(6, '2025_08_12_014624_create_property_images_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` text NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `expires_at`, `created_at`, `updated_at`) VALUES
(1, 'App\\Models\\User', 1, 'api_token', 'b1c0362ad441d32562cc821e501e1c582ec115a4db1364d980c4842fd755514c', '[\"*\"]', NULL, NULL, '2025-08-11 20:48:52', '2025-08-11 20:48:52'),
(2, 'App\\Models\\User', 1, 'api_token', 'df67e4c2a3f21d9e7c7ad0b7aed1dfba04bcffb5372c10b257881e57203e8a3a', '[\"*\"]', NULL, NULL, '2025-08-11 21:18:54', '2025-08-11 21:18:54'),
(3, 'App\\Models\\User', 1, 'api_token', '3dc38dc23ac5490ea793cc9e8e554f85786fbcccb98439ecb586c7acfea6577b', '[\"*\"]', NULL, NULL, '2025-08-11 21:24:44', '2025-08-11 21:24:44'),
(4, 'App\\Models\\User', 1, 'api_token', '965a860061722f5482312c7b9ae75dac7b4d4e14fcc300f567a845d9c4957169', '[\"*\"]', '2025-08-11 23:26:16', NULL, '2025-08-11 21:33:52', '2025-08-11 23:26:16'),
(5, 'App\\Models\\User', 1, 'api_token', '021bdac4bf2c40f499cb4383d040dfc6ff769f7ec5e4e71a07896d3b5eb93664', '[\"*\"]', '2025-08-14 11:58:53', NULL, '2025-08-11 23:27:32', '2025-08-14 11:58:53'),
(6, 'App\\Models\\User', 1, 'api_token', '3f1f5f047208ec9087945cbf1124773c01910a8506f1e69b4e288ad5c757a2ab', '[\"*\"]', NULL, NULL, '2025-08-12 18:21:36', '2025-08-12 18:21:36'),
(7, 'App\\Models\\User', 1, 'api_token', 'd664108400029a5d6f4591240d500d7ffb1a5d566a3c308f189d5466a6d28eb3', '[\"*\"]', NULL, NULL, '2025-08-13 04:37:05', '2025-08-13 04:37:05'),
(8, 'App\\Models\\User', 1, 'api_token', '7faa98467b9f96240dd4efd64436cf02dfa1a59a82d8138fe74a13d4a42c2cea', '[\"*\"]', NULL, NULL, '2025-08-13 04:37:43', '2025-08-13 04:37:43'),
(9, 'App\\Models\\User', 1, 'api_token', '7f056ef3aff75f9228986c1656f609e0ee9a507da41e84ec9882e30b037f8d42', '[\"*\"]', NULL, NULL, '2025-08-13 04:38:00', '2025-08-13 04:38:00'),
(10, 'App\\Models\\User', 1, 'api_token', '08fbea210760670138a1526ba2d50b92668351ddaf07798fa71bddbf835394ab', '[\"*\"]', NULL, NULL, '2025-08-13 04:45:23', '2025-08-13 04:45:23'),
(11, 'App\\Models\\User', 1, 'api_token', '31cdfbc9e3d70a151a867dfde697274090a1c4d20780da0eefc61d41f17af823', '[\"*\"]', NULL, NULL, '2025-08-13 04:48:48', '2025-08-13 04:48:48'),
(12, 'App\\Models\\User', 1, 'api_token', 'ef57ac0489018ed31ecd8e93ef7fb3d34cc4943a1d72f11e1ab388266abf6c03', '[\"*\"]', NULL, NULL, '2025-08-13 04:50:34', '2025-08-13 04:50:34'),
(13, 'App\\Models\\User', 1, 'api_token', 'f73d7ba2af586ed4bc22eeceb436d5aa98676334cc2d88e46801ce9294ae4836', '[\"*\"]', NULL, NULL, '2025-08-13 04:53:06', '2025-08-13 04:53:06'),
(14, 'App\\Models\\User', 1, 'api_token', '4f0017a323b3c9de89c284b31daa6b3a9fac62767dba4fe841f90110a1d15229', '[\"*\"]', NULL, NULL, '2025-08-13 04:53:46', '2025-08-13 04:53:46'),
(15, 'App\\Models\\User', 1, 'api_token', '70c0c8c514eedf49ceba91b2ded313a8e961460a92c9db5acf22a97660f1e5c4', '[\"*\"]', NULL, NULL, '2025-08-13 04:54:08', '2025-08-13 04:54:08'),
(16, 'App\\Models\\User', 1, 'api_token', 'a2122575dbcd61f859081cb1e0a998f9f6f8c1c9a896914abbb89ae97c717050', '[\"*\"]', NULL, NULL, '2025-08-13 04:59:07', '2025-08-13 04:59:07'),
(17, 'App\\Models\\User', 1, 'api_token', 'dd520f0b7e4993255c65188d18707dcac23602324884ad66766209beb05862d9', '[\"*\"]', NULL, NULL, '2025-08-13 04:59:11', '2025-08-13 04:59:11'),
(18, 'App\\Models\\User', 1, 'api_token', '49b4b037351e9f1d59a2e57e5b56d974bb574ca14197e5c1cac5843db142c26d', '[\"*\"]', NULL, NULL, '2025-08-13 05:03:33', '2025-08-13 05:03:33'),
(19, 'App\\Models\\User', 1, 'api_token', 'db9756485c3d4c8f4155751779f7daf233cc7e2d2ab20ab490b1771893888c37', '[\"*\"]', NULL, NULL, '2025-08-13 05:06:21', '2025-08-13 05:06:21'),
(20, 'App\\Models\\User', 1, 'api_token', 'f786b22cb15d5bcc7b2ba445b3f3bbfa1f5d45659ebf50948f11d2d8e9dc809d', '[\"*\"]', NULL, NULL, '2025-08-13 05:06:32', '2025-08-13 05:06:32'),
(21, 'App\\Models\\User', 1, 'api_token', '0562826e1990f60e4a6ece9d307b2ec974170130844dfffba3ee7b6fb5f59d6a', '[\"*\"]', NULL, NULL, '2025-08-13 05:06:56', '2025-08-13 05:06:56'),
(22, 'App\\Models\\User', 1, 'api_token', '6be05e9651f7c89f5b02e5aebdfe8579124cddfd77ef2dd1eee7e7d2dfa1b388', '[\"*\"]', NULL, NULL, '2025-08-13 05:08:23', '2025-08-13 05:08:23'),
(23, 'App\\Models\\User', 1, 'api_token', '097b2cbc8214681577fba8a6cd055d0c165244f6dacabea66e58e40f91ee6e47', '[\"*\"]', NULL, NULL, '2025-08-13 05:09:47', '2025-08-13 05:09:47'),
(24, 'App\\Models\\User', 1, 'api_token', '8fb7f5eaee14cfcf6bdb9b00147353370e5b4606f3eaf2b0af974fe0a3107e44', '[\"*\"]', NULL, NULL, '2025-08-13 05:10:49', '2025-08-13 05:10:49'),
(25, 'App\\Models\\User', 1, 'api_token', '4696f04fbd1c0ee8af46dc64b8c66a2ed1eaf2069692e76af1bbb664a1a67cbd', '[\"*\"]', NULL, NULL, '2025-08-13 05:12:51', '2025-08-13 05:12:51'),
(26, 'App\\Models\\User', 1, 'api_token', 'b672b90a9a0ecdf394ae14d0f118ee010ddbad8d5dd0f0c2d60a13f23bcbebbf', '[\"*\"]', NULL, NULL, '2025-08-13 05:15:29', '2025-08-13 05:15:29'),
(27, 'App\\Models\\User', 1, 'api_token', 'cfcea19e9c441180f7431974be14e2db416d97445ed53498fa904cbd26ac0045', '[\"*\"]', NULL, NULL, '2025-08-13 05:22:31', '2025-08-13 05:22:31'),
(28, 'App\\Models\\User', 1, 'api_token', '0ede762ccde067ebf622f6c045c1e83a8a8968eb063ab11f72b667f53f36ecb5', '[\"*\"]', NULL, NULL, '2025-08-13 05:24:41', '2025-08-13 05:24:41'),
(29, 'App\\Models\\User', 1, 'api_token', 'c23248f907edde14189b3715170ccac11d7f25a842b3dca8013e42fdd8ce70a6', '[\"*\"]', NULL, NULL, '2025-08-13 05:24:54', '2025-08-13 05:24:54'),
(30, 'App\\Models\\User', 1, 'api_token', '1498dbe9910c0ab3c2bfe861b89b274f3f1a9dd8472c4626b561383ae9c29412', '[\"*\"]', NULL, NULL, '2025-08-13 05:25:50', '2025-08-13 05:25:50'),
(31, 'App\\Models\\User', 1, 'api_token', '969ca9486a2447d2d083d2240cdd20813784fedf348f43792a6fb80aa7f1f04e', '[\"*\"]', NULL, NULL, '2025-08-13 05:26:05', '2025-08-13 05:26:05'),
(32, 'App\\Models\\User', 1, 'api_token', '314abf96324441507904817795acd6c52af78f20b4d4a639bed6b566a67a0f7c', '[\"*\"]', NULL, NULL, '2025-08-13 05:26:07', '2025-08-13 05:26:07'),
(33, 'App\\Models\\User', 1, 'api_token', '09b3c66af589f9d7768a8c317564ecd82df46a075668a199c32134c7f4a72fe5', '[\"*\"]', NULL, NULL, '2025-08-13 05:26:25', '2025-08-13 05:26:25'),
(34, 'App\\Models\\User', 1, 'api_token', 'e185ec08616964edc4835f76c6daf8651d1156a10bdf35ce8fce1525b0accd74', '[\"*\"]', NULL, NULL, '2025-08-13 05:26:49', '2025-08-13 05:26:49'),
(35, 'App\\Models\\User', 1, 'api_token', '87e3cf890390a7bde59fe15577e512972b0d1c65a526fcb92e92967668a92ef2', '[\"*\"]', NULL, NULL, '2025-08-13 05:27:29', '2025-08-13 05:27:29'),
(36, 'App\\Models\\User', 1, 'api_token', '92e1d3e405728968911e777239713555d6599696f4b03c1117b30bac48643e53', '[\"*\"]', NULL, NULL, '2025-08-13 05:27:34', '2025-08-13 05:27:34'),
(37, 'App\\Models\\User', 1, 'api_token', '30e464c09dbab0d0823ac4f3788250bbc43af0f1f71e04b914c5658214190f1a', '[\"*\"]', NULL, NULL, '2025-08-13 05:27:44', '2025-08-13 05:27:44'),
(38, 'App\\Models\\User', 1, 'api_token', '4d7fa9574571144ef5147c4a28cbf39ad186d2db85817d6916761f77e7f02453', '[\"*\"]', NULL, NULL, '2025-08-13 05:27:55', '2025-08-13 05:27:55'),
(39, 'App\\Models\\User', 1, 'api_token', 'bded255a77885daebeebf778487a46eb6b3605adae692f66fe972d26cfc02311', '[\"*\"]', NULL, NULL, '2025-08-13 06:13:30', '2025-08-13 06:13:30'),
(40, 'App\\Models\\User', 1, 'api_token', 'bd1cefff0e16dabc879b26a047aa1c7389bf6c10efb4a56efa859b74cbf6dfee', '[\"*\"]', NULL, NULL, '2025-08-13 06:13:54', '2025-08-13 06:13:54'),
(41, 'App\\Models\\User', 1, 'api_token', '3edd955f5af2ef8c095274a594097bb18388ebcf451b6d1d099895c0d2512e87', '[\"*\"]', NULL, NULL, '2025-08-13 06:14:39', '2025-08-13 06:14:39'),
(42, 'App\\Models\\User', 1, 'api_token', '56a50c3ad2a077288b965abf510d0255d51f91c6394e59f638ad701065019eb2', '[\"*\"]', NULL, NULL, '2025-08-13 06:15:10', '2025-08-13 06:15:10'),
(43, 'App\\Models\\User', 1, 'api_token', 'f1c72c010f6f4596532350d7c27d2bea1d6f788f023975d7dfd271fdc683b631', '[\"*\"]', NULL, NULL, '2025-08-13 06:15:27', '2025-08-13 06:15:27'),
(44, 'App\\Models\\User', 1, 'api_token', 'e9487ed85082222dde38d6a8c0b3daa35e609dfd3f7afb4b51690848a9d8ae67', '[\"*\"]', NULL, NULL, '2025-08-13 06:15:35', '2025-08-13 06:15:35'),
(45, 'App\\Models\\User', 1, 'api_token', '25fcb00df37b3ae1f1e8da975f76dff671a2879c6b35a0ed0860e9b7abfe193f', '[\"*\"]', NULL, NULL, '2025-08-13 06:17:14', '2025-08-13 06:17:14'),
(46, 'App\\Models\\User', 1, 'api_token', 'd390aebd03f0bf128daacf69ed90555706f923a34e5c160e1e1a06a6ffd65f94', '[\"*\"]', NULL, NULL, '2025-08-13 06:24:53', '2025-08-13 06:24:53'),
(47, 'App\\Models\\User', 1, 'api_token', '3adee83f3a7f8520c4a3b273f631dfc341c95ff83d033c1c43718b80a1a1d91b', '[\"*\"]', NULL, NULL, '2025-08-13 06:27:04', '2025-08-13 06:27:04'),
(48, 'App\\Models\\User', 1, 'api_token', '50db2bea5a3b6ffc40c5236a87cd8efaf29e70201936e831a370a6ed7bc611b0', '[\"*\"]', NULL, NULL, '2025-08-13 06:31:57', '2025-08-13 06:31:57'),
(49, 'App\\Models\\User', 1, 'api_token', '5c9d78493947b24b43ab4b1a7cc565fd7d5e71df86240f4ba5a01789d02cfbcb', '[\"*\"]', NULL, NULL, '2025-08-13 06:38:26', '2025-08-13 06:38:26'),
(50, 'App\\Models\\User', 1, 'api_token', '70c244edbee5e441f8584811ef3cde942b2099ceaed878e66a1c875c1055124e', '[\"*\"]', NULL, NULL, '2025-08-13 06:44:47', '2025-08-13 06:44:47'),
(51, 'App\\Models\\User', 1, 'api_token', '61d374a225694835b25aee06b90932ca31f1b4192553333bc072489ce972579f', '[\"*\"]', '2025-08-13 11:13:41', NULL, '2025-08-13 08:20:14', '2025-08-13 11:13:41'),
(52, 'App\\Models\\User', 1, 'api_token', '57af9a12f276cb79ef0af58aa820d1ed9be53cdf1647f3ebb8536e9ff2e4e794', '[\"*\"]', '2025-08-13 18:00:23', NULL, '2025-08-13 12:06:02', '2025-08-13 18:00:23'),
(53, 'App\\Models\\User', 1, 'api_token', 'df8d9366225c5707aa3b27cdda0f1344d541f83ba55c85f85725087bb7d8281f', '[\"*\"]', '2025-08-14 18:29:16', NULL, '2025-08-13 18:00:35', '2025-08-14 18:29:16'),
(54, 'App\\Models\\User', 1, 'api_token', '10471bd76d9e80a30d39a40814e99a0ddf70f7ab922f630ab00cee4ceb50dd31', '[\"*\"]', '2025-08-14 18:45:42', NULL, '2025-08-14 18:30:07', '2025-08-14 18:45:42');

-- --------------------------------------------------------

--
-- Table structure for table `properties`
--

CREATE TABLE `properties` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `property_type` enum('apartment','house','villa','office','land') NOT NULL,
  `status` enum('available','sold','rented','pending') NOT NULL DEFAULT 'available',
  `price` decimal(15,2) NOT NULL,
  `area` decimal(10,2) NOT NULL,
  `bedrooms` int(11) NOT NULL DEFAULT 0,
  `bathrooms` int(11) NOT NULL DEFAULT 0,
  `floors` int(11) NOT NULL DEFAULT 1,
  `address` text NOT NULL,
  `city` varchar(100) NOT NULL,
  `district` varchar(100) NOT NULL,
  `postal_code` varchar(20) DEFAULT NULL,
  `latitude` decimal(10,8) DEFAULT NULL,
  `longitude` decimal(11,8) DEFAULT NULL,
  `year_built` int(11) DEFAULT NULL,
  `features` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`features`)),
  `images` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`images`)),
  `contact_name` varchar(255) NOT NULL,
  `contact_phone` varchar(20) NOT NULL,
  `contact_email` varchar(255) DEFAULT NULL,
  `created_by` bigint(20) UNSIGNED DEFAULT NULL,
  `updated_by` bigint(20) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `properties`
--

INSERT INTO `properties` (`id`, `title`, `description`, `property_type`, `status`, `price`, `area`, `bedrooms`, `bathrooms`, `floors`, `address`, `city`, `district`, `postal_code`, `latitude`, `longitude`, `year_built`, `features`, `images`, `contact_name`, `contact_phone`, `contact_email`, `created_by`, `updated_by`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'Căn hộ thử nghiệm', NULL, 'apartment', 'available', 1000000000.00, 80.00, 0, 0, 1, '123 Đường ABC', 'Hồ Chí Minh', 'Quận 1', NULL, 0.00000000, 0.00000000, 2025, NULL, '[{\"id\":1,\"image_path\":\"\\/storage\\/properties\\/test.jpg\",\"is_primary\":0}]', 'Nguyễn Văn A', '0123456789', 'lodd@gmail.com', NULL, 1, '2025-08-11 19:07:51', '2025-08-14 18:00:28', NULL),
(2, 'Căn hộ Quận 1', NULL, 'apartment', 'available', 2000000000.00, 80.00, 0, 0, 1, '123 Đường ABC', 'Hồ Chí Minh', 'Quận 1', NULL, NULL, NULL, NULL, NULL, '[{},{}]', 'Nguyễn Văn A', '0123456789', NULL, NULL, NULL, '2025-08-11 23:55:39', '2025-08-11 23:55:39', NULL),
(3, 'Chung cư Quận 2', NULL, 'apartment', 'available', 234000000.00, 90.00, 0, 0, 1, '456 Đường ABC', 'Hồ Chí Minh', 'Quận 1', NULL, NULL, NULL, NULL, NULL, '\"[{\\\"image_path\\\":\\\"\\\\\\/storage\\\\\\/properties\\\\\\/hUhqCgt0TqtkcWpheYwaT7gfhZ6N97cQHggVzyDb.png\\\",\\\"is_primary\\\":true},{\\\"image_path\\\":\\\"\\\\\\/storage\\\\\\/properties\\\\\\/57adunNkIcw0J31jTcpB7RVDv24zEpnPP77CRyQx.png\\\",\\\"is_primary\\\":false}]\"', 'Nguyễn Văn B', '08374623734', NULL, NULL, NULL, '2025-08-12 10:16:00', '2025-08-12 10:16:01', NULL),
(4, 'Chung cư Quận 2', NULL, 'apartment', 'available', 234000000.00, 90.00, 0, 0, 1, '456 Đường ABC', 'Hồ Chí Minh', 'Quận 1', NULL, NULL, NULL, NULL, NULL, '\"[{\\\"image_path\\\":\\\"\\\\\\/storage\\\\\\/properties\\\\\\/3dB4KoMPWiK9jFD712uQM9qTisAEz4bdpQvZKtZt.png\\\",\\\"is_primary\\\":true},{\\\"image_path\\\":\\\"\\\\\\/storage\\\\\\/properties\\\\\\/0xM1tPEmnhjVtKFXFp4nbv5CSc0wIARy7NqtKvEO.png\\\",\\\"is_primary\\\":false}]\"', 'Nguyễn Văn B', '08374623734', NULL, NULL, NULL, '2025-08-12 18:08:37', '2025-08-12 18:08:38', NULL),
(5, 'Đất gần biển', NULL, 'house', 'available', 200000000.00, 67.00, 0, 0, 1, '123 Lê Lợi', 'Đà Nẵng', 'Hòa Minh', NULL, NULL, NULL, NULL, NULL, '\"[]\"', 'Hoàng', '9374823743', NULL, NULL, NULL, '2025-08-13 10:34:44', '2025-08-13 10:34:44', NULL),
(6, 'Đất Xa biển', NULL, 'house', 'available', 745645664.00, 20.00, 0, 0, 1, '123 Hoa Minh 12', 'Đà Nẵng', 'Hòa Minh', NULL, 0.00000000, 0.00000000, 2025, NULL, '\"[]\"', 'Hoàng', '9374823743', 'lodd@gmail.com', NULL, 1, '2025-08-13 11:01:05', '2025-08-14 09:45:44', NULL),
(7, 'ABC', NULL, 'house', 'available', 555555555.00, 23.00, 0, 0, 1, '3 Trần Đình Tri', 'Đà Nẵng', 'Hòa Minh', NULL, NULL, NULL, NULL, NULL, '\"[{\\\"image_path\\\":\\\"\\\\\\/storage\\\\\\/properties\\\\\\/io8FSk4PN97DrdTaIwPoX5t0rU9cw7Xx4c0III8s.jpg\\\",\\\"is_primary\\\":true},{\\\"image_path\\\":\\\"\\\\\\/storage\\\\\\/properties\\\\\\/unDca1W9SysF8MSvdEOu0X6UZUw2I7rRoPoleUVC.png\\\",\\\"is_primary\\\":false}]\"', 'Hoàng', '9374823743', NULL, NULL, NULL, '2025-08-13 11:13:41', '2025-08-13 11:13:42', NULL),
(8, 'Đất gần biển Trần Đình Tri', 'fasdf', 'apartment', 'available', 200.00, 65.00, 1, 1, 1, '3 Trần Đình Tri', 'Đà Nẵng', 'Hòa Minh', '500000', 55.00000000, 76.00000000, 2025, '\"ABC\"', '\"[{\\\"image_path\\\":\\\"\\\\\\/storage\\\\\\/properties\\\\\\/sxecxB6IHZxgQWx4H4l0OThriCBoZjMyYKZEFSJx.jpg\\\",\\\"is_primary\\\":true}]\"', 'Hoàng', '9374823743', 'kdjhas@gmail.com', 1, 1, '2025-08-13 18:54:40', '2025-08-14 18:37:51', NULL),
(9, 'Hòa Khánh', 'Mkaa', 'apartment', 'available', 500.00, 50.00, 1, 1, 1, '4 Trần Đình Tri', 'Đà Nẵng', 'Hòa Minh', NULL, 55.00000000, 55.00000000, 2025, '\"Gadd\\u0111\"', '\"[{\\\"image_path\\\":\\\"\\\\\\/storage\\\\\\/properties\\\\\\/Tbli2OQFXG9Sh7lFHjZFygv1dNkXSXxSvz3433IA.jpg\\\",\\\"is_primary\\\":true},{\\\"image_path\\\":\\\"\\\\\\/storage\\\\\\/properties\\\\\\/erx7JSZ2kXobpvZNKnc8RMu0KChDXffoG5KKpFTu.jpg\\\",\\\"is_primary\\\":false}]\"', 'Hoàng', '9374823743', 'kdjhas@gmail.com', 1, 1, '2025-08-14 07:36:44', '2025-08-14 07:36:45', NULL),
(10, 'Chung cư Hòa Minh', 'Hòa minh', 'apartment', 'available', 19930.00, 70.00, 5, 5, 2, '1234 Hoa Minh 123', 'Đà Nẵng', 'Hòa Minh', '500000', 55.00000000, 65.00000000, 2025, '\"Pdd\\u0111\"', '[{\"id\":13,\"property_id\":10,\"image_path\":\"\\/storage\\/properties\\/LRwUcYyVa86ORHsKz0s4gkbIAuC6aWXHSoxWUZ1b.jpg\",\"image_name\":\"filmore-bat-dong-san-hang-hieu-120356.jpg\",\"is_primary\":1,\"sort_order\":0,\"created_at\":\"2025-08-14T14:40:37.000000Z\",\"updated_at\":\"2025-08-14T14:40:37.000000Z\"},{\"id\":14,\"property_id\":10,\"image_path\":\"\\/storage\\/properties\\/9uYUE52VQfMG3IzRIDnlQhF0n3OafcG9BIv33S6y.jpg\",\"image_name\":\"anh-bat-dong-san-cov-17198250569311510447857.jpg\",\"is_primary\":0,\"sort_order\":0,\"created_at\":\"2025-08-14T14:40:37.000000Z\",\"updated_at\":\"2025-08-14T14:40:37.000000Z\"},{\"id\":15,\"property_id\":10,\"image_path\":\"\\/storage\\/properties\\/QXggIy6sRgEsuqm3A1Ncv0mDEsP3doGPHoVjpFxA.jpg\",\"image_name\":\"56-dau-tu-bat-dong-san-la-gi.jpg\",\"is_primary\":0,\"sort_order\":0,\"created_at\":\"2025-08-14T14:40:37.000000Z\",\"updated_at\":\"2025-08-14T14:40:37.000000Z\"}]', 'Hoàng', '9374823743', 'lodd@gmail.com', 1, 1, '2025-08-14 07:40:37', '2025-08-14 09:45:05', NULL),
(11, 'Đất gần chợ bến ngự', 'Nhà cấp 4', 'house', 'available', 300.00, 50.00, 2, 2, 1, '123 Hoa Minh 12', 'Huế', 'Trường An', '500000', 55.00000000, 34.00000000, 2025, '\"No\"', '\"[{\\\"image_path\\\":\\\"\\\\\\/storage\\\\\\/properties\\\\\\/KdOET8vx2jCp4iRsDA45DIs0qfwDCwKxFyqy5DDS.jpg\\\",\\\"is_primary\\\":true}]\"', 'Hoàng', '0825700246', 'lemihoang2004@gmail.com', 1, 1, '2025-08-14 11:11:43', '2025-08-14 11:11:43', NULL),
(12, 'Nhà gần chợ Hòa Khánh', 'Hòa Khánh , Âu cơ', 'house', 'available', 500.00, 50.00, 2, 2, 3, '3 Âu Cơ', 'Đà Nẵng', 'Hòa Minh', '500000', 55.00000000, 23.00000000, 2025, '\"V\\u01b0\\u1eddn\"', '\"[{\\\"image_path\\\":\\\"\\\\\\/storage\\\\\\/properties\\\\\\/4QPHugEPEgLwNAnCoVnnY9IZI3XhOl1OhIia2g0q.jpg\\\",\\\"is_primary\\\":true},{\\\"image_path\\\":\\\"\\\\\\/storage\\\\\\/properties\\\\\\/cWlE2zchthUsiKWOsWLkmBXDFDPjebhhrw4mn9nc.jpg\\\",\\\"is_primary\\\":false}]\"', 'Hoàng', '0825700246', 'lemihoang2004@gmail.com', 1, 1, '2025-08-14 11:13:41', '2025-08-14 11:13:41', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `property_images`
--

CREATE TABLE `property_images` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `property_id` bigint(20) UNSIGNED NOT NULL,
  `image_path` varchar(500) NOT NULL,
  `image_name` varchar(255) NOT NULL,
  `is_primary` tinyint(1) NOT NULL DEFAULT 0,
  `sort_order` int(11) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `property_images`
--

INSERT INTO `property_images` (`id`, `property_id`, `image_path`, `image_name`, `is_primary`, `sort_order`, `created_at`, `updated_at`) VALUES
(1, 1, '/storage/properties/test.jpg', 'test.jpg', 1, 0, '2025-08-11 19:10:55', '2025-08-11 19:10:55'),
(2, 2, '/storage/properties/e17FhiyGc5aabFJNWfEwtGwm9EPeP9wOSTAamHln.png', 'Screenshot 2025-06-30 221346.png', 1, 0, '2025-08-11 23:55:39', '2025-08-11 23:55:39'),
(3, 2, '/storage/properties/iTkwvLao9SBJ3jScRngLUHxR3LaTxDxt2uK6Q9aT.png', 'Screenshot 2025-06-30 180533.png', 0, 0, '2025-08-11 23:55:39', '2025-08-11 23:55:39'),
(4, 3, '/storage/properties/hUhqCgt0TqtkcWpheYwaT7gfhZ6N97cQHggVzyDb.png', 'Screenshot 2025-06-30 221201.png', 1, 0, '2025-08-12 10:16:01', '2025-08-12 10:16:01'),
(5, 3, '/storage/properties/57adunNkIcw0J31jTcpB7RVDv24zEpnPP77CRyQx.png', 'Screenshot 2025-07-02 011250.png', 0, 0, '2025-08-12 10:16:01', '2025-08-12 10:16:01'),
(6, 4, '/storage/properties/3dB4KoMPWiK9jFD712uQM9qTisAEz4bdpQvZKtZt.png', 'Screenshot 2025-06-30 221201.png', 1, 0, '2025-08-12 18:08:38', '2025-08-12 18:08:38'),
(7, 4, '/storage/properties/0xM1tPEmnhjVtKFXFp4nbv5CSc0wIARy7NqtKvEO.png', 'Screenshot 2025-07-02 011250.png', 0, 0, '2025-08-12 18:08:38', '2025-08-12 18:08:38'),
(8, 7, '/storage/properties/io8FSk4PN97DrdTaIwPoX5t0rU9cw7Xx4c0III8s.jpg', '514596453_702747079414848_3463394738903412442_n.jpg', 1, 0, '2025-08-13 11:13:42', '2025-08-13 11:13:42'),
(9, 7, '/storage/properties/unDca1W9SysF8MSvdEOu0X6UZUw2I7rRoPoleUVC.png', 'sad_background.png', 0, 0, '2025-08-13 11:13:42', '2025-08-13 11:13:42'),
(10, 8, '/storage/properties/sxecxB6IHZxgQWx4H4l0OThriCBoZjMyYKZEFSJx.jpg', '519994573_1477932073379658_3227857517753021360_n.jpg', 1, 0, '2025-08-13 18:54:41', '2025-08-13 18:54:41'),
(11, 9, '/storage/properties/Tbli2OQFXG9Sh7lFHjZFygv1dNkXSXxSvz3433IA.jpg', 'bds1.jpg', 1, 0, '2025-08-14 07:36:45', '2025-08-14 07:36:45'),
(12, 9, '/storage/properties/erx7JSZ2kXobpvZNKnc8RMu0KChDXffoG5KKpFTu.jpg', 'bat-dong-san-da-nang.jpg', 0, 0, '2025-08-14 07:36:45', '2025-08-14 07:36:45'),
(13, 10, '/storage/properties/LRwUcYyVa86ORHsKz0s4gkbIAuC6aWXHSoxWUZ1b.jpg', 'filmore-bat-dong-san-hang-hieu-120356.jpg', 1, 0, '2025-08-14 07:40:37', '2025-08-14 07:40:37'),
(14, 10, '/storage/properties/9uYUE52VQfMG3IzRIDnlQhF0n3OafcG9BIv33S6y.jpg', 'anh-bat-dong-san-cov-17198250569311510447857.jpg', 0, 0, '2025-08-14 07:40:37', '2025-08-14 07:40:37'),
(15, 10, '/storage/properties/QXggIy6sRgEsuqm3A1Ncv0mDEsP3doGPHoVjpFxA.jpg', '56-dau-tu-bat-dong-san-la-gi.jpg', 0, 0, '2025-08-14 07:40:37', '2025-08-14 07:40:37'),
(16, 11, '/storage/properties/KdOET8vx2jCp4iRsDA45DIs0qfwDCwKxFyqy5DDS.jpg', 'anh-bat-dong-san-cov-17198250569311510447857.jpg', 1, 0, '2025-08-14 11:11:43', '2025-08-14 11:11:43'),
(17, 12, '/storage/properties/4QPHugEPEgLwNAnCoVnnY9IZI3XhOl1OhIia2g0q.jpg', 'bat-dong-san-da-nang.jpg', 1, 0, '2025-08-14 11:13:41', '2025-08-14 11:13:41'),
(19, 12, '/storage/properties/wfnJ7qDl8iKkU0HYhP0ruTAoQElWgoKM6xCJ9QRD.jpg', 'bds1.jpg', 0, 0, '2025-08-14 18:45:32', '2025-08-14 18:45:32');

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) DEFAULT NULL,
  `user_agent` text DEFAULT NULL,
  `payload` longtext NOT NULL,
  `last_activity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`) VALUES
('65atfFam3SyjLCYBfSFN6vk2jAB2TXLRQlxh4Lxj', NULL, '127.0.0.1', 'PostmanRuntime/7.45.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiWUo1VWNRNENJQnVEV3VnRGt6QjR5c1VTa2IwMjl3TGlKNVEwcU9payI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1755189407),
('FbCeRFsY54VSwXDpBDSDhAYqqNRu3dQQO523SyTf', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiOUpFWUkxZFh3YUdRWk03Sk11eXQ5MHRjWEtZZ0JqNFIwOHVXUGs0ZCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6ODY6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC8vc3RvcmFnZS9wcm9wZXJ0aWVzL3N4ZWN4QjZJSFp4Z1FXeDRINGwwT1RocmlDQm9aak15WUtaRUZTSnguanBnIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1755139355),
('u0UrsnNZlSElBvwEMxxmIwlGpvvN8RcOvWnlXGJK', NULL, '127.0.0.1', 'PostmanRuntime/7.45.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiSlBETW5uNzFsVFNWSEx6WVR4YzlicmRqV0lKYk0xUnZ5ZnBsSmtTYiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mjc6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9sb2dpbiI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1754972395),
('x1jvLVwCZGufTR6kMopf0irmxZJP7aRwWEQucw4W', NULL, '127.0.0.1', 'PostmanRuntime/7.45.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiUmFwVUxPa0xoT3lOdG1Dek5CVGRUdE16c0kwNTdxelppdlJpOTVObCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1754981587);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Test User', 'test@example.com', NULL, '$2y$12$fIG5rnlKFbFNdyphAU/n6.Xay57F/V/QpWyPwS7ePaezWvdT9iQRm', NULL, '2025-08-11 20:42:35', '2025-08-11 20:42:35');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cache`
--
ALTER TABLE `cache`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `cache_locks`
--
ALTER TABLE `cache_locks`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jobs_queue_index` (`queue`);

--
-- Indexes for table `job_batches`
--
ALTER TABLE `job_batches`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`),
  ADD KEY `personal_access_tokens_expires_at_index` (`expires_at`);

--
-- Indexes for table `properties`
--
ALTER TABLE `properties`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `property_images`
--
ALTER TABLE `property_images`
  ADD PRIMARY KEY (`id`),
  ADD KEY `property_images_property_id_foreign` (`property_id`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=55;

--
-- AUTO_INCREMENT for table `properties`
--
ALTER TABLE `properties`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `property_images`
--
ALTER TABLE `property_images`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `property_images`
--
ALTER TABLE `property_images`
  ADD CONSTRAINT `property_images_property_id_foreign` FOREIGN KEY (`property_id`) REFERENCES `properties` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
