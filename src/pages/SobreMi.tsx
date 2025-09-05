import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, Award, Heart, Users, Clock } from "lucide-react";
import therapistImage from "@/assets/therapist-portrait.jpg";

const SobreMi = () => {
  const achievements = [
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Certificación Profesional",
      description: "Titulada en Estética y Belleza con especialización en nail art"
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "+500 Clientas Satisfechas",
      description: "Más de 500 clientas han confiado en nuestros servicios"
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "5 Años de Experiencia",
      description: "Cinco años perfeccionando técnicas y creando belleza"
    },
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: "Pasión por el Detalle",
      description: "Cada trabajo es único y personalizado para cada clienta"
    }
  ];

  return (
    <Layout>
      {/* Header Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Sobre Mí
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conoce la historia y la pasión detrás de MimaTusManos
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={therapistImage} 
                  alt="Profesional de MimaTusManos"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-background p-6 rounded-2xl shadow-lg border">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">5+</div>
                  <div className="text-sm text-muted-foreground">Años de experiencia</div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-8">
              <div>
                <Badge variant="outline" className="mb-4">
                  Fundadora & Especialista
                </Badge>
                <h2 className="text-3xl font-heading font-bold mb-6">
                  La pasión por la belleza hecha realidad
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Mi nombre es <span className="font-semibold text-foreground">Elena Martínez</span>, 
                    y soy la fundadora de MimaTusManos. Mi pasión por la belleza y el cuidado 
                    personal comenzó hace más de cinco años, cuando decidí convertir mi amor 
                    por el arte en una profesión.
                  </p>
                  <p>
                    Después de formarme profesionalmente en las mejores academias de estética 
                    y belleza, decidí crear un espacio donde cada clienta pudiera sentirse 
                    especial y única. En MimaTusManos, cada tratamiento es una obra de arte 
                    personalizada.
                  </p>
                  <p>
                    Mi filosofía se basa en tres pilares fundamentales: la calidad en cada 
                    detalle, la higiene como prioridad absoluta, y la creatividad como forma 
                    de expresión. Creo firmemente que las manos son nuestra carta de presentación, 
                    y por eso me dedico a cuidarlas con el máximo cariño y profesionalidad.
                  </p>
                  <p>
                    Cada día es una oportunidad para crear algo hermoso y hacer que mis clientas 
                    se sientan radiantes y seguras de sí mismas. Eso es lo que más me motiva 
                    en mi trabajo.
                  </p>
                </div>
              </div>

              <Button
                variant="cta"
                size="lg"
                className="text-lg px-8 py-4"
                onClick={() => window.open("tel:+34123456789", "_self")}
              >
                <Phone className="h-5 w-5 mr-2" />
                Reservar mi cita
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-accent/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Mi Compromiso Contigo
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Estos son los valores y logros que definen mi trabajo y mi dedicación 
              a la excelencia en cada servicio.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center border-none shadow-lg">
                <CardContent className="p-8">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    {achievement.icon}
                  </div>
                  <h3 className="text-lg font-heading font-semibold mb-3">
                    {achievement.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Touch */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="bg-primary text-primary-foreground border-none">
            <CardContent className="p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6">
                "Mi objetivo es que cada clienta salga sintiéndose hermosa, 
                segura y completamente satisfecha con el resultado."
              </h2>
              <p className="text-lg opacity-90 mb-8">
                - Elena Martínez, Fundadora de MimaTusManos
              </p>
              <Button
                variant="secondary"
                size="lg"
                className="text-lg px-8 py-4"
                onClick={() => window.open("tel:+34123456789", "_self")}
              >
                <Phone className="h-5 w-5 mr-2" />
                Contactar ahora
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default SobreMi;