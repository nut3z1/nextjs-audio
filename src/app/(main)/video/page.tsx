import { VideoContent } from "@/modules/video/videoContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Video - Hoang Long Am Thanh So",
  description: "Video page description",
};

export default function VideoPage() {
  return (
    <main>
      <VideoContent />
    </main>
  );
}
