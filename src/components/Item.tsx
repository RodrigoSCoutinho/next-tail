

export default function Item({Links, title}){
    return(
        <ul>
          <h1 className="mb-1 font-semibold">{title}</h1>
          {
            Links.map((link) => (
              <li key={link.link}>
                <a className="text-gray-400 hover:text-teal-400 duration-300
                text-sm cursor-pointer" href={link.link}>{link.name}
                </a>
            </li>
            ))
          }
        </ul>
    )
}