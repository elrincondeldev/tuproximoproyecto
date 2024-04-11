import { useValueStore } from "../store/valueStore";

function TermsAndConditionsNewsletter() {
  const {
    TermsAndConditionsNewsletterIsOpen,
    setTermsAndConditionsNewsletterIsOpen,
  } = useValueStore((state) => ({
    TermsAndConditionsNewsletterIsOpen:
      state.TermsAndConditionsNewsletterIsOpen,
    setTermsAndConditionsNewsletterIsOpen:
      state.setTermsAndConditionsNewsletterIsOpen,
  }));

  if (!TermsAndConditionsNewsletterIsOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-[#FFD59A] p-6 rounded-lg shadow-lg max-w-md w-full border-4 border-[#BF6C0D]">
        <h2 className="text-lg font-bold mb-4">Términos y Condiciones</h2>
        <div className="overflow-y-auto max-h-80">
          <p className="text-sm text-left">
            <strong>1. Aceptación de Términos:</strong>
            <br />
            - Al suscribirte a nuestra newsletter, aceptas automáticamente estos
            términos y condiciones. Si no estás de acuerdo con alguno de estos
            términos, por favor abstente de suscribirte.
            <br />
            <br />
            <strong>2. Contenido de la Newsletter:</strong>
            <br />
            - La newsletter de El Rincón del Dev se enviará semanalmente a la
            dirección de correo electrónico proporcionada durante la
            suscripción. El contenido incluirá proyectos de desarrollo, noticias
            relevantes del mundo tecnológico y actualizaciones de mis redes
            sociales.
            <br />
            <br />
            <strong>3. Uso de Datos:</strong>
            <br />
            - Al suscribirte a esta newsletter, aceptas que El Rincón del Dev
            pueda utilizar tu dirección de correo electrónico para enviar
            contenido relacionado con la newsletter y sus redes sociales. Tus
            datos personales nunca serán vendidos, compartidos o utilizados con
            fines comerciales por terceros.
            <br />
            <br />
            <strong>4. Cancelación de Suscripción:</strong>
            <br />
            - Puedes cancelar tu suscripción a la newsletter en cualquier
            momento utilizando el enlace proporcionado al final de cada correo
            electrónico. Tu solicitud de cancelación se procesará de inmediato.
            <br />
            <br />
            <strong>5. Modificaciones:</strong>
            <br />
            - El Rincón del Dev se reserva el derecho de modificar estos
            términos y condiciones en cualquier momento. Las modificaciones
            entrarán en vigor inmediatamente después de su publicación en esta
            página.
            <br />
            <br />
            <strong>5. Contacto:</strong>
            <br />
            - Si tienes alguna pregunta, comentario o inquietud sobre estos
            términos y condiciones, por favor contáctame a través de mis redes
            sociales o enviando un correo electrónico a jrmh.buisness@gmail.com.
            <br />
            <br />
          </p>
        </div>
        <button
          onClick={() => setTermsAndConditionsNewsletterIsOpen(false)}
          className="mt-4 px-4 py-2 font-bold hover:bg-[#bf6c0dd0] w-fit rounded-[5px] bg-[#BF6C0D] self-center"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
}

export default TermsAndConditionsNewsletter;
