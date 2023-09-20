import { NextRequest, NextResponse } from "next/server";
import { routesList } from "@/services/routesList";
import { fetchBlogs } from "@/services/blogService";
import { API_ERROR } from "@/constants";
import { Category } from "@/models/category";

export async function GET(request: NextRequest) {
  try {
    let blogs = await fetchBlogs<Category[]>(routesList.Blog.getCategory);
    console.log(NextResponse.json({message: blogs}))
    return NextResponse.json(blogs);
  } catch (error) {
    NextResponse.json({
      message: API_ERROR,
      status: 500,
    });
  }
}


