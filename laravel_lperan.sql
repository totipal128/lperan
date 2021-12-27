-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Waktu pembuatan: 27 Des 2021 pada 12.13
-- Versi server: 10.4.21-MariaDB
-- Versi PHP: 7.4.24

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `laravel_lperan`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `jabatans`
--

CREATE TABLE `jabatans` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `jabatans`
--

INSERT INTO `jabatans` (`id`, `name`, `created_at`, `updated_at`) VALUES
(4, 'teknisi', '2021-11-26 22:59:21', '2021-11-26 22:59:21'),
(5, 'Staff It', '2021-11-30 05:23:19', '2021-11-30 05:23:19');

-- --------------------------------------------------------

--
-- Struktur dari tabel `karyawans`
--

CREATE TABLE `karyawans` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `placeOfBird` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `dateOfBird` date DEFAULT NULL,
  `address` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `numberPhone` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `profile_photo_path` varchar(2048) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `id_jabatan` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `karyawans`
--

INSERT INTO `karyawans` (`id`, `name`, `placeOfBird`, `dateOfBird`, `address`, `numberPhone`, `profile_photo_path`, `id_jabatan`, `created_at`, `updated_at`) VALUES
(1, 'Ilham', 'Makassar', '1995-06-14', 'Jl. Hertasning Baru', '08213456789', NULL, NULL, '2021-11-29 00:54:04', '2021-11-29 00:54:04'),
(2, 'Muh. Akbar', 'Makassar', '1996-07-16', 'Jl. gotong Royong', '082123456789', NULL, NULL, '2021-11-29 00:56:10', '2021-11-29 00:56:10'),
(3, 'Irfandi', 'Makassar', '1996-08-13', 'Jl. H. Kalla', '08213456789', NULL, NULL, '2021-11-29 00:57:07', '2021-11-29 00:57:07'),
(4, 'Wahyuddin Kajar', 'Makassar', '1994-06-06', 'jl. Pelita Raya', '08213456789', NULL, NULL, '2021-11-29 00:58:02', '2021-11-29 00:58:02'),
(5, 'Muh. Hanas', 'Makassar', '2000-07-05', 'BTP', '08213456789', NULL, NULL, '2021-11-29 00:58:42', '2021-11-29 00:58:42'),
(6, 'Muh. Asri', 'Makassar', '1996-06-05', 'Jl. A.P.Pettarani', '08213456789', NULL, NULL, '2021-11-29 00:59:30', '2021-11-29 00:59:30'),
(7, 'Yogi', 'Makassar', '1994-12-28', 'Jl. Sunu', '08213456789', NULL, NULL, '2021-11-29 01:00:07', '2021-11-29 01:00:07'),
(8, 'Dani', 'Makassar', '1997-10-07', 'jl. Pandang Raya', '234569798', NULL, 4, '2021-11-29 01:00:45', '2021-11-29 01:00:45'),
(9, 'Reza', 'Makassar', '1998-05-19', 'Jl. Bung', '08937657612', NULL, NULL, '2021-11-29 01:01:27', '2021-11-29 01:01:27'),
(11, 'mail', 'Pinrang', '2021-12-31', 'jl.Bulu Pakoro', '082192293532', NULL, NULL, '2021-11-30 02:50:16', '2021-11-30 02:50:16');

-- --------------------------------------------------------

--
-- Struktur dari tabel `kriterias`
--

CREATE TABLE `kriterias` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `nameKriteria` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `bobot` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `kriterias`
--

INSERT INTO `kriterias` (`id`, `nameKriteria`, `bobot`, `created_at`, `updated_at`) VALUES
(1, 'Sikap Kerja', 76, '2021-11-29 01:29:42', '2021-11-29 01:29:42'),
(2, 'Kinerja', 60, '2021-11-29 01:30:19', '2021-11-29 01:30:19'),
(3, 'Profesionalisme', 78, '2021-11-29 01:32:17', '2021-11-29 01:32:17'),
(4, 'Kerja Sama', 80, '2021-11-29 01:32:52', '2021-11-29 01:32:52'),
(5, 'Inisiatif dan kreatif', 78, '2021-11-29 01:33:22', '2021-11-29 01:33:22');

-- --------------------------------------------------------

