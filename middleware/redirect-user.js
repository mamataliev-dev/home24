export default function ({ redirect, route }) {
  if (route.path === '/user') {
    return redirect('/user/orders')
  }

  if (route.path === '/category') {
    return redirect('/')
  }

  if (route.path === '/showcases') {
    return redirect('/')
  }
}
