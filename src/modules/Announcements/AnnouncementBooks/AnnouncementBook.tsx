import React, { useEffect, useState } from "react";
import AboutAnnouncement from "./components/aboutAnnouncement/AboutAnnouncement";
import Description from "./components/description/Description";
import Images from "./components/images/Images";
import Location from "./components/location/Location";
import SubmitForm from "./components/submitForm/SubmitForm";
import { FormDataType, languagesType } from "../types/Types";
import api from "Services/Api";
import { Storage } from "Services";
import { useNavigate } from "react-router-dom";
import AnnouncementPreviewModal from "../components/announcementPreview/AnnouncementPreviewModal";
import { useSelector } from "react-redux";

const initialForm: FormDataType = {
  author_id: "",
  category_id: "",
  cover_format: "",
  cover_type: "",
  description: "",
  image_url: "",
  img_url: "",
  is_new: "",
  language_id: "",
  location: { city_id: "", district_id: "" },
  price: null,
  published_year: "",
  shitrix_code: "",
  publisher_id: "",
  stock: 0,
  title: "",
  total_pages: null,
  translator_id: "",
  writing_type: "",
  seller_id: "",
};

function AnnouncementBook() {
  const [formData, setFormData] = useState(initialForm);
  const [reset, setReset] = useState<string>("");
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  console.log("Loading ==>", loading);


  // State to store fetched data
  const [author, setAuthor] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [publisher, setPublisher] = useState<string>("");
  const [bookLanguage, setBookLanguage] = useState<string>("");
  const [translator, setTranslator] = useState<string>("");
  const [city, setCity] = useState<string>("Unknown");
  const [district, setDistrict] = useState<string>("Unknown");

  const { language } = useSelector(
    (state: { language: { language: languagesType } }) => state.language
  );

  const navigate = useNavigate();
  const user_token = Storage.get("token");
  const user_access_token = user_token
    ? JSON.parse(user_token).access_token
    : "";
  const publisher_token = Storage.get("publisher_token");
  const publisher_access_token = publisher_token
    ? JSON.parse(publisher_token).access_token
    : "";

  const token = user_access_token ? user_access_token : publisher_access_token;

  const publisherToken = window.sessionStorage.getItem("profile");
  formData.seller_id = publisherToken ? JSON.parse(publisherToken).id : "";

  const fetchFromId = async ({
    apiPath,
    id,
    setValue,
  }: {
    apiPath: string;
    id: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
  }) => {
    try {
      setLoading(true);
      const response = await api.get(`${apiPath}?id=${id}`);

      setValue(
        response.data[language]
          ? `${response.data[language]} ${response.data.surname || ""}`.trim()
          : response.data.name
          ? `${response.data.name} ${response.data.surname || ""}`.trim()
          : response.data.title || "Unknown"
      );
    } catch (error) {
      console.error(`Error fetching ${apiPath} data:`, error);
      setValue("Unknown");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (modalOpen) {
      if (formData.author_id) {
        fetchFromId({
          apiPath: "/authors/get",
          id: formData.author_id,
          setValue: setAuthor,
        });
      }
      if (formData.category_id) {
        fetchFromId({
          apiPath: "/categories/get",
          id: formData.category_id,
          setValue: setCategory,
        });
      }
      if (formData.publisher_id) {
        fetchFromId({
          apiPath: "/publishers/get",
          id: formData.publisher_id,
          setValue: setPublisher,
        });
      }
      if (formData.language_id) {
        fetchFromId({
          apiPath: "/languages/get",
          id: formData.language_id,
          setValue: setBookLanguage,
        });
      }
      if (formData.location.city_id) {
        fetchFromId({
          apiPath: "/cities/get",
          id: formData.location.city_id,
          setValue: setCity,
        });
      }
      if (formData.location.district_id) {
        fetchFromId({
          apiPath: "/districts/get",
          id: formData.location.district_id,
          setValue: setDistrict,
        });
      }
      if (formData.translator_id) {
        fetchFromId({
          apiPath: "/translators/get",
          id: formData.translator_id,
          setValue: setTranslator,
        });
      }
    }
  }, [modalOpen, formData]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const submissionData = {
        ...formData,
        price: formData.price ? parseFloat(formData.price.toString()) : null,
        total_pages: formData.total_pages
          ? parseFloat(formData.total_pages.toString())
          : null,
        is_new: Boolean(formData.is_new),
      };

      const response = await api.post("/books/create", submissionData, {
        headers: { Authorization: `Bearer ${token}` },
      });

      console.log("Submission successful:", response.data);
      resetForm();
      navigate("/profile");
    } catch (error) {
      console.error("Submission failed:", error);
    }
  };

  const resetForm = () => {
    setReset("");
    setFormData(initialForm);
    setReset("resetted");
    console.log("Form has been reset");
  };

  const modalChildren = (
    <>
      <h1 className="text-center text-2xl sm:text-3xl font-bold pb-6">
        Kitob nomi: <u>{formData.title ? `"${formData.title}"` : "Unknown"}</u>
      </h1>

      <div className="flex flex-col gap-3 text-lg sm:text-xl leading-relaxed">
        <p>
          <strong>Author:</strong> <u>{author}</u>
        </p>
        <p>
          <strong>Category:</strong> <u>{category || "Unknown"}</u>
        </p>
        <p>
          <strong>Publisher:</strong> <u>{publisher}</u>
        </p>
        <p>
          <strong>Language:</strong> <u>{bookLanguage}</u>
        </p>
        <p>
          <strong>City:</strong> <u>{city}</u>
        </p>
        <p>
          <strong>District:</strong> <u>{district}</u>
        </p>
        <p>
          <strong>Translator:</strong> <u>{translator}</u>
        </p>
        <p>
          <strong>Price:</strong>{" "}
          <u>{formData.price ? `${formData.price} so'm` : "Unknown"}</u>
        </p>
        <p>
          <strong>Is new:</strong>{" "}
          <u>
            {formData.is_new ? (formData.is_new ? "Yes" : "No") : "Unknown"}
          </u>
        </p>
        <p>
          <strong>Total Pages:</strong>{" "}
          <u>{formData.total_pages || "Unknown"}</u>
        </p>
        <p>
          <strong>Description:</strong>{" "}
          <u>{formData.description || "Unknown"}</u>
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8">
        {formData.image_url && (
          <img
            className="w-full h-auto rounded-lg border border-gray-300 shadow-sm"
            src={formData.image_url}
            alt="Rasm 1"
          />
        )}
        {formData.img_url && (
          <img
            className="w-full h-auto rounded-lg border border-gray-300 shadow-sm"
            src={formData.img_url}
            alt="Rasm 2"
          />
        )}
      </div>
    </>
  );

  return (
    <section className="sm:p-2 flex flex-col gap-10">
      <form className="p-2 flex flex-col gap-10" onSubmit={handleSubmit}>
        <AboutAnnouncement formData={formData} setFormData={setFormData} />
        <Images formData={formData} setFormData={setFormData} reset={reset} />
        <Description formData={formData} setFormData={setFormData} />
        <Location formData={formData} setFormData={setFormData} reset={reset} />

        {/* Modal for preview */}
        <AnnouncementPreviewModal
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
        >
          {modalChildren}
        </AnnouncementPreviewModal>

        {/* Submit form buttons */}
        <SubmitForm modalOpen={modalOpen} setModalOpen={setModalOpen} />
      </form>
    </section>
  );
}

export default AnnouncementBook;
