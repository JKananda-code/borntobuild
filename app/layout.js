
import Header from './components/Header';
import Footer from './components/Footer';
import './globals.css';

const Layout = ({ children }) => {
  return (
    <html lang="en">
     <body className={'{inter.className} flex flex-col min-h-screen'}>
      <div>
    <Header />
      <main className="flex-grow container mx-auto py-8">{children}</main>
    <Footer />
    </div>
    </body>    
    </html>
  );
};

export default Layout;
