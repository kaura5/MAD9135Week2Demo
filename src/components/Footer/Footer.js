import React from 'react'



function Footer(props) {

    return (
        <footer>
            {props.social.map((item) => (
                <a key={item.id} href={item.link}>{item.name}</a>
            ))}
        </footer>
    )
}

export default Footer;