--
-- Struktur dari tabel `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(8, '2014_10_12_000000_create_users_table', 1),
(9, '2014_10_12_100000_create_password_resets_table', 1),
(10, '2014_10_12_200000_add_two_factor_columns_to_users_table', 1),
(11, '2019_08_19_000000_create_failed_jobs_table', 1),
(12, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(13, '2021_10_28_114827_create_sessions_table', 1),
(14, '2021_10_29_104703_create_karyawans_table', 1),
(15, '2021_10_31_142031_create_kriterias_table', 2),
(16, '2021_11_04_110948_create_jabatans_table', 3),
(17, '2021_11_05_144011_create_penilaians_table', 4);

-- --------------------------------------------------------

--
-- Struktur dari tabel `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `penilaians`
--

CREATE TABLE `penilaians` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `id_karyawan` int(11) NOT NULL,
  `id_k1` int(11) DEFAULT NULL,
  `k1` int(11) DEFAULT NULL,
  `id_k2` int(11) DEFAULT NULL,
  `k2` int(11) DEFAULT NULL,
  `id_k3` int(11) DEFAULT NULL,
  `k3` int(11) DEFAULT NULL,
  `id_k4` int(11) DEFAULT NULL,
  `k4` int(11) DEFAULT NULL,
  `id_k5` int(11) DEFAULT NULL,
  `k5` int(11) DEFAULT NULL,
  `id_k6` int(11) DEFAULT NULL,
  `k6` int(11) DEFAULT NULL,
  `id_k7` int(11) DEFAULT NULL,
  `k7` int(11) DEFAULT NULL,
  `id_k8` int(11) DEFAULT NULL,
  `k8` int(11) DEFAULT NULL,
  `id_k9` int(11) DEFAULT NULL,
  `k9` int(11) DEFAULT NULL,
  `id_k10` int(11) DEFAULT NULL,
  `k10` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `penilaians`
--

