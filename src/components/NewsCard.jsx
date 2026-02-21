import React from "react";
import { FaEye, FaRegBookmark, FaStar } from "react-icons/fa";
import { format } from "date-fns";
import { CiShare2 } from "react-icons/ci";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const {
    id,
    title,
    thumbnail_url,
    details,
    total_view,
    rating,
    author,
    others,
  } = news;

  const formattedDate = format(new Date(author?.published_date), "yyyy-MM-dd");

  return (
    <div className="card bg-base-100 shadow-md border border-gray-200">
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-base-200">
        <div className="flex items-center gap-3">
          <img
            src={author?.img}
            alt={author?.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h4 className="font-semibold text-sm">{author?.name}</h4>
            <p className="text-xs text-gray-500">{formattedDate}</p>
          </div>
        </div>

        {/* Badge
        {others?.is_trending && (
          <span className="badge badge-error badge-sm">Trending</span>
        )} */}
        <div className="flex gap-3">
          <FaRegBookmark className="text-lg" />
          <CiShare2 className="text-xl font-bold" />
        </div>
      </div>

      {/* Body */}
      <div className="card-body p-4">
        <h2 className="card-title text-lg leading-snug">{title}</h2>

        <figure className="my-3">
          <img
            src={thumbnail_url}
            alt={title}
            className="rounded-lg w-full object-cover"
          />
        </figure>

        <p className="text-sm text-gray-600">
          {details.length > 200
            ? details.slice(0, 200) + "..."
            : details}
          <Link to={`/news-details/${id}`} className="text-primary font-semibold cursor-pointer ml-1">
            Read More
          </Link>
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between mt-4 pt-3 border-t">
          {/* Rating */}
          <div className="flex items-center gap-2 text-orange-400">
            <FaStar />
            <span className="font-medium text-gray-700">
              {rating?.number}
            </span>
          </div>

          {/* Views */}
          <div className="flex items-center gap-2 text-gray-500">
            <FaEye />
            <span>{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
