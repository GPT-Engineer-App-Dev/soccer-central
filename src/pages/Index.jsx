import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="text-center">
      <section className="relative w-full h-[400px]">
        <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[400px]" />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white">
          <h1 className="text-4xl font-bold">Welcome to Soccer World</h1>
          <p className="text-xl mt-2">Your ultimate destination for all things soccer</p>
          <Button className="mt-4">Explore Now</Button>
        </div>
      </section>
      <footer className="mt-8">
        <div className="flex justify-center space-x-4">
          <a href="/about" className="text-muted-foreground hover:text-foreground">About Us</a>
          <a href="/privacy" className="text-muted-foreground hover:text-foreground">Privacy Policy</a>
          <a href="/terms" className="text-muted-foreground hover:text-foreground">Terms of Service</a>
        </div>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Index;
