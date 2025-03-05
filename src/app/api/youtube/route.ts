import { NextResponse } from "next/server";

// Phải export các hàm với tên trùng với HTTP method
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const pageToken = searchParams.get("pageToken");

  const API_KEY = process.env.YOUTUBE_API_KEY;
  const CHANNEL_ID = "UCoXst0FTqCB7K52dU47cGqw";

  let url = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=10`;

  if (pageToken) {
    url += `&pageToken=${pageToken}`;
  }

  try {
    const response = await fetch(url);

    if (!response.ok) {
      return NextResponse.json(
        { error: "Lỗi khi lấy dữ liệu từ YouTube" },
        { status: 500 }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Lỗi khi lấy dữ liệu từ YouTube" },
      { status: 500 }
    );
  }
}
