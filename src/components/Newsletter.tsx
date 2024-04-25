import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { projectsService } from "../services/projects.service";
import { useValueStore } from "../store/valueStore";
import TermsAndConditionsNewsletter from "./TermsAndConditionsNewsletter";

function Newsletter() {
  const { setTermsAndConditionsNewsletterIsOpen } = useValueStore((state) => ({
    TermsAndConditionsNewsletterIsOpen:
      state.TermsAndConditionsNewsletterIsOpen,
    setTermsAndConditionsNewsletterIsOpen:
      state.setTermsAndConditionsNewsletterIsOpen,
  }));

  const [email, setEmail] = useState("");
  const [numberOfEmails, setNumberOfEmails] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await projectsService.getNumberOfEmails();

        if (response?.status === 200) {
          setNumberOfEmails(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const onHandleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      toast.error("Por favor, introduce un correo electrónico válido.");
      return;
    }

    const data = {
      email: email,
    };

    if (data) {
      try {
        const response = await projectsService.sendEmail(data);

        if (response?.status === 200) {
          setEmail("");
          toast.success("Email enviado correctamente.");
        }
      } catch (error) {
        console.log(error);
        toast.error("Ha ocurrido un error al enviar el email.");
      }
    }
  };

  return (
    <div className="flex flex-col items-center gap-2 bg-[#FFD59A] border-[1px] border-[#BF6C0D] rounded-md p-5">
      <img
        src="/images/newsletter_image.png"
        alt=""
        className="bg-white p-4 rounded-md w-[100px]"
      />
      <p className="satoshi-bold text-xl">{`Únete a ${numberOfEmails} personas`}</p>
      <p>Recibe en tu correo cada semana los 10 proyectos más votados.</p>
      <form className="relative w-full" onSubmit={onHandleSubmit}>
        <input
          type="email"
          name="email"
          id="email"
          className="py-2 px-3 border border-gray-300 rounded-md w-full"
          placeholder="Introduce tu email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
          title="Por favor, introduce un correo electrónico válido."
          required
        />
        <button
          type="submit"
          className="absolute inset-y-0 right-0 px-4 py-2 bg-[#BF6C0D] text-white rounded-md hover:bg-[#A56021] transition-all"
        >
          Enviar
        </button>
      </form>
      <p className="text-sm">
        Al darle a enviar aceptas los
        {
          <button
            onClick={() => setTermsAndConditionsNewsletterIsOpen(true)}
            className="font-bold"
          >
            términos y condiciones
          </button>
        }
      </p>
      <TermsAndConditionsNewsletter />
    </div>
  );
}

export default Newsletter;
