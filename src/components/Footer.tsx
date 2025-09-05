import { Phone, Mail, Instagram, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand and Contact */}
          <div className="space-y-4">
            <h3 className="text-2xl font-heading font-bold text-primary">
              MimaTusManos
            </h3>
            <p className="text-muted-foreground">
              El arte de cuidar tus manos con profesionalidad y elegancia.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4 text-primary" />
                <span>+34 123 456 789</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 text-primary" />
                <span>info@mimatusmanos.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Calle Belleza 123, Tu Ciudad</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-heading font-semibold">Servicios</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Manicura clásica</li>
              <li>Esmaltado semipermanente</li>
              <li>Uñas acrílicas/gel</li>
              <li>Nail Art personalizado</li>
              <li>Pedicura completa</li>
              <li>Diseño de cejas</li>
            </ul>
          </div>

          {/* Hours and Social */}
          <div className="space-y-4">
            <h4 className="text-lg font-heading font-semibold">Horarios</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                <span>Lun - Vie: 9:00 - 19:00</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                <span>Sáb: 9:00 - 17:00</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                <span>Dom: Cerrado</span>
              </div>
            </div>
            
            <div className="pt-4">
              <h5 className="text-sm font-semibold mb-2">Síguenos</h5>
              <div className="flex space-x-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  <Instagram className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© 2024 MimaTusManos. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;