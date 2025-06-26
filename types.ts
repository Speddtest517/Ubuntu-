export interface Destination {
  id: string;
  name: string;
  description: string;
  longDescription?: string;
  imageUrl: string;
  category: string;
  popular?: boolean;
}

export interface TravelPackage {
  id: string;
  name: string;
  destinationName: string;
  price: number;
  duration: string;
  itinerary: string[];
  imageUrl: string;
  details?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  author: string;
  date: string;
  excerpt: string;
  imageUrl: string;
  content: string; 
}

export interface Testimonial {
  id: string;
  customerName: string;
  text: string;
  location?: string;
  avatarUrl?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
  bio?: string;
}

export enum VisaType {
  TOURIST = "Visto de Turista",
  STUDENT = "Visto de Estudante",
  WORK = "Visto de Trabalho",
  BUSINESS = "Visto de Negócios",
  OTHER = "Outro",
}

export const VISA_TYPES_ARRAY = [VisaType.TOURIST, VisaType.STUDENT, VisaType.WORK, VisaType.BUSINESS, VisaType.OTHER];


export interface VisaInfoCountry {
  country: string;
  generalInfo: string;
  imageUrl: string;
  visaTypes: Array<{
    name: string; 
    description: string;
    requirements: string[];
  }>;
}

export enum LocationType {
  PHYSICAL = "Físico",
  ONLINE = "Online",
  TO_BE_DECIDED = "A Combinar",
}
export const LOCATION_TYPES_ARRAY = [LocationType.PHYSICAL, LocationType.ONLINE, LocationType.TO_BE_DECIDED];


export interface Appointment {
  id: string;
  name: string;
  email: string;
  age: number;
  visaType: VisaType;
  preferredDate: string;
  preferredTime: string;
  message?: string;
  status: 'Pendente' | 'Confirmado' | 'Cancelado';
  locationType: LocationType;
  locationDetails?: string;
}

export interface NavLinkItem {
  label: string;
  path: string;
  icon?: React.ReactNode;
}

export interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'assistant';
  timestamp: number;
}

export interface GroundingChunkWeb {
  uri: string;
  title: string;
}

export interface GroundingChunk {
 web: GroundingChunkWeb;
}