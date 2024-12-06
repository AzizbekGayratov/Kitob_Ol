export interface CategoryType {
  id: string;
  name: {
    uz: string;
    ru: string;
    en: string;
  };
  description: {
    uz: string;
    ru: string;
    en: string;
  };
}

interface Phone_number {
  phone_number: string;
}
interface LocationProps {
  city_id: string;
  district_id: string;
  id?: string;
}
export interface PublisherType {
  email: string;
  id: string;
  location: LocationProps;
  locations: LocationProps[];
  name: string;
  phone_number: string;
  phone_numbers: Phone_number[];
  status: string;
  type: string;
}

export interface FilterType {
  name: string;
  author: string;
  category: string;
  nashriyot: string;
  language: string;
  city_id: string;
  district_id: string;
  value: number[];
}

export interface LanguageProps {
  id: string;
  name: {
    uz: string;
    ru: string;
    en: string;
  };
}

export interface AuthorProps {
  biography: string;
  id: string;
  name: string;
  surname: string;
}

export interface VacancyProps {
  name: string;
  type: string;
  graphic: string;
  who: string;
  work: string;
  city_id: string;
  district_id: string;
  value: number[];
}
