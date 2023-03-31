/* eslint-disable react/no-unknown-property */

export default function Form() {
async function handleOnSubmit(e) {
    e.preventDefault();

    const formData = {};

    Array.from(e.currentTarget.elements).forEach(field => {
      if ( !field.name ) return;
      formData[field.name] = field.value;
    });

    await fetch('/api/mail', {
      method: 'POST',
      body: JSON.stringify(formData)
    });
  }
  
  return (
    <>
   <div className=" bg-gray-100 flex flex-col justify-center  px-6 lg:px-8">
  

    <h2 className="mt-6 text-center text-3xl font-extrabold text-white">Vill du bli kontaktad?</h2>
    <p className="mt-2 text-center text-sm text-gray-600 max-w">
      Fyll i fälten nedan
      {/* <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500">logga in</a> */}
    </p>


  <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
    <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
      <form className="mb-0 space-y-6" action="#" method="POST" onSubmit={handleOnSubmit} >
        <div>
          <label for="name" className="block text-sm font-medium text-gray-700">Namn</label>
          <div className="mt-1">
            <input id="name" name="name" type="text" autocomplete="text" required className="w-full border border-gray-light px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" />
          </div>
        </div>
        <div>
          <label for="email" className="block text-sm font-medium text-gray-700">E-post</label>
          <div className="mt-1">
            <input id="email" name="email" type="email" autocomplete="email" required className="w-full border border-gray-light px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" />
          </div>
        </div>
        <div>
          <label for="tel" className="block text-sm font-medium text-gray-700">Telefon</label>
          <div className="mt-1">
            <input id="tel" name="tel" type="tel" autocomplete="tel" required className="w-full border border-gray-light px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" />
          </div>
        </div>

  <label className="block">
              <span class="text-gray-700">Meddelande</span>
              <textarea id="message" name="message" className="form-textarea mt-1 block w-full border border-gray-light px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" rows="3" placeholder="Jag behöver hjälp med..."></textarea>
            </label>

        {/* <div>
          <label for="company-size" className="block text-sm font-normal text-gray-700">Tex..Jag behöver hjälp med</label>
          <div className="mt-1">
            <select name="company-size" id="company-size" className="">
              <option className="border border-orange-600" value="">Välj tjänst</option>
              <option value="small">Gräsklippning</option>
              <option value="medium">Trädfällning</option>
              <option value="large">Kratta löv</option>
            </select>
          </div>
        </div> */}

        {/* <div className="flex items-center">
          <input id="terms-and-privacy" name="terms-and-privacy" type="checkbox" className="" />
          <label for="terms-and-privacy" className="ml-2 block text-sm text-gray-900"
            >Jag är
            <a href="#" className="text-indigo-600 hover:text-indigo-500">Terms</a>
            and
            <a href="#" className="text-indigo-600 hover:text-indigo-500">Privacy Policy</a>.
          </label>
        </div> */}

        <div>
          <button  type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">skicka</button>
        </div>
      </form>
   
    </div>
  </div>
</div>

    </>
  )
        

}