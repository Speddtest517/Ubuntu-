
import React, { useState, useCallback, useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from './components/LayoutComponents';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import DestinationsPage from './pages/DestinationsPage';
import DestinationDetailPage from './pages/DestinationDetailPage';
import PackagesPage from './pages/PackagesPage';
import PackageDetailPage from './pages/PackageDetailPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import ContactPage from './pages/ContactPage';
import VisaInfoPage from './pages/VisaInfoPage';
import VisaCountryDetailPage from './pages/VisaCountryDetailPage';
import AppointmentsPage from './pages/AppointmentsPage';
import AdminDashboardPage from './pages/AdminDashboardPage';
import NotFoundPage from './pages/NotFoundPage';
import { Appointment, VisaType, LocationType, Destination, TravelPackage, BlogPost } from './types';
import { Alert } from './components/DisplayComponents'; 
import { INITIAL_DESTINATIONS_DATA, INITIAL_PACKAGES_DATA, INITIAL_BLOG_POSTS_DATA } from './initialData';

// Páginas de placeholder para funcionalidades não totalmente desenvolvidas
const BookingPagePlaceholder: React.FC = () => (
  <div className="container mx-auto p-8 text-center">
    <h1 className="text-3xl font-bold">Reserva Online</h1>
    <p className="mt-4 text-lg">Nosso sistema seguro de reserva online estará disponível em breve! Por enquanto, entre em contato conosco ou agende uma consultoria.</p>
  </div>
);

const CustomerAreaPlaceholder: React.FC = () => (
  <div className="container mx-auto p-8 text-center">
    <h1 className="text-3xl font-bold">Área do Cliente</h1>
    <p className="mt-4 text-lg">Gerencie suas reservas e pontos de fidelidade aqui. Esta funcionalidade está em desenvolvimento.</p>
  </div>
);


const App: React.FC = () => {
  const [alert, setAlert] = useState<{type: 'success' | 'error' | 'info', message: string} | null>(null);

  const showAlert = (type: 'success' | 'error' | 'info', message: string, duration: number = 4000) => {
    setAlert({ type, message });
    setTimeout(() => setAlert(null), duration);
  };
  
  // State and CRUD for Appointments
  const [appointments, setAppointments] = useState<Appointment[]>(() => {
    const saved = localStorage.getItem('ubuntuAppointments');
    if (saved) {
      const parsed = JSON.parse(saved);
      return parsed.map((appt: any) => ({
        ...appt,
        status: appt.status === 'Pending' ? 'Pendente' : appt.status === 'Confirmed' ? 'Confirmado' : appt.status === 'Cancelled' ? 'Cancelado' : appt.status,
        locationType: appt.locationType || LocationType.TO_BE_DECIDED, 
      }));
    }
    return [ 
      { id: 'appt-1', name: 'Alice Wonderland', email: 'alice@example.com', age: 30, visaType: VisaType.TOURIST, preferredDate: '2024-09-15', preferredTime: '10:00', message: 'Procurando por viagem a Portugal.', status: 'Confirmado', locationType: LocationType.ONLINE, locationDetails: 'Google Meet Link' },
      { id: 'appt-2', name: 'Bob O Construtor', email: 'bob@example.com', age: 45, visaType: VisaType.WORK, preferredDate: '2024-09-20', preferredTime: '14:00', message: 'Preciso de ajuda com o Visto de Trabalhador Qualificado do Reino Unido.', status: 'Pendente', locationType: LocationType.PHYSICAL, locationDetails: 'Escritório Ubuntu Travel - Sala 3' },
    ] as Appointment[];
  });

  useEffect(() => {
    localStorage.setItem('ubuntuAppointments', JSON.stringify(appointments));
  }, [appointments]);

  const addAppointment = useCallback((newAppointmentData: Omit<Appointment, 'id' | 'status'>) => {
    setAppointments(prev => [
        ...prev, 
        { ...newAppointmentData, id: `appt-${Date.now()}`, status: 'Pendente' as const }
    ]);
    showAlert('success', 'Agendamento solicitado com sucesso! Entraremos em contato em breve.');
  }, []);

  const adminUpdateAppointment = useCallback((updatedAppointment: Appointment) => {
    setAppointments(prev => prev.map(appt => appt.id === updatedAppointment.id ? updatedAppointment : appt));
    showAlert('success', `Agendamento ID ${updatedAppointment.id} atualizado.`);
  }, []);

  // State and CRUD for Destinations
  const [destinations, setDestinations] = useState<Destination[]>(() => {
    const saved = localStorage.getItem('ubuntuDestinations');
    return saved ? JSON.parse(saved) : INITIAL_DESTINATIONS_DATA;
  });
  useEffect(() => { localStorage.setItem('ubuntuDestinations', JSON.stringify(destinations)); }, [destinations]);

  const addDestination = useCallback((item: Omit<Destination, 'id'>) => {
    setDestinations(prev => [...prev, { ...item, id: `dest-${Date.now()}`, popular: item.popular || false }]);
    showAlert('success', 'Destino adicionado com sucesso!');
  }, []);
  const updateDestination = useCallback((item: Destination) => {
    setDestinations(prev => prev.map(d => d.id === item.id ? item : d));
    showAlert('success', `Destino ${item.name} atualizado!`);
  }, []);
  const deleteDestination = useCallback((id: string) => {
    setDestinations(prev => prev.filter(d => d.id !== id));
    showAlert('success', 'Destino excluído!');
  }, []);

  // State and CRUD for Travel Packages
  const [travelPackages, setTravelPackages] = useState<TravelPackage[]>(() => {
    const saved = localStorage.getItem('ubuntuPackages');
    // Ensure existing packages from localStorage also have price 0 if they exist
    if (saved) {
      const parsedPackages: TravelPackage[] = JSON.parse(saved);
      return parsedPackages.map(pkg => ({ ...pkg, price: 0 }));
    }
    return INITIAL_PACKAGES_DATA.map(pkg => ({ ...pkg, price: 0 })); // Ensure initial data also has price 0
  });
  useEffect(() => { localStorage.setItem('ubuntuPackages', JSON.stringify(travelPackages)); }, [travelPackages]);

  const addPackage = useCallback((item: Omit<TravelPackage, 'id'>) => {
    // Ensure price is 0 when adding a new package, as the form field is removed
    const newPackage: TravelPackage = { ...item, price: 0, id: `pkg-${Date.now()}` };
    setTravelPackages(prev => [...prev, newPackage]);
    showAlert('success', 'Pacote adicionado com sucesso!');
  }, []);
  const updatePackage = useCallback((item: TravelPackage) => {
    // Ensure price is 0 when updating a package
    const updatedPackage: TravelPackage = { ...item, price: 0 };
    setTravelPackages(prev => prev.map(p => p.id === updatedPackage.id ? updatedPackage : p));
    showAlert('success', `Pacote ${item.name} atualizado!`);
  }, []);
  const deletePackage = useCallback((id: string) => {
    setTravelPackages(prev => prev.filter(p => p.id !== id));
    showAlert('success', 'Pacote excluído!');
  }, []);

  // State and CRUD for Blog Posts
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(() => {
    const saved = localStorage.getItem('ubuntuBlogPosts');
    return saved ? JSON.parse(saved) : INITIAL_BLOG_POSTS_DATA;
  });
  useEffect(() => { localStorage.setItem('ubuntuBlogPosts', JSON.stringify(blogPosts)); }, [blogPosts]);
  
  const addBlogPost = useCallback((item: Omit<BlogPost, 'id'>) => {
    setBlogPosts(prev => [...prev, { ...item, id: `post-${Date.now()}` }]);
    showAlert('success', 'Post do blog adicionado com sucesso!');
  }, []);
  const updateBlogPost = useCallback((item: BlogPost) => {
    setBlogPosts(prev => prev.map(b => b.id === item.id ? item : b));
    showAlert('success', `Post '${item.title}' atualizado!`);
  }, []);
  const deleteBlogPost = useCallback((id: string) => {
    setBlogPosts(prev => prev.filter(b => b.id !== id));
    showAlert('success', 'Post do blog excluído!');
  }, []);

  return (
    <HashRouter>
      {alert && (
        <div className="fixed top-20 right-5 z-[1000] w-full max-w-sm">
           <Alert type={alert.type} message={alert.message} onClose={() => setAlert(null)} />
        </div>
      )}
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage destinations={destinations} travelPackages={travelPackages} />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/destinations" element={<DestinationsPage destinations={destinations} />} />
          <Route path="/destinations/:id" element={<DestinationDetailPage destinations={destinations} travelPackages={travelPackages}/>} />
          <Route path="/packages" element={<PackagesPage travelPackages={travelPackages} destinations={destinations} />} />
          <Route path="/packages/:id" element={<PackageDetailPage travelPackages={travelPackages} />} />
          <Route path="/blog" element={<BlogPage blogPosts={blogPosts}/>} />
          <Route path="/blog/:id" element={<BlogPostPage blogPosts={blogPosts} />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/visa-info" element={<VisaInfoPage />} />
          <Route path="/visa-info/:countryName" element={<VisaCountryDetailPage />} />
          <Route path="/appointments" element={<AppointmentsPage addAppointment={addAppointment} />} />
          <Route 
            path="/admin" 
            element={
              <AdminDashboardPage 
                appointments={appointments} 
                adminUpdateAppointment={adminUpdateAppointment}
                destinations={destinations}
                addDestination={addDestination}
                updateDestination={updateDestination}
                deleteDestination={deleteDestination}
                travelPackages={travelPackages}
                addPackage={addPackage}
                updatePackage={updatePackage}
                deletePackage={deletePackage}
                blogPosts={blogPosts}
                addBlogPost={addBlogPost}
                updateBlogPost={updateBlogPost}
                deleteBlogPost={deleteBlogPost}
              />
            } 
          />
          
          <Route path="/booking" element={<BookingPagePlaceholder />} />
          <Route path="/customer-area" element={<CustomerAreaPlaceholder />} />

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
