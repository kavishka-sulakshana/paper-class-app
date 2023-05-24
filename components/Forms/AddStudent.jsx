import { useState } from "react";

const AddStudent = ({ barcode, setBarcode, changer, submission }) => {

    return (
        <div>
            <div className='w-3/5 mx-auto mb-9 overflow-hidden'>
                <div>
                    <div className="border-b border-gray-900/10 pb-12">
                        <p className="mt-1 text-sm leading-6 text-gray-600">
                        </p>

                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-4">
                                <div className="mt-2 flex">
                                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                        <input
                                            type="text"
                                            name="id"
                                            id="id"
                                            value={barcode}
                                            onChange={(e) => setBarcode(e.target.value)}
                                            autoComplete="id"
                                            className="block focus:outline-none pl-3 flex-1 border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                            placeholder="Ex: Sample"
                                        />
                                    </div>

                                    <button
                                        type="button"
                                        onClick={changer}
                                        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        Save
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default AddStudent