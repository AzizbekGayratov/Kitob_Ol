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

export interface FormDataType {
  bookName: string;
  bookCategory: string;
  bookAuthor: string;
  bookID: string;
  isInternationalBook: boolean;
  selectedBookLanguage: string;
  selectedTextType: string;
  bookTranslator: string;
  bookPages: string;
  bookPublisher: string;
  bookYear: string;
  bookPrice: string;
  bookCurrency: string;
  paperFormat: string;
  bookCover: string;
  bookCondition: string;
  applicant: string;
  email: string;
  phoneNumber: string;
  description: string;
  usefulInformations: string;
  location: string;
  images: (string | ArrayBuffer | null)[];
}

export interface ComponentPropsType {
  formData: FormDataType;
  setFormData: React.Dispatch<React.SetStateAction<FormDataType>> | any;
}
