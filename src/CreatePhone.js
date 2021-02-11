import { useMutation } from 'react-query';
import axios from 'axios';
import { useFormik } from 'formik';


function CreatePhone() {
  const formik = useFormik({
    initialValues: {
      model: '',
      vendor: '',
      image: '',
    },
    onSubmit: values => {
      mutation.mutate(values);
    },
  });
  const mutation = useMutation(phone => axios.post('http://localhost:8080/phones', phone));

  return (
    <div class="container mx-auto flex flex-col items-center">
      <form class="w-80 p-4 flex flex-col bg-white rounded-lg">
        <input
          id="model"
          name="model"
          onChange={formik.handleChange}
          value={formik.values.model}
          type="text" placeholder="Model" class="mb-3 py-3 px-4 border border-gray-400 focus:outline-none rounded-md focus:ring-1 ring-cyan-500" />
        <input
          id="vendor"
          name="vendor"
          onChange={formik.handleChange}
          value={formik.values.vendor}
          type="text" placeholder="Vendor" class="mb-3 py-3 px-4 border border-gray-400 focus:outline-none rounded-md focus:ring-1 ring-cyan-500" />
        <input
          id="image"
          name="image"
          onChange={formik.handleChange}
          value={formik.values.image}
          type="text" placeholder="Image" class="mb-3 py-3 px-4 border border-gray-400 focus:outline-none rounded-md focus:ring-1 ring-cyan-500" />
        <button class="w-full bg-blue-500 text-white p-3 rounded-lg font-semibold text-lg" onClick={() => formik.handleSubmit()}>Create</button>
      </form>
    </div>
  )
}

export default CreatePhone;