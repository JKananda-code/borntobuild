
import Header from './components/Header';
import Footer from './components/Footer';
import './globals.css';

const Layout = ({ children }) => {
  return (
    <html>
     <body>
    <div className="flex flex-col min-h-screen">
      <Header />
    <main className="flex-grow container mx-auto py-8">{children}</main>
      <Footer />
    </div>
      </body>
   
    </html>
  );
};

export default Layout;
