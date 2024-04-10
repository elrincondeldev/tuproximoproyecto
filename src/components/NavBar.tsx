function NavBar() {
  return (
    <nav className="w-full bg-white p-3 border-b-2">
      <section className="grid md:grid-cols-[1fr_1fr_1fr] max-w-7xl m-auto items-center">
        <div className="flex items-center gap-5">
          <h1 className="font-bold text-3xl">Tu próximo proyecto</h1>
          <img src="/images/coffee_image.png" alt="coffee image" />
        </div>
        <input
          type="search"
          name=""
          id=""
          className="bg-[#D9D9D9] rounded-md h-[40px] p-3"
          placeholder="Busca un proyecto..."
        />
      </section>
    </nav>
  );
}

export default NavBar;
