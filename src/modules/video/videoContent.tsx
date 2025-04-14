"use client";
import React, { useEffect, useState } from "react";

interface VideoItem {
  id: {
    videoId: string;
  };
  snippet: {
    title: string;
  };
}

export const VideoContent = () => {
  const [videos, setVideos] = useState<VideoItem[]>([]);
  const [nextPageToken, setNextPageToken] = useState<string | null>(null);
  const [prevPageToken, setPrevPageToken] = useState<string | null>(null);

  const fetchVideos = async (pageToken: string = "") => {
    try {
      const res = await fetch(
        `/api/youtube${pageToken ? `?pageToken=${pageToken}` : ""}`
      );

      if (!res.ok) {
        throw new Error("Failed to fetch videos");
      }

      const data = await res.json();
      setVideos(data?.items || []);
      setNextPageToken(data.nextPageToken || null);
      setPrevPageToken(data.prevPageToken || null);
    } catch (error) {
      console.error("Error fetching videos:", error);
      setVideos([]);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  return (
    <div className="container">
      <div className="py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {videos?.map((item, index) => (
            <div key={item.id.videoId || index}>
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
        <div className="flex justify-between mt-4">
          {prevPageToken && (
            <button
              onClick={() => fetchVideos(prevPageToken)}
              className="bg-gray-200 px-4 py-2 rounded"
            >
              Previous Page
            </button>
          )}
          {nextPageToken && (
            <button
              onClick={() => fetchVideos(nextPageToken)}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Next Page
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
