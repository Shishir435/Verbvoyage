

import {AiOutlineInstagram, AiOutlineGithub,AiOutlineLinkedin} from 'react-icons/ai'

const Footer = () => {
  return (
    <div className="footer mt-8 text-black dark:text-white text-center p-3 ">

      <div className="social_links flex gap-3 align-middle justify-center mb-1 text-lg cursor-pointer ">
        <a target='_blank' href='https://www.instagram.com/_shishir435/'><AiOutlineInstagram/></a>
        <a target='_blank' href='https://github.com/Shishir435'><AiOutlineGithub/></a>
        <a target='_blank' href='https://www.linkedin.com/in/shishir-chaurasiya'><AiOutlineLinkedin/></a>
      </div>
      <p>Copyright&copy; VerbVoyage</p>

    </div>
  )
}
export default Footer