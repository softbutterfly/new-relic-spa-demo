export const redirect = (to, from, next) => {
  next(vm => {
    console.log(vm)
    console.log(from)
    console.log(to)
  })
}