INSERT INTO `penilaians` (`id`, `id_karyawan`, `id_k1`, `k1`, `id_k2`, `k2`, `id_k3`, `k3`, `id_k4`, `k4`, `id_k5`, `k5`, `id_k6`, `k6`, `id_k7`, `k7`, `id_k8`, `k8`, `id_k9`, `k9`, `id_k10`, `k10`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 70, 2, 89, 3, 76, 4, 87, 5, 80, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2021-11-29 01:34:36', '2021-11-29 01:34:36'),
(2, 2, 1, 87, 2, 78, 3, 60, 4, 68, 5, 79, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2021-11-29 01:35:23', '2021-11-29 01:35:23'),
(3, 3, 1, 76, 2, 89, 3, 65, 4, 80, 5, 90, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2021-11-29 01:36:15', '2021-11-29 01:36:15'),
(4, 4, 1, 87, 2, 65, 3, 34, 4, 76, 5, 75, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2021-11-30 04:35:23', '2021-11-30 04:35:23');

-- --------------------------------------------------------

--
-- Struktur dari tabel `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_agent` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `payload` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_activity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `sessions`
--

INSERT INTO `sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`) VALUES
('bmbiR12JVkvh0Roe5eRS579V7uru0HDWuFjzh5sh', 2, '127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36', 'YTo2OntzOjY6Il90b2tlbiI7czo0MDoiMk0wYmNYR2ZRQ2c4U3lQckE1QlZyMGswMFN1THV1OE1NMHpNZXdQYSI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NDc6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9qYWJhdGFuLWthcnlhd2FuL3VwZGF0ZS84Ijt9czo1MDoibG9naW5fd2ViXzU5YmEzNmFkZGMyYjJmOTQwMTU4MGYwMTRjN2Y1OGVhNGUzMDk4OWQiO2k6MjtzOjE3OiJwYXNzd29yZF9oYXNoX3dlYiI7czo2MDoiJDJ5JDEwJGNjQkdKdUd1Vy9YdTh2YVhmU1YvU3VRUGtYd2lLSDJVQkVyV2NySG5LZnRPdEgxcVJPSEFTIjtzOjIxOiJwYXNzd29yZF9oYXNoX3NhbmN0dW0iO3M6NjA6IiQyeSQxMCRjY0JHSnVHdVcvWHU4dmFYZlNWL1N1UVBrWHdpS0gyVUJFcldjckhuS2Z0T3RIMXFST0hBUyI7fQ==', 1638281367),
('GjSdX7hFulTs3j93orCxTY9cht3fxuCH9h076ifN', NULL, '127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36', 'YTo0OntzOjY6Il90b2tlbiI7czo0MDoiZDJJTnBwYlFSZEVXQ0JteUZNOWpWdzdqUjRzRVh2S0FweGc0ZEZmbCI7czozOiJ1cmwiO2E6MTp7czo4OiJpbnRlbmRlZCI7czozNzoiaHR0cDovLzEyNy4wLjAuMTo4MDAwL2hhc2lsLXBlbmlsYWlhbiI7fXM6OToiX3ByZXZpb3VzIjthOjE6e3M6MzoidXJsIjtzOjI3OiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvbG9naW4iO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1640448221),
('JfN5E7ciaBgl0KQy2dZ0hRryf4RLIjm3XrBkpUN0', NULL, '127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36', 'YTo0OntzOjY6Il90b2tlbiI7czo0MDoiNXlhUXBJTVNuNDd1MnRZVExEcHZLa1V3bWZUTEVvV1g3aTZ4WVZiUSI7czozOiJ1cmwiO2E6MTp7czo4OiJpbnRlbmRlZCI7czoyOToiaHR0cDovLzEyNy4wLjAuMTo4MDAwL0phYmF0YW4iO31zOjk6Il9wcmV2aW91cyI7YToxOntzOjM6InVybCI7czoyOToiaHR0cDovLzEyNy4wLjAuMTo4MDAwL0phYmF0YW4iO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1640464047),
('n6vJegBxTrW7cSiUNyPs4hBmHXwg1qRwKunF8fhQ', 2, '127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36', 'YTo2OntzOjY6Il90b2tlbiI7czo0MDoiVzBFVDBLNTNZMWJuWk5ONzlrZFpIWk1lUVB4aVZibjFlQ05aVGo4cSI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mzc6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9oYXNpbC1wZW5pbGFpYW4iO31zOjUwOiJsb2dpbl93ZWJfNTliYTM2YWRkYzJiMmY5NDAxNTgwZjAxNGM3ZjU4ZWE0ZTMwOTg5ZCI7aToyO3M6MTc6InBhc3N3b3JkX2hhc2hfd2ViIjtzOjYwOiIkMnkkMTAkY2NCR0p1R3VXL1h1OHZhWGZTVi9TdVFQa1h3aUtIMlVCRXJXY3JIbktmdE90SDFxUk9IQVMiO3M6MjE6InBhc3N3b3JkX2hhc2hfc2FuY3R1bSI7czo2MDoiJDJ5JDEwJGNjQkdKdUd1Vy9YdTh2YVhmU1YvU3VRUGtYd2lLSDJVQkVyV2NySG5LZnRPdEgxcVJPSEFTIjt9', 1640087523),
('zULmTU2GD03HdJ8B0HqaGj4K0c59wX6gPNXmvTBN', NULL, '127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiTmJIR0Z4eENNZFVqNzQ3T0VqTEFuQmlNYWxYRWRGcjU5RDRFNDh4ZCI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7fX0=', 1639382401);

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `two_factor_secret` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `two_factor_recovery_codes` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `isAdmin` tinyint(1) DEFAULT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `current_team_id` bigint(20) UNSIGNED DEFAULT NULL,
  `profile_photo_path` varchar(2048) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `two_factor_secret`, `two_factor_recovery_codes`, `isAdmin`, `remember_token`, `current_team_id`, `profile_photo_path`, `created_at`, `updated_at`) VALUES
(1, 'admin', 'admin@gmail.com', NULL, '$2y$10$bnt4NBHgtqUozDgrDmZ8SOP1QN8zxk4zpFsqlCvjKV2k74sFxVg5i', NULL, NULL, 1, NULL, NULL, NULL, '2021-10-29 04:01:52', '2021-11-04 03:01:43'),
(2, 'pimpinan', 'pimpinan@gmail.com', NULL, '$2y$10$ccBGJuGuW/Xu8vaXfSV/SuQPkXwiKH2UBErWcrHnKftOtH1qROHAS', NULL, NULL, 0, NULL, NULL, NULL, '2021-11-24 03:14:50', '2021-11-24 03:14:50');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indeks untuk tabel `jabatans`
--
ALTER TABLE `jabatans`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `karyawans`
--
ALTER TABLE `karyawans`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `kriterias`
--
ALTER TABLE `kriterias`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indeks untuk tabel `penilaians`
--
ALTER TABLE `penilaians`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indeks untuk tabel `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `jabatans`
--
ALTER TABLE `jabatans`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT untuk tabel `karyawans`
--
ALTER TABLE `karyawans`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT untuk tabel `kriterias`
--
ALTER TABLE `kriterias`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT untuk tabel `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT untuk tabel `penilaians`
--
ALTER TABLE `penilaians`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT untuk tabel `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
