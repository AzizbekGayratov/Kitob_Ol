export interface FormDataType {
  title: string;
  category_id: string;
  author_id: string;
  shitrix_code: string;
  language_id: string;
  is_new: boolean | string;
  writing_type: string;
  translator_id: string;
  total_pages: number | null;
  publisher_id: string;
  published_year: string;
  price: number | null;
  cover_format: string;
  cover_type: string;
  description: string;
  location: {
    city_id: string;
    district_id: string;
  };
  image_url: string;
  img_url: string;
  stock: number; // new field
  sellerId: string;
}
export interface initialJobForm {
  description: string;
  status: string;
  title: string;
  salary_from: number | any;
  salary_to: number | any;
  working_types: string;
  typeOfTraining: string;
  working_styles: string;
  phone_number: string;
  location: {
    city_id: string;
    district_id: string;
  };
  toJobCurrency?: string;
  fromJobCurrency?: string;
}

export interface ComponentPropsType {
  formData: FormDataType;
  setFormData: React.Dispatch<React.SetStateAction<FormDataType>> | any;
  reset?: string | boolean;
}

export interface ComponentPropsTypeJob {
  jobFormData: initialJobForm;
  setJobFormData: React.Dispatch<React.SetStateAction<initialJobForm>> | any;
  reset?: string | boolean;
}

export interface PublishersType {
  email: string;
  id: string;
  image_url: string;
  location: {
    city_id: string;
    district_id: string;
  };
  locations: [
    {
      city_id: string;
      district_id: string;
      id: string;
    }
  ];
  name: string;
  phone_number: string;
  phone_numbers: [
    {
      id: string;
      phone_number: string;
    }
  ];
  type: string;
}

export interface BookCategoriesType {
  id: string;
  description?: string;
  name: string;
}

export type DropDownType = "language" | "announcement" | "profile";

export interface CityProps {
  id: string;
  name: {
    en: string;
    ru: string;
    uz: string;
  };
}
export interface DistrictProps {
  id: string;
  name: {
    en: string;
    ru: string;
    uz: string;
  };
  name_json: string;
}

export type languagesType = "uz" | "ru" | "en";

export interface TextInputProps {
  type?: string;
  name?: string;
  value?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  className?: string;
}

export interface BookAuthorsType {
  id: string;
  name: string;
  surname: string;
  biography: string;
}

export interface BookTranslatorsType {
  id: string;
  name: string;
  surname: string;
  biography: string;
}

export interface BookLanguagesType {
  id: string;
  name: string;
}

export interface TextAreaProps {
  name: string;
  rows: number;
  maxLength: number;
  placeholder: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export interface SelectInputType {
  name: string;
  id: string;
  className?: string;
  value?: string | boolean;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  required?: boolean;
  defaultValue?: string;
  options: { id: string; name: string; surname?: string }[];
}
