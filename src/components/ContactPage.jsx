function ContactPage() {
  return (
    <section className="h-screen overflow-auto">
      <div className="flex items-center h-3/4 w-4/5 mx-auto mt-28 justify-between">
        <button className="bg-orange-diffuse text-4xl p-7">Kontakt meg</button>
        <form className="bg-project-card w-2/6 h-3/4 flex flex-col">
          <input className="m-10" type="text"></input>
        </form>
      </div>
    </section>
  );
}
export default ContactPage;
