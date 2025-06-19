import "./globals.css"


export default function RootLayout({
  children,
}: Readonly<{
  children:React.ReactNode
}>
) {
  return(
    <html>
      <body className="bg-white">
  
        {children}
      </body>
    </html>
  )
}