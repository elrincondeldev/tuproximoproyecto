function RightBar() {
  return (
    <div className="bg-white border-[1px] border-[#E1E3E8] rounded-md p-5">
      <p className="text-left satoshi-bold text-2xl">Newsletter</p>
      <div className="flex flex-col items-center gap-2 bg-[#FFD59A] border-[1px] border-[#BF6C0D] rounded-md p-5">
        <img
          src="/images/newsletter_image.png"
          alt=""
          className="bg-white p-4 rounded-md w-[100px]"
        />
        <p className="satoshi-bold text-xl">Únete a 333 personas</p>
        <p>Recibe en tu email cada semana los 10 proyectos más votados.</p>
        <div className="relative w-full">
          <input
            type="email"
            name="email"
            id="email"
            className="py-2 px-3 border border-gray-300 rounded-md w-full"
            placeholder="Introduce tu email..."
          />
          <button
            type="submit"
            className="absolute inset-y-0 right-0 px-4 py-2 bg-[#BF6C0D] text-white rounded-md"
          >
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
}

export default RightBar;
