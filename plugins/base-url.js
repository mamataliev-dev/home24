export default ({ $axios, redirect, error }, inject) => {
  const axiosURL = $axios.create({
    baseURL: process.env.BASE_URL || 'https://e-shop.ndc.uz/api',
  })

  // $axios.onError((error) => {
  //   if (error.response.status === 500) {
  //     redirect('/sorry')
  //   }
  // })

  inject('axiosURL', axiosURL)
}
