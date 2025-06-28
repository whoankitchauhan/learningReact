function EditUser() {
  return (
    <div className="flex flex-col items-start max-w-md mx-auto bg-white p-6 rounded-lg shadow-md space-y-4">
      <h1 className="text-4xl font-bold text-blue-600 w-full text-center">
        Edit User Details
      </h1>

      <input
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        type="text"
        placeholder="User Name"
      />
      <input
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        type="text"
        placeholder="User Age"
      />
      <input
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        type="text"
        placeholder="User Email"
      />

      <button className="mt-4 px-6 py-2 bg-green-600 text-white font-semibold rounded hover:bg-green-700 transition duration-200">
        Update User
      </button>
    </div>
  );
}

export default EditUser;
