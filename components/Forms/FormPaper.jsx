const FormClass = ({ paper, setPaper, submission }) => {
    return (
        <form className='w-3/5 mx-auto mb-9 overflow-hidden' onSubmit={submission}>
            <div className="">
                <div className="border-b border-gray-900/10 pb-12">
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                    </p>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-4">
                            <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                                Name *
                            </label>
                            <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                    <input
                                        type="text"
                                        name="id"
                                        id="id"
                                        value={paper.name}
                                        onChange={(e) => setPaper({ ...paper, name: e.target.value })}
                                        autoComplete="id"
                                        className="block focus:outline-none pl-3 flex-1 border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                        placeholder="Ex: Sample"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                                Town *
                            </label>
                            <div className="mt-2">
                                <select
                                    id="country"
                                    onChange={(e) => setPaper({ ...paper, town: e.target.value })}
                                    name="country"
                                    autoComplete="country-name"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-100 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 bg-white pl-2"
                                >
                                    <option value={"646e669a670ca5edb463fb2e"}>Choose One</option>
                                    <option value={2023}>Gampaha</option>
                                    <option value={2024}>Colombo</option>
                                    <option value={2025}>Kandy</option>
                                </select>
                            </div>
                        </div>

                        <div className="sm:col-span-4">
                            <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                                Total Marks *
                            </label>
                            <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                    <input
                                        type="number"
                                        name="id"
                                        id="id"
                                        value={paper.total_marks}
                                        onChange={(e) => setPaper({ ...paper, total_marks: e.target.value })}
                                        autoComplete="id"
                                        className="block focus:outline-none pl-3 flex-1 border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                        placeholder="Ex: 100"
                                    />
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

            <div className="mt-6 mb-9 flex items-center justify-end gap-x-6">
                <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                    Cancel
                </button>
                <button
                    type="submit"
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Save
                </button>
            </div>
        </form>
    )
}

export default FormClass;