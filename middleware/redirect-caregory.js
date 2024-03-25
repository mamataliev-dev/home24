export default function ({ redirect, route }) {
  if (route.path === '/category') {
    return redirect('/')
  }
}
