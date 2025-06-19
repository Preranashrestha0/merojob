import "./globals.css"


export default function RootLayout({
  children,
}: Readonly<{
  children:React.ReactNode
}>
) {
  return(
    <html>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <body className="bg-white flex flex-col justify-center items-center">
  
        {children}
      </body>
    </html>
  )
}