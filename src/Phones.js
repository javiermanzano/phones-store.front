import { useQuery, useMutation, useQueryClient } from 'react-query';
import axios from 'axios';


function Phones() {
  const queryClient = useQueryClient();
  const { isLoading, error, data } = useQuery('phonesData', () =>
    fetch('http://localhost:8080/phones').then(res =>
      res.json()
    )
  );
  const deletePhone = useMutation(phone => axios.delete(`http://localhost:8080/phones/${phone.id}`), {
    onSuccess: () => {
      queryClient.invalidateQueries('phonesData');
    }
  });
  if (isLoading) {
    return (
      <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
      </svg>
    );
  }
  return (
    <div>
      <div class="container flex mx-auto w-full items-center justify-center">
        <h1>List of available phones</h1>
      </div >
      <div class="container flex mx-auto w-full items-center justify-center">
        <ul class="flex flex-col bg-gray-300 p-6">
          {data?.map(phone => (
            <li class="border-gray-400 flex flex-row mb-2">
              <div class="select-none cursor-pointer bg-gray-200 rounded-md flex flex-1 items-center p-4  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
                <img class="flex flex-col rounded-md w-10 h-10 bg-gray-300 justify-center items-center mr-4" src={phone?.image} />
                <div class="flex-1 pl-1 mr-16">
                  <div class="font-medium">{phone?.model}</div>
                  <div class="text-gray-600 text-sm">{phone?.vendor}</div>
                </div>
                <div class="text-gray-600 text-xs">{new Date(phone?.createdAt).toLocaleTimeString()}</div>
                <div style={{ marginLeft: 20 }} class="bg-gray-600 text-white p-3 rounded-lg font-semibold text-lg"
                  onClick={async () => {
                    await deletePhone.mutateAsync(phone);

                  }}
                >🗑️ </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Phones;