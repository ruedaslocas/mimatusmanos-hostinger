import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";
import { Phone, Star, Award, Sparkles, Instagram } from "lucide-react";
import heroImage from "@/assets/hero-nails.jpg";

const Index = () => {
  const testimonials = [
    {
      name: "María González",
      service: "Nail Art personalizado",
      text: "Increíble trabajo, mis uñas nunca habían lucido tan hermosas. Totalmente recomendado.",
      rating: 5
    },
    {
      name: "Carmen López",
      service: "Manicura semipermanente",
      text: "Profesionalidad y atención al detalle excepcionales. Volveré sin duda.",
      rating: 5
    },
    {
      name: "Ana Martínez",
      service: "Diseño de cejas",
      text: "El mejor lugar para cuidar tus manos y cejas. Trato personalizado y resultados perfectos.",
      rating: 5
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
            El arte de cuidar tus manos
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light">
            Profesionales en diseño de uñas y estética en tu ciudad
          </p>
          <Button
            variant="cta"
            size="lg"
            className="text-lg px-8 py-4"
            onClick={() => window.open("tel:+34123456789", "_self")}
          >
            <Phone className="h-5 w-5 mr-2" />
            Llamar y pedir cita
          </Button>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Nuestra Filosofía
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              En MimaTusManos creemos que cada detalle cuenta. Nuestro compromiso es brindar 
              un servicio de calidad excepcional, donde la higiene, la creatividad y la 
              profesionalidad se combinan para crear la experiencia perfecta.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-2">Calidad</h3>
              <p className="text-muted-foreground">
                Utilizamos únicamente productos premium y técnicas especializadas para 
                garantizar resultados duraderos y hermosos.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-2">Higiene</h3>
              <p className="text-muted-foreground">
                Mantenemos los más altos estándares de limpieza y esterilización en 
                todas nuestras herramientas y espacios de trabajo.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-2">Creatividad</h3>
              <p className="text-muted-foreground">
                Cada diseño es único y personalizado, adaptado a tu estilo y preferencias 
                para que expreses tu personalidad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Gallery */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Nuestros Últimos Trabajos
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Descubre algunas de nuestras creaciones más recientes
            </p>
            <Button variant="outline" className="flex items-center gap-2 mx-auto">
              <Instagram className="h-5 w-5" />
              Seguirnos en Instagram
            </Button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="aspect-square bg-secondary rounded-lg overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <span className="text-muted-foreground text-sm">Trabajo {i}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-accent/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Lo que dicen nuestras clientas
            </h2>
            <p className="text-lg text-muted-foreground">
              La satisfacción de nuestras clientas es nuestra mayor recompensa
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <Badge variant="secondary" className="mt-1">
                      {testimonial.service}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            ¿Lista para mimarte?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Reserva tu cita hoy y descubre la diferencia de un servicio profesional
          </p>
          <Button
            variant="secondary"
            size="lg"
            className="text-lg px-8 py-4"
            onClick={() => window.open("tel:+34123456789", "_self")}
          >
            <Phone className="h-5 w-5 mr-2" />
            Llamar Ahora
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
