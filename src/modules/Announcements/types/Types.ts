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
  title: string; // was bookName
  category_id: string; // was bookCategory
  author_id: string; // was bookAuthor
  shitrix_code: string; // was bookID
  language_id: string; // was selectedBookLanguage
  is_new: boolean; // was isInternationalBook
  writing_type: string; // was selectedTextType
  translator_id: string; // was bookTranslator
  total_pages: string; // was bookPages
  publisher_id: string; // was bookPublisher
  published_year: string; // was bookYear
  price: string; // was bookPrice
  cover_format: string; // was paperFormat
  cover_type: string; // was bookCover
  description: string; // was description
  location: {
    // was location
    city_id: string;
    district_id: string;
  };
  image_url: string; // new field
  img_url: string; // new field
  stock: number; // new field

  // Optional fields
  bookCurrency?: string; // optional
  bookCondition?: string; // optional
  applicant?: string; // optional
  email?: string; // optional
  phoneNumber?: string; // optional
  usefulInformations?: string; // optional
  useSecondaryInformations: string; // optional
  images?: (string | ArrayBuffer | null)[]; // optional
}

// export interface FormDataType {
//   title: string;
//   writing_type: string;
//   cover_type: string;
//   cover_format: string;
//   category_id: string;
//   author_id: string;
//   bookID: string;
//   isInternationalBook: boolean;
//   selectedBookLanguage: string;
//   bookTranslator: string;
//   bookPages: string;
//   bookPublisher: string;
//   bookYear: string;
//   bookPrice: string;
//   bookCurrency: string;
//   bookCondition: string;
//   applicant: string;
//   email: string;
//   phoneNumber: string;
//   description: string;
//   usefulInformations: string;
//   location: string;
//   images: (string | ArrayBuffer | null)[];
// }

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
