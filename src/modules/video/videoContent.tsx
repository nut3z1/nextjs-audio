"use client";
import { YouTubeAPIResponse, YoutubeVideoType } from "@/types/youtube";
import React, { useEffect, useState } from "react";

export const VideoContent = () => {
  const [videos, setVideos] = useState<YoutubeVideoType[]>();
  const [nextPageToken, setNextPageToken] = useState(null);
  const [prevPageToken, setPrevPageToken] = useState(null);

  const fetchVideos = async (pageToken = "") => {
    const res = await fetch(
      `${"/api/youtube"}${pageToken ? "?pageToken=" + pageToken : ""}`
    );
    const data = await res.json();

    setVideos(data?.items ?? []);
    setNextPageToken(data.nextPageToken || null);
    setPrevPageToken(data.prevPageToken || null);
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  console.log("videos", videos);
  return (
    <div className="container">
      <div className="py-10">
        <div className="flex justify-between mt-4">
          {prevPageToken && (
            <button
              onClick={() => fetchVideos(prevPageToken)}
              className="bg-gray-200 px-4 py-2 rounded"
            >
              Trang trước
            </button>
          )}
          {nextPageToken && (
            <button
              onClick={() => fetchVideos(nextPageToken)}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Trang sau
            </button>
          )}
        </div>
        <div className="grid grid-cols-3 gap-4">
          {videos?.map((item, index) => (
            <div key={index}>
              <iframe
                width="100%"
                height="200"
                src={`https://www.youtube.com/embed/${item.id.videoId}`}
                title={item.snippet?.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
