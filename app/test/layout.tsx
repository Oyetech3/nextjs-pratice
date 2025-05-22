import RootLayout from "./RootLayout";


export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        <RootLayout>
          {children}
        </RootLayout>
      </body>
    </html>
  );
}