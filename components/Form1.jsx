import React from 'react'

const Form1 = ({ student, setStudent, submission }) => {
    return (
        <form className='w-3/5 mx-auto mb-9 overflow-hidden' onSubmit={submission}>
            <div className="">
                <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base font-semibold leading-7 text-gray-900">Add Student</h2>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                        {/* This information will be displayed publicly so be careful what you share. */}
                    </p>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-4">
                            <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                                ID number *
                            </label>
                            <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                    <input
                                        type="text"
                                        name="id"
                                        id="id"
                                        value={student.barcode}
                                        onChange={(e) => setStudent({ ...student, barcode: e.target.value })}
                                        autoComplete="id"
                                        className="block focus:outline-none pl-3 flex-1 border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                        placeholder="Ex: 5625262"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="sm:col-span-4">
                            <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                                Name *
                            </label>
                            <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                    <input
                                        onChange={(e) => setStudent({ ...student, name: e.target.value })}
                                        type="text"
                                        name="name"
                                        value={student.name}
                                        id="name"
                                        autoComplete="name"
                                        className="block pl-3 flex-1 border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 focus:outline-none"
                                        placeholder="Ex: Nimal Bandara"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="sm:col-span-4">
                            <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                                Telegram Username *
                            </label>
                            <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                    <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">@</span>
                                    <input
                                        onChange={(e) => setStudent({ ...student, telegram_username: e.target.value })}
                                        type="text"
                                        value={student.telegram_username}
                                        name="username"
                                        id="username"
                                        autoComplete="username"
                                        className="block focus:outline-none flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                        placeholder="nimalbandara"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-span-full">
                            <label htmlFor="school" className="block text-sm font-medium leading-6 text-gray-900">
                                School *
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="school"
                                    value={student.school}
                                    onChange={(e) => setStudent({ ...student, school: e.target.value })}
                                    id="school"
                                    autoComplete="school"
                                    placeholder='Ex: Royal College, Colombo 07'
                                    className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-4">
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email address *
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    onChange={(e) => setStudent({ ...student, email: e.target.value })}
                                    name="email"
                                    value={student.email}
                                    type="email"
                                    autoComplete="email"
                                    placeholder='nimalbanda@gmail.com'
                                    className="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                                Town
                            </label>
                            <div className="mt-2">
                                <select
                                    id="country"
                                    name="country"
                                    autoComplete="country-name"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-100 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 bg-white pl-2"
                                >
                                    <option>Gampaha</option>
                                    <option>Colombo</option>
                                    <option>Kurunegala</option>
                                </select>
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                                A/L Year *
                            </label>
                            <div className="mt-2">
                                <select
                                    id="country"
                                    onChange={(e) => setStudent({ ...student, year: e.target.value })}
                                    name="country"
                                    autoComplete="country-name"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-100 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 bg-white pl-2"
                                >
                                    <option value={2023}>2023</option>
                                    <option value={2024}>2024</option>
                                    <option value={2025}>2025</option>
                                    <option value={2026}>2026</option>
                                    <option value={2027}>2027</option>
                                    <option value={2028}>2028</option>
                                </select>
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

export default Form1