import { useEffect } from "react"


const Navbar = () => {
    useEffect(() => {
        window.addEventListener('scroll', () => {
            const nav = document.querySelector('.bg-rose-400')
            if (window.scrollY > 0) {
                nav?.classList.add('shadow-md')
            } else {
                nav?.classList.remove('shadow-md')
            }
        })   
    },[])
  return (
      <div className="bg-rose-400 w-full p-6 fixed z-10">
          <div className="flex justify-between items-center ">
              <div>
                <p>Home</p>
              </div>
              <div className="md:flex justify-between items-center space-x-8 hidden">
                    <p>About</p>
                    <p>Cart</p>
                    <p>Blogs</p>
                    <p className="sm:block">Burger</p>
              </div>
          </div>
      </div>
  )
}

export default Navbar