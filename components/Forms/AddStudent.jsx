const AddStudent = ({ changer, submission }) => {

    return (
        <div>
            <div className='w-3/5 mx-auto mb-9 overflow-hidden'>
                <div>
                    <div className="border-b border-gray-900/10 pb-12">
                        <p className="mt-1 text-sm leading-6 text-gray-600">
                        </p>

                        <div className="sm:col-span-4 flex justify-center">
                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                <input
                                    type="text"
                                    name="id"
                                    id="id"
                                    onChange={(e) => changer(e)}
                                    autoComplete="id"
                                    className="block focus:outline-none pl-3 flex-1 border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                    placeholder="Ex: Barcode"
                                />
                            </div>

                            <button
                                type="button"
                                onClick={submission}
                                className="mx-3 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Add
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AddStudent