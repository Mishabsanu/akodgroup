"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface BannerProps {
  title: string;
  image: string;
  showButton?: boolean;
  buttonText?: string;
  buttonLink?: string;
  description?: string;
}

const Banner: React.FC<BannerProps> = ({
  title,
  image,
  showButton = false,
  buttonText = "Get Started",
  buttonLink = "/contact",
  description,
}) => {
  const path = usePathname();
  const segments = path.split("/").filter(Boolean);

  return (
    <section
      className="relative h-[500px] md:h-[500px] bg-cover bg-center flex items-end"
      style={{
        backgroundImage: `url('${image}')`,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60" />
      <div className="relative z-10 text-white px-5 md:px-20 pb-12 max-w-3xl">

        {/* Breadcrumb */}
        <p className="text-sm text-gray-300 mb-2">
          <Link href="/" className="hover:text-[#dc2626]">
            Home
          </Link>
          {segments.map((segment, idx) => (
            <span key={idx}>
              {" "}
              &rarr;{" "}
              <span className="capitalize text-[#dc2626]">{segment}</span>
            </span>
          ))}
        </p>
        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-bold capitalize mb-2">
          {title}
        </h1>

        {/* Optional Description */}
        {description && (
          <p className="text-gray-300 text-sm md:text-base mb-4">{description}</p>
        )}

        {/* Optional Button */}
        {showButton && (
          <Link href={buttonLink}>
            <button className="mt-2 rounded bg-[#dc2626] px-6 py-2 text-white text-sm font-semibold transition hover:bg-red-700">
              {buttonText}
            </button>
          </Link>
        )}
      </div>
      
    </section>
  );
};

export default Banner;
