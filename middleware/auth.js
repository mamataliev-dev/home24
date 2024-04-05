export default function ({ redirect, route }) {
  if (process.client) {
    const token = localStorage.getItem('authToken')

    if (route.path === '/user/orders') {
      if (!token) {
        return redirect('/')
      }
    }
  }
}
