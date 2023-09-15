"use client";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="border-solid border-black border">{children}</section>
  );
}
