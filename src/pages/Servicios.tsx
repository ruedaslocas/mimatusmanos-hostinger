import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone } from "lucide-react";
import manicureImage from "@/assets/manicure-service.jpg";
import pedicureImage from "@/assets/pedicure-service.jpg";
import eyebrowImage from "@/assets/eyebrow-service.jpg";

const Servicios = () => {
  const serviceCategories = [
    {
      title: "Manos",
      image: manicureImage,
      services: [
        {
          name: "Manicura clásica",
          description: "Cuidado completo de cutículas, limado y esmaltado tradicional",
          price: "25€"
        },
        {
          name: "Esmaltado semipermanente",
          description: "Manicura de larga duración con acabado perfecto hasta 3 semanas",
          price: "35€"
        },
        {
          name: "Uñas acrílicas/gel",
          description: "Extensión y fortalecimiento para uñas largas y resistentes",
          price: "45€"
        },
        {
          name: "Nail Art personalizado",
          description: "Diseños únicos y creativos adaptados a tu estilo personal",
          price: "55€"
        }
      ]
    },
    {
      title: "Pies",
      image: pedicureImage,
      services: [
        {
          name: "Pedicura completa",
          description: "Tratamiento integral con exfoliación, hidratación y esmaltado",
          price: "30€"
        },
        {
          name: "Esmaltado semipermanente",
          description: "Pedicura de larga duración con colores vibrantes y duraderos",
          price: "40€"
        }
      ]
    },
    {
      title: "Mirada",
      image: eyebrowImage,
      services: [
        {
          name: "Diseño y depilación de cejas",
          description: "Perfilado profesional que realza tu mirada natural",
          price: "20€"
        },
        {
          name: "Tinte de cejas y pestañas",
          description: "Color profesional para un look más definido y expresivo",
          price: "25€"
        }
      ]
    }
  ];

  return (
    <Layout>
      {/* Header Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Nuestros Servicios
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ofrecemos una amplia gama de servicios de belleza y estética, siempre con 
            los más altos estándares de calidad y profesionalidad.
          </p>
        </div>
      </section>

      {/* Services Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {serviceCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-20 last:mb-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className={categoryIndex % 2 === 1 ? "order-2" : ""}>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <img 
                      src={category.image} 
                      alt={`Servicios de ${category.title}`}
                      className="w-full h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-6 left-6">
                      <Badge variant="secondary" className="text-lg px-4 py-2 font-semibold">
                        {category.title}
                      </Badge>
                    </div>
                  </div>
                </div>
                
                <div className={categoryIndex % 2 === 1 ? "order-1" : ""}>
                  <div className="space-y-6">
                    <h2 className="text-3xl font-heading font-bold text-primary mb-8">
                      Servicios de {category.title}
                    </h2>
                    
                    {category.services.map((service, serviceIndex) => (
                      <Card key={serviceIndex} className="border-l-4 border-l-primary">
                        <CardHeader className="pb-3">
                          <div className="flex justify-between items-start">
                            <CardTitle className="text-lg font-heading">
                              {service.name}
                            </CardTitle>
                            <Badge variant="outline" className="text-lg font-bold">
                              {service.price}
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground">
                            {service.description}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            ¿Tienes alguna pregunta sobre nuestros servicios?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Nuestro equipo estará encantado de asesorarte y ayudarte a elegir 
            el tratamiento perfecto para ti.
          </p>
          <Button
            variant="secondary"
            size="lg"
            className="text-lg px-8 py-4"
            onClick={() => window.open("tel:+34123456789", "_self")}
          >
            <Phone className="h-5 w-5 mr-2" />
            Llamar y consultar
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Servicios;