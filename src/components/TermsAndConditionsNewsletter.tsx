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
            <strong>1. Participación:</strong>
            <br />
            - La hackathon está abierta a participantes de todo el mundo.
            <br />
            - Para participar en el sorteo de una plaza para el bootcamp de
            4Geeks Academy, los participantes deben presentar un proyecto
            completo durante el periodo de la hackathon.
            <br />
            - Para participar en el sorteo del pack de productos de Logitech,
            los participantes deben presentar un proyecto completo y residir en
            España en el momento de la participación.
            <br />
            <br />
            <strong>2. Proyectos:</strong>
            <br />
            - Los proyectos presentados deben ser originales y creados durante
            el periodo de la hackathon, no se pueden hacer commit al
            respositorio de github antes de la fecha de inicio de la hackathon,
            ni después de la fecha de finalización.
            <br />
            - Los participantes son responsables de obtener los derechos y
            autorizaciones necesarios para cualquier material utilizado en sus
            proyectos.
            <br />
            - El incumplimiento de estos términos y condiciones puede resultar
            en la descalificación del proyecto y la eliminación de la
            participación en los sorteos.
            <br />
            <br />
            <strong>3. Sorteos:</strong>
            <br />
            - El sorteo de la plaza para el bootcamp se realizará de forma
            aleatoria entre todos los proyectos completos y válidos presentados
            durante la hackathon.
            <br />
            - El sorteo del pack de productos de Logitech se realizará de forma
            aleatoria entre todos los proyectos completos y válidos presentados
            por participantes que residan en España.
            <br />
            - Los ganadores serán contactados a través de los datos
            proporcionados durante la inscripción en la hackathon. Si un ganador
            no responde en un plazo de 7 días, se seleccionará otro ganador de
            manera aleatoria.
            <br />
            - Los premios no pueden ser canjeados por su valor en efectivo u
            otro premio.
            <br />
            <br />
            <strong>4. Protección de Datos:</strong>
            <br />
            - Al participar en la hackathon, los participantes aceptan que el
            Organizador pueda utilizar sus datos personales para los fines de la
            hackathon y los sorteos.
            <br />
            - Los datos personales de los participantes serán tratados de
            acuerdo con la normativa vigente sobre protección de datos y no
            serán compartidos con terceros sin consentimiento previo.
            <br />
            - El Organizador se reserva el derecho de publicar los nombres de
            los ganadores en sus redes sociales y página web.
            <br />
            <br />
            - El Organizador podrá utilizar los correos electrónicos de los
            participantes para enviar información sobre futuras ediciones de la
            hackathon, así como otras promociones y eventos organizados por el
            Organizador.
            <br />
            <strong>5. Disposiciones Generales:</strong>
            <br />
            - El Organizador se reserva el derecho de modificar estos términos y
            condiciones en cualquier momento, con aviso previo a los
            participantes.
            <br />
            - El Organizador se reserva el derecho de descalificar a cualquier
            participante que incumpla estos términos y condiciones o que se
            comporte de manera inapropiada durante la hackathon.
            <br />
            - Al participar en la hackathon, los participantes aceptan cumplir
            con todas las reglas y decisiones del Organizador.
            <br />
            <br />
            Al participar en la hackathon{" "}
            <strong>"La Hackathon Del Dev"</strong>, los participantes aceptan
            todos los términos y condiciones establecidos anteriormente.
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
