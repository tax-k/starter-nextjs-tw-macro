/** @jsxImportSource @emotion/react */

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <meta charSet="utf-8" />
      <title>nextjs + tw starter</title>
      <body>{children}</body>
    </html>
  );
}
