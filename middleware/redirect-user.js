export default function ({ redirect, route }) {
  if (route.path === '/user') {
    return redirect('/user/orders')
  }
}
