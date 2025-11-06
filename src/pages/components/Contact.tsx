import { Instagram, Linkedin, Twitter } from "lucide-react";

const Contact = () => {
  return (
    <section>
      <h2 className="font-serif text-3xl mb-8 pb-2 border-b border-border">
        CONTACT US
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg">
        <div>
          <h3 className="font-semibold mb-2">Email</h3>
          <a href="mailto:iedc@cusat.ac.in" className="text-muted-foreground hover:text-foreground">iedc@cusat.ac.in</a>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Address</h3>
          <p className="text-muted-foreground">
            IEDC CUSAT<br />
            Cochin University of Science and Technology<br />
            Kochi, Kerala, India
          </p>
        </div>
        <div className="md:col-span-2 md:text-center mt-8">
          <h3 className="font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-6 justify-center">
            <a href="#" className="text-muted-foreground hover:text-foreground">
              <Instagram className="h-8 w-8" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground">
              <Linkedin className="h-8 w-8" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground">
              <Twitter className="h-8 w-8" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
