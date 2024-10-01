// export interface FormDataType {
//   bookName: string;
//   bookCategory: string;
//   bookAuthor: string;
//   bookID: string;
//   isInternationalBook: boolean;
//   selectedBookLanguage: string;
//   selectedTextType: string;
//   bookTranslator: string;
//   bookPages: string;
//   bookPublisher: string;
//   bookYear: string;
//   bookPrice: string;
//   bookCurrency: string;
//   paperFormat: string;
//   bookCover: string;
//   bookCondition: string;
//   images: [];
// }

// export interface FormDataType {
//   bookName: string;
//   bookCategory: string;
//   bookAuthor: string;
//   bookID: string;
//   isInternationalBook: boolean;
//   selectedBookLanguage: string;
//   selectedTextType: string;
//   bookTranslator: string;
//   bookPages: string;
//   bookPublisher: string;
//   bookYear: string;
//   bookPrice: string;
//   bookCurrency: string;
//   paperFormat: string;
//   bookCover: string;
//   bookCondition: string;
//   applicant: string;
//   email: string;
//   phoneNumber: string;
//   description: string;
//   usefulInformations: string;
//   location: string;
//   images: (string | ArrayBuffer | null)[];
// }

export interface FormDataType {
  title: string;
  category_id: string;
  author_id: string;
  shitrix_code: string;
  language_id: string;
  is_new: boolean | string;
  writing_type: string;
  translator_id: string;
  total_pages: string;
  publisher_id: string;
  published_year: string;
  price: string;
  cover_format: string;
  cover_type: string;
  description: string;
  location: {
    city_id: string;
    district_id: string;
  };
  image_url: string; // new field
  img_url: string; // new field
  stock: number; // new field

  // Optional fields
  bookCurrency?: string; // optional
  bookCondition?: boolean; // optional
  applicant?: string; // optional
  email?: string; // optional
  phoneNumber?: string; // optional
  usefulInformations: string; // optional
  useSecondaryInformations: string; // optional
  images?: (string | ArrayBuffer | null)[]; // optional
}
export interface initialJobForm {
  description: string;
  status: string;
  title: string;
  salary_from: number | undefined;
  salary_to: number | undefined;
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
}

export interface ComponentPropsTypeJob {
  jobFormData: initialJobForm;
  setJobFormData: React.Dispatch<React.SetStateAction<initialJobForm>> | any;
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
