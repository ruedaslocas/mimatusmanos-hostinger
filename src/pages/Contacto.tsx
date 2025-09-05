import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, Instagram, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contacto = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensaje enviado",
      description: "Gracias por contactarnos. Te responderemos pronto.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Layout>
      {/* Header Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Contacto
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Estamos aquí para atenderte. Contáctanos para reservar tu cita o 
            resolver cualquier consulta que tengas.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Main Phone CTA */}
          <div className="text-center mb-16">
            <Card className="bg-primary text-primary-foreground border-none shadow-2xl max-w-2xl mx-auto">
              <CardContent className="p-12">
                <Phone className="h-16 w-16 mx-auto mb-6" />
                <h2 className="text-3xl font-heading font-bold mb-4">
                  ¡Llámanos ahora!
                </h2>
                <p className="text-xl mb-8 opacity-90">
                  La forma más rápida de reservar tu cita
                </p>
                <div className="text-4xl font-bold mb-6">
                  +34 123 456 789
                </div>
                <Button
                  variant="secondary"
                  size="lg"
                  className="text-lg px-8 py-4"
                  onClick={() => window.open("tel:+34123456789", "_self")}
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Llamar ahora
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-heading font-bold mb-8">
                  Información de contacto
                </h2>
                
                <div className="space-y-6">
                  <Card className="border-l-4 border-l-primary">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 p-3 rounded-full">
                          <Phone className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">Teléfono</h3>
                          <p className="text-muted-foreground">+34 123 456 789</p>
                          <p className="text-sm text-muted-foreground">
                            Disponible durante horario de atención
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-primary">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 p-3 rounded-full">
                          <Mail className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">Email</h3>
                          <p className="text-muted-foreground">info@mimatusmanos.com</p>
                          <p className="text-sm text-muted-foreground">
                            Respuesta en menos de 24 horas
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-primary">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 p-3 rounded-full">
                          <MapPin className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">Ubicación</h3>
                          <p className="text-muted-foreground">Calle Belleza 123</p>
                          <p className="text-muted-foreground">28001 Madrid, España</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Schedule */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    Horarios de atención
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Lunes - Viernes</span>
                      <span className="font-semibold">9:00 - 19:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sábados</span>
                      <span className="font-semibold">9:00 - 17:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Domingos</span>
                      <span className="text-muted-foreground">Cerrado</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card>
                <CardHeader>
                  <CardTitle>Síguenos en redes sociales</CardTitle>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    <Instagram className="h-5 w-5 mr-2" />
                    @mimatusmanos
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Envíanos un mensaje</CardTitle>
                  <p className="text-muted-foreground">
                    ¿Tienes alguna consulta? Escríbenos y te responderemos lo antes posible.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name">Nombre completo</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="message">Mensaje</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="mt-1"
                        placeholder="Cuéntanos qué servicio te interesa o cualquier consulta que tengas..."
                      />
                    </div>
                    
                    <Button type="submit" className="w-full" variant="cta">
                      <Send className="h-5 w-5 mr-2" />
                      Enviar mensaje
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-16">
            <h3 className="text-2xl font-heading font-bold mb-8 text-center">
              Nuestra ubicación
            </h3>
            <Card>
              <CardContent className="p-0">
                <div className="w-full h-96 bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <MapPin className="h-12 w-12 mx-auto mb-4" />
                    <p>Mapa interactivo</p>
                    <p className="text-sm">Calle Belleza 123, Madrid</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contacto;