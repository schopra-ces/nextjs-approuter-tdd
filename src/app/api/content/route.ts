import { NextRequest, NextResponse } from "next/server";
import { Blogs } from "@/models/blog";
import { routesList } from "@/services/routesList";
import { API_ERROR } from "@/constants";
import { fetchContent } from "@/services/contentService";

export async function GET(request: NextRequest) {
  try {
    let blogContent = await fetchContent<Blogs[]>(routesList.Blog.getContent);
    return NextResponse.json(blogContent);
  } catch (error) {
    NextResponse.json({
      message: API_ERROR,
      status: 500,
    });
  }
}


